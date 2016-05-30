jsPlumb.ready(function(){
		
		var instance = jsPlumb.getInstance({
			Container : 'mainContent',
			Connector :'Flowchart',			
			Anchor :['left','right']
		});
		
		jsPlumb.makeSource("col_a", {
		  anchor:"Continuous",
		  endpoint:["Rectangle", { width:40, height:20 }],
		  maxConnections:3
		}); 

		instance.makeTarget('col_x',{
			filter:'span',
			endpoint:"Dot",
			isTarget: true
		});
		instance.draggable('tbl_table_1');
		instance.draggable('tbl_table_2');
});//jsplumb ready
