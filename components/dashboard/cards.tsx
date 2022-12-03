import { ABI } from "constants/abi";
import { CONTRACT_ADDRESS } from "constants/contractAddress";
import { ethers } from "ethers";
import moment from "moment";
import React, { useState } from "react";
import { useAccount, useSigner, useSignMessage } from "wagmi";

interface CardsProps {
  notaryid: any;
  arb: any;
  party1: any;
  party2: any;
  ipfs: any;
  isSignParty1: any;
  isSignParty2: any;
  sigparty1: any;
  sigparty2: any;
  timeStampNotaryCreation: any;
  part1SignTimeStampNotaryCreation: any;
  part2SignTimeStampNotaryCreation: any;
  isExpired: any;
}
const Cards: React.FC<CardsProps> = ({
  notaryid,
  arb,
  party1,
  party2,
  ipfs,
  isSignParty1,
  isSignParty2,
  sigparty1,
  sigparty2,
  timeStampNotaryCreation,
  part1SignTimeStampNotaryCreation,
  part2SignTimeStampNotaryCreation,
  isExpired,
}) => {
  const { address, connector, isConnected } = useAccount();
  const { data: signer, isError, isLoading } = useSigner();

  const [contract, setContract] = useState<any>(undefined);
  const SignMessagedata = JSON.stringify({ arb, party1, party2, ipfs });
  const signENotary = async () => {
    const signMessage = await signer?.signMessage(SignMessagedata);
    console.log("signMessage", signMessage);
    const txReceipt = await (
      await contract?.signAndUpdateNotary(notaryid, signMessage)
    ).wait();
    console.log("tx", txReceipt.status);
    console.log("txReceipt", txReceipt);
    if (txReceipt.status === 1) {
      alert("Its done");
    }
  };
  React.useEffect(() => {
    const fetchData = async () => {
      if (address) {
        if (signer) {
          const data = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
          setContract(data);
        }
      }
    };
    fetchData();
  }, [address, signer]);
  console.log();

  return (
    <div className="flex rounded-lg bg-hash-red-gradient w-full h-auto text-raisin-black py-4">
      <div className="grid grid-cols-2  justify-around content-center gap-x-5 items-center  px-6 gap-y-1">
        <p className="col-span-2 ">
          {" "}
          <span className="font-semibold">Arbitator: </span>
          {`0x${arb.slice(2, 5)}...${arb.slice(arb.length - 4, arb.length)}`}
        </p>
        <p className="col-span-2 text-sm">
          <span className="font-semibold"> E-Notary Creation Timestamp: </span>
          {moment
            .unix(timeStampNotaryCreation.toString())
            .format("DD/MM/YYYY , h:mm:ss a")}
        </p>

        <div className="gap-y-2 grid">
          <p className="font-bold text-lg  text-center py-2">party1</p>
          <p>
            <span className="font-semibold"> address: </span>
            {`0x${party1.slice(2, 5)}...${party1.slice(
              party1.length - 4,
              party1.length
            )}`}
          </p>
          <span className="font-semibold">signed At:</span>
          {isSignParty1
            ? moment
                .unix(part1SignTimeStampNotaryCreation.toString())
                .format("DD/MM/YYYY , h:mm:ss a")
            : "Null"}
          <button className="rounded-md bg-slate-500 w-24 items-center text-center ">
            {isSignParty1 ? "signed" : "unsigned"}
          </button>
        </div>
        <div className="gap-y-2 grid">
          <p className="font-bold text-lg text-center py-2">party2</p>
          <p>
            <span className="font-semibold"> address: </span>
            {`0x${party2.slice(2, 5)}...${party2.slice(
              party2.length - 4,
              party2.length
            )}`}
          </p>
          <span className="font-semibold"> signed At: </span>
          {isSignParty2
            ? moment
                .unix(part2SignTimeStampNotaryCreation.toString())
                .format("DD/MM/YYYY , h:mm:ss a")
            : "Null"}
          <button className="rounded-md bg-slate-500 w-24 items-center text-center ">
            {isSignParty2 ? "signed" : "unsigned"}
          </button>
        </div>
        <div className="col-span-2 flex  w-full items-center justify-center pt-6 pb-2 text-center  ">
          {address?.toLocaleUpperCase() == party1.toLocaleUpperCase() &&
          !isSignParty1 ? (
            <button
              className="text-center text-white font-bold rounded py-1  w-6/12 focus:outline-none bg-slate-500 border-2 border-indigo-400"
              onClick={signENotary}
            >
              Sign E-Notary
            </button>
          ) : null}
          {address?.toLocaleUpperCase() === party2.toLocaleUpperCase() &&
          !isSignParty2 ? (
            <button
              className="text-center text-white font-bold rounded py-2 w-6/12 focus:outline-none bg-slate-500 border-2 border-indigo-400"
              onClick={signENotary}
            >
              Sign E-Notary{" "}
            </button>
          ) : null}
        </div>
        <div className="col-span-2 flex justify-center">
          <a
            href={`https://infura-ipfs.io/ipfs/${ipfs}`}
            target="_blank"
            rel="noreferrer"
          >
            <button className=" border-2  rounded-lg px-2 my-3 text-hash-light hover:bg-red-600">
              {" "}
              Download Document
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
