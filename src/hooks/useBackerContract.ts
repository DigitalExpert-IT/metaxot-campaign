import { useEffect } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { BACKER_CONTRACT } from "@/constant/address";
import Backer from "metaxot-contract/artifacts/contracts/Backer.sol/Backer.json";
import {Backer as BackerType} from "metaxot-contract/typechain-types";

const CHAIN_ID = import.meta.env.NEXT_PUBLIC_CHAIN_ID ?? "0x29a";
const address = BACKER_CONTRACT[CHAIN_ID as "0x29a"];

type TPackage = BackerType["listPackage"];

export const useBacker = () => {
  return useContract(address, Backer.abi);
};

export const useBackerPackage = () => {
    const backerContract = useBacker();
    const callPackagesCounter = useContractRead(backerContract.contract, "_packageCounter");
    // const {listPackage, setListPAckage} = useState<TPackage[] | null>(null);

    console.log("total:", callPackagesCounter)
    
    useEffect(() => {
        const getPackages = async () => {
            const total = callPackagesCounter?.data;

            for (let i = 0; i < total; i++) {
                const backerPackage = await backerContract.contract?.call("listPackage", [i]);
                console.log("package", backerPackage)
            }
        };

        console.log("packages counter: ", callPackagesCounter);

        if(callPackagesCounter?.data) {
            getPackages();
        }
    }, [callPackagesCounter]);

    // return {
    //     listPackages
    // }
}
