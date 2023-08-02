const currencys = {
  'Bitcoin': 'btc',
  'Ethereum': 'eth',
  'Cardano': 'ada',
};

const annualProfit = {
  btc: 0.05,
  eth: 0.042,
  ada: 0.01,
};

const optionsAxios = {
  headers: {
    "Content-Type": "application/json"
  },
  body:{
    "assetKey": process.env.API_KEY
  }
};

const calculateAmounts = async function(data,amount) {

  const months = 12;

  const calculate = data.reduce((acc,ite)=>{
    const profit = annualProfit[ite.currency] ?? 1;
    const perYear = ((amount * profit) * months).toFixed(4);
    const calculateAmount = (amount / ite.typeChange).toFixed(4);

    acc.push({
      currency: ite.currency,
      investment: amount,
      calculateAmount,
      perYear
    })

    return acc

  },[])

  return calculate
}


module.exports = {
  currencys,
  optionsAxios,
  calculateAmounts
}