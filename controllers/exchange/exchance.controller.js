const { 
  calculateAmounts
} = require('./exchange-rate-helper');

const axios = require('axios');

const getExchangeRate = async  function(req, res){
  const selectCurrency = req.body.currencys;
  const amount = req.body.amount;
  const returnedObj = [];

  if(selectCurrency.length > 0){
    await Promise.all(
      selectCurrency.map( async (curr)=>{
        const url = `https://data.messari.io/api/v1/assets/${curr}/metrics`;
        try{
          const res = await axios({
            url,
            method: 'get',
            headers: {
              "Content-Type": "application/json"
            },
            body:{
              "assetKey": process.env.API_KEY
            }
          });
          data = res.data.data.market_data;
          returnedObj.push({
            currency: curr,
            typeChange: data.price_usd
          })
        }
        catch(err){
          return res
            .status(405)
            .json(err)
        }
      })
    )
  }
  else {
    return res
      .status(400)
      .json({message: "Debes enviar al menos una moneda"})
  }
  const finalData = await calculateAmounts(returnedObj, amount)


  return res
    .status(200)
    .json(finalData)
}

module.exports ={
  getExchangeRate
}