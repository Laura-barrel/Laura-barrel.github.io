//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/index_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_598","HYPE_dtl_598",!0==(null!=a&&10>a||false==!0)?"HYPE-598.full.min.js":"HYPE-598.thin.min.js"),false==!0&&(a=a||l("HYPE_w_598","HYPE_wdtl_598","HYPE-598.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"untitledFunction",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menu');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menuDelta = 100;\n\t\tvar menuFadeOut = 9000;\n\n\t\tif (scroll > menuDelta){\n\t\t\tmenu.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menuDelta){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menuFadeOut){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n\n}",identifier:"11"},{name:"untitledFunction2",source:"function(hypeDocument, element, event) {\t\n\t\t\n\tmenu = hypeDocument.getElementById('menub');\n\tPDPsidebar = hypeDocument.getElementById('PDPsidebar');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menubDelta = 1500;\n\t\tvar menubFadeOut = 14000;\n\n\t\tif (scroll > menubDelta){\n\t\t\tmenub.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menubDelta){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menubFadeOut){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t\t\n\t\t\n\t\tvar scroll3 = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n        \n        var menuDelta3 = 200;\n        var menuRelease = 1200;\n\n        if (scroll3 > menuDelta3){\n            PDPsidebar.classList.add('sticky3')\n        }\n        if (scroll3 <= menuDelta3){\n            PDPsidebar.classList.remove('sticky3')\n            PDPsidebar.classList.remove('stickyRelease')\n        }\n        \n        if (scroll3 <= menuRelease){\n            PDPsidebar.classList.remove('stickyRelease')\n        }\n        \n        if (scroll3 > menuRelease){\n            PDPsidebar.classList.remove('sticky3')\n            PDPsidebar.classList.add('stickyRelease')\n        }\n\n\t};\t\n}",identifier:"186"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_598(c,e,{"-2":{n:"blank.gif"},"18":{p:1,n:"PDP.jpg",g:"1221",o:true,t:"@1x"},"10":{p:1,n:"Navigation%20Hover.jpg",g:"1225",o:true,t:"@1x"},"19":{p:1,n:"PDP_2x.jpg",g:"1221",o:true,t:"@2x"},"11":{p:1,n:"Navigation%20Hover_2x.jpg",g:"1225",o:true,t:"@2x"},"0":{p:1,n:"Chocolate%20Hover%20Arrow.jpg",g:"1124",o:true,t:"@1x"},"12":{p:1,n:"Product%20Card%20Hover.png",g:"1226",o:true,t:"@1x"},"1":{p:1,n:"Chocolate%20Hover%20Arrow_2x.jpg",g:"1124",o:true,t:"@2x"},"2":{p:1,n:"Chocolate%20Hover.jpg",g:"1123",o:true,t:"@1x"},"13":{p:1,n:"Product%20Card%20Hover_2x.png",g:"1226",o:true,t:"@2x"},"3":{p:1,n:"Chocolate%20Hover_2x.jpg",g:"1123",o:true,t:"@2x"},"14":{p:1,n:"Homepage.jpg",g:"1220",o:true,t:"@1x"},"4":{p:1,n:"Homepage%20Sticky%20Nav.jpg",g:"1219",o:true,t:"@1x"},"5":{p:1,n:"Homepage%20Sticky%20Nav_2x.jpg",g:"1219",o:true,t:"@2x"},"15":{p:1,n:"Homepage_2x.jpg",g:"1220",o:true,t:"@2x"},"6":{p:1,n:"PDP%20Sticky%20Nav.jpg",g:"1222",o:true,t:"@1x"},"16":{p:1,n:"sticky%20panel.jpg",g:"1229",o:true,t:"@1x"},"7":{p:1,n:"PDP%20Sticky%20Nav_2x.jpg",g:"1222",o:true,t:"@2x"},"-1":{n:"PIE.htc"},"8":{p:1,n:"Navigation%20Arrow.jpg",g:"1223",o:true,t:"@1x"},"17":{p:1,n:"sticky%20panel_2x.jpg",g:"1229",o:true,t:"@2x"},"9":{p:1,n:"Navigation%20Arrow_2x.jpg",g:"1223",o:true,t:"@2x"}},h,[],d,[{n:"Homepage",o:"1",X:[0]},{n:"PDP",o:"245",X:[1]}],[{A:{a:[{p:4,h:"11"}]},o:"3",p:"600px",cA:false,Y:1440,Z:5592,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"1079":{i:"1079",n:"Nav Hover",z:0.04,b:[],a:[{f:"c",y:0,z:0.04,i:"e",e:1,s:0,o:"1243"},{f:"c",y:0,z:0.04,i:"e",e:1,s:0,o:"1244"},{y:0.04,i:"e",s:1,z:0,o:"1243",f:"c"},{y:0.04,i:"e",s:1,z:0,o:"1244",f:"c"}],f:30},"1129":{i:"1129",n:"Product Card Hover",z:0.06,b:[],a:[{f:"c",y:0,z:0.06,i:"e",e:1,s:0,o:"1232"},{y:0.06,i:"e",s:1,z:0,o:"1232",f:"w"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30},"1083":{i:"1083",n:"Button Hover",z:0,b:[],a:[],f:30}},bZ:180,O:["1240","1238","1235","1236","1237","1239","1234","1241","1244","1242","1243","1232","1233","1231"],n:"Untitled Layout","_":0,v:{"1237":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"1235",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"1233":{c:485,d:691,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"1231",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:3,P:0,D:"#D8DDE4",aC:{a:[{b:"1129",p:3,z:true,symbolOid:"2"}]},a:2,aD:{a:[{b:"1129",p:3,z:false,symbolOid:"2"}]},b:-3},"1243":{h:"1225",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:92,j:"absolute",dB:"img",z:1,k:"div",bF:"1241",d:276,c:1440,r:"inline",e:0},"1242":{c:121,d:26,I:"None",J:"None",K:"None",L:"None",M:0,N:0,bF:"1241",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:3,P:0,D:"#D8DDE4",aC:{a:[{b:"1079",p:3,z:true,symbolOid:"2"}]},a:301,aD:{a:[{b:"1079",p:3,z:false,symbolOid:"2"}]},b:40},"1232":{h:"1226",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:-19,j:"absolute",dB:"img",z:2,k:"div",bF:"1231",d:797,c:501,cQ:1,e:0,r:"inline",cR:1},"1236":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"1235",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"1239":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"1235",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"245"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"PDP",x:"visible",I:"None",a:726,y:"preserve",J:"None"},"1241":{x:"visible",k:"div",c:1440,d:452,z:127,a:0,aP:"pointer",j:"absolute",b:84},"1231":{x:"visible",k:"div",c:481,d:684,z:2,e:1,a:0,j:"absolute",b:1064},"1235":{x:"visible",k:"div",c:1440,d:40,z:138,e:1,a:0,j:"absolute",b:0},"1238":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"1235",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"1240":{h:"1219",p:"no-repeat",x:"visible",i:"menu",q:"100% 100%",b:-146,a:0,j:"absolute",z:140,k:"div",dB:"img",d:79,c:1440,r:"inline",aP:"pointer"},"1234":{w:"",h:"1220",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:1,k:"div",c:1441,d:5554,r:"inline",cQ:1,cR:1},"1244":{h:"1223",p:"no-repeat",x:"visible",a:393,q:"100% 100%",b:25,dB:"img",cY:"0",z:2,j:"absolute",k:"div",d:59,bF:"1241",cQ:0.5,e:0,c:38,r:"inline",cR:0.5}}},{A:{a:[{p:4,h:"186"}]},o:"282",p:"600px",cA:false,Y:1440,Z:5614,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"1163":{i:"1163",n:"Product Carousel",z:0,b:[],a:[],f:30},"1149":{i:"1149",n:"Nav Hover",z:0.04,b:[],a:[{f:"c",y:0,z:0.04,i:"e",e:1,s:0,o:"1246"},{f:"c",y:0,z:0,i:"e",e:0,s:0,o:"1247"},{f:"c",y:0,z:0,i:"e",e:0,s:0,o:"1247"},{f:"c",y:0,z:0.04,i:"e",e:1,s:0,o:"1247"},{y:0.04,i:"e",s:1,z:0,o:"1246",f:"c"},{y:0.04,i:"e",s:1,z:0,o:"1247",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30},"763":{i:"763",n:"Video Expanded",z:0,b:[],a:[],f:30},"1160":{i:"1160",n:"Product Carousel Hover",z:0,b:[],a:[],f:30}},bZ:180,O:["1256","1255","1253","1249","1254","1251","1252","1257","1250","1245","1248","1247","1246"],n:"Untitled Layout","_":1,v:{"1253":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"1249",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"1247":{h:"1124",p:"no-repeat",x:"visible",a:423,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"1245",d:26,c:38,cQ:0.5,e:0,r:"inline",cR:0.5},"1256":{h:"1229",p:"no-repeat",x:"visible",a:719,q:"100% 100%",b:-234,j:"absolute",dB:"img",z:18,k:"div",i:"PDPsidebar",d:1640,c:962,cQ:0.5,r:"inline",cR:0.5},"1252":{b:7,z:9,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"1249",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"245"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"PDP<br>",x:"visible",I:"None",a:726,y:"preserve",J:"None"},"1246":{h:"1123",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:51,j:"absolute",dB:"img",z:2,k:"div",bF:"1245",d:378,c:1440,r:"inline",e:0},"1255":{w:"",h:"1222",p:"no-repeat",x:"visible",i:"menub",q:"100% 100%",b:-180,a:0,j:"absolute",z:19,k:"div",dB:"img",d:60,c:1440,r:"inline"},"1251":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"1249",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"1245":{k:"div",x:"visible",c:1440,d:429,z:20,a:0,j:"absolute",b:109},"1249":{x:"visible",k:"div",c:1440,d:40,z:12,e:1,a:0,j:"absolute",b:0},"1254":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"1249",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"1248":{c:100,d:33,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"1245",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:3,P:0,D:"#D8DDE4",aC:{a:[{b:"1149",p:3,z:true,symbolOid:"246"}]},a:350,aD:{a:[{b:"1149",p:3,z:false,symbolOid:"246"}]},b:0},"1250":{c:177,d:78,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"1249",A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:7,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:51,b:97},"1257":{w:"",h:"1221",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:1,k:"div",c:1440,d:5576,r:"inline",cQ:1,cR:1}}}],{},g,{w:[[0,0,0.77,0,0.175,1,1,1]]},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
