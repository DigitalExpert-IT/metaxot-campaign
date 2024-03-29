import { useState, useEffect } from "react";
import { useAddress, useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import { BACKER_CONTRACT } from "@/constant/address";
import Backer from "metaxot-contract/artifacts/contracts/Backer.sol/Backer.json";
import { Backer as BackerType } from "metaxot-contract/typechain-types";
import { useAsyncCall } from "./useAsyncCall";
import { useBalanceQuery, useUsdtContract } from "./useUsdtContract";

const CHAIN_ID = import.meta.env.VITE_PUBLIC_CHAIN_ID ?? "0x29a";
const address = BACKER_CONTRACT[CHAIN_ID as "0x29a"];

export type TPackage = Awaited<ReturnType<BackerType["listPackage"]>>;

export const useBacker = () => {
  return useContract(address, Backer.abi);
};

export const useBackerPackage = () => {
  const address = useAddress();
  const backerContract = useBacker();
  const usdtContract = useUsdtContract();
  const [claimId, setClaimId] = useState<string>("");
  const {data: myBalance} = useBalanceQuery();
  const { data: packageCounter } = useContractRead(backerContract.contract, "_packageCounter");
  const { mutateAsync: approveUsdt } = useContractWrite(usdtContract.contract, "approve");
  const { mutateAsync: buy, isLoading: isBuyLoading, error: buyError } = useContractWrite(backerContract.contract, "buyPackage");
  const [listPackage, setListPackage] = useState<TPackage[] | null>(null);

  /**
   * @function buyPackage
   * @param id: Number
   * @returns claimId
   * Id must be number
   */
  const { exec: buyPackage } = useAsyncCall(async (id: number) => {
    const pkg = listPackage?.[id];
    const price = pkg?.price;

    if(!pkg) throw("Wrong Package Id");

    if (myBalance?.value?.lt(price!)) {
      throw {
        code: "NotEnoughBalance",
      };
    }


    const allowance = await usdtContract.contract?.call("allowance",  [
      address,
      backerContract.contract?.getAddress(),
    ]);
    // need approve or increase if allowance lower than price
    if (!allowance.gte(price)) {
      console.log("allowance", allowance.toNumber())
      await approveUsdt({ args: [backerContract.contract?.getAddress(), price] });
    }

    console.log("doing buy!");
    await buy({ args: [id] });
    const events = await backerContract.contract?.events.getEvents("returnedClaimId");
    console.log("events: ", events);
    const claimId = events?.find((e) => e.data.buyer === address)?.data.claimId;
    
    console.log("claim Id", claimId);
    setClaimId(claimId);
  });

  // Get List Package
  useEffect(() => {
    const getPackages = async () => {
      const total = packageCounter;

      for (let i = 0; i < total; i++) {
        const backerPackage = await backerContract.contract?.call("listPackage", [i]);
        setListPackage((prevState) => { if (!prevState) return [{ ...backerPackage }]; return [...prevState, { ...backerPackage }] })
      }
    };

    if (!listPackage) {
      getPackages();
    }
  }, [backerContract.contract, packageCounter, listPackage]);

  return {
    listPackage,
    buyPackage: { exec: buyPackage, isLoading: isBuyLoading, error: buyError},
    claimId
  }
}
