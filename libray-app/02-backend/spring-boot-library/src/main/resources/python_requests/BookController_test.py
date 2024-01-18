import requests

# Replace the URL with your actual endpoint const ip_linux = "http://192.168.0.104:8083/";
url = "http://localhost:8080/api/books/secure/currentloans/count"
#url = "http://192.168.0.104:8083/api/reviews/secure"

# Replace 'your_token_here' with the actual token value
token = "eyJraWQiOiJUSTZCN0l1T25LZ1Awalh1Z0xWeTgxTmp4ME9vYmEtcTREalpmNWpvbmxnIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULkNNd3dKUnNlbkR0TjNrdzRtSkYyazhVbmN1aW9WX2hoS09NY0JLQ29DUEUiLCJpc3MiOiJodHRwczovL2Rldi0wNjMxODkzMC5va3RhLmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE3MDU1ODM4MjUsImV4cCI6MTcwNTU4NzQyNSwiY2lkIjoiMG9hZDRod2s5Z1ZnWHJMU3Y1ZDciLCJ1aWQiOiIwMHVkNGhyMGY3NUcycmlBWDVkNyIsInNjcCI6WyJwcm9maWxlIiwib3BlbmlkIiwiZW1haWwiXSwiYXV0aF90aW1lIjoxNzA1NTgwMjUwLCJzdWIiOiJ0ZXN0dXNlckBlbWFpbC5jb20ifQ.Gb98Z1Mz96IJpoy4aLoKb3LsUgU3Posla7FM1AaP9RtU7O1zPXS2aNooK_-4nn6hHG0KnYSdlTUd84xN7auE_BmzWE9nxN17Go-E0Lgoxs3yWmb4Z7-V9HI0qTWLhzqw8GLeh-kdQn0INXIDAPbVIofGyjvnibgnbL9GSmD80WepGcS6927B5CIq5JY1a4JN-IMux9Z3v4D8xze9uWSL08A1J3lpRZWgjGSNoaPSNQHcq2zm0FoNu8_0MGgQ2JKAOjkYKJMXEJw9V3yoP-eyeZ3b-y1pOrr8WgTnWPmVmIyT-yAlJr69onuBR_Nb1zznY-3zlXhAwF-o9djZVZP9vw"

# Replace 'your_payload_here' with the data you want to send in the request
payload = ""

# Set the headers with the authorization token
headers = {
    "Authorization": f"Bearer {token}",
    "Content-Type": "application/json"
}



# Make the POST request
response = requests.get(url, "", headers=headers)

# Check the response
if response.status_code == 200:
    print("Request successful!")
    print(response.json())
else:
    print(f"Request failed with status code: {response.status_code}")
    print(response.text)
    print(response)
