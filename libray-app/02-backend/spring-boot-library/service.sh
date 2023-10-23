# Run on first time only -------------------------------------------------------------------------
echo "Service Starting"
echo ""
#kubectl delete service spring-boot-library
echo ""

kubectl expose pod spring-boot-library --type=NodePort --port=8080 --target-port=8080 --name=spring-boot-library
echo ""

minikube service spring-boot-library --url
echo ""
echo ""

# Check the exit code of the deployment command
if [ $? -eq 0 ]; then
    echo "Service Create successful!"
else
    echo "Service Create failed!"
fi
