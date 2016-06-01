Mock.mock(/basic_branch.json/, 
				{
				name:'basic_branch',
				db:'Cronos',
				type:'table',
				column: ['id','branchName','city'
					/*{'name':'id',type:'int','isPrimary':true, 'length': 4},
					{'name':'branchName',type:'varchar', 'length': 50},
					{'name':'city',type:'varchar', 'length': 4}*/
				]
		});

Mock.mock(/basic_user.json/, 
				{				
				name:'basic_user',
				db:'Cronos',
				type:'table',
				column: ['id','userName','password'
					/*{'name':'id',type:'int','isPrimary':true, 'length': 4},
					{'name':'userName',type:'varchar', 'length': 4},
					{'name':'password',type:'varchar', 'length': 4}*/
				]
		});

Mock.mock(/view_user.json/, 
				{				
				name:'view_user',
				db:'Cronos',
				type:'view',
				column: ['id','userName','password'
					/*{'name':'id',type:'int','isPrimary':true, 'length': 4},
					{'name':'userName',type:'varchar', 'length': 4},
					{'name':'password',type:'varchar', 'length': 4}*/
				]
		});

Mock.mock(/view_branch.json/, 
				{				
				name:'view_user',
				db:'Cronos',
				type:'table',
				column: ['id','userName','password'
					/*{'name':'id',type:'int','isPrimary':true, 'length': 4},
					{'name':'userName',type:'varchar', 'length': 4},
					{'name':'password',type:'varchar', 'length': 4}*/
				]
		});

