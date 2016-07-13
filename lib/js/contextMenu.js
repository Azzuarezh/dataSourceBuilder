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
                			     }            	    		
                			},
                		"sum":{
                				name:"Sum", 
                				icon:function(){
	                					return 'context-menu-icon context-menu-icon-sum';
	            			    	}
	            				},
                		"avg":{
                            name:"Average",
                            icon: function(){
                                return 'context-menu-icon context-menu-icon-avg';
                                 }
                            },
                		"min":{
                            name:"Min",
                            icon : function(){
                                return 'context-menu-icon context-menu-icon-min';
                                }
                            },
                		"max":{
                            name:"Max",
                            icon : function(){
                                return 'context-menu-icon context-menu-icon-max';
                                }
                        }
            	    }
            	},               
                "scalar": {
                	name: "Scalar", 
                	icon:function(){
	                			return 'context-menu-icon context-menu-icon-scalar';
	                },
                	items:
                		{
	                		"ucase":{
                                    name:"Upper Case",
                                    icon:function(){
                                        return 'context-menu-icon context-menu-icon-ucase';
                                        }
                                },
	                		"lcase":{
                                    name:"Lower Case",
                                    icon:function(){
                                        return 'context-menu-icon context-menu-icon-lcase';
                                        }
                                },
	                		"mid":{
                                    name:"Mid",
                                    icon:function(){
                                        return 'context-menu-icon context-menu-icon-fnMid';
                                        }
                                },
	                		"len":{
	                				name:"Length of", 
	                				icon:function(){
	                			        return 'context-menu-icon context-menu-icon-len';
	                			        }
	                		},
	                		"round":{
                                    name:"Round",
                                    icon:function(){
                                        return 'context-menu-icon context-menu-icon-fnRound';
                                        }
                                },
	                		"now":{
                                    name:"Now",
                                    icon:function(){
                                        return 'context-menu-icon context-menu-icon-fnNow';
                                        }
                                },
	                		"format":{
                                    name:"Format",
                                    icon:function(){
                                        return 'context-menu-icon context-menu-icon-fnFormat';
                                        }
                            },
            	    	}
                },
                "type_cast" :{
                    name:"Type Casting",
                    icon:function(){
                        return 'context-menu-icon context-menu-icon-TypeCast';
                    }, 
                    items:{
                        "TBA": {name:"To Be Thought"}    
                    }                    
                }
            }
	})
$.contextMenu({
        selector:'div.plumbHeader',
        items:{
                        "Aliasing": {name:"Alias"}    
                    },
        callback: function(key, options) {
                    var selector = options.selector;
                    var objectIcon = $(selector).find('span.jsplumb-dbObject-icon').html();
                    var closeIcon = $(selector).find('span.jsplumb-close-icon').html();

                    var promptAlias=prompt("Type your Alias",$(selector).text());
                    if (promptAlias  && promptAlias != null){                    
                        var objectSpan = '<span class="jsplumb-dbObject-icon">'+objectIcon+'</span>';
                        var closeSpan = '<span class="jsplumb-close-icon">'+closeIcon+'</span>';                        
                        $(selector).html(objectSpan + promptAlias + closeSpan);

                        $(selector).parent('div.plumbTable').attr('data-alias',promptAlias);
                        console.log($(selector).parent('div.plumbTable').attr('data-alias'));
                    }
                } 
})
})