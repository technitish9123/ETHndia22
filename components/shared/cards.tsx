/* eslint-disable @next/next/no-img-element */
//@ts-no-check
import React, { useContext } from "react";
import Image from "next/image";
import { GlobalContext } from "store/global";

type CardsProps = {
  contentClassName?: string;
  Image_Uri: string;
  nftData: any;
  selectedNft: any;
  setNftSelected: any;
};

const cards: React.FC<CardsProps> = ({
  contentClassName,
  Image_Uri,
  nftData,
  selectedNft,
  setNftSelected,
}) => {
  // const nftSelected: any[] = [];
  // const SelectedNft = () => {
  //   console.log(nftSelected);
  //   nftSelected.push(nftData);
  //   console.log(nftSelected);

  // };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { selectedNFT, setSelectedNFT } = useContext(GlobalContext);

  return (
    <div
      className={`${contentClassName} bg-white rounded-md text-med-black flex items-center justify-center relative`}
    >
      <input
        className="form-check-input m-5 absolute top-0 right-0 appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        onClick={() => selectedNft(nftData)}
      />
      <img
        src={Image_Uri ?? "/svg/1.png"}
        alt="image"
        className="p-2 object-cover"
      />
    </div>
  );
};

export default cards;
