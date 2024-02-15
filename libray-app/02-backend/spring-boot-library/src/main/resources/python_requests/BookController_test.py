import requests

# Replace the URL with your actual endpoint const ip_linux = "http://192.168.0.104:8083/";
#url = "http://192.168.0.103:8083/api/books/secure/currentloans/count"
#url = "http://192.168.0.104:8083/api/reviews/secure"
url = "http://192.168.0.103:8083/api/books/secure/currentloans"

# Replace 'your_token_here' with the actual token value
token = "eyJraWQiOiJUSTZCN0l1T25LZ1Awalh1Z0xWeTgxTmp4ME9vYmEtcTREalpmNWpvbmxnIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULmJPdFJCdUo3MmVqV19HVXBVYWZCcXdBQ0lHai1ibERxajg1Mms2bnZfUGsiLCJpc3MiOiJodHRwczovL2Rldi0wNjMxODkzMC5va3RhLmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE3MDY4Nzc2OTQsImV4cCI6MTcwNjg4MTI5NCwiY2lkIjoiMG9hZDRod2s5Z1ZnWHJMU3Y1ZDciLCJ1aWQiOiIwMHVkNGhyMGY3NUcycmlBWDVkNyIsInNjcCI6WyJwcm9maWxlIiwib3BlbmlkIiwiZW1haWwiXSwiYXV0aF90aW1lIjoxNzA2ODc3NjkzLCJzdWIiOiJ0ZXN0dXNlckBlbWFpbC5jb20ifQ.PCx3KnUrEUjIeDQR4s8ABx7imXpbLli59jKx2O6_EPZQthgH4DowC71Rumoye_unbloXQKuhnjTkLrT3D2hZAjWOVW0I-An-LF0Qhkh7dwWx-XPDaVcn2d13B6VqV3qbdbmB0LhxuPu9iHjEhjtoGONmjDeRen_yIFQUvNLkgFbHA5m7iuuz0MINvaqSWIJpll4w4WAgVbuv0BR5GFVS3xM4wFdySMOAZGJRG4AngFScbt_gChG4gbIKAhLxZwq_hFItfnPuOz9kz84LokoGrzUFwZ6fkPCcgjgsjP_W7K1G6mR4s8k3YXAN-YM4WARX38kBf5zEzeN1pObw6QyWqw"

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
