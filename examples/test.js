const Request = require('request');
let requestId = "0x2aa3fd79a3b6c02d0f06d4b6ecca9cd0d325f9dca2ee3c446a5cbddf15f6a765"
require("../pyth.js")({DEBUG: true},(err,pyth)=>{
console.log("Listing responses with to request:"+requestId)
  pyth.listResponses(requestId).then((responses)=>{
    console.log(responses)
  })
});
