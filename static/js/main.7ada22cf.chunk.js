(this.webpackJsonpvov=this.webpackJsonpvov||[]).push([[0],{213:function(e,t,a){e.exports=a(357)},330:function(e,t,a){},357:function(e,t,a){"use strict";a.r(t);a(214),a(240),a(242),a(243),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(263),a(265),a(266),a(267),a(268),a(269),a(270),a(271),a(272),a(273),a(274),a(275),a(276),a(277),a(278),a(279),a(280),a(281),a(282);var n=a(0),l=a.n(n),c=a(81),r=a.n(c),i=a(27),o=a.n(i),s=a(82),h=a.n(s),u=a(129),d=a(24),m=a(134),p=a.n(m),g=a(61),f=a.n(g),E=(a(291),a(48)),v=a.n(E),C=a(36),b=a.n(C),y=a(37),k=a.n(y),O=a(23),_=a.n(O),x=a(56),j=a.n(x),F=a(62),S=a.n(F),D=a(30),P=a.n(D),B=a(63),U=a.n(B),w=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return l.a.createElement(b.a,{id:t},l.a.createElement(k.a,null,"\u0414\u043e\u0440\u043e\u0433\u0430 \u043f\u0430\u043c\u044f\u0442\u0438"),n&&l.a.createElement(j.a,{title:"User Data Fetched with VK Bridge"},l.a.createElement(S.a,{before:n.photo_200?l.a.createElement(U.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),l.a.createElement(j.a,{title:"Navigation Example"},l.a.createElement(P.a,null,l.a.createElement(_.a,{size:"xl",level:"2",onClick:a,"data-to":"album"},"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0444\u0430\u043c\u0438\u043b\u0438\u044e")),l.a.createElement(P.a,null,l.a.createElement(_.a,{size:"xl",level:"2",onClick:a,"data-to":"addinfo"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e \u0433\u0435\u0440\u043e\u044f")),l.a.createElement(P.a,null,l.a.createElement(_.a,{size:"xl",level:"2",onClick:a,"data-to":"Ranking"},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"))))},H=a(130),M=a(131),z=a(132),A=a(64),R=a(135),K=a(136),N=a(5),V=a(51),I=a.n(V),L=a(49),W=a.n(L),T=a(50),Y=a.n(T),G=Object(N.e)(),J=function(e){Object(K.a)(a,e);var t=Object(R.a)(a);function a(e){var n;return Object(M.a)(this,a),(n=t.call(this,e)).onChangeHandler=function(e){n.setState({FotoFile:e.target.files[0],loaded:0})},n.onChangeHandler2=function(e){n.setState({MailFile1:e.target.files[0],loaded:0})},n.state={Foto:null,FotoFile:null,Famili:null,Name:null,Surname:null,BirthDate:null,BirthPlace:null,CallPlace:null,CallYear:null,CallLocation:null,Ranking:null,DeathDate:null,History:null,OtherSite:null,MailFile:null,MailFile1:null},n.handleChange=n.handleChange.bind(Object(A.a)(n)),n}return Object(z.a)(a,[{key:"handleChange",value:function(e){var t=e.target;this.setState(Object(H.a)({},t.name,t.value))}},{key:"publish",value:function(){var e=new FormData;e.append("Foto",this.state.FotoFile),e.append("MailFile",this.state.MailFile1),e.append("Famili",this.state.Famili),e.append("Name",this.state.Name),e.append("Surname",this.state.Surname),e.append("BirthDate",this.state.BirthDate),e.append("BirthPlace",this.state.BirthPlace),e.append("CallPlace",this.state.CallPlace),e.append("CallYear",this.state.CallYear),e.append("CallLocation",this.state.CallLocation),e.append("Ranking",this.state.Ranking),e.append("DeathDate",this.state.DeathDate),e.append("History",this.state.History),e.append("OtherSite",this.state.OtherSite),e.append("id_user",this.props.id_user),v.a.post("https://skynets.space",e,{}).then((function(e){console.log(e.data)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(N.a,null,l.a.createElement(N.b,null,l.a.createElement(N.d,{type:"file",name:"Foto",placeholder:"\u0414\u043e\u044e\u0430\u0432\u044c\u0442\u0435 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",value:this.state.Foto,onChange:this.onChangeHandler}),l.a.createElement(N.d,{type:"text",name:"Famili",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",value:this.state.Famili,onChange:this.handleChange}),l.a.createElement(N.d,{type:"text",name:"Name",placeholder:"\u0418\u043c\u044f",value:this.state.Name,onChange:this.handleChange}),l.a.createElement(N.d,{type:"text",name:"Surname",placeholder:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",value:this.state.Surname,onChange:this.handleChange}),l.a.createElement(N.d,{type:"text",name:"BirthDate",placeholder:"\u0413\u043e\u0434 / \u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",value:this.state.BirthDate,onChange:this.handleChange}),l.a.createElement(N.d,{type:"text",name:"BirthPlace",placeholder:"\u041c\u0435\u0441\u0442\u043e \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f / \u041e\u0431\u043b\u0430\u0441\u0442\u044c",value:this.state.BirthPlace,onChange:this.handleChange}),l.a.createElement(N.d,{type:"text",name:"CallPlace",placeholder:"\u041c\u0435\u0441\u0442\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 / \u041e\u0431\u043b\u0430\u0441\u0442\u044c",value:this.state.CallPlace,onChange:this.handleChange}),l.a.createElement(N.d,{type:"text",name:"CallYear",placeholder:"\u0413\u043e\u0434 / \u0414\u0430\u0442\u0430 \u043f\u0440\u0438\u0437\u044b\u0432\u0430",value:this.state.CallYear,onChange:this.handleChange}),l.a.createElement(N.d,{type:"text",name:"CallLocation",placeholder:"\u041c\u0435\u0441\u0442\u043e \u0441\u043b\u0443\u0436\u0431\u044b",value:this.state.CallLocation,onChange:this.handleChange}),l.a.createElement(N.d,{type:"text",name:"Ranking",placeholder:"\u0412\u043e\u0438\u043d\u0441\u043a\u043e\u0435 \u0437\u0432\u0430\u043d\u0438\u0435",value:this.state.Ranking,onChange:this.handleChange}),l.a.createElement(N.d,{type:"text",name:"DeathDate",placeholder:"\u0413\u043e\u0434 / \u0414\u0430\u0442\u0430 \u0441\u043c\u0435\u0440\u0442\u0438",value:this.state.DeathDate,onChange:this.handleChange}),l.a.createElement(N.d,{type:"text",name:"History",placeholder:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0433\u0435\u0440\u043e\u044f",value:this.state.History,onChange:this.handleChange}),l.a.createElement(N.d,{type:"text",name:"OtherSite",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0439 \u0440\u0435\u0441\u0443\u0440\u0441",value:this.state.OtherSite,onChange:this.handleChange}),l.a.createElement(N.d,{type:"file",name:"MailFile",placeholder:"\u041f\u0438\u0441\u044c\u043c\u0430 \u0433\u0435\u0440\u043e\u044f",value:this.state.MailFile,onChange:this.onChangeHandler2}),l.a.createElement(_.a,{size:"xl",level:"2",value:"Send",onClick:this.publish()},"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"))))}}]),a}(l.a.Component),q=function(e){return l.a.createElement(b.a,{id:e.id},l.a.createElement(k.a,{left:l.a.createElement(I.a,{onClick:e.go,"data-to":"home"},G===N.c?l.a.createElement(W.a,null):l.a.createElement(Y.a,null))},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),e.fetchedUser.id,l.a.createElement(J,{id_user:e.fetchedUser.id}),l.a.createElement(P.a,null,l.a.createElement(_.a,{size:"xl",level:"2",onClick:e.go,"data-to":"home"},"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e")))},Q=(a(330),a(83)),X=a.n(Q),Z=a(133),$=a.n(Z),ee=Object(N.e)();function te(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(e.last_name),o=Object(d.a)(i,2),s=o[0],h=o[1],u=Object(n.useState)(0),m=Object(d.a)(u,2),p=m[0],g=m[1];function f(e,t){return null==e?t:e}function E(e){return e.Lastname+" "+e.Firstname+" "+e.Patronymic+"\u0442\u0435\n \u0417\u0432\u0430\u043d\u0438\u0435:"+(t=e.Rank,a="\u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e",""==t?a:t)+" ";var t,a}return l.a.createElement("div",null,l.a.createElement(N.d,{type:"text",name:"FIO",placeholder:"\u0424\u0418\u041e",value:s,onChange:function(e){return h(e.target.value)}}),l.a.createElement(P.a,null,l.a.createElement(_.a,{size:"xl",level:"2",onClick:function(){var e="https://skynets.space/hero?search="+s;v.a.get(e).then((function(e){console.log(e.data),r(e.data.items),g(e.data.count)})).catch((function(e){console.log(e)})).finally((function(){}))}},"\u041f\u043e\u0438\u0441\u043a \u0433\u0435\u0440\u043e\u0435\u0432")),l.a.createElement("h1",null,"\u041d\u0430\u0439\u0434\u0435\u043d\u043e \u0433\u0435\u0440\u043e\u0435\u0432: ",p),l.a.createElement("div",{class:"flex"},c.map((function(t){return l.a.createElement("div",{class:"item","data-key":t.id},l.a.createElement("img",{src:f(t.MainPhoto,X.a)}),l.a.createElement("p",null,E(t)),l.a.createElement(_.a,{size:"xl",level:"2",onClick:e.share,"data-count":p,"data-mes":E(t),"data-img":f(t.MainPhoto,X.a)},l.a.createElement($.a,null),"   \u0433\u0435\u0440\u043e\u044f"))}))))}var ae=function(e){return l.a.createElement(b.a,{id:e.id},l.a.createElement(k.a,{left:l.a.createElement(I.a,{onClick:e.go,"data-to":"home"},ee===N.c?l.a.createElement(W.a,null):l.a.createElement(Y.a,null))},"\u0413\u0430\u043b\u043b\u0435\u0440\u0435\u044f \u0433\u0435\u0440\u043e\u0435\u0432"),l.a.createElement(te,{last_name:e.fetchedUser.last_name,share:e.share}))},ne=a(84),le=a.n(ne),ce=Object(N.e)();function re(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],r=a[1];return l.a.createElement("div",null,void le.a.get("https://skynets.space/wall").then((function(e){console.log(e),r(e.data)})).catch((function(e){console.log(e)})).finally((function(){})),l.a.createElement("div",{class:"flex"},c.map((function(e){return l.a.createElement(j.a,{title:"User Data Fetched with VK Bridge"},l.a.createElement(S.a,{before:e.photo_200?l.a.createElement(U.a,{src:e.photo_200}):null,description:"\u0420\u0435\u043f\u043e\u0441\u0442\u043e\u0432 \u0441\u0434\u0435\u043b\u0430\u043d\u043e: "+e.count+"\n\r \u0413\u0435\u0440\u043e\u0438\u0447\u043d\u043e\u0441\u0442\u044c \u0444\u0430\u043c\u0438\u043b\u0438\u0438:"+e.hero_count},"".concat(e.first_name," ").concat(e.last_name)))}))))}var ie=function(e){return l.a.createElement(b.a,{id:e.id},l.a.createElement(k.a,{left:l.a.createElement(I.a,{onClick:e.go,"data-to":"home"},ce===N.c?l.a.createElement(W.a,null):l.a.createElement(Y.a,null))},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"),l.a.createElement(re,{last_name:e.fetchedUser.last_name,share:e.share}))},oe=function(){var e=Object(n.useState)("home"),t=Object(d.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),i=Object(d.a)(r,2),s=i[0],m=i[1],g=Object(n.useState)(null),E=Object(d.a)(g,2),C=E[0],b=E[1],y=Object(n.useState)(l.a.createElement(f.a,{size:"large"})),k=Object(d.a)(y,2),O=k[0],_=k[1];Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:return t=e.sent,e.next=5,o.a.send("VKWebAppGetAuthToken",{app_id:7384847,scope:"friends,status,photos"});case 5:a=e.sent,m(t),b(a),_(null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var l=document.createAttribute("scheme");l.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(l)}})),function(){e.apply(this,arguments)}()}),[]);var x=function(e){c(e.currentTarget.dataset.to)};return l.a.createElement(p.a,{activePanel:a,popout:O},l.a.createElement(w,{id:"home",fetchedUser:s,go:x}),l.a.createElement(ae,{id:"album",fetchedUser:s,share:function(e){var t=e.currentTarget.dataset.count;console.log(C.access_token),o.a.send("VKWebAppShowWallPostBox",{message:e.currentTarget.dataset.mes,attachments:e.currentTarget.dataset.img}).then((function(e){var a=new FormData;a.append("user_id",s.id),a.append("hero_count",t),a.append("post_id",e.post_id),a.append("first_name",s.first_name),a.append("last_name",s.last_name),a.append("photo_200",s.photo_200),a.append("user_acces_token",C.access_token),v.a.post("https://skynets.space/wall",a,{}).then((function(e){console.log(e.data)}))}))},go:x}),l.a.createElement(q,{id:"AddInfo",fetchedUser:s,go:x}),l.a.createElement(ie,{id:"Ranking",fetchedUser:s,go:x}))};o.a.send("VKWebAppInit"),r.a.render(l.a.createElement(oe,null),document.getElementById("root"))},83:function(e,t,a){e.exports=a.p+"static/media/nophoto.9dd537f0.jpg"}},[[213,1,2]]]);
//# sourceMappingURL=main.7ada22cf.chunk.js.map