var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");
// const url = "https://api.hitbtc.com/api/2/public/currency/LTC";
// const fetch = require('node-fetch');

let array = [];
let interval = [60,300,900,1800];

router.get('/', function(req, res, next) {

  for(let i=0; i<=3; i++){
  let intervalTemporary = interval[i];
  fetch(`https://www.bitstamp.net/api/v2/ohlc/btcusd/?step=${intervalTemporary}&limit=1`)
    .then(res => res.json())
    .then(text => array[i] = Number(text.data.ohlc[0].volume).toFixed(2))
   }

   for(let i=4; i<=7; i++){
    let intervalTemporary = interval[i-4];
    fetch(`https://www.bitstamp.net/api/v2/ohlc/ethusd/?step=${intervalTemporary}&limit=1`)
      .then(res => res.json())
      .then(text => array[i] = Number(text.data.ohlc[0].volume).toFixed(2))
     }

     for(let i=8; i<=11; i++){
      let intervalTemporary = interval[i-8];
      fetch(`https://www.bitstamp.net/api/v2/ohlc/ltcusd/?step=${intervalTemporary}&limit=1`)
        .then(res => res.json())
        .then(text => array[i] = Number(text.data.ohlc[0].volume).toFixed(2))
       }

    res.send(array);

});



module.exports = router;
 