'use strict'; //emcsascript strict mode

(function($) {
    // module for our app logic
    window.app = (function(){
        var lat; // latitude
        var lng; // longitude

        var forecastURL = 'https://api.forecast.io/forecast/';

        // ca70e4a6b4a8d2196cb11407aca17c43/37.8267,-122.423

        var APIKey= 'ca70e4a6b4a8d2196cb11407aca17c43';

        var pub = {};

        // initialization
        pub.init = function init(){
            lat = null;
            lng = null;
        };

        // device is ready
        pub.ready = function ready(){
            navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
        };

        function geoSuccess(pos){
            lat = pos.coords.latitude;
            lng = pos.coords.longitude;

            checkAPI();
        }

        function checkAPI(){
            // build our API url
            var url = forecastURL + APIKey + '/' + lat + ',' + lng;

            var data = {
                units : 'us'
            };

            $.ajax({
                url : url,
                type : 'GET',
                data : data,
                dataType : 'jsonp'
            }).done(function(result){
                console.log(result);
                // https://api.forecast.io/forecast/ca70e4a6b4a8d2196cb11407aca17c43/37.8267,-122.423
                var temp = Math.round(result.currently.temperature);
                var high =Math.round(result.daily.data[0].temperatureMax);
                var low =Math.round(result.daily.data[0].temperatureMin);
                var weather = result.daily.data[0].summary;
                var feelsLike = Math.round(result.currently.apparentTemperature);
                var iconClass = result.daily.data[0].icon;

                var content = '<div class="page-header">' + 
                              '<h1>' + feelsLike + '&deg;</h1>' +
                              '</div>'
                ;

                $('#today').find('.panel-body').html(content);
                $('#today').fadeIn();
            });
        }

        function geoError(pos){
            alert('We could not locate you');
        }

        return pub;
    }());

    $(document).ready(function(){
        app.init();

        // http://docs.phonegap.com/en/4.0.0/cordova_events_events.md.html#deviceready
        document.addEventListener("deviceready", app.ready, false);
    });

})(window.jQuery);