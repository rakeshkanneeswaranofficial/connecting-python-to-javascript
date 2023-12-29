import requests

# GET request
response = requests.get("http://localhost:3000/getrequest")
if response.status_code == 200:
    body = response.json()
    print("GET Response Body:", body['arrayofnumber'])
else:
    print(f"GET Request failed with status code {response.status_code}")




# POST request
post_data = {"key": "value"}
response = requests.post("http://localhost:3000/postrequest", json=post_data)
if response.status_code == 200:
    body = response.json()
    print("POST Response Body:", body)
else:
    print(f"POST Request failed with status code {response.status_code}")



# DELETE request
response = requests.delete("http://localhost:3000/deleterequest")
if response.status_code == 200:
    body = response.json()
    print("DELETE Response Body:", body)
else:
    print(f"DELETE Request failed with status code {response.status_code}")
