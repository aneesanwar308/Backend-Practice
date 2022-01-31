const https = require("https")

https.get("https://reqres.in/api/products/3", res => {
    let apiData;
    res.on("data", data => {
        apiData = data
    })
    res.on("end", () => {
        console.log(apiData.toString())
    })
}).on("error", err => {
    console.log(err.message)
})