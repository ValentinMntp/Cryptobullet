# Cryptobullet
A simple addon that send notifications about cryptocurrencies prices to your mobile

### First step : Install Pushbullet on your mobile phone and get an API key
This addon uses [Pushbullet](https://www.pushbullet.com/) to send you SMS on your mobile phone. In order to make it work,
install it from [Play Store](https://play.google.com/store/apps/details?id=com.pushbullet.android&hl=fr) or [Apple Store](https://itunes.apple.com/fr/app/pushbullet/id810352052?mt=8) on your phone and make an sign up on https://www.pushbullet.com


Once this done, you have to get an Access Token in order to use the Pushbullet API. Your access token can be found on the [Account Settings](https://www.pushbullet.com/#settings) page. Keep in mind that this key has full access to your account, so don't go posting it all over the internets.

### Second step : Install Cryptobullet
This is the easiest part ! just clone this repository on your computer and install dependencies

       git clone git@github.com:ValentinMntp/Cryptobullet.git
       cd Cryptobullet
       npm install

### Third step : Configure Cryptobullet
Go to the `config.js` file and enter the followings informations :


* PUSHBULLET_API_KEY : the token you get earlier that gives you access to the API.
*  'CONVERSATION_IDEN': Phone number to send the SMS to
*  'CURRENCY_FROM' : Money to check : 'BTC', 'ETH', etc.
*  'CURRENCY_TO' : Accepted values 'EUR', 'USD', 'BTC', 'ETH'
*  'LOW' : Infimum price value that you want to be aware of (ex: 2000)
*  'HIGH' : Supremum price value that you want to be aware of (ex: 5900)
* TARGET_DEVICE_IDEN : The iden of the device corresponding to the phone that should send the SMS.

Exemple :

      'PUSHBULLET_API_KEY': 'MyAccessToken',
      'TARGET_DEVICE_IDEN': 'ujpah72o0sjAoRtnM0jc',
      'CONVERSATION_IDEN': '+1 303 555 1212',
      'CURRENCY_FROM': 'ETH',
      'CURRENCY_TO' : 'EUR',
      'LOW' : 200,
      'HIGH' : 500

#### How to find TARGET_DEVICE_IDEN

Use the command line tool `curl` to find the iden corresponding to your mobile phone :

      curl --header 'Access-Token: o.oEffVq0ZOzVSk4OcZC0TlEXN1geq0lME' \    
        https://api.pushbullet.com/v2/devices


### Final step : Enjoy !

Finally, run the node server with the following command and leave him alone, he'll do the work for you :

      node app.js
