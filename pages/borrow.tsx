/* eslint-disable @next/next/no-img-element */
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Cards, Dropdown } from "components/shared";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { NFTPORT } from "utils/constants/constants";
import { useAccount, useSigner } from "wagmi";
import moment from "moment";

type Props = {};

const Borrow = (props: Props) => {
  const OPTIONS = useMemo<React.ReactNode[]>(
    () => [<div key={1}>hello</div>, <div key={2}>hello</div>],
    []
  );
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [NftMetdata, setNftMetdata] = useState<any>();
  const [submitStatus, setSubmitStatus] = useState<boolean>(false);
  const { address: account_address, connector, isConnected } = useAccount();
  const [nftSelected, setNftSelected] = useState<any[]>([]);
  const [submit, setSubmit] = useState<boolean>(false);
  const [ammount, setAmmount] = useState<any>();
  const [date, setDate] = useState<any>();
  const [interest, setInterest] = useState<any>();
  const [simpleInterest, setSimpleInterest] = useState<any>();

  const currentDate = moment().unix();

  const d = moment(date).unix();
  console.log(currentDate);
  console.log(d);
  const dd = (d - currentDate) / 1000 / 60 / 60 / 24;
  console.log(dd);

  useEffect(() => {
    if (isConnected)
      (async () => {
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: NFTPORT.API_KEY,
          },
        };

        await fetch(
          `${NFTPORT.BASE_URL}${account_address}?chain=polygon`,
          options
        )
          .then((response) => response.json())
          .then((response) => setNftMetdata(response))
          // .then((response) => console.log(response))
          .catch((err) => console.error(err));
      })();
  }, []);

  const selectNFT = (nftData: any) => {
    setNftSelected([...nftSelected, nftData]);
  };
  console.log(interest);
  const InterestFunction = () => {
    const calc = ((ammount * interest * dd) / 100).toFixed(2);
    setSimpleInterest(calc);
  };

  return (
    <div className="bg-raisin-black flex flex-col items-center h-full px-3 min-h-[100vh] pb-8">
      <div className=" w-full flex p-6  justify-end items-center content-center  ">
        <div className="px-5">
          <Link href={"/dashboard"}>
            <button className="px-7 py-1.5 bg-[#E27469] rounded-md text-hash-light font-medium">
              dashboard
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

      <div className=" flex bg-terra-cotta rounded-md text-hash-light px-8 py-4 mt-12 items-center gap-x-16 gap-y-8  w-11/12 h-auto flex-wrap">
        <div>
          <label className="pr-4 text-xl"> Amount:</label>
          <input
            className=" rounded px-3 py-1.5 text-med-black text-center placeholder-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="enter the amout to borrow text-black"
            onChange={(e) => {
              setAmmount(e.target.value);
            }}
            type="number"
          ></input>
        </div>
        <div>
          <label className="pr-4 text-xl"> Interest:</label>
          <input
            id="minmax-range"
            type="range"
            min="0"
            max="100"
            className="w-3/5 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            onChange={(e) => {
              setInterest(e.target.value);
            }}
          />
          <label htmlFor="floatingInput" className="text-gray-700">
            %: {interest}
          </label>
        </div>
        <div>
          <label> Repay till:</label>
          <div className="flex items-center justify-center">
            <div className="datepicker relative form-floating mb-3 xl:w-96">
              <input
                type="date"
                data-date-inline-picker="true"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Select a date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
              <label htmlFor="floatingInput" className="text-gray-700">
                Select a date:{date}
              </label>
            </div>
          </div>
        </div>
        <div className="">
          <label className="pr-4 text-xl"> Currency</label>
          <input
            className="min-w-48 rounded px-3 py-1.5"
            placeholder="Enter currency"
          />
        </div>
        <div className="pl-16">
          <button
            className="min-w-48 rounded px-3 py-1.5  text-xl bg-raisin-black text-hash-light"
            onClick={() => InterestFunction()}
          >
            {" "}
            Calculate
          </button>
        </div>
        <div className=" text-raisin-black text-2xl font-semibold pl-24">
          Interest:{simpleInterest}
        </div>
      </div>
      {
        <div className="flex flex-col  w-11/12 min-h-64 bg-terra-cotta rounded-md px-8 py-4 mt-12 justify-center ">
          {!submit ? (
            <div className="flex  text-hash-light  items-center justify-around gap-36 pt-8 flex-wrap">
              {NftMetdata?.nfts?.map((nftData: any) => (
                <div key={nftData?.description} className="">
                  <Cards
                    contentClassName="w-72 h-72"
                    Image_Uri={nftData?.file_url}
                    nftData={nftData}
                    selectNFT={selectNFT}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-row w-full justify-evenly flex-wrap ">
              {nftSelected?.map((data) => (
                <div key={data.token_id}>
                  <div className=" w-72  h-72 relative">
                    <img
                      src={data?.file_url}
                      alt="image"
                      className="p-2 object-contain blur-sm"
                      width={450}
                      height={72}
                    />
                    <button
                      className="px-2 py-4 absolute top-1/2 left-24 text-white border-2 border-manatee flex h-4 items-center"
                      onClick={() => {
                        console.log("hello");
                      }}
                    >
                      Approve
                    </button>
                  </div>
                </div>
              ))}{" "}
            </div>
          )}

          {
            <div className="flex w-full items-end  justify-end pt-12 pb-4 pr-8">
              <button
                className="text-2xl bg-raisin-black px-4 py-2 rounded-lg text-hash-light hover:border-2"
                onClick={() => setSubmit(true)}
              >
                Submit
              </button>
            </div>
          }
        </div>
      }
    </div>
  );
};

export default Borrow;
