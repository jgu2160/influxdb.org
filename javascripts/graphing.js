!function(){$(function(){return $("button#visualize").on("click",function(){var t;return t=new InfluxDB("sandbox.influxdb.org",9061,"todd","password","tp-tweets1"),t.query("SELECT COUNT(message) FROM posts WHERE time > now() - 365d GROUP BY time(24h);",function(t){var e,n,r,i;return e=t.map(function(t){return{x:Math.floor(t.time/1e3),y:t.count}}).reverse(),n=new Rickshaw.Graph({element:document.querySelector("#chart"),width:720,height:240,renderer:"line",series:[{data:e,color:"steelblue"}]}),r=new Rickshaw.Graph.Axis.Time({graph:n}),i=new Rickshaw.Graph.Axis.Y({graph:n,ticks:5}),r.render(),i.render(),n.render()})})})}.call(this);