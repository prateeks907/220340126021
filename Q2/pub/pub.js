var fs = require('fs').js  
var mqtt = require('mqtt')
const client = mqtt.connect('mqtt://3.110.196.82:1883/')

var dataFile

fs.readFile("./data.json", function(err, data) {
    if(err) {
        console.log("File does not exits!")
    }
    else {
        dataFile = data
    }
})


client.on("connect", function(res, err) {
    if(err) {
        console.log(err)
    } else {
        console.log("Successfully connected to broker")
        function pub() {
            client.publish("test", dataFile)
            console.log("Published")
        }
        setInterval(pub, 5000)
    }
})