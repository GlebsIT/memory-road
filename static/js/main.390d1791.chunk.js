(this.webpackJsonpvov=this.webpackJsonpvov||[]).push([[0],{213:function(e,t,a){e.exports=a(357)},330:function(e,t,a){},357:function(e,t,a){"use strict";a.r(t);a(214),a(240),a(242),a(243),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(263),a(265),a(266),a(267),a(268),a(269),a(270),a(271),a(272),a(273),a(274),a(275),a(276),a(277),a(278),a(279),a(280),a(281),a(282);var n=a(0),l=a.n(n),c=a(81),r=a.n(c),i=a(27),s=a.n(i),o=a(82),h=a.n(o),u=a(129),d=a(24),m=a(134),p=a.n(m),g=a(61),f=a.n(g),E=(a(291),a(48)),v=a.n(E),C=a(36),b=a.n(C),y=a(37),k=a.n(y),_=a(23),O=a.n(_),F=a(56),j=a.n(F),x=a(62),S=a.n(x),D=a(30),P=a.n(D),B=a(63),w=a.n(B),U=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return l.a.createElement(b.a,{id:t},l.a.createElement(k.a,null,"\u0414\u043e\u0440\u043e\u0433\u0430 \u043f\u0430\u043c\u044f\u0442\u0438"),n&&l.a.createElement(j.a,{title:"User Data Fetched with VK Bridge"},l.a.createElement(S.a,{before:n.photo_200?l.a.createElement(w.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),l.a.createElement(j.a,{title:"Navigation Example"},l.a.createElement(P.a,null,l.a.createElement(O.a,{size:"xl",level:"2",onClick:a,"data-to":"album"},"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0444\u0430\u043c\u0438\u043b\u0438\u044e")),l.a.createElement(P.a,null,l.a.createElement(O.a,{size:"xl",level:"2",onClick:a,"data-to":"AddInfo"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e \u0433\u0435\u0440\u043e\u044f")),l.a.createElement(P.a,null,l.a.createElement(O.a,{size:"xl",level:"2",onClick:a,"data-to":"Ranking"},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"))))},A=a(130),H=a(131),M=a(132),N=a(64),z=a(135),L=a(136),R=a(5),I=a(51),K=a.n(I),V=a(49),W=a.n(V),T=a(50),Y=a.n(T),G=Object(R.e)(),J=function(e){Object(L.a)(a,e);var t=Object(z.a)(a);function a(e){var n;return Object(H.a)(this,a),(n=t.call(this,e)).onChangeHandler=function(e){n.setState({FotoFile:e.target.files[0],loaded:0})},n.onChangeHandler2=function(e){n.setState({MailFile1:e.target.files[0],loaded:0})},n.state={Foto:null,FotoFile:null,Famili:null,Name:null,Surname:null,BirthDate:null,BirthPlace:null,CallPlace:null,CallYear:null,CallLocation:null,Ranking:null,DeathDate:null,History:null,OtherSite:null,MailFile:null,MailFile1:null},n.handleChange=n.handleChange.bind(Object(N.a)(n)),n}return Object(M.a)(a,[{key:"handleChange",value:function(e){var t=e.target;this.setState(Object(A.a)({},t.name,t.value))}},{key:"publish",value:function(){var e=new FormData;e.append("Foto",this.state.FotoFile),e.append("MailFile",this.state.MailFile1),e.append("Famili",this.state.Famili),e.append("Name",this.state.Name),e.append("Surname",this.state.Surname),e.append("BirthDate",this.state.BirthDate),e.append("BirthPlace",this.state.BirthPlace),e.append("CallPlace",this.state.CallPlace),e.append("CallYear",this.state.CallYear),e.append("CallLocation",this.state.CallLocation),e.append("Ranking",this.state.Ranking),e.append("DeathDate",this.state.DeathDate),e.append("History",this.state.History),e.append("OtherSite",this.state.OtherSite),e.append("id_user",this.props.id_user),v.a.post("https://skynets.space",e,{}).then((function(e){console.log(e.data)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(R.a,null,l.a.createElement(R.b,null,l.a.createElement(R.d,{type:"file",name:"Foto",placeholder:"\u0414\u043e\u044e\u0430\u0432\u044c\u0442\u0435 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",value:this.state.Foto,onChange:this.onChangeHandler}),l.a.createElement(R.d,{type:"text",name:"Famili",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",value:this.state.Famili,onChange:this.handleChange}),l.a.createElement(R.d,{type:"text",name:"Name",placeholder:"\u0418\u043c\u044f",value:this.state.Name,onChange:this.handleChange}),l.a.createElement(R.d,{type:"text",name:"Surname",placeholder:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",value:this.state.Surname,onChange:this.handleChange}),l.a.createElement(R.d,{type:"text",name:"BirthDate",placeholder:"\u0413\u043e\u0434 / \u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",value:this.state.BirthDate,onChange:this.handleChange}),l.a.createElement(R.d,{type:"text",name:"BirthPlace",placeholder:"\u041c\u0435\u0441\u0442\u043e \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f / \u041e\u0431\u043b\u0430\u0441\u0442\u044c",value:this.state.BirthPlace,onChange:this.handleChange}),l.a.createElement(R.d,{type:"text",name:"CallPlace",placeholder:"\u041c\u0435\u0441\u0442\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 / \u041e\u0431\u043b\u0430\u0441\u0442\u044c",value:this.state.CallPlace,onChange:this.handleChange}),l.a.createElement(R.d,{type:"text",name:"CallYear",placeholder:"\u0413\u043e\u0434 / \u0414\u0430\u0442\u0430 \u043f\u0440\u0438\u0437\u044b\u0432\u0430",value:this.state.CallYear,onChange:this.handleChange}),l.a.createElement(R.d,{type:"text",name:"CallLocation",placeholder:"\u041c\u0435\u0441\u0442\u043e \u0441\u043b\u0443\u0436\u0431\u044b",value:this.state.CallLocation,onChange:this.handleChange}),l.a.createElement(R.d,{type:"text",name:"Ranking",placeholder:"\u0412\u043e\u0438\u043d\u0441\u043a\u043e\u0435 \u0437\u0432\u0430\u043d\u0438\u0435",value:this.state.Ranking,onChange:this.handleChange}),l.a.createElement(R.d,{type:"text",name:"DeathDate",placeholder:"\u0413\u043e\u0434 / \u0414\u0430\u0442\u0430 \u0441\u043c\u0435\u0440\u0442\u0438",value:this.state.DeathDate,onChange:this.handleChange}),l.a.createElement(R.d,{type:"text",name:"History",placeholder:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0433\u0435\u0440\u043e\u044f",value:this.state.History,onChange:this.handleChange}),l.a.createElement(R.d,{type:"text",name:"OtherSite",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0439 \u0440\u0435\u0441\u0443\u0440\u0441",value:this.state.OtherSite,onChange:this.handleChange}),l.a.createElement(R.d,{type:"file",name:"MailFile",placeholder:"\u041f\u0438\u0441\u044c\u043c\u0430 \u0433\u0435\u0440\u043e\u044f",value:this.state.MailFile,onChange:this.onChangeHandler2}),l.a.createElement(O.a,{size:"xl",level:"2",value:"Send",onClick:this.publish()},"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"))))}}]),a}(l.a.Component),q=function(e){return l.a.createElement(b.a,{id:e.id},l.a.createElement(k.a,{left:l.a.createElement(K.a,{onClick:e.go,"data-to":"home"},G===R.c?l.a.createElement(W.a,null):l.a.createElement(Y.a,null))},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),e.fetchedUser.id,l.a.createElement(J,{id_user:e.fetchedUser.id}),l.a.createElement(P.a,null,l.a.createElement(O.a,{size:"xl",level:"2",onClick:e.go,"data-to":"home"},"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e")))},Q=(a(330),a(83)),X=a.n(Q),Z=a(133),$=a.n(Z),ee=Object(R.e)();function te(e){var t,a=Object(n.useState)([]),c=Object(d.a)(a,2),r=c[0],i=c[1],s=Object(n.useState)(e.last_name),o=Object(d.a)(s,2),h=o[0],u=o[1],m=Object(n.useState)(0),p=Object(d.a)(m,2),g=p[0],f=p[1];function E(e,t){return null==e?t:e}function C(e){return e.Lastname+" "+e.Firstname+" "+e.Patronymic+"\n \u0417\u0432\u0430\u043d\u0438\u0435:"+(t=e.Rank,a="\u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e",""==t?a:t)+" ";var t,a}return l.a.createElement("div",null,l.a.createElement(R.d,{type:"text",name:"FIO",placeholder:"\u0424\u0418\u041e",value:h,onChange:function(e){return u(e.target.value)}}),l.a.createElement(P.a,null,l.a.createElement(O.a,{style:{background:"#33bcb5;"},size:"xl",level:"2",onClick:function(){var e="https://skynets.space/hero?search="+h;v.a.get(e).then((function(e){console.log(e.data),i(e.data.items),f(e.data.count)})).catch((function(e){console.log(e)})).finally((function(){}))}},"\u041f\u043e\u0438\u0441\u043a \u0433\u0435\u0440\u043e\u0435\u0432")),l.a.createElement("div",{class:"infoLastName"},l.a.createElement("h1",null,"\u041d\u0430\u0439\u0434\u0435\u043d\u043e \u0433\u0435\u0440\u043e\u0435\u0432: ",g," "),l.a.createElement("button",{class:"button_share",onClick:e.share,"data-count":g,"data-mes":(t=g,"\u0421 \u0432\u0430\u0448\u0435\u0439 \u0444\u0430\u043c\u0438\u043b\u0438\u0435\u0439, \u043d\u0430\u0439\u0434\u0435\u043d\u043e \u0433\u0435\u0440\u043e\u0435\u0432:"+t+"\r\n \u0421\u0430\u0439\u0442 \u043e\u0442\u043a\u0443\u0434\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0431\u0435\u0440\u0435\u0442\u0441\u044f: https://foto.pamyat-naroda.ru/\r\n \u041d\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435: https://vk.com/away.php?to=https%3A%2F%2Fvk.com%2Fapp7384847_154621764&el=snippet"),"data-img":"http://skynets.space/name/heroyLastName.jpg"},"\u0420\u0435\u043f\u043e\u0441\u0442\u043d\u0443\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442")),l.a.createElement("div",{class:"flex"},r.map((function(t){return l.a.createElement("div",{class:"item","data-key":t.id},l.a.createElement("img",{src:E(t.MainPhoto,X.a)}),l.a.createElement("p",null,C(t)),l.a.createElement(O.a,{size:"xl",level:"2",onClick:e.share,"data-count":g,"data-mes":C(t),"data-img":E(t.MainPhoto,X.a)},l.a.createElement($.a,null),"   \u0433\u0435\u0440\u043e\u044f"))}))))}var ae=function(e){return l.a.createElement(b.a,{id:e.id},l.a.createElement(k.a,{left:l.a.createElement(K.a,{onClick:e.go,"data-to":"home"},ee===R.c?l.a.createElement(W.a,null):l.a.createElement(Y.a,null))},"\u0413\u0430\u043b\u043b\u0435\u0440\u0435\u044f \u0433\u0435\u0440\u043e\u0435\u0432"),l.a.createElement(te,{last_name:e.fetchedUser.last_name,share:e.share}))},ne=a(84),le=a.n(ne),ce=Object(R.e)();function re(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],r=a[1];return l.a.createElement("div",null,void le.a.get("https://skynets.space/wall").then((function(e){console.log(e),r(e.data)})).catch((function(e){console.log(e)})).finally((function(){})),l.a.createElement("div",{class:"flex"},c.map((function(e){return l.a.createElement(j.a,{style:{width:"100%"},title:"User Data Fetched with VK Bridge"},l.a.createElement(S.a,{before:e.photo_200?l.a.createElement(w.a,{src:e.photo_200}):null,description:"\u0420\u0435\u043f\u043e\u0441\u0442\u043e\u0432 \u0441\u0434\u0435\u043b\u0430\u043d\u043e: "+e.count+"\n\r \u0413\u0435\u0440\u043e\u0438\u0447\u043d\u043e\u0441\u0442\u044c \u0444\u0430\u043c\u0438\u043b\u0438\u0438:"+e.hero_count},l.a.createElement("p",null,"".concat(e.first_name," ").concat(e.last_name))))}))))}var ie=function(e){return l.a.createElement(b.a,{id:e.id},l.a.createElement(k.a,{left:l.a.createElement(K.a,{onClick:e.go,"data-to":"home"},ce===R.c?l.a.createElement(W.a,null):l.a.createElement(Y.a,null))},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"),l.a.createElement(re,{last_name:e.fetchedUser.last_name,share:e.share}))},se=function(){var e=Object(n.useState)("home"),t=Object(d.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),i=Object(d.a)(r,2),o=i[0],m=i[1],g=Object(n.useState)(null),E=Object(d.a)(g,2),C=E[0],b=E[1],y=Object(n.useState)(l.a.createElement(f.a,{size:"large"})),k=Object(d.a)(y,2),_=k[0],O=k[1];Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.send("VKWebAppGetUserInfo");case 2:return t=e.sent,e.next=5,s.a.send("VKWebAppGetAuthToken",{app_id:7384847,scope:"friends,status,photos"});case 5:a=e.sent,m(t),b(a),O(null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var l=document.createAttribute("scheme");l.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(l)}})),function(){e.apply(this,arguments)}()}),[]);var F=function(e){c(e.currentTarget.dataset.to)};return l.a.createElement(p.a,{activePanel:a,popout:_},l.a.createElement(U,{id:"home",fetchedUser:o,go:F}),l.a.createElement(ae,{id:"album",fetchedUser:o,share:function(e){var t=e.currentTarget.dataset.count;console.log(C.access_token),s.a.send("VKWebAppShowWallPostBox",{message:e.currentTarget.dataset.mes,attachments:e.currentTarget.dataset.img}).then((function(e){var a=new FormData;a.append("user_id",o.id),a.append("hero_count",t),a.append("post_id",e.post_id),a.append("first_name",o.first_name),a.append("last_name",o.last_name),a.append("photo_200",o.photo_200),a.append("user_acces_token",C.access_token),v.a.post("https://skynets.space/wall",a,{}).then((function(e){console.log(e.data)}))}))},go:F}),l.a.createElement(q,{id:"AddInfo",fetchedUser:o,go:F}),l.a.createElement(ie,{id:"Ranking",fetchedUser:o,go:F}))};s.a.send("VKWebAppInit"),r.a.render(l.a.createElement(se,null),document.getElementById("root"))},83:function(e,t,a){e.exports=a.p+"static/media/nophoto.9dd537f0.jpg"}},[[213,1,2]]]);
//# sourceMappingURL=main.390d1791.chunk.js.map