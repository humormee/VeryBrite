let req = unirest("GET", "https://www.universal-tutorial.com/api/getaccesstoken");

let response = req.headers({
  "Accept": "application/json",
  "api-token": "LIs_DXLSbK44MngqLOKVJvLYH5i0QDqooxFtvfPBkkcZo6SRN4U78RYl0-_wSEs8bP4",
  "user-email": "jernst766@gmail.com"
})

let countries_req = unirest("GET", "https://www.universal-tutorial.com/api/countries/");

countries_req.headers({
  "Authorization": `Bearer ${response.auth_token}`,
  "Accept": "applicatio"
})
