# sto-swap

Exchange stablecoins against an ERC20-Compliant security token on Ethereum.

![image](https://drive.google.com/uc?export=view&id=1-Ol6aymdkOOXusMiCzTODdd-h_hXVKci)

  - The security token is based on https://github.com/TokenMarketNet/sto repository
  - The atomic swap includes DAI, USDC and USDT compiled then migrated against ethereum network
  - Tokens contracts and migration scripts are under tokens directory
  - Swap contracts and migration scripts are under main directory
  - Transactions directory is comprised of scripts to execute the swap per each stablecoin.
    - authorize.js: Whitelist the underlying stablecoin, note that only the owner is allowed to do so
    - approve.js: Allow the atomic swap to spend the stablecoin
    - deposit.js: Exchange the stablecoin against the security token
  - Setup a .env file for credentials
    - MNEMONIC: Wallet seed phrase, typically 12 or 24 word phrase to allow access infinite number of accounts
    - INFURA_API_KEY:  Register to infura.io in order to get the secret Key
    - ADMIN_ADDRESS, ADMIN_PK: Administrator address and private key, to authorize stablecoins
    - USER_ADDRESS, USER_PK: User address and private key, to approve and deposit stablecoins

## swapper contract
https://etherscan.io/address/0x72bA4B28c93c24666E76F72CA7F0336349aCfFec

## security token address
https://etherscan.io/Address/0xBEd85c98f082609e98eaB73fCA17E22863c22a3A

## stablecoins addresses
- Dai https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f
- USDT https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7
- USDC https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48

## transactions
- https://etherscan.io/tx/0x806af93385f7af71062e0ccec70fd626aa4b8c221d73e5c8165b2e35843f9248
- https://etherscan.io/tx/0xb66b58f516951af2e137ddacf305a9966128bdc6b6fb0f5b2bd382a90b1d4978
- https://etherscan.io/tx/0x2afbb94d33c22a19a873c9f7edca7d8caf52c24bc3d24d31092d82189c537532