
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

    $('div.plumbColumn').on('click',function(){        
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
            Container:'mainContent',
            Connector:"Flowchart",
            HoverPaintStyle: {strokeStyle: "#1e8151", lineWidth: 2 },
            Anchor:['Left','Right']
        });

        var initNode = function(el) {
        // initialise draggable elements.
            instance.draggable(el);            
            instance.makeSource(el, {
                filter: "span.columnSpan",
                anchor: ["Left","Right"],
                connectorStyle: { strokeStyle: "#5c96bc", lineWidth: 2, outlineColor: "transparent", outlineWidth: 4 },
                connectionType:"basic"              
            });

            instance.makeTarget(el, {
                dropOptions: { hoverClass: "dragHover" },
                anchor: ["Left","Right"],
                allowLoopback: false
            });


        };

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


        $( ".w2ui-panel-content" ).droppable({
        accept: ".tbl-treeview li, .view-treeview li",
        drop: function(event,ui){
            var droppedObject = ui.draggable;
            var tableName = 
                (droppedObject.data('tableName')!= null || typeof(droppedObject.data('tableName'))!= 'undefined')
                ? droppedObject.data('tableName').toLowerCase() :
                droppedObject.data('viewName').toLowerCase();
            console.log(tableName);
            var dbName = droppedObject.parent().parent().closest('ul').closest('li').data('dbName');
            var tipe = (droppedObject.data('tableName')!= null || typeof(droppedObject.data('tableName'))!= 'undefined')
                ? 'table':'view';
            console.log(tipe);
            $.ajax({
                url: tableName + '.json',
                dataType: 'json'                
            }).done(function(result){
                console.log(result);                    
                console.log(newNode(tableName,tipe,result.column,event.offsetX,event.offsetY));     
            });
        }
    })


    })
})