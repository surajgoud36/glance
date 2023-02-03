const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get("/add/:first/and/:second",(req,res)=>{
  console.log(req.params.first + req.params.second);
  let firstNum=parseInt(req.params.first),
  secondNum=parseInt(req.params.second),
  pj=firstNum+secondNum;
  console.log(pj);
  res.json({"addResult":pj});
});

app.listen(3001, () => {
    console.log("SERVER RUNS PERFECTLY!");
  });
  