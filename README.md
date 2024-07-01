# DEX Swap (Custom_Swap_v2)

![alt text](https://github.com/Dhanraj30/Custom_Swap_v2/blob/main/img/Screenshot%20(187).png)

# System Daigram (AMM)
![alt text](https://github.com/Dhanraj30/Custom_Swap_v2/blob/main/img/Screenshot%20(188).png)

## Introduction
**DEX Swap** is a decentralized exchange platform designed to facilitate the swapping of tokens in a trustless and permissionless manner. Leveraging the power of Ethereum and automated market maker (AMM) technology, DEX Swap enables users to trade ERC-20 tokens directly from their wallets without the need for intermediaries.

## Features
- **Trustless Trading**: Conduct trades directly from your wallet without the need for a centralized exchange.
- **Automated Market Maker**: Utilizes an AMM model for efficient and decentralized liquidity provision.
- **Token Swaps**: Swap between two tokens using a simple and intuitive interface.
- **Liquidity Pools**: Provide liquidity to earn fees from token swaps.
- **Secure and Transparent**: Built on the Ethereum blockchain, ensuring security and transparency.
- **User-Friendly Interface**: Clean and modern UI with easy navigation.

## Technologies Used
- **TypeScript**: Provides type safety and improved development experience for the project.
- **Solidity**: Smart contract language used to implement the decentralized exchange logic on the Ethereum blockchain.
- **Ethereum**: Blockchain platform used to deploy and interact with smart contracts.
-**Hardhat**: Hardhat framework used for deployment of smart contracts.
- **Thirdweb**: Simplifies the integration of Web3 functionality in the application.
- **CSS**: Used for styling the application, ensuring a responsive and visually appealing interface.


## Getting Started

### Prerequisites
- **Node.js**: Ensure you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **MetaMask**: A crypto wallet and gateway to blockchain apps. Install it from [here](https://metamask.io/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dex-swap.git
   cd dex-swap
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```bash
   NEXT_PUBLIC_TEMPLATE_CLIENT_ID=your_thirdweb_client_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

### Contract Deployment

To deploy the smart contracts on Ethereum:

1. Configure your deployment script (e.g., using Hardhat or Truffle).
2. Deploy the contracts to the Ethereum network.
3. Update the contract addresses in your frontend application.

## Smart Contracts

The core smart contracts of DEX Swap are written in Solidity and deployed on the Ethereum blockchain. They manage the liquidity pools, token swaps, and fee distribution.

### Key Contracts

- **DEX.sol**: Manages the overall functionality of the decentralized exchange.
- Manages the liquidity pools and the automated market maker logic.

- **Token.sol**: Represents the ERC-20 tokens used within the platform.

## Usage

1. **Connect Wallet**: Use MetaMask to connect your Ethereum wallet to the DEX Swap platform.
2. **Swap Tokens**: Select the tokens you want to swap and execute the trade.
3. **Provide Liquidity**: Add liquidity to the pool to earn a share of the trading fees.
4. **Withdraw Liquidity**: Remove your liquidity from the pool at any time.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
