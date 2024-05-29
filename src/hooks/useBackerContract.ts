import { useState, useEffect } from "react";
import {
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { BACKER_CONTRACT } from "@/constant/address";
import Backer from "metaxot-contract/artifacts/contracts/Backer.sol/Backer.json";
import { Backer as BackerType } from "metaxot-contract/typechain-types";
import { useAsyncCall } from "./useAsyncCall";
import { useBalanceQuery, useUsdtContract } from "./useUsdtContract";
import Cookies from "js-cookie";
import axiosRef from "./axiosRef";
import { useToast } from "@chakra-ui/react";

const CHAIN_ID = import.meta.env.VITE_PUBLIC_CHAIN_ID ?? "0x29a";
const address = BACKER_CONTRACT[CHAIN_ID as "0x29a"];

export type TPackage = Awaited<ReturnType<BackerType["listPackage"]>>;

export const useBacker = () => {
  return useContract(address, Backer.abi);
};

export const useBackerPackage = () => {
  const address = useAddress();
  const toast = useToast();
  const token = Cookies.get("token");
  const backerContract = useBacker();
  const usdtContract = useUsdtContract();
  const { data: myBalance } = useBalanceQuery();
  const { data: packageCounter } = useContractRead(
    backerContract.contract,
    "_packageCounter"
  );
  const { mutateAsync: approveUsdt } = useContractWrite(
    usdtContract.contract,
    "approve"
  );
  const {
    mutateAsync: buy,
    isLoading: isBuyLoading,
    error: buyError,
  } = useContractWrite(backerContract.contract, "buyPackage");
  const [listPackage, setListPackage] = useState<TPackage[] | null>(null);
  const {data: ownedPackageAmount} = useContractRead(backerContract.contract, "_ownedListPackageAmount", [address]);

  const [isLoadingPackages, setIsLoadingPackages] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userPackages, setUserPackages] = useState<any[]>([])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userPackage, setUserPackage] = useState<any[]>([])

  useEffect(() => {

    const getUserPackages = async () => {
      // eslint-disable-next-line no-extra-boolean-cast
      if(!!ownedPackageAmount) return;

      setIsLoadingPackages(true)

      const packages = Array(ownedPackageAmount).map((_,idx) => {
        backerContract.contract?.call("ownedListPackage", [address, idx])
      })
      const res = await Promise.all(packages)
      setUserPackages(res)

      setIsLoadingPackages(false)
    }

    getUserPackages()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[address, backerContract.contract, Number(ownedPackageAmount)])




  /**
   * @function buyPackage
   * @param id: Number
   * @returns claimId
   * Id must be number
   */
  const { exec: buyPackage } = useAsyncCall(async (id: number) => {
    const pkg = listPackage?.[id];
    const price = pkg?.price;

    if (!pkg) throw "Wrong Package Id";

    if (myBalance?.value?.lt(price!)) {
      throw {
        code: "NotEnoughBalance",
      };
    }

    const allowance = await usdtContract.contract?.call("allowance", [
      address,
      backerContract.contract?.getAddress(),
    ]);

    if (!allowance.gte(price)) {
      console.log("allowance", allowance.toNumber());
      await approveUsdt({
        args: [backerContract.contract?.getAddress(), price],
      });
    }

    console.log("doing buy!");
    await buy({ args: [id] });

    axiosRef
      .post("/buy_package", {
        packageId: Number(pkg.id),
        verificationBuyCode: `${Number(pkg.id)}`,
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then(() => {
        toast({
          title: "Success",
          description: "Buy Package Success",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  });

  const resetListPackage = () => {
    setListPackage(null);
  };

  useEffect(() => {
    const getPackages = async () => {
      const total = packageCounter;
      const newPackages = [];

      for (let i = 0; i < total; i++) {
        const backerPackage = await backerContract.contract?.call(
          "listPackage",
          [i]
        );
        newPackages.push({ ...backerPackage });
      }

      setListPackage(newPackages);
    };

    if (packageCounter !== undefined) {
      getPackages();
    }
  }, [backerContract.contract, packageCounter]);

  useEffect(() => {
    const getOwnedPackage = async () => {
      const totalOwned = Number(ownedPackageAmount);
      const ownedPackages = [];

      for (let i = 0; i < totalOwned; i++) {
        const ownPackage = await backerContract.contract?.call(
          "ownedListPackage",
          [address, i]
        );
        ownedPackages.push(ownPackage?.package?.nftList);
      }
      setUserPackage(ownedPackages);
    };

    if (ownedPackageAmount !== undefined) {
      getOwnedPackage();
    }
  }, [backerContract.contract, ownedPackageAmount, address]);

  return {
    listPackage,
    buyPackage: { exec: buyPackage, isLoading: isBuyLoading, error: buyError },
    resetListPackage,
    userPackages,
    isLoadingPackages,
    userPackage
  };
};
