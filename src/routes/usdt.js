const express = require("express");
const router = express.Router();

require('dotenv').config({path: '.env'});

const usdtArtifacts = require('../../swap/build/contracts/TetherToken');
const proxyArtifacts = require('../../swap/build/contracts/AsProxy');
const asArtifacts = require('../../swap/build/contracts/AsUSDT');

const AppConfig = require(`../../config/config.json`);

const sto_abi = require(`../../config/abi.json`);

const usdt = {
    address: usdtArtifacts.networks[AppConfig.network_id].address,
    abi: usdtArtifacts.abi
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
    return res.render("usdt", { 
        title: "USDT", 
        contracts: { 
            proxy, 
            usdt, 
            as, 
            sto 
        }, 
        MAGIC_PUBLISHABLE_KEY });
});

module.exports = router;