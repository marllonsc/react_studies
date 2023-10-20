echo "Deployment Start  react-library >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.!"

npm run build

eval $(minikube docker-env)
echo ""

minikube docker-env | Invoke-Expression
echo ""

docker build -t react-library .
echo ""

kubectl delete pod react-library

kubectl run react-library --image=react-library --image-pull-policy=Never

# Check the exit code of the deployment command
if [ $? -eq 0 ]; then
    echo "Deployment successful!"
else
    echo "Deployment failed!"
fi

echo "Deployment End >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.!"