/*import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "10px",
        }}>
            <h1>DEX Swap</h1>
            <ConnectWallet/>
        </div>
    )
}*/
// components/Navbar.tsx

import { ConnectWallet } from "@thirdweb-dev/react";
import Logo from './SVG/Logo'; // Update path as per your project structure

const Navbar = () => {
    return (
        <header className="bg-transparent bg-opacity-100 backdrop-filter backdrop-blur-lg   rounded-b-lg p-4">
          <div className="container mx-auto flex justify-between items-center">
         
            {/* Logo and DEX Swap Title */}
            <div className="flex items-center space-x-4">
              <a href="/" className="flex items-center space-x-2 transition duration-300 ease-in-out transform hover:scale-110">
                <div className="w-10 h-10">
                  <Logo /> {/* Adjust width and height as needed */}
                </div>
                <span className="text-xl font-bold text-gray-100">DEX Swap</span>
                
              </a>
              <span className=" px-5 space-x-30 text-balance font-sans text-gray-100 transition-colors transform hover:text-red-600 rounded-br-md">Home</span>
              <span className=" px-2 space-x-30 text-balance font-sans text-gray-100 transition-colors transform hover:text-red-600 rounded-br-md">Swap</span>
              <span className=" px-3 space-x-32 text-balance font-sans text-gray-100 transition-colors transform hover:text-red-600 rounded-br-md">About Us</span>
              
            </div>
    
            {/* Connect Wallet Button */}
            <div className="flex items-center">
              <ConnectWallet className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-400 text-gray-100 hover:text-white transition duration-300 ease-in-out" />
            </div>
          </div>
        </header>
      );
};

export default Navbar;
