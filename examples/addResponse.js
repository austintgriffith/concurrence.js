
if(!process.argv[2]){
  console.log("Please provide a request id.")
  process.exit(1)
}
let requestId = process.argv[2];

if(!process.argv[3]){
  console.log("Please provide a response.")
  process.exit(1)
}
let response = process.argv[3];

require("../pyth.js")({DEBUG: true},(err,pyth)=>{
  pyth.selectAccount(1)
  pyth.addResponse(requestId,response).then((result)=>{
    console.log("TX:"+result.transactionHash)
    console.log(result.events.AddResponse.returnValues)
  })
});