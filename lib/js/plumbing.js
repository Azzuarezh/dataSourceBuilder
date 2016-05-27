jsPlumb.ready(function(){
		
		var instance = jsPlumb.getInstance({
			Container : 'mainContent',
			Connector :'Flowchart',			
			Anchor :['left','right']
		});

		instance.draggable('tbl_table_1');
		instance.draggable('tbl_table_2');
	

});//jsplumb ready
