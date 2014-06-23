var configs = {

	'a': {

		name: 'Stock - Area',
		link: 'http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?',
		type: 'StockChart',
		param: {
     		 rangeSelector : {
       		 inputEnabled: $('#container').width() > 480,
        	 selected : 1
     		 },
      		title : { text : 'AAPL Stock Price'},
      		series : [{
        		name : 'AAPL Stock Price',
        		type : 'area',
        		threshold : null,
        		tooltip : { valueDecimals : 2},
        		fillColor : {
          		linearGradient : {
            		x1: 0, 
           		 	y1: 0, 
            		x2: 0, 
            		y2: 1
          		},
          		stops : [
            		[0, Highcharts.getOptions().colors[0]], 
            		[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          		]
        		}
     	 	}]
		}
	},
	'b': {
    name: 'Stock - Column',
    link: 'http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-v.json&callback=?',
    type: 'StockChart',
    param: {
        chart: { alignTicks: false},
        rangeSelector: {
        inputEnabled: $('#container').width() > 480, selected: 1},
        title: { text: 'AAPL Stock Volume'},
        series: [{
            type: 'column',
            name: 'AAPL Stock Volume',
            dataGrouping: {
          units: [[
            'week', // unit name
            [1] // allowed multiples
          ], [
            'month',
            [1, 2, 3, 4, 6]
          ]]
            }
        }]
    }
  }, 'c': {
    name: 'Stock - Spline',
    link: 'http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?',
    type: 'StockChart',
    param: {
        rangeSelector: {
        inputEnabled: $('#container').width() > 480, selected: 1 },
        title: { text: 'AAPL Stock Price' },
        series: [{
            name: 'AAPL Stock Price',
            type: 'spline',
            tooltip: { valueDecimals: 2}
        }]
    }
  }

}