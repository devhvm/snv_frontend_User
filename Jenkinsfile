#!/usr/bin/env groovy

pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver for development') {
            when {
                branch 'development'
            }
            steps {
                echo 'Starting to build docker image'

                script {
                    sh "cp -R src/main/docker target/"
                    sh "cp target/*.war target/docker/"
                    def dockerImage = docker.build('snv/service-common-dev', 'target/docker')
                }
            }
        }
        stage('Deploy for production') {
            when {
                branch 'production'
            }
            steps {
                echo 'Starting to build docker image'

             QQ   script {
                    sh "cp -R src/main/docker target/"
                    sh "cp target/*.war target/docker/"
                    def dockerImage = docker.build('snv/service-common', 'target/docker')
                }
            }
        }
    }
}
