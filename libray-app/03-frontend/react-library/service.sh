# Run on first time only -------------------------------------------------------------------------
echo "Service Starting"
echo ""
kubectl delete service react-library
echo ""

kubectl expose pod react-library --type=NodePort --port=80 --target-port=80 --protocol=TCP --name=react-library
echo ""

minikube service react-library --url
echo ""
echo ""

# Check the exit code of the deployment command
if [ $? -eq 0 ]; then
    echo "Service Create successful!"
else
    echo "Service Create failed!"
fi