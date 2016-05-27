$(document).ready(function(){	
	jsPlumb.ready(function(){
		var instance = jsPlumb.getInstance({
		Container : 'mainContent',
		Connector :"Flowchart",
		ConnectionsDetachable:true,		
		Anchor :['left','right']
		})

	
	//make source
	instance.addEndpoint("col_a", {
			  endpoint:"Rectangle",
			  paintStyle:{ width:25, height:21, fillStyle:'#666' },
			  isSource:true,
			  connectorStyle : { strokeStyle:"#666" },
			  isTarget:true
			}
		);
	instance.addEndpoint("col_x", {
			  endpoint:"Rectangle",
			  paintStyle:{ width:25, height:21, fillStyle:'#666' },
			  isSource:true,
			  connectorStyle : { strokeStyle:"#666" },
			  isTarget:true
			}
		);



	instance.draggable('tbl_table_1');
	instance.draggable('tbl_table_2');	
	})//jsplumb ready
})//document ready