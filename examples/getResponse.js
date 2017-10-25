if(!process.argv[2]){
  console.log("Please provide a response id.")
  process.exit(1)
}
let responseId = process.argv[2];

require("../pyth.js")({DEBUG: true},(err,pyth)=>{
  pyth.getResponse(responseId).then((response)=>{
    console.log(response)
  })
});