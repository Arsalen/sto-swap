# Atomic swap

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
# sto-swap
