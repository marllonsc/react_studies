import requests

# Replace the URL with your actual endpoint const ip_linux = "http://192.168.0.104:8083/";
#url = "http://192.168.0.104:8083/api/reviews/secure"
#url = "http://192.168.0.104:8083/api/reviews/secure"
url = "http://192.168.0.104:8083/api/reviews/secure/user/book"

# Replace 'your_token_here' with the actual token value
token = "eyJraWQiOiJUSTZCN0l1T25LZ1Awalh1Z0xWeTgxTmp4ME9vYmEtcTREalpmNWpvbmxnIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULk9KVzg4N3pqck9ZU1hJWm81QVQ4UERjMnZ6TFZZSmE0dU5ycC1qaTNUYWciLCJpc3MiOiJodHRwczovL2Rldi0wNjMxODkzMC5va3RhLmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE3MDU1ODczOTcsImV4cCI6MTcwNTU5MDk5NywiY2lkIjoiMG9hZDRod2s5Z1ZnWHJMU3Y1ZDciLCJ1aWQiOiIwMHVkNGhyMGY3NUcycmlBWDVkNyIsInNjcCI6WyJwcm9maWxlIiwib3BlbmlkIiwiZW1haWwiXSwiYXV0aF90aW1lIjoxNzA1NTgwMjUwLCJzdWIiOiJ0ZXN0dXNlckBlbWFpbC5jb20ifQ.XBukVfMyCV8gmEimXBb0QdiosY2B_Li3J-WYeh6LQu39IcYvg5L6TVYqeVSBfdmFmXnfS3JRFpZsGBuDiD2blflaiTV50cTtzlfevfAYl9MlEnNgl4FUr5o77qoPbwRSde5En5BXv0SNSwfjdiQDDdEzGm2DEH0BuIIY61u0fUFfyuNW150FENcMRqBWpamWKqyzh-6VPvnuGjgkIH-6Rygf2wfbv5qhNvav7e1W0c7GLwj1s82mSk-SYzZc2WFmsIz3T3ooH951RIfaWF6Hbm93LNLPCaGavpcN_PkcR4TDTLWAfRdwE2S6POfuWfz3sfchz7RVbBcs2-WOypdeZA"
# Replace 'your_payload_here' with the data you want to send in the request
payload = {
    "rating": 5,
    "bookId": 1,
    "reviewDescription" : "Very good book!"
}

# Set the headers with the authorization token
headers = {
    "Authorization": f"Bearer {token}",
    "Content-Type": "application/json"
}



# Make the POST request
#response = requests.post(url, json=payload, headers=headers)

# Check the response
#if response.status_code == 200:
#    print("Request successful!")
#    print(response.json())
#else:
#    print(f"Request failed with status code: {response.status_code}")
#    print(response.text)


print("")
print("Starting GET Test")

# Set the query parameters
params = {
    "bookId": 1
}

# Make the GET request
response = requests.get(url, headers=headers, params=params)

# Check the response
if response.status_code == 200:
    print(response.json())
elif response.status_code == 401:
    print("Unauthorized - Token may be invalid or expired.")
else:
    print(f"Request failed with status code: {response.status_code}")
    print(response.text)
