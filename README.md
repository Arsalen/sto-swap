# Atomic swap

Exchange stablecoins against an ERC20-Compliant security token on Ropsten.

![image](https://drive.google.com/uc?export=view&id=1-Ol6aymdkOOXusMiCzTODdd-h_hXVKci)

  - The security token is based on https://github.com/TokenMarketNet/sto repository
  - The atomic swap includes DAI, USDC and USDT compiled then migrated against ropsten network
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
https://ropsten.etherscan.io/address/0x987bf095196dd722ec3df369a51dabd71185064c

## security token address
https://ropsten.etherscan.io/address/0x5deec3ab377abde863cb4de8afdc1bf68c131785

## stablecoins addresses
- Dai https://ropsten.etherscan.io/token/0xb7863f8e92019d1170e4aa4889cfc7294cf8a58a
- USDT https://ropsten.etherscan.io/token/0x2c939485e473a5433248748b73e345cbd3055a28
- USDC https://ropsten.etherscan.io/token/0xc38895627265a2aad4b6f710d441eed85c4582c1

## transactions
- https://ropsten.etherscan.io/tx/0x5d0903d02865f66c2b373e7b4ca1f1363de4b53ef907c63def12d44ea406ec7e
- https://ropsten.etherscan.io/tx/0x2615ea91768ecbaea426a864e729a41ef4ce90615d4abff2926426a167aa6999
- https://ropsten.etherscan.io/tx/0x509fd6b49be4444c70083eb44edd0a0543286498344174a60ea85ee7d0d296f4