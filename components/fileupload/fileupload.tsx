import React, { useEffect, useState } from "react";
import {
  useConnect,
  useAccount,
  configureChains,
  defaultChains,
  useSigner,
} from "wagmi";
import { create as ipfsHttpClient } from "ipfs-http-client";
import Image from "next/image";
import { ABI } from "../../constants/abi";
import { CONTRACT_ADDRESS } from "../../constants/contractAddress";
import { ethers } from "ethers";
import { publicProvider } from "wagmi/providers/public";
import Spinner from "utils/icons/spinner";

const FileUpload: React.FC = () => {
  const [ipfsHashURl, setIpfsHashURl] = useState<string | null>("");
  const [fileUploadStatus, setFileUploadStatus] = useState<any>("");
  const [part1WalletAdd, setParty1WalletAdd] = useState<any>("");
  const [part2WalletAdd, setParty2WalletAdd] = useState<any>("");
  const [spinstatus, setSpinStatus] = useState<boolean>(false);

  const { chains, provider } = configureChains(defaultChains, [
    publicProvider(),
  ]);
  const [contract, setContract] = useState<any>();
  const url = "https://ipfs.infura.io:5001/api/v0";
  const { connect, connectors, error, pendingConnector } = useConnect();
  const { address, connector, isConnected } = useAccount();
  const { data: signer, isError, isLoading } = useSigner();

  const INFURA_SECRET_KEY = "d375d81357948a04ed21b090bdda0033";
  const INFURA_ID = "2I2xUl1JiMCejCC57W5tJ3VYA3L";

  const auth =
    "Basic " +
    Buffer.from(INFURA_ID + ":" + INFURA_SECRET_KEY).toString("base64");
  const client = ipfsHttpClient({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
      authorization: auth,
    },
  });

  const uploadFileToIPFS = async (event: any) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (typeof file !== "undefined" && isConnected) {
      try {
        console.log(file);
        const result = await client.add(file);
        setFileUploadStatus(result);
        console.log(result);
        setIpfsHashURl(`https://infura-ipfs.io/ipfs/${result.path}`);
      } catch (error) {
        console.log("ipfs file upload error: ", error);
      }
    }
  };
  console.log(ipfsHashURl);

  useEffect(() => {
    (async () => {
      let dataa;
      if (address)
        if (signer) {
          {
            dataa = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
            setContract(dataa);
          }
        }
    })();
  }, [address, signer]);

  const submitHandler = async () => {
    setSpinStatus(true);
    try {
      const txReceipt = await contract.putNotaryOnChain(
        fileUploadStatus?.path,
        part1WalletAdd,
        part2WalletAdd
      );

      console.log("tx", txReceipt.status);
      console.log("txReceipt", txReceipt);
      if (txReceipt.status === 1) {
        alert("it's done");
        console.log("Its done");
      }
      if (error) {
        console.error(error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSpinStatus(false);
    }
  };

  return (
    <div className=" flex flex-col items-center">
      <h4 className="bg-clip-text text-transparent text-5xl bg-hash-red-gradient font-semibold h-full p-4  -mt-16 flex flex-col w-full">
        BlockSign
        <span className="text-sm ml-24 pt-2 text-hash-light ">
          {" "}
          the actual <span className="text-hash-red">
            &quot;smart&quot;
          </span>{" "}
          contract
        </span>
      </h4>
      <div className="flex flex-col gap-4 gap-y-4 pt-16 justify-center text-center  relative ">
        <p className="text-6xl text-white">
          notary{" "}
          <span className="bg-clip-text text-transparent  bg-hash-red-gradient font-semibold h-full">
            made simple
          </span>
          <span className="flex absolute bottom-28 right-4">
            <Image src="/svg/line.svg" height={80} width={250} alt="hello" />
          </span>
          <br />
          <span>for everyone</span>
        </p>
        <span className="text-terra-cotta text-base">
          say goodbye to tedious government office lines with all <br /> new
          web3 based relaible and secure notary system .
        </span>
      </div>

      {/* <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={uploadFileToIPFS}
        className="border-2 bg-[#373A42]"
      /> */}

      <div className="flex flex-col items-center justify-center w-2/6 h-72 mt-5 ">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-2 ">
            <svg
              aria-hidden="true"
              className="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              DOC, DOCX or PDF (MAX. 40 MB)
            </p>
          </div>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={uploadFileToIPFS}
            className="mb-2"
          />
        </label>
        <span className="text-green-500">
          {fileUploadStatus && "*file uploaded sucessfully"}
        </span>
        <div className="flex flex-row justify-evenly gap-x-8 pt-8 pb-3 text-sm text-center">
          <input
            type="text"
            className=" rounded-lg px-2 py-2"
            placeholder="Party1 Wallet Address "
            onChange={(e) => setParty1WalletAdd(e.target.value)}
          />
          <input
            type="text"
            className=" rounded-lg  px-2 py-2"
            placeholder="Party2 Wallet Address"
            onChange={(e) => setParty2WalletAdd(e.target.value)}
          />
        </div>

        <button
          className="bg-[#373A42] text-xl mt-4  text-white px-3 py-2 flex content-center  text-center rounded-lg "
          onClick={submitHandler}
        >
          {spinstatus ? <Spinner /> : "Upload Your File"}
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
