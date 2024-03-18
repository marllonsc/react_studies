import requests

def post_request_with_token(url, token, data):
    headers = {
        "Authorization": "Bearer {}".format(token),
        "Content-Type": "application/json"
    }
    response = requests.post(url, headers=headers, json=data)
    return response  


# Replace the URL with your actual endpoint const ip_linux = "http://192.168.0.106:8083/";
#url = "http://192.168.0.106:8083/api/books/secure/currentloans/count"
#url = "http://192.168.0.106:8083/api/reviews/secure"
url = "http://192.168.0.106:8083/api/messages/secure/add/messages"

# Replace 'your_token_here' with the actual token value
token = "eyJraWQiOiJxSTFUMWlCQzNGdnVNdUM3eGdQNkhQaVZ4Z2VLZlpEcFFJRGxsSWtQX0pBIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULkdmbWNMY2I2RXJtUk55Ui1CN0Fmb0ZUS0hCZjZXdkJBd2x1clhFMkxxakEiLCJpc3MiOiJodHRwczovL2Rldi0wNjMxODkzMC5va3RhLmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE3MDgzNTI0MzcsImV4cCI6MTcwODM1NjAzNywiY2lkIjoiMG9hZDRod2s5Z1ZnWHJMU3Y1ZDciLCJ1aWQiOiIwMHVkNGhyMGY3NUcycmlBWDVkNyIsInNjcCI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiXSwiYXV0aF90aW1lIjoxNzA4MzUyNDM2LCJzdWIiOiJ0ZXN0dXNlckBlbWFpbC5jb20ifQ.OKHDVezeMEpWPTnhSslcRWSTtkpFDYmcJMPNts8L7BT9SobMidCr0Jrh2gEeAYM-z9rb533nuawOvOpDWpD6Mz_D2z_IBEtoDOmEaxmlkALyHBttcc-21UFrjfIQ1-TGZNkn0IvtHoqcpXEBM2W7zr_1kxEKdppfJ_ovNcNBrh34f94XATX8l87suqhLswelU-dAThuIqRlbWIoY81q535P5gPvvyS7W6ib_lfo59Pzb1KaROHXMPBsMqlqFm_HtgMDRwF_ZV1YkvsrhkXgsLE-fFP5vo_o1tHv-cmhuN9JNWkpYlhFtv9fgYiRHso7l07tL41i6Weca7JKz97_ogw"
# Replace 'your_payload_here' with the data you want to send in the request
payload = ""


data = {
    "title": "Example title for message",
    "question": "What is this question"
}



response = post_request_with_token(url, token, data)
print("Response status code:", response.status_code)
print("Response body:", response.json())
  