import { useBalance } from "@thirdweb-dev/react";
import { useContract } from "@thirdweb-dev/react";
import { USDT_CONTRACT } from "@/constant/address";
import USDT from "metaxot-contract/artifacts/contracts/USDT.sol/USDT.json";

const CHAIN_ID = import.meta.env.VITE_PUBLIC_CHAIN_ID ?? "0x29a";
const address = USDT_CONTRACT[CHAIN_ID as "0x29a"];

export const useUsdtContract = () => {
  return useContract(address, USDT.abi);
};

export const useBalanceQuery = () => {
  const { contract } = useUsdtContract();
  const { data, ...rest } = useBalance(contract?.getAddress());
  return { data: data, ...rest };
};
