pipeline {
    
    agent any

    stages {

        stage('Setup') {

            when { expression { !fileExists('.env') && !fileExists('config/config.json') && !fileExists('net.ini')} }
            steps {
                sh 'npm i --save'
                withCredentials([
                    file(credentialsId: "env", variable: "environment"),
                    file(credentialsId: "config", variable: "configuration"),
                    file(credentialsId: "net", variable: "network")
                ]) {
                    sh "cp \$environment .env"
                    sh "cp \$configuration config/config.json"
                    sh "cp \$network net.ini"
                }
            }
        }

        stage('Reset') {
            steps {

                dir("swap") {
                    sh 'rm -rf build/contracts'
                }
            }
        }
        
        stage('Build Main') {
            steps {
                dir("swap") {
                    sh 'cp main/contracts/* contracts'
                    sh 'sed -i \'/version/c\\   version: \"0.5.0\",\' truffle-config.js'
                    sh 'truffle compile'
                    sh 'rm contracts/*'
                }
            }
        }
        
        stage('Build USDT') {
            steps {
                dir("swap") {
                    sh 'cp tokens/contracts/USDT.sol contracts'
                    sh 'sed -i \'/version/c\\   version: \"0.4.18\",\' truffle-config.js'
                    sh 'sed -i \'/enabled/c\\   enabled: false,\' truffle-config.js'
                    sh 'sed -i \'/runs/c\\   runs: 0,\' truffle-config.js'
                    sh 'truffle compile'
                    sh 'rm contracts/USDT.sol'
                }
            }
        }
        
        stage('Build USDC') {
            steps {
                dir("swap") {
                    sh 'cp tokens/contracts/USDCProxy.sol contracts'
                    sh 'cp tokens/contracts/USDCToken.sol contracts'
                    sh 'sed -i \'/version/c\\   version: \"0.4.24\",\' truffle-config.js'
                    sh 'sed -i \'/enabled/c\\   enabled: false,\' truffle-config.js'
                    sh 'sed -i \'/runs/c\\   runs: 200,\' truffle-config.js'
                    sh 'truffle compile'
                    sh 'rm contracts/USDCProxy.sol contracts/USDCToken.sol'
                }
            }
        }
        
        stage('Build DAI') {
            steps {
                dir("swap") {
                    sh 'cp tokens/contracts/DAI.sol contracts'
                    sh 'sed -i \'/version/c\\   version: \"0.5.12\",\' truffle-config.js'
                    sh 'sed -i \'/enabled/c\\   enabled: false,\' truffle-config.js'
                    sh 'sed -i \'/runs/c\\   runs: 200,\' truffle-config.js'
                    sh 'truffle compile'
                    sh 'rm contracts/DAI.sol'
                }
            }
        }

        stage('Migrations') {
            steps {
                dir("swap") {
                    sh 'cp tokens/migrations/1_initial_migration.js tokens/migrations/2_dai_migration.js tokens/migrations/3_usdt_migration.js tokens/migrations/4_usdctoken_migration.js tokens/migrations/5_usdcproxy_migration.js migrations'
                    sh 'cp main/migrations/6_as_migration.js main/migrations/7_proxy_migration.js migrations'
                    sh 'truffle migrate --network ropsten --reset'
                    sh 'rm migrations/*'
                }
            }
        }

    }

}