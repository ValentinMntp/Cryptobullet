var request = require('request');
var PushBullet = require('pushbullet');
var config = require('./config');

var pusher = new PushBullet(config.PUSHBULLET_API_KEY);

pusher.me(function(err, res) {

  setInterval(function(){
      request({url: 'https://min-api.cryptocompare.com/data/price?fsym='+config.CURRENCY_FROM+'&tsyms='+config.CURRENCY_TO, json: true}, function(err, res, data) {
        if (err) {
          throw err;
        }
        for (var key in data) {
          price = data[key];
        }
        if (price <= config.LOW || price >= config.HIGH ){
          var options = {
            source_user_iden: res.iden,              // The user iden of the user sending this message
            target_device_iden: config.TARGET_DEVICE_IDEN, // The iden of the device corresponding to the phone that should send the SMS
            conversation_iden: config.CONVERSATION_IDEN,       // Phone number to send the SMS to
            message: config.CURRENCY_FROM+' is at '+ price +' '+ config.CURRENCY_TO+', hurry up !'                           // The SMS message to send
          };
          pusher.sendSMS(options, function(error, response) {
            if (err) throw err;
          });
        }
      });
    },30000);
});
