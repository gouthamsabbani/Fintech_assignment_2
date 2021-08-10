getquandl()

const ibm ='https://www.quandl.com/api/v3/datasets/EOD/IBM?api_key=NjpuaTu54EmEmmCGhGSZ'
async function getquandl(){
  const response = await fetch(ibm)
  const data1 = await response.json()    

      document.getElementById('livedata').textContent=data1.dataset.data[0][1]
      console.log(data1.dataset.data[0][1])
    }

    const exxonmobil ='https://www.quandl.com/api/v3/datasets/EOD/XOM?api_key=D1_bDckeoHydbRmMx856'
    async function getquandl1(){
      const response = await fetch(exxonmobil)
      const data1 = await response.json()
      console.log(data1.dataset.data[0][1])

      document.getElementById('livedata1').textContent=data1.dataset.data[0][1]
      console.log(data1.dataset.data[0][1])
    }

    const jnj ='https://www.quandl.com/api/v3/datasets/EOD/JNJ?api_key=NjpuaTu54EmEmmCGhGSZ'
    async function getquandl2(){
      const response = await fetch(jnj)
      const data1 = await response.json()
      console.log(data1.dataset.data[0][1])

      document.getElementById('livedata2').textContent=data1.dataset.data[0][1]
      console.log(data1.dataset.data[0][1])
    }

    const pg ='https://www.quandl.com/api/v3/datasets/EOD/PG?api_key=NjpuaTu54EmEmmCGhGSZ'
    async function getquandl4(){
      const response = await fetch(pg)
      const data1 = await response.json()
      console.log(data1.dataset.data[0][1])

      document.getElementById('livedata3').textContent=data1.dataset.data[0][1]
      console.log(data1.dataset.data[0][1])
    }

    const mcd ='https://www.quandl.com/api/v3/datasets/EOD/MCD?api_key=NjpuaTu54EmEmmCGhGSZ'
    async function getquandl5(){
      const response = await fetch(pg)
      const data1 = await response.json()
      console.log(data1.dataset.data[0][1])

      document.getElementById('livedata4').textContent=data1.dataset.data[0][1]
      console.log(data1.dataset.data[0][1])
    }


    const bitcoin ='https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR&api_key=ad03ec9af829e8a78c9ec0629324bf5e453b8f2e19732650745c943220eabc96'
    async function getcrypto1(){
      const response = await fetch(bitcoin)
      const data1 = await response.json()

      document.getElementById('Bitcoindata').textContent=data1.BTC.USD
      console.log(data1.BTC.USD)
    }

    const eth ='https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR&api_key=ad03ec9af829e8a78c9ec0629324bf5e453b8f2e19732650745c943220eabc96'
    async function getcrypto2(){
      const response = await fetch(eth)
      const data1 = await response.json()

      document.getElementById('ETHdata').textContent=data1.ETH.USD
      console.log(data1.ETH.USD)
    }

    const avax='https://min-api.cryptocompare.com/data/pricemulti?fsyms=AVAX&tsyms=USD,EUR&api_key=ad03ec9af829e8a78c9ec0629324bf5e453b8f2e19732650745c943220eabc96"'
    async function getcrypto3(){
      const response = await fetch(avax)
      const data1 = await response.json()

      document.getElementById('AVAXdata').textContent=data1.AVAX.USD
      console.log(data1.AVAX.USD)

    }
    
    const XRP='https://min-api.cryptocompare.com/data/pricemulti?fsyms=XRP&tsyms=USD,EUR&api_key=ad03ec9af829e8a78c9ec0629324bf5e453b8f2e19732650745c943220eabc96"'
    async function getcrypto4(){
      const response = await fetch(XRP)
      const data1 = await response.json()

      document.getElementById('XRPdata').textContent=data1.XRP.USD
      console.log(data1.XRP.USD)

    }

    const bnb='https://min-api.cryptocompare.com/data/pricemulti?fsyms=BNB&tsyms=USD,EUR&api_key=ad03ec9af829e8a78c9ec0629324bf5e453b8f2e19732650745c943220eabc96"'
    async function getcrypto5(){
      const response = await fetch(bnb)
      const data1 = await response.json()

      document.getElementById('BNBdata').textContent=data1.BNB.USD
      console.log(data1.BNB.USD)

    }


    getquandl()
    getquandl1()
    getquandl2()
    getquandl4()
    getquandl5()
    getcrypto1()
    getcrypto2()
    getcrypto3()
    getcrypto4()
    getcrypto5()