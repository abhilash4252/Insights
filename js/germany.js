$(function() {
  var uk_map = 'countries/de/de-all';
  var uk_data = [
    {
      'hc-key': 'de-be',
      'z': 20
    },
    {
      "hc-key": 'de-by',
      'z': 25
    },
    {
      "hc-key": 'de-sl',
      'z': 20
    },
    {
      "hc-key": 'de-hb',
      'z': 50
   }];

$('#container').highcharts('Map', {
   title: {
    text: "Top Cities In Germany"
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
    data: uk_data,
    mapData: Highcharts.maps[uk_map],
    joinBy: 'hc-key',
    allAreas: false,
    states: {
      hover: {
        color: '#BADA55'
      }
    },
    dataLabels: {
      enabled: false,
      format: '{point.name}'
    }
  },
  {
              name: 'Separators',
              type: 'mapline',
              data: Highcharts.geojson(Highcharts.maps[uk_map], 'mapline'),
              color: 'silver',
              showInLegend: false,
              enableMouseTracking: false
  },
   {
                  type: 'mapbubble',
                  mapData: Highcharts.geojson(Highcharts.maps[uk_map]),
                  name: 'Sojerns Inbound Impact',
                  joinBy: ['hc-key'],
                  data: uk_data,
                  minSize: 4 ,
                  maxSize: '12%',
                  tooltip: {
                      pointFormat: '{point.name}: {point.z} '
                  }
              }]
});
});
