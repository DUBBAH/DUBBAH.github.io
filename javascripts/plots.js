
//How to do python plotly offline and convert to static graphs
// https://stackoverflow.com/questions/36262748/python-save-plotly-plot-to-local-file-and-insert-into-html
// Then convert json to javascript graphs: https://community.plot.ly/t/pass-json-string-directly-to-plotly/1925

//How to do interactive plotting in javascript using plotly.js
// https://plot.ly/javascript/




var myJson = '{"data": [{"marker": {"color": "#5A5A5A"}, "x": ["Turning system", "Toilet seat inserts", "Shower stool", "Toilet seat inserts <br> and shower stool", "Rollator"], "y": ["13", "15", "20", "27", "29"], "type": "bar", "uid": "10fd3310-6e97-4e9b-8f30-a9cc51dcaf59"}], "layout": {"title": "The percentage Increase in Self-reliance", "titlefont": {"color": "#1f1f1f", "size": 18}, "yaxis": {"title": "%"}}}';
var figure = JSON.parse(myJson);
Plotly.plot('graph',figure.data, figure.layout);
