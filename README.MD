docker build -t rest-service-mock .

docker run -p 49160:8080 --name rest-service-mock-test -d rest-service-mock

curl -i localhost:49160

http://localhost:49160/get
