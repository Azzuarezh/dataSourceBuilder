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
        	console.log('dropped :', ui.draggable);
        	alert('dropped!');        	
        }
   	})

})