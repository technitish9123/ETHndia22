import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ABI } from "constants/abi";
import { CONTRACT_ADDRESS } from "constants/contractAddress";
import { ethers } from "ethers";
import Link from "next/link";
import React, { useEffect, useState, useMemo } from "react";
import { useAccount, useSigner } from "wagmi";
import Image from "next/image";
import { Dropdown } from "components/shared";
import { Cards } from "components/shared";
import { NFTPORT } from "utils/constants/constants";

type Props = {};

const Dashboard = (props: Props) => {
  const { address: account_address, connector, isConnected } = useAccount();
  const { data: signer, isError, isLoading } = useSigner();
  const [dropdown, setDropdown] = useState<boolean>(false);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       let dataa;
  //       if (address)
  //         if (signer) {
  //           {
  //             dataa = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
  //             console.log(dataa);
  //             setContract(dataa);

  //             // const notaries: never[] = [];

  //             // console.log(userAssociatedNotaryIds);
  //             // for (let i = 0; i < userAssociatedNotaryIds.length; i++) {
  //             //   const id = userAssociatedNotaryIds[i].toString();
  //             //   console.log(id);
  //             //   const notary = await dataa?.notaries(id);
  //             //   const objNotary = {};

  //             //   objNotary.notaryid = id;

  //             //   objNotary.notary = notary;

  //             //   notaries.push(objNotary);
  //             // }
  //             // console.log("Notaries: " + JSON.stringify(notaries));
  //             // setNotaries(notaries);
  //           }
  //         }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     //   setContract(dataa);
  //   })();
  // }, [address, signer]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       console.log("first");
  //       const notaries = [];

  //       const userAssociatedNotaryIds = await contract.getUserIds(address);
  //       console.log(userAssociatedNotaryIds);
  //       for (let i = 0; i < userAssociatedNotaryIds.length; i++) {
  //         const id = userAssociatedNotaryIds[i].toString();
  //         console.log(id);
  //         const notary = await contract.notaries(id);
  //         const objNotary = {};
  //         // @ts-ignore
  //         objNotary.notaryid = id;
  //         // @ts-ignore

  //         objNotary.notary = notary;

  //         notaries.push(objNotary);
  //       }
  //       console.log("Notaries: " + JSON.stringify(notaries));
  //       setNotaries(notaries);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, [address, contract]);
  const OPTIONS = useMemo<React.ReactNode[]>(
    () => [<div key={1}>hello</div>, <div key={2}>hello</div>],
    []
  );

  return (
    <div className="bg-raisin-black flex flex-col items-center h-full px-1 min-h-[100vh]">
      <div className=" w-full flex p-6  justify-end items-center content-center  ">
        <div className="px-5">
          <Link href={"/borrow"}>
            <button className="px-7 py-1.5 bg-[#E27469] rounded-md text-hash-light font-medium">
              Borrow
            </button>
          </Link>
        </div>
        <div>
          <ConnectButton />
        </div>
        <div>
          <Dropdown
            trigger="hover"
            options={OPTIONS}
            contentClassName="h-full text-white text-sm  bg-opacity-5 p-2 flex flex-cols items-center gap-x-4 cursor-pointer hover:bg-opacity-10"
            dropdownClassname="bg-raisin-black shadow-dropdown mt-4 top-full z-50 whitespace-nowrap"
            open={dropdown}
            setOpen={setDropdown}
          >
            <Image
              src="/svg/1.svg"
              height={30}
              width={30}
              alt="hello"
              className="ml-4"
            />
          </Dropdown>
        </div>
      </div>

      <div className=" flex justify-center items-center content-center  flex-wrap gap-12 pt-14"></div>
    </div>
  );
};

export default Dashboard;
