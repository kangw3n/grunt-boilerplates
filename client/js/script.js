/*---------kangw3n 2015-----------*/
require.config({
  baseUrl: 'lib',
  paths: {
    jQuery: '../../lib/jquery/dist/jquery.min',
    Weather: '../../lib/jquery-simpleweather/jquery.simpleWeather.min',
    Moment: '../../lib/moment/moment'
  },

  shim: {
    jQuery: {
      exports: 'jQuery'
    },
    Weather: {
      deps: ['jQuery'],
      exports: 'weather'
    },
    Moment: {
      deps: ['jQuery'],
      exports: 'moment'
    }

  },

  waitSeconds: 20

});

require(
  ['jQuery', 'Weather', 'Moment'],
  function($, weather, moment) {
    $.simpleWeather({
      location: 'Taiwan',
      unit: 'c',
      success: function(weather) {
        html = '<h2><i class="icon-' + weather.code + '"></i> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
        html += '<ul><li>' + weather.city + ', ' + weather.region + '</li>';
        html += '<li class="currently">' + weather.currently + '</li>';
        html += '<li>' + weather.wind.direction + ' ' + weather.wind.speed + ' ' + weather.units.speed + '</li></ul>';
        $('#weather').html(html);
      },

      error: function(error) {
        $('#weather').html('<p>' + error + '</p>');
      }
    });

    $('#info').html('I was there ' + moment('20010101', 'YYYYMMDD').fromNow());
  }

);
