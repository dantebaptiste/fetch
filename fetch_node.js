var request = require('request');

var headers = {
    'Authorization': 'Bearer {30f881fc33f117a1e20cfbf6c087592dd565b7f9}',
    'Content-Type': 'application/json'
};

var dataString = '{ "long_url": "https://airtable.com/tblssnyc9wRcIbwJa/viwIoRmo82XvmJ5cG/rec9OdIBvjh63QXbF?blocks=bipHqdIjRbiGAqtmd", "domain": "bit.ly", "group_guid": "Ba1bc23dE4F" }';

var options = {
    url: 'https://api-ssl.bitly.com/v4/shorten',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
    else {
      console.log(error, body);
    };
};

request(options, callback);
