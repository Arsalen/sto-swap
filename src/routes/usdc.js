const express = require("express");
const router = express.Router();

require('dotenv').config({path: '.env'});

const usdcTokenArtifacts = require('../../swap/build/contracts/FiatTokenV1');
const usdcProxyArtifacts = require('../../swap/build/contracts/FiatTokenProxy');
const proxyArtifacts = require('../../swap/build/contracts/AsProxy');
const asArtifacts = require('../../swap/build/contracts/AsUSDC');

const AppConfig = require(`../../config/config.json`);

const sto_abi = require(`../../config/abi.json`);

const usdc = {
    tokenAddress: usdcTokenArtifacts.networks[AppConfig.network_id].address,
    proxyAddress: usdcProxyArtifacts.networks[AppConfig.network_id].address,
    abi: usdcTokenArtifacts.abi
};

const proxy = {
    address: proxyArtifacts.networks[AppConfig.network_id].address,
    abi: proxyArtifacts.abi
};

const as = {
    address: asArtifacts.networks[AppConfig.network_id].address,
    abi: asArtifacts.abi
};

const sto = {
    address: AppConfig.sto_address,
    abi: sto_abi
};

const MAGIC_PUBLISHABLE_KEY = process.env.MAGIC_PUBLISHABLE_KEY;

router.get("/", (req, res) => { 
    return res.render("usdc", { 
        title: "USDC", 
        contracts: { 
            proxy, 
            usdc, 
            as, 
            sto 
        }, 
        MAGIC_PUBLISHABLE_KEY });
});

module.exports = router;
