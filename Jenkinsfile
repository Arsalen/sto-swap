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
                    sh 'truffle migrate --network ropsten --reset'
                    sh 'rm migrations/*'
                }
            }
        }

    }

}