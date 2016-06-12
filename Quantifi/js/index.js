var data  = {
  // A labels array that can contain any sort of values
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  // Our series array that contains series objects or in this case series data arrays
  series: [
    [2, 5, 3, 7, 9]
  ]
};

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object.
new Chartist.Line('#chart1', {
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
  series: [
    [1, 3, 7, 8, 10, 11,11, 14]
  ]
}, {
  low: 0,
  showArea: true
});
new Chartist.Line('#chart2', data);
new Chartist.Pie('#chart3', {
  series: [20.6, 10.1, 30.4, 40.2]
}, {
  donut: true,
  donutWidth: 40,
  startAngle: 270,
  total: 200,
  showLabel: false
});

$('#chart3').on('mouseover', 'path', function(e){
	var el = $(e.target)
	var val = el.attr('ct:value')
	var textEl = $('.num')
	textEl.text(val + " KB")
}).on('mouseout', function(e) {
	
	var val = "43.5 KB"
	var textEl = $('.num')
	textEl.text(val)
})