import requests

# Replace the URL with your actual endpoint
url = "https://example.com/api/your-endpoint"

# Replace 'your_token_here' with the actual token value
token = "your_token_here"

# Replace 'your_payload_here' with the data you want to send in the request
payload = {
    "key1": "value1",
    "key2": "value2"
}

# Set the headers with the authorization token
headers = {
    "Authorization": f"Bearer {token}",
    "Content-Type": "application/json"
}

# Make the POST request
response = requests.post(url, json=payload, headers=headers)

# Check the response
if response.status_code == 200:
    print("Request successful!")
    print(response.json())
else:
    print(f"Request failed with status code: {response.status_code}")
    print(response.text)
