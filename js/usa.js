$(function() {
  var us_map = 'countries/us/us-all-all-highres';
  var us_data = [
    {
      'hc-key': 'us-la-117',
      'z': 20
    },
    {
      "hc-key": 'us-ca-037',
      'z': 25
    },
    {
      "hc-key": 'us-ca-075',
      'z': 20
    },
    {
      "hc-key": 'us-tx-113',
      'z': 50
    },
   {
      "hc-key": 'us-ny-061',
      'z': 50
   },
   {
    "hc-key": "us-tx-015",
    'z': 35
   }];

$('#container').highcharts('Map', {
   title: {
    text: "Top Cities In US"
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
    data: us_data,
    mapData: Highcharts.maps[us_map],
    joinBy: 'hc-key',
    allAreas: false,

    dataLabels: {
      enabled: false,
      format: '{point.name}'
    }
  },
  {
              name: 'Separators',
              type: 'mapline',
              data: Highcharts.geojson(Highcharts.maps[us_map], 'mapline'),
              color: 'silver',
              showInLegend: false,
              enableMouseTracking: false
  },
   {
                  type: 'mapbubble',
                  mapData: Highcharts.geojson(Highcharts.maps[us_map]),
                  name: 'Sojerns Inbound Impact',
                  joinBy: ['hc-key'],
                  data: us_data,
                  minSize: 4 ,
                  maxSize: '12%',
                  tooltip: {
                      pointFormat: '{point.name}: {point.z} '
                  }
              }]
});
});
