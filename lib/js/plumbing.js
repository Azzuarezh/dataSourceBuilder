jsPlumb.ready(function(){
		
		var instance = jsPlumb.getInstance({
			Container : 'mainContent',
			Connector :'Flowchart',			
			Anchor :['left','right']
		});

		instance.makeSource('col_a',{
			filter:'span',
			endpoint:"Dot",
			isSource : true
		});
		instance.makeTarget('col_x',{
			filter:'span',
			endpoint:"Dot",
			isTarget: true
		});
		instance.draggable('tbl_table_1');
		instance.draggable('tbl_table_2');
	

});//jsplumb ready
