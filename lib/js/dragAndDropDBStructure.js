
/*This Library contain Drag and drop database function, 
table/view which dropped from left menu handled in this function
*/
$(document).ready(function(){

	//define instance jsplumb
	var instance = jsPlumb.getInstance({
			Container : 'mainContent',
			Connector :'Flowchart',			
			Anchor :['left','right']
		});
	
	$('.tbl-treeview li, .view-treeview li').draggable({
        appendTo: "#mainContent",
        helper: "clone",
        cursor: 'move',
        refreshPositions: true,
        snap:true       
	});

	 $( ".w2ui-panel-content" ).droppable({
    	accept: ".tbl-treeview li, .view-treeview li",
        drop: function(event,ui){
        	var droppedObject = ui.draggable;
        	var tableName = droppedObject.data('tableName').toLowerCase();
        	var dbName = droppedObject.parent().parent().closest('ul').closest('li').data('dbName');     		       				  	
       		$.ajax({
       			url: tableName + '.json',
       			dataType: 'json'       			
       		}).done(function(result){ 
       			console.log('result',result);
       			console.log(newNode(tableName,'tbl',result.column,event.offsetX,event.offsetY)); 	
       		});
        }
   	})


 	var initNode = function(el) {
        // initialise draggable elements.
        instance.draggable(el);       
    };

	 var newNode = function(id,type,columns,x, y) {
	 	console.log(x,y);
        var base = document.createElement("div");        
        base.className = "plumbTable";
        base.id = type + '_'+ id;        
        base.style.left = x + "px";
        base.style.top = y + "px";

		var header = document.createElement("div");
		header.innerHTML = id;
		
		var body = document.createElement('div');
		body.className = 'plumbColumns';
		console.log(body);
		if(columns.length >0 && typeof(columns) != 'undefined'){
			console.log('column exist!');
			for (var i = columns.length - 1; i >= 0; i--) {
				var column = document.createElement('div');
				column.className= 'plumbColumn';
				column.id=columns[i];
				$(column).append('<span class="columnSpan">'+column.id+'</span>')				
				$(body).append($(column));
			};

		}	
		console.log('wew',$(body).html());	
		$(base).html($(header).html() + $(body).html());
        instance.getContainer().appendChild(base);
        initNode(base);
        return base;
    };

   



})



/*<div class="plumbTable" id="tbl_table_1">
		<div class="plumbHeader">Table_1</div>		
		<div class="plumbColumns">
			<div class="plumbColumn" id="col_a">
				<span class="columnSpan">col_a</span>
			</div>			
			<div class="plumbColumn" id="col_b">
				<span class="columnSpan">col_b</span>
			</div>
		</div>
	</div>*/