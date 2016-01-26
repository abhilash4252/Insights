$(function() {
  var world_map = 'custom/world';
    var data = [
      {
        'hc-key': 'us',
        'value': 100
      },
      {
        'hc-key': 'gb',
        'value': 50
      },
      {
        'hc-key': 'de',
        'value': 30
      },
      {
        'hc-key': 'tr',
        'value': 25
      },
      {
        'hc-key': 'my',
        'value': 15
      },
      {
        'hc-key': 'br',
        'value': 10
      }
    ];

$('#container').highcharts('Map', {
   title: {
    text: "Top Countries"
  },

  chart: {
    animation: true,
    backgroundColor: "#ffffff",
    borderColor: "#000000"
  },

  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: 'button'
    }
  },
  colorAxis: {
      min: 1,
      max: 100,
      type: 'logarithmic',
      minColor: '#151515',
      maxColor: '#2B87F2'
  },

  series: [{
    nullColor: "#ffffff",
    borderColor: "#000000",
    name: 'Top Countries',
    animation: true,
    data: data,
    mapData: Highcharts.maps[world_map],
    joinBy: 'hc-key',
    allowPointSelect: true,
    cursor: 'pointer',
    states: {
      hover: {
        color: '#ff6600'
      }
    },

    dataLabels: {
      enabled: false,
      format: '{point.name}'
    }
  }]
});
$(window).load(function () {
  $('#container').highcharts().series[0].points[0].zoomTo();
});
});
