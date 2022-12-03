import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FileUpload } from "components/fileupload";

export default function Home() {
  return (
    <div className="bg-raisin-black h-[110vh] ">
      <div className=" w-full flex p-6 items-end justify-end ">
        <ConnectButton />
      </div>
      <FileUpload />
    </div>
  );
}
