/*this file provide handle
sql object function
like aliasing table/column/view count, max, min, average column and etc
*/
function sqlFunction (key,options){
	var selector = options.$trigger[0];
	console.log('keyyynya: ', key);		
	var colName = ($(selector).data('columnAlias') !=null && 
		$(selector).data('columnAlias') !='' && 
		typeof($(selector).data('columnAlias')) != 'undefined')
		?
		$(selector).data('columnAlias'):$(selector).data('columnName');	
		console.log('col name nya (entah asli ato alias): ', colName)	
	$(selector).data('columnFunction',key);		
	var endPointLeft = '<span class="endPointDiv endPointLeft">&#8226;</span>';
	var endPointRight = '<span class="endPointDiv endPointRight">&#8226;</span>';
	/*$(selector).html(endPointLeft + key +'(' +colName + ')' + endPointRight);*/
	if(key =='colAlias')return endPointLeft + colName + endPointRight;	else	
	return endPointLeft + key +'(' +colName + ')' + endPointRight;			
}

function aliasingFunction(key,options){
	var selector = options.$trigger[0];	
    var objectIcon = $(selector).find('span.jsplumb-dbObject-icon').html();
    var closeIcon = $(selector).find('span.jsplumb-close-icon').html();    
    var parentSelector = $(selector).parent('div.plumbTable');//.data('tableName');
    var promptAlias ={};       
    if(key == 'objectAlias'){
    		//for object model (table/view name)    
    		promptAlias = prompt("Type your Alias",$(selector).text());
    		if (promptAlias  && promptAlias != null){
    		//check wheter aliasing is object or column
	    		var objectSpan = '<span class="jsplumb-dbObject-icon">'+objectIcon+'</span>';
			    var closeSpan = '<span class="jsplumb-close-icon">'+closeIcon+'</span>';                        
			    $(selector).html(objectSpan + promptAlias + closeSpan);
			    parentSelector.attr('data-alias',promptAlias);
    		}
		                		
	    }else if(key == 'colAlias'){ 
	    	//for object model (table/view name)    	    	
	    	promptAlias = prompt("Type your Alias",$(selector).data('columnName'));	   
	    	if (promptAlias  && promptAlias != null){
	    		console.log('promptAlias: ', promptAlias);
	    		var colFunction = $(selector).data('columnFunction');
	    		console.log(colFunction)
	    		var colAlias = promptAlias;
	    		var colName = $(selector).data('columnName');	    			    		    			    		
	    		$(selector).attr('data-column-alias',colAlias);	    		
	    		$(selector).html(sqlFunction(key,options))//showing in the table
	    		console.log('fanksyon :',sqlFunction(colFunction,options));
	    		$(selector).popover({title:'original field:','content':sqlFunction(colFunction,options)})

	    	}
	    }
}