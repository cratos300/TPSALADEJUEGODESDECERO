(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2XUj":function(t,e,i){"use strict";i.r(e),i.d(e,"JuegosModule",function(){return B});var s=i("ofXK"),a=i("tyNb"),n=i("PSD3"),o=i.n(n);class r{}var c=i("fXoL"),l=i("psOs"),h=i("5eHb"),u=i("I/3d");let d=(()=>{class t{constructor(t){this.db=t,this.dbPath="/adivinasolo",this.lista=new Array,this.tatetiRef=t.collection(this.dbPath)}getAll(){return this.tatetiRef=this.db.collection(this.dbPath),this.tatetiRef}create(t){return this.tatetiRef=this.db.collection(this.dbPath),this.tatetiRef.add(Object.assign({},t))}update(t,e){return this.tatetiRef=this.db.collection(this.dbPath),this.tatetiRef.doc(t).update({victorias:e.victorias,email:e.email,intentos:e.intentos})}delete(t){return this.tatetiRef=this.db.collection(this.dbPath),this.tatetiRef.doc(t).delete()}}return t.\u0275fac=function(e){return new(e||t)(c.Ub(u.a))},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=i("3Pt+");function p(t,e){1&t&&c.Mb(0,"div")}function g(t,e){1&t&&c.Mb(0,"div")}function m(t,e){1&t&&(c.Qb(0,"div"),c.Mb(1,"img",14),c.Pb())}function f(t,e){1&t&&c.Mb(0,"img",19)}function v(t,e){1&t&&c.Mb(0,"img",20)}function P(t,e){1&t&&c.Mb(0,"img",21)}function j(t,e){1&t&&c.Mb(0,"img",22)}function C(t,e){if(1&t&&(c.Qb(0,"div"),c.pc(1,f,1,0,"img",15),c.pc(2,v,1,0,"img",16),c.pc(3,P,1,0,"img",17),c.pc(4,j,1,0,"img",18),c.Pb()),2&t){const t=c.Zb();c.Ab(1),c.ec("ngIf",t.mostrar1),c.Ab(1),c.ec("ngIf",t.ganaste),c.Ab(1),c.ec("ngIf",t.mostrar2),c.Ab(1),c.ec("ngIf",t.mostrar3)}}function A(t,e){if(1&t){const t=c.Rb();c.Qb(0,"button",23),c.Xb("click",function(){return c.jc(t),c.Zb().GenerarNumero()}),c.qc(1,"GENERAR NUMERO"),c.Pb()}}function O(t,e){1&t&&(c.Qb(0,"div"),c.Qb(1,"p"),c.qc(2,"hola"),c.Pb(),c.Pb())}function S(t,e){if(1&t){const t=c.Rb();c.Qb(0,"input",24),c.Xb("ngModelChange",function(e){return c.jc(t),c.Zb().numeroIngresado=e}),c.Pb()}if(2&t){const t=c.Zb();c.ec("ngModel",t.numeroIngresado)}}function x(t,e){if(1&t){const t=c.Rb();c.Qb(0,"button",25),c.Xb("click",function(){return c.jc(t),c.Zb().EnviarNumero()}),c.qc(1,"ENVIAR"),c.Pb()}}function M(t,e){if(1&t){const t=c.Rb();c.Qb(0,"div"),c.Qb(1,"button",26),c.Xb("click",function(){return c.jc(t),c.Zb().ayuda()}),c.qc(2,"AYUDA"),c.Pb(),c.Pb()}}let I=(()=>{class t{constructor(t,e,i){var s;this.cambiarmensajereal=t,this.toastr=e,this.adivinasolo=i,this.bop=!1,this.ganaste=!1,this.contador=0,this.mostrar1=!0,this.mostrar2=!1,this.mostrar3=!1,this.contadorVitorias=0,this.contadorintentos=0,this.id="",this.tieneDatosCargados=!1,this.cambiarmensajereal.dbPath="/MensajesAjedrez",this.punt1=new r,this.ver=localStorage.getItem("usuario"),this.ver=JSON.parse(this.ver),this.punt1.email=this.ver.correo,this.email=null===(s=this.punt1.email)||void 0===s?void 0:s.toString(),this.inicializarPuntajes(),this.getAll()}ngOnInit(){}GenerarNumero(t=0,e=101){this.numero=Math.floor(Math.random()*(e-t)+t),alert("el numero generado es : "+this.numero),this.bop=!0}EnviarNumero(){this.numeroIngresado!=this.numero?(this.contadorintentos++,this.punt1.intentos=this.contadorintentos.toString(),this.punt1.drintin=this.contadorintentos.toString(),this.contador++,this.toastr.error("\xa1Vuelve a intentarlo ese no es el numero.(Si necesitas lee la info del juego abajo.):","VAMOS, TU PUEDES!"),console.log(this.contador)):(this.contadorVitorias++,this.punt1.victorias=this.contadorVitorias.toString(),this.bop=!1,this.ganaste=!1,this.contador=0,this.mostrar1=!0,this.mostrar2=!1,this.mostrar3=!1,o.a.fire("BUEN TRABAJO","FELICIDADES GANASTE!!!","success"))}ayuda(){this.numero<=50?(this.mostrar1=!1,this.mostrar2=!0):this.numero>50&&(this.mostrar1=!1,this.mostrar3=!0)}inicializarPuntajes(){this.punt1.victorias="0",this.punt1.intentos="0"}getAll(){this.adivinasolo.getAll().valueChanges({idField:"propertyId"}).subscribe(t=>{for(var e of t)if(this.punt1.email=this.email,e.email==this.punt1.email){this.punt2=e,this.tieneDatosCargados=!0,this.id=e.propertyId;break}})}guardar(){this.tieneDatosCargados?(console.log(this.punt1),this.punt1.victorias=(+ +this.punt1.victorias+ +this.punt2.victorias).toString(),this.punt1.intentos=(+ +this.punt1.intentos+ +this.punt2.intentos).toString(),this.punt1.intentos=this.punt1.drintin,console.log(this.punt1),this.adivinasolo.update(this.id,this.punt1).then(t=>{alert("se modifico"+t)}),o.a.fire({position:"center",icon:"success",title:"Tus partidas est\xe1n guardadas",showConfirmButton:!1,timer:1500}),this.contadorVitorias=0):(this.adivinasolo.create(this.punt1),console.log("guardar"),o.a.fire({position:"center",icon:"success",title:"Tus partidas est\xe1n guardadas",showConfirmButton:!1,timer:1500})),this.inicializarPuntajes()}mostrar(){this.tieneDatosCargados||(this.punt2=new r,this.punt2.intentos="0",this.punt2.email="",this.punt2.victorias="",this.punt2.intentos=""),o.a.fire({title:"<strong>Partidas</strong>",icon:"info",html:'<table class="table"><thead><tr><th scope="col">Jugador</th><th scope="col">Victorias</th><th scope="col">Intentos</th><th scope="col">drintin</th></tr></thead><tbody><tr><th scope="row">'+this.punt2.email+"</th><td>"+this.punt2.victorias+"</td><td>"+this.punt2.intentos+"<td>"+this.punt2.drintin+"</tr>"})}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(l.a),c.Lb(h.b),c.Lb(d))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-adivinanumero"]],decls:33,vars:9,consts:[[1,"divprincipal"],["behavior","","direction","alternate",1,"marque"],[1,"d-flex","justify-content-around"],[4,"ngIf"],["width","300px","height","300px","src","../../../../assets/imagenes/magooooo-_1_.svg","alt",""],["class","centro btn-lg",3,"click",4,"ngIf"],["placeholder","   INGRESE EL NUMERO","type","number",3,"ngModel","ngModelChange",4,"ngIf"],["class","centro btn btn-primary",3,"click",4,"ngIf"],[1,"container","d-flex","justify-content-center"],[1,"row"],[1,"col-sm-auto"],["type","button",1,"btn","btn-danger","btn-lg","bep",3,"click"],["type","button",1,"btn","btn-secondary","btn-lg","bep",3,"click"],[1,"paranoverfoter"],["width","300px","height","300px","src","../../../../assets/imagenes/flecha.svg","alt",""],["width","300px","height","300px","src","../../../../assets/imagenes/signoPregunta.svg","alt","",4,"ngIf"],["width","300px","height","300px","src","../../../../assets/imagenes/pulgarrrr.svg","alt","",4,"ngIf"],["width","300px","height","300px","src","../../../../assets/imagenes/0-50.svg","alt","",4,"ngIf"],["width","300px","height","300px","src","../../../../assets/imagenes/123456.svg","alt","",4,"ngIf"],["width","300px","height","300px","src","../../../../assets/imagenes/signoPregunta.svg","alt",""],["width","300px","height","300px","src","../../../../assets/imagenes/pulgarrrr.svg","alt",""],["width","300px","height","300px","src","../../../../assets/imagenes/0-50.svg","alt",""],["width","300px","height","300px","src","../../../../assets/imagenes/123456.svg","alt",""],[1,"centro","btn-lg",3,"click"],["placeholder","   INGRESE EL NUMERO","type","number",3,"ngModel","ngModelChange"],[1,"centro","btn","btn-primary",3,"click"],[1,"btn","btn-primary","btn-lg",3,"click"]],template:function(t,e){1&t&&(c.Qb(0,"div",0),c.Qb(1,"marquee",1),c.qc(2,"Recomendaci\xf3n antes de jugar lee la informaci\xf3n del juego que est\xe1 por debajo."),c.Pb(),c.Qb(3,"H1"),c.qc(4,"ADIVINA EL N\xdaMERO"),c.Pb(),c.Qb(5,"div"),c.Qb(6,"div",2),c.pc(7,p,1,0,"div",3),c.Qb(8,"div"),c.Mb(9,"img",4),c.Pb(),c.pc(10,g,1,0,"div",3),c.pc(11,m,2,0,"div",3),c.pc(12,C,5,4,"div",3),c.Pb(),c.Pb(),c.pc(13,A,2,0,"button",5),c.Qb(14,"div",2),c.pc(15,O,3,0,"div",3),c.Qb(16,"div"),c.pc(17,S,1,1,"input",6),c.pc(18,x,2,0,"button",7),c.Pb(),c.pc(19,M,3,0,"div",3),c.Pb(),c.Qb(20,"div",8),c.Qb(21,"div",9),c.Qb(22,"div",10),c.Qb(23,"button",11),c.Xb("click",function(){return e.guardar()}),c.qc(24,"Guardar puntajes"),c.Pb(),c.Pb(),c.Qb(25,"div",10),c.Qb(26,"button",12),c.Xb("click",function(){return e.mostrar()}),c.qc(27,"Listar puntajes"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(28,"div",13),c.Qb(29,"H1"),c.qc(30,"INFORMACI\xd3N DEL JUEGO"),c.Pb(),c.Qb(31,"p"),c.qc(32,'Este juego es utilizado por Hernan vilar con el fin de hacer divertir a las personas.El juego consiste en lo siguiente, uno tiene que apretar en el boton "GENERAR NUMERO" lo cual va a generar un numero al azar del 0 al 100.El objetivo es que el jugador logre adivinar el numero lo mas rapido posible.Tambien hay un boton de "AYUDA" lo cual si uno lo apreta puede ver una peque\xf1a ayuda.\xbfCual? la siguiente: al apretar el boton aparecera una imagen que puede decir 0-50 o 50-100 dependiendo el numero al azar que se genero es la imagen que aparece. '),c.Pb(),c.Pb(),c.Pb()),2&t&&(c.Ab(7),c.ec("ngIf",!e.bop),c.Ab(3),c.ec("ngIf",!e.bop),c.Ab(1),c.ec("ngIf",e.bop),c.Ab(1),c.ec("ngIf",e.bop),c.Ab(1),c.ec("ngIf",!e.bop),c.Ab(2),c.ec("ngIf",e.bop),c.Ab(2),c.ec("ngIf",e.bop),c.Ab(1),c.ec("ngIf",e.bop),c.Ab(1),c.ec("ngIf",e.bop))},directives:[s.i,b.k,b.a,b.f,b.i],styles:["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{text-align:center}nav[_ngcontent-%COMP%]{background-color:#87ceeb}.centrar[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.centro[_ngcontent-%COMP%]{display:block;margin:auto}.divprincipal[_ngcontent-%COMP%]{background-color:#228b22}.fontt[_ngcontent-%COMP%]{font-size:50px}.costado[_ngcontent-%COMP%]{margin-left:10px}.deta[_ngcontent-%COMP%]{margin-left:50px;width:100px}.paranoverfoter[_ngcontent-%COMP%]{height:22vh;background-color:#a9a9a9}.marque[_ngcontent-%COMP%]{padding-top:10px;font-size:large;background-color:#deb887}.bep[_ngcontent-%COMP%]{margin-top:5px}"]}),t})();class y{constructor(){this.email=""}}var Q=i("tk/3");let k=(()=>{class t{constructor(t){this.http=t,this.url="https://restcountries.eu/rest/v2/regionalbloc/usan"}obtenerImagenes(){return this.http.get(this.url)}}return t.\u0275fac=function(e){return new(e||t)(c.Ub(Q.a))},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var w=i("lGQG");let E=(()=>{class t{constructor(t){this.db=t,this.dbPath="/memotest",this.lista=new Array,this.memotestRef=t.collection(this.dbPath)}getAll(){return this.memotestRef}create(t){return this.memotestRef.add(Object.assign({},t))}update(t,e){return this.memotestRef.doc(t).update({derrotas:e.derrotas,victorias:e.victorias,email:e.email,empate:e.empate})}delete(t){return this.memotestRef.doc(t).delete()}}return t.\u0275fac=function(e){return new(e||t)(c.Ub(u.a))},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function R(t,e){if(1&t&&(c.Qb(0,"div",10),c.Mb(1,"br"),c.Qb(2,"p"),c.qc(3,"\xa1GANAAAAAAAA!"),c.Pb(),c.Qb(4,"p"),c.qc(5,"Tienes un total de "),c.Qb(6,"b"),c.qc(7),c.Pb(),c.qc(8," intentos."),c.Pb(),c.Mb(9,"br"),c.Qb(10,"h4"),c.qc(11,"YA CASII "),c.Qb(12,"span",11),c.qc(13),c.Pb(),c.qc(14,"..."),c.Pb(),c.Pb()),2&t){const t=c.Zb();c.Ab(7),c.rc(t.userLife),c.Ab(6),c.rc(t.countDown)}}function T(t,e){if(1&t){const t=c.Rb();c.Qb(0,"img",18),c.Xb("click",function(){c.jc(t);const e=c.Zb(),i=e.$implicit,s=e.index;return c.Zb(2).selectCard(i.pos,i.val,s)}),c.Pb()}}function q(t,e){if(1&t&&c.Mb(0,"img",19),2&t){const t=c.Zb().$implicit,e=c.Zb(2);c.ec("src",e.images[t.val],c.lc)}}function _(t,e){if(1&t&&c.Mb(0,"img",19),2&t){const t=c.Zb().$implicit,e=c.Zb(2);c.ec("src",e.images[t.val],c.lc)}}function V(t,e){1&t&&c.Mb(0,"img",20)}function D(t,e){if(1&t&&(c.Qb(0,"div",14),c.pc(1,T,1,0,"img",15),c.pc(2,q,1,1,"img",16),c.pc(3,_,1,1,"img",16),c.pc(4,V,1,0,"img",17),c.Pb()),2&t){const t=e.$implicit,i=c.Zb(2);c.Ab(1),c.ec("ngIf",t.pos!=i.selectCard1pos&&t.pos!=i.selectCard2pos&&t.val>-1),c.Ab(1),c.ec("ngIf",t.pos==i.selectCard1pos&&t.val>-1),c.Ab(1),c.ec("ngIf",t.pos==i.selectCard2pos&&t.val>-1),c.Ab(1),c.ec("ngIf",-1==t.val)}}function N(t,e){if(1&t&&(c.Qb(0,"div",12),c.pc(1,D,5,4,"div",13),c.Pb()),2&t){const t=c.Zb();c.Ab(1),c.ec("ngForOf",t.cardsArray)}}function G(t,e){if(1&t&&(c.Qb(0,"div",2),c.Mb(1,"br"),c.Qb(2,"div",21),c.Qb(3,"div",22),c.Qb(4,"p",23),c.qc(5,"Tienes "),c.Qb(6,"span",24),c.qc(7),c.Pb(),c.qc(8," intentos..."),c.Pb(),c.Pb(),c.Qb(9,"div",22),c.Qb(10,"p",23),c.Qb(11,"span",11),c.qc(12),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb()),2&t){const t=c.Zb();c.Ab(7),c.rc(t.userLife),c.Ab(5),c.rc(t.shownTime)}}function L(t,e){if(1&t){const t=c.Rb();c.Qb(0,"div",25),c.Mb(1,"br"),c.Qb(2,"p",26),c.qc(3,"Tienes \xa1"),c.Qb(4,"span",27),c.qc(5,"Ganada "),c.Pb(),c.qc(6,"esta!"),c.Pb(),c.Qb(7,"p",26),c.qc(8,"Le gustar\xeda volver a intentarlo"),c.Pb(),c.Mb(9,"br"),c.Qb(10,"button",28),c.Xb("click",function(){return c.jc(t),c.Zb().restartGame()}),c.qc(11,"juega de nuevo"),c.Pb(),c.Qb(12,"button",28),c.Xb("click",function(){return c.jc(t),c.Zb().mostrarPartidas()}),c.qc(13,"Listar resultados"),c.Pb(),c.Qb(14,"button",28),c.Xb("click",function(){return c.jc(t),c.Zb().guardar()}),c.qc(15,"Guardar partida"),c.Pb(),c.Pb()}}function z(t,e){if(1&t){const t=c.Rb();c.Qb(0,"div",29),c.Qb(1,"div",30),c.Mb(2,"br"),c.Qb(3,"p",26),c.qc(4,"\xa1Has "),c.Qb(5,"span",11),c.qc(6,"PERDIDO"),c.Pb(),c.qc(7,"este!"),c.Pb(),c.Qb(8,"p",26),c.qc(9,"Le gustar\xeda volver a intentarlo"),c.Pb(),c.Mb(10,"br"),c.Qb(11,"button",28),c.Xb("click",function(){return c.jc(t),c.Zb().restartGame()}),c.qc(12,"juega de nuevo"),c.Pb(),c.Qb(13,"button",28),c.Xb("click",function(){return c.jc(t),c.Zb().mostrarPartidas()}),c.qc(14,"Listar resultados"),c.Pb(),c.Qb(15,"button",28),c.Xb("click",function(){return c.jc(t),c.Zb().guardar()}),c.qc(16,"Guardar partida"),c.Pb(),c.Pb(),c.Pb()}}let U=(()=>{class t{constructor(t,e,i){this.servicioHttp=t,this.auth=e,this.memotestService=i,this.mostrar="",this.gameState="init",this.startGame=!0,this.countDown=0,this.totalTime=0,this.shownTime="",this.countTime=0,this.interTime=0,this.interCount=0,this.cardsTotal=12,this.cardsArray=[],this.listaPises=new Array,this.userLife=15,this.images=new Array,this.selectCard1pos=-1,this.selectCard1val=-1,this.selectCard2pos=-1,this.selectCard2val=-1,this.selectOldPosix=-1,this.listaPuntajes=new Array,this.contadorVitorias=0,this.contadorDerrotas=0,this.id="",this.tieneDatosCargados=!1,this.debugText="Debug text goes here! :)",this.servicioHttp.obtenerImagenes().subscribe(t=>{this.listaPises=t}),this.puntajes=new y,this.inicializarPuntajes(),this.puntajes.email=localStorage.getItem("usuario"),console.log(localStorage.getItem("usuario")),this.getAll()}ngOnInit(){setTimeout(()=>{this.restartGame();for(let t=0;t<8;t++)this.images.push(this.listaPises[t].flag);console.log(this.images)},2e3)}populateCards(){this.cardsArray=[];for(var t=0,e=0,i=0;i<this.cardsTotal;i++)this.cardsArray.push({pos:i,val:e}),0==t?t=1:(t=0,e++)}selectCard(t,e,i){var s=!1;this.selectCard1pos>-1&&-1==this.selectCard2pos&&(this.selectCard2pos=t,this.selectCard2val=e,s=!0),-1!=this.selectCard1pos||s||(this.selectCard1pos=t,this.selectCard1val=e,this.selectOldPosix=i),s&&this.selectCard1pos>-1&&this.selectCard2pos>-1&&setTimeout(()=>{this.selectCard1val==this.selectCard2val?(this.debugText="Crads match!",this.cardsArray.splice(this.selectOldPosix,1,{pos:this.selectOldPosix,val:-1}),this.cardsArray.splice(i,1,{pos:i,val:-1}),this.resetSelects(),this.winCon()):(this.debugText="cards no match!",this.userLife--,this.resetSelects(),this.userLife<=0&&(this.contadorDerrotas++,this.restartGame()))},1e3)}shuffle(t){var e,i,s;for(s=t.length;s;s--)e=Math.floor(Math.random()*s),i=t[s-1],t[s-1]=t[e],t[e]=i}restartGame(){this.mostrar="",this.gameState="init",this.startGame=!0,this.countDown=3,this.totalTime=60,this.shownTime="",this.countTime=0,this.interCount=0,this.userLife=15,this.resetSelects(),this.populateCards(),this.shuffle(this.cardsArray),this.shuffle(this.images),setTimeout(()=>{this.startGame=!0,this.gameState="init"},1e3*this.countDown),this.interCount=+setInterval(()=>{this.countDown<0?(clearInterval(this.interCount),this.interCount=0):this.countDown--},1e3),setTimeout(()=>{this.interTime=+setInterval(()=>{if(this.countTime>=this.totalTime&&this.loseCon(),"init"==this.gameState){this.countTime++;var t=Math.floor((this.totalTime-this.countTime)/60),e=this.totalTime-this.countTime-60*t;this.shownTime=t.toString()+":"+e.toString()}else null!=this.interTime&&(clearInterval(this.interTime),this.interTime=null)},1e3)},1e3*this.countDown+200)}resetSelects(){this.selectCard1pos=-1,this.selectCard1val=-1,this.selectCard2pos=-1,this.selectCard2val=-1}winCon(){var t=!1;for(let e=0;e<this.cardsArray.length;e++)-1!=this.cardsArray[e].val&&(t=!0),0==t&&(this.gameState="win",this.mostrar="gana",this.contadorVitorias++,this.puntajes.victorias=this.contadorVitorias.toString())}loseCon(){this.gameState="lose",this.mostrar="pierde",this.contadorDerrotas++,this.puntajes.derrotas=this.contadorDerrotas.toString(),console.log(this.puntajes)}guardar(){console.log(this.tieneDatosCargados),this.tieneDatosCargados?(this.puntajes.victorias=(+ +this.puntajes.victorias+ +this.puntajesVista.victorias).toString(),this.puntajes.derrotas=(+ +this.puntajes.derrotas+ +this.puntajesVista.derrotas).toString(),this.puntajes.empate=(+ +this.puntajes.empate+ +this.puntajesVista.empate).toString(),this.memotestService.update(this.id,this.puntajes),o.a.fire({position:"center",icon:"success",title:"Tus partidas est\xe1n guardadas",showConfirmButton:!1,timer:1500})):(this.memotestService.create(this.puntajes),console.log("guardar"),o.a.fire({position:"center",icon:"success",title:"Tus partidas est\xe1n guardadas",showConfirmButton:!1,timer:1500})),this.inicializarPuntajes()}getAll(){this.memotestService.memotestRef.valueChanges({idField:"propertyId"}).subscribe(t=>{for(var e of t)if(e.email==this.puntajes.email){this.puntajesVista=e,this.tieneDatosCargados=!0,this.id=e.propertyId;break}})}inicializarPuntajes(){this.puntajes.derrotas="0",this.puntajes.victorias="0",this.puntajes.empate="0"}mostrarPartidas(){console.log(this.puntajesVista),o.a.fire({title:"<strong>Partidas</strong>",icon:"info",html:'<table class="table"><thead><tr><th scope="col">Jugador</th><th scope="col">Victorias</th><th scope="col">Derrotas</th><th scope="col">Empates</th></tr></thead><tbody><tr><th scope="row">'+this.puntajes.email+"</th><td>"+this.puntajesVista.victorias+"</td><td>"+this.puntajesVista.derrotas+"</td><td>"+this.puntajesVista.empate+"</td></tr>"})}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(k),c.Lb(w.a),c.Lb(E))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-memotest"]],decls:11,vars:5,consts:[[1,"back"],[1,"container"],["align","center"],[1,"dete",2,"color","black"],["class","bg-dark text-white centrar","style","margin-left: 150px;width: -moz-fit-content;text-align: center;",4,"ngIf"],["id","conImg",1,"container"],["class","row align-items-center text-center","size","8",4,"ngIf"],["align","center",4,"ngIf"],["class","bg-dark text-white","align","center","style","width: -moz-fit-content;",4,"ngIf"],["align","center","style","width: -moz-fit-content;",4,"ngIf"],[1,"bg-dark","text-white","centrar",2,"margin-left","150px","width","-moz-fit-content","text-align","center"],[2,"color","#cc0000","font-size","24px"],["size","8",1,"row","align-items-center","text-center"],["class","col-sm-3 align-self-center","id","tarjeta","size","3","style","float: left;margin-bottom: 5px;",4,"ngFor","ngForOf"],["id","tarjeta","size","3",1,"col-sm-3","align-self-center",2,"float","left","margin-bottom","5px"],["style","width:80px; height:80px; border: solid 2px #000; border-radius: 12px;",3,"click",4,"ngIf"],["style","width:80px; height:80px; border: solid 2px #000; border-radius: 12px;",3,"src",4,"ngIf"],["style","width:80px; height:80px; border: solid 2px #000; border-radius: 12px;visibility: hidden;",4,"ngIf"],[2,"width","80px","height","80px","border","solid 2px #000","border-radius","12px",3,"click"],[2,"width","80px","height","80px","border","solid 2px #000","border-radius","12px",3,"src"],[2,"width","80px","height","80px","border","solid 2px #000","border-radius","12px","visibility","hidden"],[1,"row"],[1,"col"],[1,"bg-info","text-white",2,"width","-moz-fit-content"],[2,"color","white","font-size","24px"],["align","center",1,"bg-dark","text-white",2,"width","-moz-fit-content"],[1,"bg-primary","text-white"],[2,"color","#00cc00","font-size","24px"],["type","button",1,"btn","bg-warning","text-dark","btn-lg","btn-block",3,"click"],["align","center",2,"width","-moz-fit-content"],[2,"margin-left","480px"]],template:function(t,e){1&t&&(c.Qb(0,"body",0),c.Qb(1,"div",1),c.Qb(2,"div",2),c.Qb(3,"h2",3),c.qc(4,"\xa1GANAAAAAAAA123"),c.Pb(),c.Pb(),c.pc(5,R,15,2,"div",4),c.Qb(6,"div",5),c.pc(7,N,2,1,"div",6),c.Pb(),c.pc(8,G,13,2,"div",7),c.pc(9,L,16,0,"div",8),c.pc(10,z,17,0,"div",9),c.Pb(),c.Pb()),2&t&&(c.Ab(5),c.ec("ngIf",!e.startGame),c.Ab(2),c.ec("ngIf",e.startGame&&"init"==e.gameState),c.Ab(1),c.ec("ngIf",e.startGame&&"init"==e.gameState),c.Ab(1),c.ec("ngIf","gana"==e.mostrar),c.Ab(1),c.ec("ngIf","pierde"==e.mostrar))},directives:[s.i,s.h],styles:["#conImg[_ngcontent-%COMP%]{max-width:40%}#tarjeta[_ngcontent-%COMP%]{animation:vibrate-1 .3s linear infinite both}.back[_ngcontent-%COMP%]{background-color:#deb887}.centrar[_ngcontent-%COMP%]{display:block;margin:auto}.dete[_ngcontent-%COMP%]{margin-top:10px}body[_ngcontent-%COMP%]{position:relative;background-position:50%;height:500px}"]}),t})();class X{}let Z=(()=>{class t{constructor(t){this.db=t,this.dbPath="/tateti",this.lista=new Array,this.tatetiRef=t.collection(this.dbPath)}getAll(){return this.tatetiRef=this.db.collection(this.dbPath),this.tatetiRef}create(t){return this.tatetiRef=this.db.collection(this.dbPath),this.tatetiRef.add(Object.assign({},t))}update(t,e){return this.tatetiRef=this.db.collection(this.dbPath),this.tatetiRef.doc(t).update({derrotas:e.derrotas,victorias:e.victorias,email:e.email,empate:e.empate})}delete(t){return this.tatetiRef=this.db.collection(this.dbPath),this.tatetiRef.doc(t).delete()}}return t.\u0275fac=function(e){return new(e||t)(c.Ub(u.a))},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const J=[{path:"piedrapapeltijera",component:(()=>{class t{constructor(t,e,i){var s;this.cambiarmensajereal=t,this.toastr=e,this.tatetiServicio=i,this.contadorVitorias=0,this.contadorDerrotas=0,this.contadorEmpates=0,this.id="",this.tieneDatosCargados=!1,this.ROCK="rock",this.PAPER="paper",this.SCISSORS="scissors",this.TIE=0,this.WIN=1,this.LOST=2,this.isPlaying=!1,this.tatetiServicio.dbPath="/piedrapapeltijera",this.cambiarmensajereal.dbPath="/MensajesPiedraPapelTijera",this.puntajes=new X,this.ver=localStorage.getItem("usuario"),this.ver=JSON.parse(this.ver),this.puntajes.email=this.ver.correo,this.email=null===(s=this.puntajes.email)||void 0===s?void 0:s.toString(),this.inicializarPuntajes(),this.getAll()}ngOnInit(){}clickpiedra(){this.play(this.ROCK)}clickpapel(){this.play(this.PAPER)}clicktijera(){this.play(this.SCISSORS)}play(t){if(this.isPlaying)return;this.isPlaying=!0,this.aca="../../../../assets/imagenes/"+t+".svg",this.resultText="Chossing!";const e=setInterval(()=>{const t=this.calcMachineOption();this.aca2="../../../../assets/imagenes/"+t+".svg"},200);setTimeout(()=>{clearInterval(e);const i=this.calcMachineOption(),s=this.calcResult(t,i);switch(this.aca2="../../../../assets/imagenes/"+i+".svg",s){case this.TIE:this.contadorEmpates++,this.puntajes.empate=this.contadorEmpates.toString(),this.variante="EMPATASTE!!",this.toastr.warning("CASIIIIIII AHI NOMAS....):","VAMOS, TU PUEDES CASI LE GANASSSS!",{timeOut:3e3});break;case this.WIN:this.contadorVitorias++,this.puntajes.victorias=this.contadorVitorias.toString(),this.variante="GANASTE!!",this.toastr.success("GANASTE SOS UN CRACK!!.:)","VAMOS, GENIOOOOOOOOOO!!!!!!!!!!!",{timeOut:3e3});break;case this.LOST:this.contadorDerrotas++,this.puntajes.derrotas=this.contadorDerrotas.toString(),this.variante="PERDISTE!!",this.toastr.error("UPSSSSSSSSS! QUE LASTIMA PERO PERDISTE.):","SEGUI PRACTICANDO MASS",{timeOut:3e3})}this.isPlaying=!1},2e3)}calcMachineOption(){switch(Math.floor(3*Math.random())){case 0:return this.ROCK;case 1:return this.PAPER;case 2:return this.SCISSORS}return""}calcResult(t,e){if(t===e)return this.TIE;if(t===this.ROCK){if(e===this.PAPER)return this.LOST;if(e===this.SCISSORS)return this.WIN}else if(t===this.PAPER){if(e===this.SCISSORS)return this.LOST;if(e===this.ROCK)return this.WIN}else if(t===this.SCISSORS){if(e===this.ROCK)return this.LOST;if(e===this.PAPER)return this.WIN}return""}inicializarPuntajes(){this.puntajes.derrotas="0",this.puntajes.victorias="0",this.puntajes.empate="0"}getAll(){this.tatetiServicio.getAll().valueChanges({idField:"propertyId"}).subscribe(t=>{for(var e of t)if(this.puntajes.email=this.email,e.email==this.puntajes.email){this.puntajesVista=e,this.tieneDatosCargados=!0,this.id=e.propertyId;break}})}guardar(){console.log(this.tieneDatosCargados),this.tieneDatosCargados?(this.puntajes.victorias=(+ +this.puntajes.victorias+ +this.puntajesVista.victorias).toString(),this.puntajes.derrotas=(+ +this.puntajes.derrotas+ +this.puntajesVista.derrotas).toString(),this.puntajes.empate=(+ +this.puntajes.empate+ +this.puntajesVista.empate).toString(),this.tatetiServicio.update(this.id,this.puntajes),o.a.fire({position:"center",icon:"success",title:"Tus partidas est\xe1n guardadas",showConfirmButton:!1,timer:1500})):(this.tatetiServicio.create(this.puntajes),console.log("guardar"),o.a.fire({position:"center",icon:"success",title:"Tus partidas est\xe1n guardadas",showConfirmButton:!1,timer:1500})),this.inicializarPuntajes()}mostrar(){this.tieneDatosCargados||(this.puntajesVista=new X,this.puntajesVista.derrotas="0",this.puntajesVista.email="0",this.puntajesVista.empate="0",this.puntajesVista.victorias="0"),null!=this.puntajesVista.email&&o.a.fire({title:"<strong>Partidas</strong>",icon:"info",html:'<table class="table"><thead><tr><th scope="col">Jugador</th><th scope="col">Victorias</th><th scope="col">Derrotas</th><th scope="col">Empates</th></tr></thead><tbody><tr><th scope="row">'+this.puntajesVista.email+"</th><td>"+this.puntajesVista.victorias+"</td><td>"+this.puntajesVista.derrotas+"</td><td>"+this.puntajesVista.empate+"</td></tr>"})}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(l.a),c.Lb(h.b),c.Lb(Z))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-piedra-papelo-tijera"]],decls:30,vars:3,consts:[["behavior","","direction","alternate",1,"marque"],[1,"r"],["id","result"],["id","machine-img",3,"src"],["id","user-img",3,"src"],["id","group-btn"],["type","button",3,"click"],["src","../../../../assets/imagenes/rock.svg"],["src","../../../../assets/imagenes/paper.svg"],["src","../../../../assets/imagenes/scissors.svg"],[1,"container","d-flex","justify-content-center"],[1,"row"],[1,"col-sm-auto"],["type","button",1,"btn","btn-primary","btn-lg","e22",3,"click"],["type","button",1,"btn","btn-secondary","btn-lg","e22",3,"click"],[1,"paranoverfoter"]],template:function(t,e){1&t&&(c.Qb(0,"marquee",0),c.qc(1,"Recomendaci\xf3n antes de jugar lee la informaci\xf3n del juego que est\xe1 por debajo."),c.Pb(),c.Qb(2,"div",1),c.Qb(3,"h1"),c.qc(4,"Piedra Papel o Tijera"),c.Pb(),c.Qb(5,"div",2),c.Mb(6,"img",3),c.Qb(7,"div"),c.qc(8),c.Pb(),c.Mb(9,"img",4),c.Pb(),c.Qb(10,"div",5),c.Qb(11,"button",6),c.Xb("click",function(){return e.clickpiedra()}),c.Mb(12,"img",7),c.Pb(),c.Qb(13,"button",6),c.Xb("click",function(){return e.clickpapel()}),c.Mb(14,"img",8),c.Pb(),c.Qb(15,"button",6),c.Xb("click",function(){return e.clicktijera()}),c.Mb(16,"img",9),c.Pb(),c.Pb(),c.Pb(),c.Qb(17,"div",10),c.Qb(18,"div",11),c.Qb(19,"div",12),c.Qb(20,"button",13),c.Xb("click",function(){return e.guardar()}),c.qc(21,"Guardar puntajes"),c.Pb(),c.Pb(),c.Qb(22,"div",12),c.Qb(23,"button",14),c.Xb("click",function(){return e.mostrar()}),c.qc(24,"Listar puntajes"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(25,"div",15),c.Qb(26,"H1"),c.qc(27,"INFORMACI\xd3N DEL JUEGO"),c.Pb(),c.Qb(28,"p"),c.qc(29,'A "Piedra, papel o tijeras" se juega de dos en dos. Los jugadores se deben poner uno frente al otro con una mano a la espalda y decir en alto: piedra, papel o tijera, justo al acabar la frase ense\xf1ar\xe1n las manos y ver\xe1n quien gana. Si los dos jugadores sacan la misma figura hay empate, tablas, no gana nadie '),c.Pb(),c.Pb()),2&t&&(c.Ab(6),c.fc("src",e.aca2,c.lc),c.Ab(2),c.sc(" ",e.variante," "),c.Ab(1),c.fc("src",e.aca,c.lc))},styles:["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{text-align:center}nav[_ngcontent-%COMP%]{background-color:#87ceeb}*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;font-family:sans-serif}footer[_ngcontent-%COMP%]{text-align:center;padding:10px}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;text-decoration:none}button[_ngcontent-%COMP%]{background-color:#ffe97d;border:4px solid #000;margin:5px}.r[_ngcontent-%COMP%]{max-width:420px;height:100vh;max-height:745px;margin:0 auto;background-color:#ffb74d;display:flex;flex-direction:column;justify-content:space-between;border:5px solid #000;box-shadow:5px 5px 5px rgba(0,0,0,.3)}#result[_ngcontent-%COMP%]{text-align:center}#result[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40%}#start-text[_ngcontent-%COMP%]{font-size:36px;padding:20px}#group-btn[_ngcontent-%COMP%]{display:flex;width:100%}#group-btn[_ngcontent-%COMP%] > button[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%}.moviendooo[_ngcontent-%COMP%]{margin-left:100px;margin-top:10px;margin-bottom:10px}.marque[_ngcontent-%COMP%]{padding-top:10px;font-size:large;background-color:#deb887}.paranoverfoter[_ngcontent-%COMP%]{height:22vh;background-color:#a9a9a9}.e22[_ngcontent-%COMP%]{background-color:#00f}"]}),t})()},{path:"tateti",component:(()=>{class t{constructor(t,e){var i;this.toastr=t,this.tatetiServicio=e,this.comenzar=!1,this.casilleros=new Array(9),this.ficha="X",this.contadorVitorias=0,this.contadorDerrotas=0,this.contadorEmpates=0,this.id="",this.tieneDatosCargados=!1,this.tatetiServicio.dbPath="/tateti",this.puntajes=new X,this.ver=localStorage.getItem("usuario"),this.ver=JSON.parse(this.ver),this.puntajes.email=this.ver.correo,this.email=null===(i=this.puntajes.email)||void 0===i?void 0:i.toString(),this.inicializarPuntajes(),this.getAll()}ngOnInit(){}jugar(t){if(!this.casilleros[t]){this.casilleros[t]=this.ficha;var e=document.getElementsByClassName("celda");for(let i=0;i<e.length;i++)if(i==t){e[i].setAttribute("value",this.ficha.toUpperCase());break}this.gano(this.ficha)?(this.contadorVitorias++,this.puntajes.victorias=this.contadorVitorias.toString(),console.log("GANASTE"),this.toastr.success("GANASTE QUE BIENN!!!!.:","SOS UN GROSO..!",{timeOut:2e3}),this.reiniciar()):this.empate()?(this.contadorEmpates++,this.puntajes.empate=this.contadorEmpates.toString(),this.toastr.warning("Empantaste!!!!.:","UPSS, QUE PENA..!",{timeOut:2e3}),this.reiniciar()):setTimeout(()=>this.juegaMaquina(),500)}}reiniciar(){var t=document.getElementsByClassName("celda");for(let e=0;e<t.length;e++)t[e].setAttribute("value","");this.casilleros=new Array(9)}empate(){let t=!0;for(let e=0;e<this.casilleros.length;e++)if(!this.casilleros[e]){t=!1;break}return t}juegaMaquina(){console.log("JUEGA MAQUINA");let t=!1,e=0;for(;!t;)e=Math.floor(9*Math.random()+0),this.casilleros[e]||(t=!0);this.casilleros[e]="O";var i=document.getElementsByClassName("celda");for(let s=0;s<i.length;s++)if(s==e){i[s].setAttribute("value","O".toUpperCase());break}this.gano("O")?(console.log("GANA LA MAQUINA"),this.contadorDerrotas++,this.puntajes.derrotas=this.contadorDerrotas.toString(),this.toastr.warning("UUUPSSS!!!!.:","UPSS, QUE PENA PERO PERDISTE..!",{timeOut:2e3}),this.reiniciar()):this.empate()&&this.reiniciar()}gano(t){return this.casilleros[0]==t&&this.casilleros[1]==t&&this.casilleros[2]==t||this.casilleros[3]==t&&this.casilleros[4]==t&&this.casilleros[5]==t||this.casilleros[6]==t&&this.casilleros[7]==t&&this.casilleros[8]==t||this.casilleros[0]==t&&this.casilleros[3]==t&&this.casilleros[6]==t||this.casilleros[1]==t&&this.casilleros[4]==t&&this.casilleros[7]==t||this.casilleros[2]==t&&this.casilleros[5]==t&&this.casilleros[8]==t||this.casilleros[0]==t&&this.casilleros[4]==t&&this.casilleros[8]==t||this.casilleros[2]==t&&this.casilleros[4]==t&&this.casilleros[6]==t}eligeFicha(t){this.ficha=t}inicializarPuntajes(){this.puntajes.derrotas="0",this.puntajes.victorias="0",this.puntajes.empate="0"}getAll(){this.tatetiServicio.getAll().valueChanges({idField:"propertyId"}).subscribe(t=>{for(var e of t)if(this.puntajes.email=this.email,e.email==this.puntajes.email){this.puntajesVista=e,this.tieneDatosCargados=!0,this.id=e.propertyId;break}})}guardar(){console.log(this.tieneDatosCargados),this.tieneDatosCargados?(this.puntajes.victorias=(+ +this.puntajes.victorias+ +this.puntajesVista.victorias).toString(),this.puntajes.derrotas=(+ +this.puntajes.derrotas+ +this.puntajesVista.derrotas).toString(),this.puntajes.empate=(+ +this.puntajes.empate+ +this.puntajesVista.empate).toString(),console.log(this.puntajes),console.log(this.puntajes),console.log(this.puntajes),this.tatetiServicio.update(this.id,this.puntajes).then(t=>{console.log("se modifico"+t)}),o.a.fire({position:"center",icon:"success",title:"Tus partidas est\xe1n guardadas",showConfirmButton:!1,timer:1500})):(this.tatetiServicio.create(this.puntajes),console.log("guardar"),o.a.fire({position:"center",icon:"success",title:"Tus partidas est\xe1n guardadas",showConfirmButton:!1,timer:1500})),this.inicializarPuntajes()}mostrar(){this.tieneDatosCargados||(this.puntajesVista=new X,this.puntajesVista.derrotas="",this.puntajesVista.email="",this.puntajesVista.empate="",this.puntajesVista.victorias=""),o.a.fire({title:"<strong>Partidas</strong>",icon:"info",html:'<table class="table"><thead><tr><th scope="col">Jugador</th><th scope="col">Victorias</th><th scope="col">Derrotas</th><th scope="col">Empates</th></tr></thead><tbody><tr><th scope="row">'+this.puntajesVista.email+"</th><td>"+this.puntajesVista.victorias+"</td><td>"+this.puntajesVista.derrotas+"</td><td>"+this.puntajesVista.empate+"</td></tr>"})}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(h.b),c.Lb(Z))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-tateti"]],decls:36,vars:0,consts:[[1,"pintar"],["behavior","","direction","alternate",1,"marque"],["id","jugadores"],["id","comp"],["id","hum"],["id","turno"],["id","tablero"],["type","button","id","boton1","name","boton1","value","",1,"celda",3,"click"],["type","button","id","boton2","name","boton2","value"," ",1,"celda",3,"click"],["type","button","id","boton3","name","boton3","value"," ",1,"celda",3,"click"],["type","button","id","boton4","name","boton4","value"," ",1,"celda",3,"click"],["type","button","id","boton5","name","boton5","value"," ",1,"celda",3,"click"],["type","button","id","boton6","name","boton6","value"," ",1,"celda",3,"click"],["type","button","id","boton7","name","boton7","value"," ",1,"celda",3,"click"],["type","button","id","boton8","name","boton8","value"," ",1,"celda",3,"click"],["type","button","id","boton9","name","boton9","value"," ",1,"celda",3,"click"],[1,"container","d-flex","justify-content-center"],[1,"row"],[1,"col-sm-auto"],["type","button",1,"btn","btn-primary","btn-lg",3,"click"],["type","button",1,"btn","btn-secondary","btn-lg",3,"click"],[1,"paranoverfoter"]],template:function(t,e){1&t&&(c.Qb(0,"div",0),c.Qb(1,"marquee",1),c.qc(2,"Recomendaci\xf3n antes de jugar lee la informaci\xf3n del juego que est\xe1 por debajo."),c.Pb(),c.Qb(3,"header"),c.Qb(4,"h1"),c.qc(5,"Ta Te Ti"),c.Pb(),c.Pb(),c.Qb(6,"section",2),c.Mb(7,"div",3),c.Mb(8,"div",4),c.Pb(),c.Mb(9,"section",5),c.Qb(10,"section",6),c.Qb(11,"div"),c.Qb(12,"input",7),c.Xb("click",function(){return e.jugar(0)}),c.Pb(),c.Qb(13,"input",8),c.Xb("click",function(){return e.jugar(1)}),c.Pb(),c.Qb(14,"input",9),c.Xb("click",function(){return e.jugar(2)}),c.Pb(),c.Pb(),c.Qb(15,"div"),c.Qb(16,"input",10),c.Xb("click",function(){return e.jugar(3)}),c.Pb(),c.Qb(17,"input",11),c.Xb("click",function(){return e.jugar(4)}),c.Pb(),c.Qb(18,"input",12),c.Xb("click",function(){return e.jugar(5)}),c.Pb(),c.Pb(),c.Qb(19,"div"),c.Qb(20,"input",13),c.Xb("click",function(){return e.jugar(6)}),c.Pb(),c.Qb(21,"input",14),c.Xb("click",function(){return e.jugar(7)}),c.Pb(),c.Qb(22,"input",15),c.Xb("click",function(){return e.jugar(8)}),c.Pb(),c.Pb(),c.Pb(),c.Qb(23,"div",16),c.Qb(24,"div",17),c.Qb(25,"div",18),c.Qb(26,"button",19),c.Xb("click",function(){return e.guardar()}),c.qc(27,"Guardar puntajes"),c.Pb(),c.Pb(),c.Qb(28,"div",18),c.Qb(29,"button",20),c.Xb("click",function(){return e.mostrar()}),c.qc(30,"Listar puntajes"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(31,"div",21),c.Qb(32,"H1"),c.qc(33,"INFORMACI\xd3N DEL JUEGO"),c.Pb(),c.Qb(34,"p"),c.qc(35,"REGLAS DEL JUEGO: El primer jugador coloca la ficha en cualquiera de los casilleros del tablero. El segundo har\xe1 lo mismo con su primera ficha. Se contin\xfaa las otras jugadas respetando los turnos, si el jugador consigue alinear tres marcas del mismo tipo, ese jugador hace \xa1TA \u2013 TE \u2013 TI! Y GANARA!!!!!!!!!!!\n"),c.Pb(),c.Pb(),c.Pb())},styles:['body[_ngcontent-%COMP%]{background-color:#209920}#turno[_ngcontent-%COMP%]{background-color:#ff0;margin:10px auto;padding:10px;width:238px;text-align:center;font-size:15pt;display:none}#tablero[_ngcontent-%COMP%]{height:248px;width:248px;margin:30px auto}.celda[_ngcontent-%COMP%]{float:left;background:#fff;height:80px;width:80px;border:1px solid grey;font-size:20pt;text-align:center}.celda[_ngcontent-%COMP%]:hover{background-color:#8f746c}#tablero[_ngcontent-%COMP%]:after{display:block;content:"";clear:both}#ficha[_ngcontent-%COMP%]{margin:0 auto;text-align:center}#ficha[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0}#ficha[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;background:#8f746c;padding:10px;border:2px solid;margin:10px auto;cursor:pointer}#jugadores[_ngcontent-%COMP%]{display:none;margin:0 auto;text-align:center;font-size:15pt;font-weight:700}.marcador[_ngcontent-%COMP%]{display:none;margin-left:30px}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{text-align:center}nav[_ngcontent-%COMP%]{background-color:#87ceeb}.centrar[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.centro[_ngcontent-%COMP%]{display:block;margin:auto}.divprincipal[_ngcontent-%COMP%]{background-color:#228b22}.fontt[_ngcontent-%COMP%]{font-size:50px}.costado[_ngcontent-%COMP%]{margin-left:10px}.deta[_ngcontent-%COMP%]{margin-left:50px;width:100px}.paranoverfoter[_ngcontent-%COMP%]{height:22vh;background-color:#a9a9a9}.marque[_ngcontent-%COMP%]{padding-top:10px;font-size:large;background-color:#deb887}.pintar[_ngcontent-%COMP%]{background-color:red}']}),t})()},{path:"memotest",component:U},{path:"adivinanumero",component:I}];let F=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({imports:[[a.e.forChild(J)],a.e]}),t})(),B=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({imports:[[s.b,F,b.e]]}),t})()}}]);