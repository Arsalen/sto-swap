pipeline {
    
    agent any

    stages {

        stage('Setup') {

            when { expression { !fileExists('.env') && !fileExists('config/config.json') && !fileExists('config/abi.json') && !fileExists('net.ini') && !fileExists('pm2.config.js') } }
            
            steps {
                
                sh 'npm i --save'
                withCredentials([
                    file(credentialsId: "env", variable: "environment"),
                    file(credentialsId: "config", variable: "configuration"),
                    file(credentialsId: "abi", variable: "bytecode"),
                    file(credentialsId: "net", variable: "network"),
                    file(credentialsId: "pm2", variable: "daemon")
                ]) {
                    
                    sh "cp \$environment .env"
                    sh "cp \$configuration config/config.json"
                    sh "cp \$bytecode config/abi.json"
                    sh "cp \$network net.ini"
                    sh "cp \$daemon pm2.config.js"
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
        
        stage('Build') {

            steps {

                dir("swap") {

                    sh 'cp main/contracts/* contracts'
                    sh 'sed -i \'/version/c\\   version: \"0.5.0\",\' truffle-config.js'
                    sh 'truffle compile'
                    sh 'rm contracts/*'
                }
            }
        }

        stage('Artifacts') {

            steps {

                dir("swap") {
                    sh "cp artifacts/Dai.json build/contracts/Dai.json"
                    sh "cp artifacts/FiatTokenV1.json build/contracts/FiatTokenV1.json"
                    sh "cp artifacts/TetherToken.json build/contracts/TetherToken.json"
                }
            }
        }

        stage('Migrations') {

            steps {

                dir("swap") {

                    sh 'cp tokens/migrations/1_initial_migration.js migrations'
                    sh 'cp main/migrations/6_as_migration.js main/migrations/7_proxy_migration.js migrations'
                    sh 'truffle migrate --network live --reset'
                    sh 'rm migrations/*'
                }
            }
        }

        stage("RUN") {
            steps {
                sh "pm2 start pm2.config.js"
            }
        }

    }

}