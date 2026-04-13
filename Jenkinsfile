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

        stage('Lint') {
            steps {
                dir("${PROJECT_DIR}") {
                    sh 'npx ng lint'
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    if [ -z "${WWW_DIR}" ] || [ ! -d "${WWW_DIR}" ]; then
                        echo "WWW_DIR invalide ou absent : ${WWW_DIR}"
                        exit 1
                    fi
                    rm -rf "${WWW_DIR:?}/"*
                '''
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
