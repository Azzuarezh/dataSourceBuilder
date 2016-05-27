/*
This Library contain Drag and drop database function, 
table/view which dropped from left menu handled in this function
*/
$(function(){
	
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
        	var tableName = droppedObject.data('tableName');
        	var dbName = droppedObject.parent().parent().closest('ul').closest('li').data('dbName');        	

        }
   	})

})