
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

	 var newNode = function(resultId,type,resultColumns,x, y) {
        console.log('resultColumns is: ',resultColumns);
        var baseDiv = document.createElement("div");        
        baseDiv.className = "plumbTable";
        baseDiv.id = type + '_' + resultId;        
        baseDiv.style.left = x + "px";
        baseDiv.style.top = y + "px";

        var headerDiv = document.createElement("div");
        headerDiv.className="plumbHeader";
        headerDiv.innerHTML=resultId;

        var contentDiv = document.createElement("div");
        contentDiv.className="plumbColumns";        
        if(resultColumns.length > 0 && typeof(resultColumns) !='undefined'){        	
        	for (var i = 0; i < resultColumns.length; i++) {
        		var colDiv = document.createElement("div");
        		colDiv.className="plumbColumn";
        		colDiv.id=resultColumns[i];
        		$(colDiv).append('<span class="columnSpan">'+resultColumns[i]+'</span>')        		
        		$(contentDiv).append(colDiv.outerHTML);
        	};
        	console.log('the content is : ',contentDiv.outerHTML);
        }

        baseDiv.innerHTML = headerDiv.outerHTML + contentDiv.outerHTML;
        instance.getContainer().appendChild(baseDiv);        
        initNode(baseDiv);

        return baseDiv;
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