if(!process.argv[2]){
  console.log("Please provide a request id.")
  process.exit(1)
}
let requestId = process.argv[2];

require("../pyth.js")({DEBUG: true},(err,pyth)=>{
  pyth.getRequest(requestId).then((request)=>{
    console.log(request)
  })
});
