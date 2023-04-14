"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

declare global {
    interface Window {
      ethereum?: any;
    }
  }

  export default function ConnectWalletButton() {
    const [connected, setConnected] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [ethBalance, setEthBalance] = useState("");
  
    function connectWallet() {
      if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
        window.ethereum.request({ method: "eth_requestAccounts" })
          .then((accounts: string[]) => {
            // The user has connected their wallet
            console.log("Connected to wallet:", accounts[0]);
            setConnected(true);
            updateEthBalance(accounts[0]);
          })
          .catch((error: Error) => {
            // Handle error
            console.error(error);
          });
      } else {
        // MetaMask is not installed
        console.error("MetaMask is not installed.");
      }
    }
  
    function disconnectWallet() {
      // Disconnect the wallet and reset the state
      setConnected(false);
      setEthBalance("");
      setShowDropdown(false);
    }

    async function updateEthBalance(account: string) {
      // Get the ETH balance of the connected account
      const response = await fetch(`https://api.etherscan.io/api?module=account&action=balance&address=${account}&tag=latest&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY}`);      
      const data = await response.json();
      console.log("data:", data);
      const balance = parseFloat(data.result) / 1e18;
      console.log("balance:", balance);
      setEthBalance(balance.toFixed(4));
    }

    useEffect(() => {
      // Update the ETH balance when the wallet is connected or disconnected
      if (connected) {
        if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
          window.ethereum.on("accountsChanged", (accounts: string[]) => {
            updateEthBalance(accounts[0]);
          });
        }
        updateEthBalance(window.ethereum.selectedAddress);
      }
    }, [connected]);
  
  
    return (
      <div className="relative">
      <div onClick={connectWallet}>
        <button  type="button" className="text-white bg-bg hover:bg-header hover:text-bg2 border border-transparent focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
          <Image className="mr-[5px]" src="/images/meta.svg" alt="metamask" width={20} height={20}/>
          {connected ? "Wallet Connected" : "Connect with Metamask"}
          { connected && <span onClick={() => setShowDropdown(!showDropdown)} className="ml-2">&#9662;</span>}
        </button>
      </div>
      {showDropdown && (
        <div className="absolute top-full right-0 z-10 bg-bg2 text-white border border-bg3 rounded-lg shadow-lg py-2">
          <div className="px-4 py-2">
            {ethBalance !== "" && (
              <p className="mb-1 text-xs font-medium text-gray-400">ETH Balance: {ethBalance} ETH</p>
            )}
            <button onClick={disconnectWallet} type="button" className="text-red-500 hover:text-red-600 font-medium text-xs">Disconnect</button>
          </div>
        </div>
      )}
    </div>
    );
  }