pipeline {
    agent any

    environment {
        PROJECT_DIR = '/home/ubuntu/projects/lasserre-consulting-site'
        WWW_DIR     = '/var/www/lasserre-consulting-site'
    }

    stages {

        stage('Checkout') {
            steps {
                dir("${PROJECT_DIR}") {
                    sh 'git pull origin main'
                }
            }
        }

        stage('Build') {
            steps {
                dir("${PROJECT_DIR}") {
                    sh 'npm ci'
                    sh 'npx ng build --configuration production'
                }
            }
        }

        stage('Deploy') {
            steps {
                sh "rm -rf ${WWW_DIR}/*"
                sh "cp -r ${PROJECT_DIR}/dist/lasserre-consulting-site/browser/* ${WWW_DIR}/"
            }
        }

    }

    post {
        success {
            echo 'lasserre-consulting-site déployé avec succès.'
        }
        failure {
            echo 'Echec du pipeline lasserre-consulting-site.'
        }
    }
}
