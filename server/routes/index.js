var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/adding/:fnum/and/:snum', (req,res)=>{
  const {fnum,snum} = req.params
  const output_sum= parseInt(fnum) +parseInt(snum);
  //printing the sum for tetsiing purpose.
  console.log(output_sum);
  res.send({"result": output_sum});
  
});

module.exports = router;