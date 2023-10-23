echo "Deployment Start  Spring-boot-library >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.!"
echo ""

mvn clean install
echo ""

eval $(minikube docker-env)
echo ""

minikube docker-env | Invoke-Expression
echo ""

docker build -t spring-boot-library:0.0.1 .
echo ""

#kubectl delete pod pring-boot-library

kubectl run spring-boot-library --image=spring-boot-library:0.0.1 --image-pull-policy=Never

minikube service spring-boot-library --url

echo ""
echo ""
echo ""

# Check the exit code of the deployment command
if [ $? -eq 0 ]; then
    echo "Deployment successful!"
else
    echo "Deployment failed!"
fi

echo "Deployment End >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.!"
