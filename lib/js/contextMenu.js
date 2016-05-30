$(document).ready(function(){
	
	$.contextMenu({
		selector:'div.plumbColumn',
		/*autoHide : true,*/
		items: {				
                "fn": {
                	name: "Function", icon: function(){
                    return 'context-menu-icon context-menu-icon-fn';
                	}
                	,disabled:true
                },
                "separator": "---------",
                "aggregate": {
                	name: "Aggregate", 
                	icon: function(){
                		return 'context-menu-icon context-menu-icon-aggregate';
                	}, 
                	items:{
                		"count":{
                			name:"Count",
                			icon: function(){
                				return 'context-menu-icon context-menu-icon-count';
                			},
            	    		callback: function(key, options) {                                        			
                    			alert(key) 
                				}
                			},
                		"sum":{
                				name:"Sum", 
                				icon:function(){
	                					return 'context-menu-icon context-menu-icon-sum';
	            			    	}
	            				},
                		"avg":{name:"Average"},
                		"min":{name:"Min"},
                		"max":{name:"Max"}
            	    }
            	},               
                "scalar": {
                	name: "Scalar", 
                	icon:function(){
	                			return 'context-menu-icon context-menu-icon-scalar';
	                },
                	items:
                		{
	                		"ucase":{name:"Upper Case"},
	                		"lcase":{name:"Lower Case"},
	                		"mid":{name:"Mid"},
	                		"len":{
	                				name:"Length of (Len)", 
	                				icon:function(){
	                			return 'context-menu-icon context-menu-icon-len';
	                			}
	                		},
	                		"round":{name:"Round"},
	                		"now":{name:"Now"},
	                		"format":{name:"Format"},
            	    	}
                }
            }
	})
})