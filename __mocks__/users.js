const fs = require('fs')
const request = (url) => new Promise((resolve, reject) => {
    fs.readFile('../routes/api/__mockData__/testUser.json', 'utf-8', (err, data) => {
        if (err) reject(err)
        resolve({ entity: JSON.parse(data) })
    })
})
export default request