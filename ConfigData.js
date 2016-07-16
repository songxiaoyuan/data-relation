var ConfigData = {
	CreateData:function(option_) {
		option_.legend = {
				        x: 'left',
				        data:['购买','现金购买','并购','股权转让','购买股权']
				    };
		option_.series = [
				        {
				            type:'force',
				            name : "投资关系",
				            ribbonType: false,
				            categories : [
				                {
				                    name: '公司'
				                },
				                {
				                    name: '购买'
				                },
				                {
				                    name: '现金购买'
				                },
				                {
				                    name: '并购'
				                },
				                {
				                    name: '股权转让'
				                },
				                {
				                    name:'购买股权'
				                }
				            ],
				            itemStyle: {
				                normal: {
				                    label: {
				                        show: true,
				                        textStyle: {
				                            color: '#333'
				                        }
				                    },
				                    nodeStyle : {
				                        brushType : 'both',
				                        borderColor : 'rgba(255,215,0,0.4)',
				                        borderWidth : 1
				                    },
				                    linkStyle: {
				                        type: 'curve'
				                    }
				                },
				                emphasis: {
				                    label: {
				                        show: false
				                    },
				                    nodeStyle : {
				                        //r: 30
				                    },
				                    linkStyle : {}
				                }
				            },
				            useWorker: false,
				            minRadius : 15,
				            maxRadius : 25,
				            gravity: 1.1,
				            scaling: 1.1,
				            roam: 'move',
				            nodes:[
				                {category:0, name: '工商银行', value : 10, label: '工商银行\n（公司）'},
				                {category:1, name: '青海华晟',value : 2},
				                {category:1, name: '洛阳鹏起实业有限公司',value : 3},
				                {category:2, name: '广东神奇医药有限公司',value : 3},
				                {category:2, name: '牡丹江市药品营销有限公司',value : 7},
				                {category:3, name: '安徽珍宝岛中药控股有限公司',value : 5},
				                {category:3, name: '南京云锦研究所有限公司',value : 8},
				                {category:4, name: '浙江盛大丰和汽车装备有限公司',value : 9},
				                {category:5, name: '新疆雪峰双兴商贸有限责任公司',value : 4},
				                {category:5, name: '江苏道博化工有限公司',value : 4},
				                {category:5, name: '重庆卓创国际工程设计有限公司',value : 1},
				            ],
				            links : [
				                {source : '青海华晟', target : '工商银行', weight : 1, name:'购买'},
				                {source : '洛阳鹏起实业有限公司', target : '工商银行', weight : 2, name: '购买'},
				                {source : '广东神奇医药有限公司', target : '工商银行', weight : 1, name: '现金购买'},
				                {source : '牡丹江市药品营销有限公司', target : '工商银行', weight : 2,name:'现金购买'},
				                {source : '安徽珍宝岛中药控股有限公司', target : '工商银行', weight : 3, name: '并购'},
				                {source : '南京云锦研究所有限公司', target : '工商银行', weight : 1,name:'并购'},
				                {source : '浙江盛大丰和汽车装备有限公司', target : '工商银行', weight : 6, name: '股权转让'},
				                {source : '新疆雪峰双兴商贸有限责任公司', target : '工商银行', weight : 1, name: '购买股权'},
				                {source : '江苏道博化工有限公司', target : '工商银行', weight : 1,name:'购买股权'},
				                {source : '重庆卓创国际工程设计有限公司', target : '工商银行', weight : 1,name:'购买股权'}
				            ]
				        }
				    ];
				    
		return option_;
	}
}