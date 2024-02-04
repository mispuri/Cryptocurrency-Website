const bitc = document.getElementById('bitcoin');
const ether = document.getElementById('ethereum');
const dogeco = document.getElementById('dogecoin');

const settings = {
  async: true,
  scrossDomain: true,
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd',
  method: 'GET',
  headers: {},
};

$.ajax(settings).done(function (response) {
  bitc.innerHTML = response.bitcoin.usd;
  ether.innerHTML = response.ethereum.usd;
  dogeco.innerHTML = response.dogecoin.usd;
});
