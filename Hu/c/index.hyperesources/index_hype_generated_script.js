//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/index_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_598","HYPE_dtl_598",!0==(null!=a&&10>a||false==!0)?"HYPE-598.full.min.js":"HYPE-598.thin.min.js"),false==!0&&(a=a||l("HYPE_w_598","HYPE_wdtl_598","HYPE-598.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"untitledFunction",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menu');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menuDelta = 100;\n\t\tvar menuFadeOut = 9000;\n\n\t\tif (scroll > menuDelta){\n\t\t\tmenu.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menuDelta){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menuFadeOut){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n\n}",identifier:"11"},{name:"untitledFunction2",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menub');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menubDelta = 400;\n\t\tvar menubFadeOut = 14000;\n\n\t\tif (scroll > menubDelta){\n\t\t\tmenub.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menubDelta){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menubFadeOut){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t};\t\n}",identifier:"186"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_598(c,e,{"-2":{n:"blank.gif"},"25":{p:1,n:"PDP_2x.jpg",g:"1218",o:true,t:"@2x"},"18":{p:1,n:"Homepage-1_2x.jpg",g:"1217",o:true,t:"@2x"},"10":{p:1,n:"Product%20Carousel%201.jpg",g:"1151",o:true,t:"@1x"},"19":{p:1,n:"Product%20Card%20Hover.jpg",g:"1133",o:true,t:"@1x"},"11":{p:1,n:"Product%20Carousel%201_2x.jpg",g:"1151",o:true,t:"@2x"},"0":{p:1,n:"CTA%20Hover%20Text.png",g:"1085",o:true,t:"@1x"},"12":{p:1,n:"Carousel%20Arrow%20Background.png",g:"1153",t:"@1x"},"1":{p:1,n:"CTA%20Hover%20Text_2x.png",g:"1085",o:true,t:"@2x"},"20":{p:1,n:"Product%20Card%20Hover_2x.jpg",g:"1133",o:true,t:"@2x"},"2":{p:1,n:"CTA%20Hover%20Arrow.png",g:"1087",o:true,t:"@1x"},"13":{p:1,n:"Carousel%20Arrow.png",g:"1155",o:true,t:"@1x"},"3":{p:1,n:"CTA%20Hover%20Arrow_2x.png",g:"1087",o:true,t:"@2x"},"21":{n:"chocolate.mp4",g:"1221",t:"video/mp4"},"14":{p:1,n:"Carousel%20Arrow_2x.png",g:"1155",o:true,t:"@2x"},"4":{p:1,n:"Homepage%20Sticky%20Nav-1.jpg",g:"1089",o:true,t:"@1x"},"5":{p:1,n:"Homepage%20Sticky%20Nav-1_2x.jpg",g:"1089",o:true,t:"@2x"},"15":{p:1,n:"Product%20Carousel%202.jpg",g:"1161",o:true,t:"@1x"},"22":{p:1,n:"PDP%20Sticky%20Nav.jpg",g:"1143",o:true,t:"@1x"},"6":{p:1,n:"Chocolate%20Hover%20Arrow.jpg",g:"1124",o:true,t:"@1x"},"23":{p:1,n:"PDP%20Sticky%20Nav_2x.jpg",g:"1143",o:true,t:"@2x"},"16":{p:1,n:"Product%20Carousel%202_2x.jpg",g:"1161",o:true,t:"@2x"},"7":{p:1,n:"Chocolate%20Hover%20Arrow_2x.jpg",g:"1124",o:true,t:"@2x"},"-1":{n:"PIE.htc"},"8":{p:1,n:"Chocolate%20Hover.jpg",g:"1123",o:true,t:"@1x"},"24":{p:1,n:"PDP.jpg",g:"1218",o:true,t:"@1x"},"17":{p:1,n:"Homepage-1.jpg",g:"1217",o:true,t:"@1x"},"9":{p:1,n:"Chocolate%20Hover_2x.jpg",g:"1123",o:true,t:"@2x"}},h,[],d,[{n:"Homepage",o:"1",X:[0]},{n:"PDP",o:"245",X:[1]}],[{A:{a:[{p:4,h:"11"}]},o:"3",p:"600px",cA:false,Y:1440,Z:5090,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"1079":{i:"1079",n:"Nav Hover",z:0.04,b:[],a:[{f:"c",y:0,z:0.04,i:"e",e:1,s:0,o:"1237"},{f:"c",y:0,z:0.04,i:"e",e:1,s:-1,o:"1236"},{y:0.04,i:"e",s:1,z:0,o:"1237",f:"c"},{y:0.04,i:"e",s:1,z:0,o:"1236",f:"c"}],f:30},"1129":{i:"1129",n:"Product Card Hover",z:0.06,b:[],a:[{f:"c",y:0,z:0.06,i:"e",e:1,s:0,o:"1245"},{y:0.06,i:"e",s:1,z:0,o:"1245",f:"w"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:35.18,b:[],a:[{y:0,p:1,i:"Video Track",z:35.18,o:"1233",f:"a"}],f:30},"1083":{i:"1083",n:"Button Hover",z:0.16,b:[],a:[{f:"w",y:0,z:0.16,i:"a",e:0,s:-377,o:"1230"},{f:"c",y:0.03,z:0.03,i:"e",e:1,s:0,o:"1229"},{y:0.06,i:"e",s:1,z:0,o:"1229",f:"c"},{f:"c",y:0.13,z:0.02,i:"e",e:1,s:0,o:"1228"},{y:0.15,i:"e",s:1,z:0,o:"1228",f:"c"},{y:0.16,i:"a",s:0,z:0,o:"1230",f:"c"}],f:30}},bZ:180,O:["1225","1239","1238","1240","1241","1242","1226","1234","1235","1236","1237","1232","1231","1233","1230","1227","1229","1228","1243","1245","1244"],n:"Untitled Layout","_":0,v:{"1234":{x:"visible",k:"div",c:1440,d:452,z:128,a:0,aP:"pointer",j:"absolute",b:84},"1239":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"1238",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"1228":{h:"1087",p:"no-repeat",x:"visible",a:324,q:"100% 100%",b:14,j:"absolute",dB:"img",z:4,k:"div",bF:"1227",d:22,c:46,cQ:0.5,e:0,r:"inline",cR:0.5},"1243":{x:"visible",k:"div",c:403,d:696,z:3,e:1,a:689,j:"absolute",b:899},"1232":{c:24,d:590,I:"None",J:"None",K:"None",g:"#000000",L:"None",M:0,N:0,bF:"1231",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,P:0,D:"#D8DDE4",a:0,b:0},"1237":{h:"1123",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:76,j:"absolute",dB:"img",z:1,k:"div",bF:"1234",d:379,c:1440,r:"inline",e:0},"1226":{w:"",h:"1217",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:1,k:"div",c:1440,d:5052,r:"inline",cQ:1,cR:1},"1241":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"1238",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"1230":{c:377,d:52,I:"None",e:1,J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,bF:"1227",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:-377,b:-1},"1235":{c:102,d:26,I:"None",J:"None",K:"None",L:"None",M:0,N:0,bF:"1234",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,P:0,D:"#D8DDE4",aC:{a:[{b:"1079",p:3,z:true,symbolOid:"2"}]},a:349,aD:{a:[{b:"1079",p:3,z:false,symbolOid:"2"}]},b:30},"1229":{h:"1085",p:"no-repeat",x:"visible",a:22,q:"100% 100%",b:20,j:"absolute",dB:"img",z:3,k:"div",bF:"1227",d:10,c:100,cQ:1,e:0,r:"inline",cR:1},"1244":{c:338,d:506,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"1243",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:3,P:0,D:"#D8DDE4",aC:{a:[{b:"1129",p:3,z:true,symbolOid:"2"}]},a:31,aD:{a:[{b:"1129",p:3,z:false,symbolOid:"2"}]},b:26},"1233":{aR:"1",x:"visible",bE:"1221",a:19,b:0,j:"absolute",bF:"1231",c:909,k:"video",z:1,d:592,aO:"0",aQ:"1",aH:"1"},"1238":{x:"visible",k:"div",c:1440,d:40,z:142,e:1,a:0,j:"absolute",b:0},"1227":{x:"hidden",j:"absolute",aD:{a:[{b:"1083",p:3,z:false,symbolOid:"2"}]},k:"div",c:377,d:49,z:129,a:82,aC:{a:[{b:"1083",p:3,z:true,symbolOid:"2"}]},aP:"pointer",b:704},"1242":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"1238",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"245"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"PDP",x:"visible",I:"None",a:726,y:"preserve",J:"None"},"1231":{k:"div",x:"visible",c:928,d:592,z:2,a:477,j:"absolute",b:201},"1236":{h:"1124",p:"no-repeat",x:"visible",a:424,q:"100% 100%",b:26,dB:"img",cY:"0",z:3,j:"absolute",k:"div",d:26,bF:"1234",cQ:0.5,e:0,c:38,r:"inline",cR:0.5},"1225":{h:"1089",p:"no-repeat",x:"visible",i:"menu",q:"100% 100%",b:-146,a:0,j:"absolute",z:144,k:"div",dB:"img",d:81,c:1440,r:"inline",aP:"pointer"},"1240":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"1238",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"1245":{h:"1133",p:"no-repeat",x:"visible",a:17,q:"100% 100%",b:21,j:"absolute",dB:"img",z:2,k:"div",bF:"1243",d:640,c:360,cQ:1,e:0,r:"inline",cR:1}}},{A:{a:[{p:4,h:"186"}]},o:"282",p:"600px",cA:false,Y:1440,Z:5273,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"1163":{i:"1163",n:"Product Carousel",z:0.08,b:[],a:[{f:"w",y:0,z:0.08,i:"a",e:-339,s:0,o:"1248"},{f:"w",y:0,z:0.08,i:"a",e:1019,s:1364,o:"1250"},{y:0.08,i:"a",s:1019,z:0,o:"1250",f:"x"},{y:0.08,i:"a",s:-339,z:0,o:"1248",f:"c"}],f:30},"1149":{i:"1149",n:"Nav Hover",z:0.04,b:[],a:[{f:"c",y:0,z:0.04,i:"e",e:1,s:0,o:"1266"},{f:"c",y:0,z:0,i:"e",e:0,s:0,o:"1267"},{f:"c",y:0,z:0,i:"e",e:0,s:0,o:"1267"},{f:"c",y:0,z:0.04,i:"e",e:1,s:0,o:"1267"},{y:0.04,i:"e",s:1,z:0,o:"1266",f:"c"},{y:0.04,i:"e",s:1,z:0,o:"1267",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30},"763":{i:"763",n:"Video Expanded",z:0,b:[],a:[],f:30},"1160":{i:"1160",n:"Product Carousel Hover",z:0.03,b:[],a:[{f:"c",y:0,z:0.03,i:"a",e:10,s:5,o:"1254"},{y:0.03,i:"a",s:10,z:0,o:"1254",f:"c"}],f:30}},bZ:180,O:["1262","1261","1256","1258","1259","1260","1263","1257","1264","1265","1267","1266","1251","1246","1248","1250","1249","1252","1255","1253","1247","1254"],n:"Untitled Layout","_":1,v:{"1260":{b:7,z:9,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"1256",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"245"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"PDP<br>",x:"visible",I:"None",a:726,y:"preserve",J:"None"},"1265":{c:100,d:33,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"1264",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:3,P:0,D:"#D8DDE4",aC:{a:[{b:"1149",p:3,z:true,symbolOid:"246"}]},a:350,aD:{a:[{b:"1149",p:3,z:false,symbolOid:"246"}]},b:0},"1254":{h:"1155",p:"no-repeat",x:"visible",a:5,q:"100% 100%",b:11,j:"absolute",dB:"img",z:2,k:"div",bF:"1253",d:22,c:40,cQ:0.5,r:"inline",cR:0.5},"1259":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"1256",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"1248":{w:"",h:"1151",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:22,j:"absolute",cY:"0",z:1,k:"div",dB:"img",d:493,bF:"1246",c:1360,t:15,r:"inline"},"1263":{w:"",h:"1218",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:1,k:"div",c:1440,d:5233,r:"inline",cQ:1,cR:1},"1252":{c:48,d:48,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"1163",p:3,z:false,symbolOid:"246"}]},j:"absolute",O:0,k:"div",dB:"button",z:5,C:"#D8DDE4",D:"#D8DDE4",aC:{a:[{b:"1160",p:3,z:true,symbolOid:"246"}]},B:"#D8DDE4",P:0,a:1352,aD:{a:[{b:"1160",p:3,z:false,symbolOid:"246"}]},b:3530},"1257":{c:177,d:78,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"1256",A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:7,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:51,b:97},"1246":{k:"div",x:"hidden",c:1360,d:493,z:3,a:40,j:"absolute",b:3359},"1261":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"1256",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"1250":{h:"1161",p:"no-repeat",x:"visible",tY:0.5,a:1364,b:22,q:"100% 100%",j:"absolute",z:4,dB:"img",k:"div",d:493,bF:"1246",c:1360,e:1,r:"inline",tX:0.5},"1266":{h:"1123",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:51,j:"absolute",dB:"img",z:2,k:"div",bF:"1264",d:378,c:1440,r:"inline",e:0},"1255":{w:"",h:"1153",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:-2,j:"absolute",dB:"img",z:1,k:"div",bF:"1253",d:50,c:50,r:"inline"},"1249":{w:"",h:"1153",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:169,j:"absolute",dB:"img",z:2,k:"div",bF:"1246",d:50,c:50,r:"inline"},"1264":{k:"div",x:"visible",c:1440,d:429,z:19,a:0,j:"absolute",b:109},"1253":{k:"div",x:"visible",c:50,d:48,z:4,a:1349,j:"absolute",b:3530},"1258":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"1256",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"1247":{h:"1155",p:"no-repeat",x:"visible",a:4,q:"100% 100%",b:182,j:"absolute",dB:"img",z:3,k:"div",bF:"1246",d:22,c:40,cQ:0.5,r:"inline",f:180,cR:0.5},"1262":{w:"",h:"1143",p:"no-repeat",x:"visible",i:"menub",q:"100% 100%",b:-180,a:0,j:"absolute",z:18,k:"div",dB:"img",d:100,c:1440,r:"inline"},"1251":{c:1378,d:492,I:"None",J:"None",K:"None",g:"#000000",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,k:"div",C:"#D8DDE4",z:2,O:0,D:"#D8DDE4",a:27,b:3361},"1267":{h:"1124",p:"no-repeat",x:"visible",a:423,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"1264",d:26,c:38,cQ:0.5,e:0,r:"inline",cR:0.5},"1256":{x:"visible",k:"div",c:1440,d:40,z:12,e:1,a:0,j:"absolute",b:0}}}],{},g,{w:[[0,0,0.77,0,0.175,1,1,1]],x:[[0,0,0.86,0,0.07,1,1,1]]},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
