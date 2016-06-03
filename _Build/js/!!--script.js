(function(){
    "use strict";

    FastClick.attach(document.body);

    var chestChart = createLine('#chart0');

    var globalStyle = {
    	colors: ['fill1', 'fill2', 'fill3'],
    	margin: {
    		right: 40,
    		bottom: 40
    	}
    };

    d3.json('media/chest.json', function (err, JSON) {
        if(!err){
            chestChart.width(d3.select('.delta').node().getBoundingClientRect().width).attr(JSON.attributes).attr(globalStyle).attr({plotValue: "weight"}).data(JSON.data).call(chestChart);
        }
    });
})();