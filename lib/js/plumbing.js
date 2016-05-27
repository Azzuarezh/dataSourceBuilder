jsPlumb.ready(function(){
		
		var instance = jsPlumb.getInstance({
			Container : 'mainContent',
			Connector :'Flowchart',			
			Anchor :['left','right']
		});

		instance.draggable('tbl_table_1');
		instance.draggable('tbl_table_2');

		instance.connect({
		  source:'col_a',
		  target:'col_y',		  
		  anchors:["Right", "Left"],
		  endpoint:[ "Dot", { width:1, height:1 } ]
		});
});//jsplumb ready
