const axios = require('axios')

const getPage = async () => {
  //return axios.get('https://capi.honestbee.com/faq/api/categories')
  return axios.get('http://localhost:8088/faq/api/categories')
}

const main = async () => {
  while (true) {
    let proms = []
    while (proms.length < 20) {
      proms.push(getPage())
    }
    const values = await Promise.all(proms)
    for (const resp of values) {
      console.log(resp.status)
    }
  }
}
main()

