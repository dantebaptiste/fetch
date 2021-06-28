import requests

headers = {
    'Authorization': 'Bearer {TOKEN}',
    'Content-Type': 'application/json',
}

data = '{ "long_url": "https://dev.bitly.com", "domain": "bit.ly", "group_guid": "Ba1bc23dE4F" }'

response = requests.post('https://api-ssl.bitly.com/v4/shorten', headers=headers, data=data)
