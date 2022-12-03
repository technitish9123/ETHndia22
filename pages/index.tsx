import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg-raisin-black ">
      <div className="flex justify-between w-full py-2 px-6">
        <p className="text-hash-light text-4xl">
          NFT<span className="text-[#D74634]">fi</span>
        </p>
        <Link href={"/dashboard"}>
          <button className="px-4 py-3 bg-terra-cotta text-hash-light flex">
            {" "}
            Launch App
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 py-2 pb-5">
        <div className="text-hash-light pl-12 ">
          <p className="text-[85px]">
            Transform
            <br /> Your NFT <br />
            <span>&emsp;&emsp; into LOANS.</span>
            <br />
            <span className="text-terra-cotta">
              &emsp;&emsp; Instantly.
            </span>{" "}
          </p>
          <p className="text-3xl">&emsp;&emsp; fast. easy. safe.</p>
          <div className="justify-between w-2/4 flex  items-center content-center mt-8">
            <button className="text-hash-light bg-terra-cotta rounded-md text-xl px-4 py-2 ml-16  ">
              {" "}
              Borrow Now
            </button>
            <button className="text underline"> I want To lend</button>
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className="flex w-full bg-white flex-col pt-12 pl-28 pb-16">
        <div className="text-8xl text-manatee ">
          <p>
            How<span className="text-terra-cotta"> NFTfi</span>
          </p>
          <p className="flex ">
            &emsp;&emsp; works for{" "}
            <div className="flex  justify-center items-center text-2xl gap-4 ml-8 px-2 text-terra-cotta  font-semibold rounded-lg border-2 h-16 border-terra-cotta ">
              {/* <p className="bg-clip-text text-transparent  bg-hash-red-gradient text-5xl pt-4  font-semibold "> */}

              <button className="flex border-r-2 h-full items-center border-terra-cotta pr-2 ">
                Brower
              </button>
              <button className="flex">Lender</button>
            </div>
          </p>

          <div className=" flex pt-10 flex-col w-7/12 pr-80 text-med-black">
            <p className="text-3xl py-8 ">
              Explore how much you can get with your assets.{" "}
            </p>
            <ul className="text-base">
              <li className="py-4">
                &emsp;&emsp;Select the amount, we select the assets. Choose with
                the slider how much you want to borrow. We will help you pick
                assets that support your loan.
              </li>
              <li className="py-4">
                &emsp;&emsp; Or select your assets, we help you with the amount.
                Pick the assets you want to use as collateral and we will
                generate how much you can borrow. After you make your dep
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <p className="text-7xl pt-24 text-manatee">
            How You Can <span className="text-terra-cotta">Start</span>
          </p>
          <div className="grid grid-cols-2 py-2 pt-8  content-center items-center ">
            <div className=" flex justify-center flex-col items-start">
              {" "}
              <p className="text-3xl  xl py-6 pl-8 ">
                For <span className="text-terra-cotta">Borrowers</span>
              </p>
              <div className="backdrop-blur-md backdrop-brightness-150 w-4/6 min-h-96 text-xl px-12 py-6 bg-[#F6F1F3] rounded-3xl flex items-center justify-center flex-col gap-y-4">
                <p className=" border-terra-cotta">
                  <span className="no-underline text-3xl font-semibold text-terra-cotta">
                    1.
                  </span>{" "}
                  Connect your wallet (you only need to do this the first time).
                </p>
                <p className=" border-terra-cotta">
                  <span className="no-underline text-3xl font-semibold text-terra-cotta">
                    2.
                  </span>{" "}
                  Once inside the Borrow page, select the currency and period of
                  the loan.
                </p>
                <p className=" border-terra-cotta">
                  <span className="no-underline text-3xl font-semibold text-terra-cotta">
                    3.
                  </span>{" "}
                  Click ‘Borrow now’.
                </p>
                <p className=" border-terra-cotta">
                  <span className="no-underline text-3xl font-semibold text-terra-cotta">
                    4.
                  </span>{" "}
                  Click ‘Borrow now’.
                </p>
                <p className=" border-terra-cotta">
                  <span className="no-underline text-3xl font-semibold text-terra-cotta">
                    5.
                  </span>{" "}
                  Click ‘Borrow now’.
                </p>
                <p className=" border-terra-cotta">
                  <span className="no-underline text-3xl font-semibold text-terra-cotta">
                    6.
                  </span>{" "}
                  Click ‘Borrow now’.
                </p>
              </div>
            </div>
            <div className="items-start flex flex-col ">
              {" "}
              <p className="text-3xl  xl py-6 pl-8 ">
                For <span className="text-persian-blue">Lenders</span>
              </p>
              <div className="backdrop-blur-md backdrop-brightness-150 w-4/6 h-96 bg-[#F6F1F3] rounded-3xl flex items-center justify-center flex-col gap-y-5">
                <p className=" border-persian-blue">
                  <span className="no-underline text-3xl font-semibold text-persian-blue">
                    1.
                  </span>{" "}
                  Click ‘Borrow now’.
                </p>
                <p className=" border-persian-blue">
                  <span className="no-underline text-3xl font-semibold text-persian-blue">
                    2.
                  </span>{" "}
                  Click ‘Borrow now’.
                </p>
                <p className=" border-persian-blue">
                  <span className="no-underline text-3xl font-semibold text-persian-blue">
                    3.
                  </span>{" "}
                  Click ‘Borrow now’.
                </p>
                <p className=" border-persian-blue">
                  <span className="no-underline text-3xl font-semibold text-persian-blue">
                    4.
                  </span>{" "}
                  Click ‘Borrow now’.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-raisin-black min-h-[100vh]">
        <p className="text-7xl text-hash-light pl-24 pt-28 ">
          Why <span className="text-terra-cotta">NFTfi</span>
        </p>
      </div>
      <div className="bg-hash-light py-24">
        <p className="text-center text-4xl text-[#444649]">
          Why Get an NFT-Backed Credit
        </p>
      </div>
    </div>
  );
}
