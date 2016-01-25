$(function() {
  var us_map = 'countries/us/us-all-all-highres';
  var us_data = [
    {
      "hc-key": 'us-fl-001',
      'z': 130
    },
    {
      "hc-key": 'us-mn-001',
      'z': 90
    },
    {
      "hc-key": 'us-ca-001',
      'z': 85
    },
    {
      "hc-key": 'us-md-001',
      'z': 70
    },
    {
      "hc-key": 'us-tx-001',
      'z': 70
    },
    {
      "hc-key": 'us-nc-001',
      'z': 70
    },
   {
      "hc-key": 'us-ny-001',
      'z': 60
   },
   {
      "hc-key": 'us-ny-009',
      'z': 40
   }
  ];

$('#container').highcharts('Map', {
   title: {
    text: "Top Cities In US"
  },
  chart: {
    animation: true,
    backgroundColor: "#ffffff",
    borderColor: "#ffffff"
  },

  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: 'button'
    }
  },

  colorAxis: {
    min: 0,
    max: 100
  },

  series: [{
    data: us_data,
    mapData: Highcharts.maps[us_map],
    joinBy: 'hc-key',
    allAreas: false,
    borderColor: "#ffffff",

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
                  color: "#4DAEE9",
                  tooltip: {
                      pointFormat: '{point.name}: {point.z} '
                  }
              }]
});
});
