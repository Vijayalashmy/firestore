Installations
=============

Before getting started, here are some things you'll need to test out the app.

First, check to see if you have Node.js installed with:

`
$ node -v
`

If you see a version number, you're good to go. If not, install your appropriate Node.js version from:

http://nodejs.org/download/

Next we'll install Phonegap. This application will let us create a hybrid mobile application on iOS, but written in plain HTML, CSS, and Javascript. Install from the command line:

`
$ sudo npm install -g phonegap
`

Just an FYI, Phonegap was bought by Adobe, and before the acquisition was known as Cordova. We're actually going to install Cordova as well. They're the same application, but some commands still seem to require the "cordova" keyword while some use "phonegap." Install Cordova with:

`
$ sudo npm install -g cordova
`

Now, install iOS Simulator to see how your application is working with these two commands:

`
$ sudo npm install -g ios-sim
$ sudo npm install -g ios-deploy
`


Setup
=====

CD into the directory you'd like to clone this repository, then do so with:

`
$ git clone https://github.com/batmanbury/Phonegap-Weather-App.git
`

To correctly use geolocation services, which this app requires, install that plugin with:

`
$ cordova plugin add org.apache.cordova.geolocation
`


Testing it Out
==============

At this point, you should be able to open iOS Simulator and run the application. First you need to build the app. From within the project directory, run:

`
$ phonegap build ios
`

And then:

`
$ phonegap run ios
`

iOS Simulator should open and hopefully, you'll see the current temperature. If asked to allow location services, click "Allow." If an alert pops up that says "Could not locate you" you might need to change the default location in the iOS Simulator menu. Click "Debug" | "Location" followed by anything other than "None" or "Custom Location" such as "Apple."

Any changes you make will probably require restarting the app with `phonegap run ios`.


Helpful Tips
=============

This application pulls data from Forecast.io and requires an API key to function. The API key ('var APIKey' in index.js) may work for a while, but you should create your own. Go to [developer.forecast.io](https://developer.forecast.io) and click "Register." You can have your own key in moments, then replace the key in index.js.


For debugging, you have to use Safari. Open Safari and navigate to Safari | Preferences then click the checkbox for "Show Develop menu in menu bar." Now you should see the Develop tab in the menu bar, and see iOS Simulator inside. If iOS Simulator is open, you can select `index.html` and open a Safari console for debugging. If geolocation isn't working entering `location.reload();` may throw a useful error.


Phonegap documentation
======================
http://docs.phonegap.com/en/4.0.0/index.html