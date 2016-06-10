
/*This Library contain Drag and drop database function, 
table/view which dropped from left menu handled in this function
*/
$(document).ready(function(){
	$('.tbl-treeview li, .view-treeview li').draggable({
        appendTo: "#mainContent",
        helper: "clone",
        cursor: 'move',
        refreshPositions: true,
        snap:true       
	});

    $('#mainContent').on('click','div.plumbColumn',function(){        
        $(this).toggleClass('jsplumb-highlight');
    })

    $('#mainContent').on('click','.jsplumb-close-icon',function(){        
        var c = confirm('really want to close this object?');
        if(c){            
            $(this).closest('.plumbTable').remove();
        }
    })

    jsPlumb.ready(function(){
        
        instance = jsPlumb.getInstance({
                Container : "mainContent",
                Endpoint: ["Dot", {radius: 2}],
                Connector:"Flowchart",
                HoverPaintStyle: {strokeStyle: "#1e8151", lineWidth: 2 },
                ConnectionOverlays: [
                    [ "Arrow", {
                        location: 1,
                        id: "arrow",
                        length: 5,
                        foldback: 0.2
                    } ]
                ],
         Container:'mainContent',
         ConnectionsDetachable:true
    })

        var initNode = function(el) {            
                instance.makeSource(el, {
                          filter:'.endPointDiv',
                          anchor:"Continuous",
                          uniqueEndpoint:true,
                          /*Connector : "Flowchart",*/
                          connectorStyle: { strokeStyle: "#050", lineWidth: 2}
                });

                instance.makeTarget(el, {
                        filter:'.endPointDiv',
                        dropOptions: { hoverClass: "dragHover" },
                        anchor: "Continuous",
                        uniqueEndpoint:true,
                        allowLoopback: false                
                });            
        };

        var initDraggable = function(el){
            // initialise draggable elements.            
            instance.draggable(el);
        }

        var newNode = function(resultId,type,resultColumns,x, y) {            
            var baseDiv = document.createElement("div");        
            baseDiv.className = "plumbTable";
            baseDiv.id = type + '_' + resultId;        
            baseDiv.style.left = x + "px";
            baseDiv.style.top = y + "px";
            var iconHeader = (type=='table')?'table' : 'eye';
            var headerDiv = document.createElement("div");
            headerDiv.className="plumbHeader";
            headerDiv.innerHTML='<span class="jsplumb-dbObject-icon"><i class="fa fa-'+iconHeader+'"></i></span>' + resultId +'<span class="jsplumb-close-icon"><i class="fa fa-times"></i></span>';

            var contentDiv = document.createElement("div");
            contentDiv.className="plumbColumns";        
            if(resultColumns.length > 0 && typeof(resultColumns) !='undefined'){            
                for (var i = 0; i < resultColumns.length; i++) {
                    var colDiv = document.createElement("div");
                    colDiv.className="plumbColumn";
                    colDiv.id=type+ '-' +resultId +'--'+resultColumns[i];
                    $(colDiv).append('<span class="endPointDiv endPointLeft">&#8226;</span>'+resultColumns[i]+'<span class="endPointDiv endPointRight">&#8226;</span>')                    
                    $(contentDiv).append(colDiv.outerHTML);

                    var col_id = $(colDiv).attr('id');
                    console.log(typeof(col_id));

                    instance.makeSource(col_id, {
                          filter:'.endPointDiv',
                          anchor:"Continuous",
                          uniqueEndpoint:true,
                          /*Connector : "Flowchart",*/
                          connectorStyle: { strokeStyle: "#050", lineWidth: 2}
                    });

                    instance.makeTarget(col_id, {
                        filter:'.endPointDiv',
                        dropOptions: { hoverClass: "dragHover" },
                        anchor: "Continuous",
                        uniqueEndpoint:true,
                        allowLoopback: false                
                    });
                };                
            }

            baseDiv.innerHTML = headerDiv.outerHTML + contentDiv.outerHTML;
            instance.getContainer().appendChild(baseDiv);        
            initDraggable(baseDiv)

            return baseDiv;
            };


        $( ".w2ui-panel-content" ).droppable({
        accept: ".tbl-treeview li, .view-treeview li",
        drop: function(event,ui){
            var droppedObject = ui.draggable;
            var tableName = 
                (droppedObject.data('tableName')!= null || typeof(droppedObject.data('tableName'))!= 'undefined')
                ? droppedObject.data('tableName').toLowerCase() :
                droppedObject.data('viewName').toLowerCase();            
            var dbName = droppedObject.parent().parent().closest('ul').closest('li').data('dbName');
            var tipe = (droppedObject.data('tableName')!= null || typeof(droppedObject.data('tableName'))!= 'undefined')
                ? 'table':'view';            
            $.ajax({
                url: tableName + '.json',
                dataType: 'json'                
            }).done(function(result){                
                newNode(tableName,tipe,result.column,event.offsetX,event.offsetY);    
            });
        }
    })


    })
})