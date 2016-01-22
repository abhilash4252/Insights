$(function() {
  var world_map = 'custom/world';
    var data = [
      {
        'hc-key': 'us',
        'value': 100
      },
      {
        'hc-key': 'ca',
        'value': 20
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
        'value': 48
      },
      {
        'hc-key': 'in',
        'value': 5
      },
      {
        'hc-key': 'my',
        'value': 86
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

  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: 'button'
    }
  },

  colorAxis: {
    min: 0
  },

  series: [{
    name: 'Top Countries',
    animation: true,
    data: data,
    mapData: Highcharts.maps[world_map],
    joinBy: 'hc-key',
    allowPointSelect: true,
    cursor: 'pointer',
    events: {
      click: function (e) {
        e.point.zoomTo();
      }
    },
    states: {
      hover: {
        color: '#BADA55'
      }
    },

    dataLabels: {
      enabled: false,
      format: '{point.name}'
    }
  }]
});
$(window).load(function () {
  setTimeout( function () {
    $('#container').highcharts().series[0].points[0].zoomTo();
  }, 1500);
});
});
