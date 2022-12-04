/* eslint-disable react-hooks/rules-of-hooks */

//@ts-nocheck
import { P2P_ABI } from "constants/P2P_ABI";
import { ethers } from "ethers";
import React, { useEffect, useState, useMemo } from "react";
import { useAccount, useSigner } from "wagmi";
import { CONTRACT_ADDRESS } from "./constants/constants";
import { ERC721_ABI } from "constants/ERC721_ABI";

export const functions = () => {
  const { address: account_address, connector, isConnected } = useAccount();
  const { data: signer, isError, isLoading } = useSigner();

  const P2P = async ({ ammount, dd }) => {
    try {
      if (account_address) {
        if (signer) {
          const contract_res = new ethers.Contract(
            CONTRACT_ADDRESS.P2P_FACTORY,
            P2P_ABI,
            signer
          );
          const data = contract_res?.createMarket({ ammount, dd });
          console.log(data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const Approve = async (NFT_Contract_Address, token_id) => {
    try {
      //   console.log(signer);
      //   console.log(NFT_Contract_Address);
      //   console.log(ERC721_ABI);
      //   console.log(token_id);
      //   console.log(CONTRACT_ADDRESS.P2P_FACTORY);
      if (account_address) {
        if (signer) {
          const contract_res = new ethers.Contract(
            NFT_Contract_Address,
            ERC721_ABI,
            signer
          );
          console.log(CONTRACT_ADDRESS.P2P_FACTORY);
          const data = await contract_res?.approve(
            CONTRACT_ADDRESS.P2P_FACTORY,
            token_id
          );

          //   await data.wait();
          console.log(data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    Approve,
    P2P,
  };
};
