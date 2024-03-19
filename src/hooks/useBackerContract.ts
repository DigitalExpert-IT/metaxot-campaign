import { useState, useEffect } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { BACKER_CONTRACT } from "@/constant/address";
import Backer from "metaxot-contract/artifacts/contracts/Backer.sol/Backer.json";
import { Backer as BackerType } from "metaxot-contract/typechain-types";

const CHAIN_ID = import.meta.env.VITE_PUBLIC_CHAIN_ID ?? "0x29a";
const address = BACKER_CONTRACT[CHAIN_ID as "0x29a"];

type TPackage = BackerType["listPackage"];

export const useBacker = () => {
  return useContract(address, Backer.abi);
};

export const useBackerPackage = () => {
  const backerContract = useBacker();
  const { data: packageCounter, isLoading: loadingPackageCounter } = useContractRead(backerContract.contract, "_packageCounter");
  const [listPackage, setListPackage] = useState<TPackage[] | null>(null);

  useEffect(() => {
    const getPackages = async () => {
      const total = packageCounter;

      for (let i = 0; i < total; i++) {
        const backerPackage = await backerContract.contract?.call("listPackage", [i]);
        setListPackage((prevState) => {
          if (!prevState) return backerPackage
          return [...prevState, backerPackage]
        });
      }
    };

    if (!loadingPackageCounter) {
      getPackages();
    }
  }, [backerContract.contract, packageCounter, loadingPackageCounter]);

  return {
    listPackage
  }
}
