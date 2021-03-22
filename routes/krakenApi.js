var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

let array = [];
let interval = [1,5,15,30];

router.get('/', function(req, res, next) {

  for(let i=0; i<=3; i++){
  let intervalTemporary = interval[i];
  fetch(`https://api.kraken.com/0/public/OHLC?pair=xbtusd&interval=${intervalTemporary}`)
    .then(res => res.json())
    .then(text => array[i] = Number(text.result.XXBTZUSD[0][6]).toFixed(2))
   }

   for(let i=4; i<=7; i++){
    let intervalTemporary = interval[i-4];
    fetch(`https://api.kraken.com/0/public/OHLC?pair=ethusd&interval=${intervalTemporary}`)
    .then(res => res.json())
    .then(text => array[i] = Number(text.result.XETHZUSD[0][6]).toFixed(2))
   }

     for(let i=8; i<=11; i++){
      let intervalTemporary = interval[i-8];
      fetch(`https://api.kraken.com/0/public/OHLC?pair=ltcusd&interval=${intervalTemporary}`)
        .then(res => res.json())
        .then(text => array[i] = Number(text.result.XLTCZUSD[0][6]).toFixed(2))
       }

    res.send(array);

});



module.exports = router;
