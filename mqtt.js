var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt:broker.hivemq.com');

var topic= 'Lalaloli'
var message = 'Book bn gya '

client.on('connect', () =>{
    setInterval(()=>{
        client.publish(topic, message)
        console.log('Message sent !')
    } , 5000)
})