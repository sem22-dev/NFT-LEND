import { useState } from "react";
import Image from "next/image";

declare global {
    interface Window {
      ethereum?: any;
    }
  }

export default function ConnectWalletButton() {
  const [connected, setConnected] = useState(false);

  function connectWallet() {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      window.ethereum.request({ method: "eth_requestAccounts" })
        .then((accounts: string) => {
          // The user has connected their wallet
          console.log("Connected to wallet:", accounts[0]);
          setConnected(true);
        })
        .catch((error: Error) => {
          // Handle error
          console.error(error);
        });
    }
  }

  return (
<button onClick={connectWallet} type="button" className="text-white bg-bg hover:bg-header hover:text-bg2 border border-transparent focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
<Image className="mr-[5px]" src="/images/meta.svg" alt="metamask" width={20} height={20}/>
{connected ? "Wallet Connected" : "Connect with Metamask"}
</button>
  );
}
