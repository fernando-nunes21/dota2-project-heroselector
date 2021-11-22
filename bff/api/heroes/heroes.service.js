const axios = require('axios')
exports.getAllHeroes = async function (params){
    const response = await axios('/heroes', {
        params: {
          limit: params.limit,
          offset: params.offset  
        },
        method: 'get',
        baseURL: 'http://localhost:8080/',
    }).catch((err) => {
        console.log(err)
    })
    return response
}