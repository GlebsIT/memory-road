(this.webpackJsonpvov=this.webpackJsonpvov||[]).push([[0],{133:function(e,t,a){e.exports=a.p+"static/media/nophoto.9dd537f0.jpg"},214:function(e,t,a){e.exports=a(359)},309:function(e,t,a){},327:function(e,t,a){},359:function(e,t,a){"use strict";a.r(t);a(215),a(241),a(243),a(244),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(263),a(264),a(266),a(267),a(268),a(269),a(270),a(271),a(272),a(273),a(274),a(275),a(276),a(277),a(278),a(279),a(280),a(281),a(282),a(283);var n=a(0),l=a.n(n),c=a(80),r=a.n(c),s=a(26),o=a.n(s),i=a(83),h=a.n(i),u=a(129),m=a(23),d=a(135),p=a.n(d),g=a(61),E=a.n(g),f=(a(292),a(48)),v=a.n(f),C=a(35),b=a.n(C),y=a(36),k=a.n(y),_=a(62),O=a.n(_),F=a(29),j=a.n(F),x=(a(309),a(49)),S=a.n(x),D=function(e){var t=e.id,a=e.go;e.fetchedUser;return l.a.createElement(b.a,{id:t},l.a.createElement(k.a,null,"\u0414\u043e\u0440\u043e\u0433\u0430 \u043f\u0430\u043c\u044f\u0442\u0438"),l.a.createElement(O.a,{title:"Navigation Example"},l.a.createElement(j.a,null,l.a.createElement("button",{class:"button_elements",onClick:a,"data-to":"album"},"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0444\u0430\u043c\u0438\u043b\u0438\u044e")),l.a.createElement(j.a,null,l.a.createElement("button",{class:"button_elements",onClick:a,"data-to":"AddInfo"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e \u0433\u0435\u0440\u043e\u044f")),l.a.createElement(j.a,null,l.a.createElement("button",{class:"button_elements",onClick:a,"data-to":"Ranking"},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"))),l.a.createElement("div",{class:"logo"},l.a.createElement("img",{src:S.a})))},P=a(130),B=a(131),w=a(132),U=a(63),A=a(136),H=a(137),N=a(5),L=a(52),M=a.n(L),R=a(50),I=a.n(R),K=a(51),V=a.n(K),W=a(47),T=a.n(W),Y=Object(N.e)(),z=function(e){Object(H.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(B.a)(this,a),(n=t.call(this,e)).onChangeHandler=function(e){n.setState({FotoFile:e.target.files[0],loaded:0})},n.onChangeHandler2=function(e){n.setState({MailFile1:e.target.files[0],loaded:0})},n.state={Foto:null,FotoFile:null,Famili:null,Name:null,Surname:null,BirthDate:null,BirthPlace:null,CallPlace:null,CallYear:null,CallLocation:null,Ranking:null,DeathDate:null,History:null,OtherSite:null,MailFile:null,MailFile1:null},n.handleChange=n.handleChange.bind(Object(U.a)(n)),n}return Object(w.a)(a,[{key:"handleChange",value:function(e){var t=e.target;this.setState(Object(P.a)({},t.name,t.value))}},{key:"publish",value:function(){var e=new FormData;e.append("Foto",this.state.FotoFile),e.append("MailFile",this.state.MailFile1),e.append("Famili",this.state.Famili),e.append("Name",this.state.Name),e.append("Surname",this.state.Surname),e.append("BirthDate",this.state.BirthDate),e.append("BirthPlace",this.state.BirthPlace),e.append("CallPlace",this.state.CallPlace),e.append("CallYear",this.state.CallYear),e.append("CallLocation",this.state.CallLocation),e.append("Ranking",this.state.Ranking),e.append("DeathDate",this.state.DeathDate),e.append("History",this.state.History),e.append("OtherSite",this.state.OtherSite),e.append("id_user",this.props.id_user),v.a.post("https://skynets.space",e,{}).then((function(e){console.log(e.data)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(N.a,null,l.a.createElement(N.b,null,l.a.createElement(N.d,{type:"file",name:"Foto",placeholder:"\u0414\u043e\u044e\u0430\u0432\u044c\u0442\u0435 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",value:this.state.Foto,onChange:this.onChangeHandler}),l.a.createElement(N.d,{type:"text",name:"Famili",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",value:this.state.Famili,onChange:this.handleChange}),l.a.createElement(N.d,{type:"text",name:"Name",placeholder:"\u0418\u043c\u044f",value:this.state.Name,onChange:this.handleChange}),l.a.createElement(N.d,{type:"text",name:"Surname",placeholder:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",value:this.state.Surname,onChange:this.handleChange}),l.a.createElement(N.d,{type:"text",name:"BirthDate",placeholder:"\u0413\u043e\u0434 / \u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",value:this.state.BirthDate,onChange:this.handleChange}),l.a.createElement(N.d,{type:"text",name:"BirthPlace",placeholder:"\u041c\u0435\u0441\u0442\u043e \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f / \u041e\u0431\u043b\u0430\u0441\u0442\u044c",value:this.state.BirthPlace,onChange:this.handleChange}),l.a.createElement(N.d,{type:"text",name:"CallPlace",placeholder:"\u041c\u0435\u0441\u0442\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 / \u041e\u0431\u043b\u0430\u0441\u0442\u044c",value:this.state.CallPlace,onChange:this.handleChange}),l.a.createElement(N.d,{type:"text",name:"CallYear",placeholder:"\u0413\u043e\u0434 / \u0414\u0430\u0442\u0430 \u043f\u0440\u0438\u0437\u044b\u0432\u0430",value:this.state.CallYear,onChange:this.handleChange}),l.a.createElement(N.d,{type:"text",name:"CallLocation",placeholder:"\u041c\u0435\u0441\u0442\u043e \u0441\u043b\u0443\u0436\u0431\u044b",value:this.state.CallLocation,onChange:this.handleChange}),l.a.createElement(N.d,{type:"text",name:"Ranking",placeholder:"\u0412\u043e\u0438\u043d\u0441\u043a\u043e\u0435 \u0437\u0432\u0430\u043d\u0438\u0435",value:this.state.Ranking,onChange:this.handleChange}),l.a.createElement(N.d,{type:"text",name:"DeathDate",placeholder:"\u0413\u043e\u0434 / \u0414\u0430\u0442\u0430 \u0441\u043c\u0435\u0440\u0442\u0438",value:this.state.DeathDate,onChange:this.handleChange}),l.a.createElement(N.d,{type:"text",name:"History",placeholder:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0433\u0435\u0440\u043e\u044f",value:this.state.History,onChange:this.handleChange}),l.a.createElement(N.d,{type:"text",name:"OtherSite",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0439 \u0440\u0435\u0441\u0443\u0440\u0441",value:this.state.OtherSite,onChange:this.handleChange}),l.a.createElement(N.d,{type:"file",name:"MailFile",placeholder:"\u041f\u0438\u0441\u044c\u043c\u0430 \u0433\u0435\u0440\u043e\u044f",value:this.state.MailFile,onChange:this.onChangeHandler2}),l.a.createElement(T.a,{size:"xl",level:"2",value:"Send",onClick:this.publish()},"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"))))}}]),a}(l.a.Component),G=function(e){return l.a.createElement(b.a,{id:e.id},l.a.createElement(k.a,{left:l.a.createElement(M.a,{onClick:e.go,"data-to":"home"},Y===N.c?l.a.createElement(I.a,null):l.a.createElement(V.a,null))},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),e.fetchedUser.id,l.a.createElement(z,{id_user:e.fetchedUser.id}),l.a.createElement(j.a,null,l.a.createElement(T.a,{size:"xl",level:"2",onClick:e.go,"data-to":"home"},"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e")))},J=(a(327),a(133)),q=a.n(J),Q=a(134),X=a.n(Q),Z=Object(N.e)();function $(e){var t,a=Object(n.useState)([]),c=Object(m.a)(a,2),r=c[0],s=c[1],o=Object(n.useState)(e.last_name),i=Object(m.a)(o,2),h=i[0],u=i[1],d=Object(n.useState)(0),p=Object(m.a)(d,2),g=p[0],E=p[1];function f(){var e="https://skynets.space/hero?search="+h;v.a.get(e).then((function(e){console.log(e.data),s(e.data.items),E(e.data.count)})).catch((function(e){console.log(e)})).finally((function(){}))}return l.a.createElement("div",null,l.a.createElement(N.d,{type:"text",name:"FIO",placeholder:"\u0424\u0418\u041e",value:h,onChange:function(e){return u(e.target.value)}}),l.a.createElement(j.a,null,l.a.createElement("button",{class:"button_herou",onClick:f},"\u041f\u043e\u0438\u0441\u043a \u0433\u0435\u0440\u043e\u0435\u0432")),l.a.createElement("div",{class:"infoLastName"},l.a.createElement("h1",null,"\u041d\u0430\u0439\u0434\u0435\u043d\u043e \u0433\u0435\u0440\u043e\u0435\u0432: ",g," "),l.a.createElement("button",{class:"button_share",onClick:e.share,"data-count":g,"data-mes":(t=g,"\u0421 \u0432\u0430\u0448\u0435\u0439 \u0444\u0430\u043c\u0438\u043b\u0438\u0435\u0439, \u043d\u0430\u0439\u0434\u0435\u043d\u043e \u0433\u0435\u0440\u043e\u0435\u0432:"+t+"\r\n \u0421\u0430\u0439\u0442 \u043e\u0442\u043a\u0443\u0434\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0431\u0435\u0440\u0435\u0442\u0441\u044f: https://foto.pamyat-naroda.ru/\r\n \u041d\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435: https://vk.com/away.php?to=https%3A%2F%2Fvk.com%2Fapp7384847_154621764&el=snippet"),"data-img":"http://skynets.space/name/heroyLastName.jpg"},"\u0420\u0435\u043f\u043e\u0441\u0442\u043d\u0443\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442")),l.a.createElement("div",{class:"flex"},r.map((function(e){return l.a.createElement("div",{class:"item","data-key":e.id},l.a.createElement("img",{src:(t=e.MainPhoto,a=q.a,null==t?a:t)}),l.a.createElement("p",null,function(e){return e.Lastname+" "+e.Firstname+" "+e.Patronymic+"\n \u0417\u0432\u0430\u043d\u0438\u0435:"+(t=e.Rank,a="\u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e",""==t?a:t)+" ";var t,a}(e)),l.a.createElement("button",{class:"button_elements",onClick:f},l.a.createElement(X.a,null)," \u0433\u0435\u0440\u043e\u044f"));var t,a}))),l.a.createElement("div",{class:"logo"},l.a.createElement("img",{src:S.a})))}var ee=function(e){return l.a.createElement(b.a,{id:e.id},l.a.createElement(k.a,{left:l.a.createElement(M.a,{onClick:e.go,"data-to":"home"},Z===N.c?l.a.createElement(I.a,null):l.a.createElement(V.a,null))}),l.a.createElement($,{last_name:e.fetchedUser.last_name,share:e.share}))},te=a(84),ae=a.n(te),ne=a(81),le=a.n(ne),ce=a(82),re=a.n(ce),se=Object(N.e)();function oe(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],r=a[1];return l.a.createElement("div",null,void ae.a.get("https://skynets.space/wall").then((function(e){console.log(e),r(e.data)})).catch((function(e){console.log(e)})).finally((function(){})),l.a.createElement("div",{class:"flex"},c.map((function(e){return l.a.createElement(O.a,{style:{width:"100%"},title:"User Data Fetched with VK Bridge"},l.a.createElement(le.a,{before:e.photo_200?l.a.createElement(re.a,{src:e.photo_200}):null,description:"\u0420\u0435\u043f\u043e\u0441\u0442\u043e\u0432 \u0441\u0434\u0435\u043b\u0430\u043d\u043e: "+e.count+"\n\r \u0413\u0435\u0440\u043e\u0438\u0447\u043d\u043e\u0441\u0442\u044c \u0444\u0430\u043c\u0438\u043b\u0438\u0438:"+e.hero_count},l.a.createElement("p",null,"".concat(e.first_name," ").concat(e.last_name))))}))),l.a.createElement("div",{class:"logo"},l.a.createElement("img",{src:S.a})))}var ie=function(e){return l.a.createElement(b.a,{id:e.id},l.a.createElement(k.a,{left:l.a.createElement(M.a,{onClick:e.go,"data-to":"home"},se===N.c?l.a.createElement(I.a,null):l.a.createElement(V.a,null))},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"),l.a.createElement(oe,{last_name:e.fetchedUser.last_name,share:e.share}))},he=function(){var e=Object(n.useState)("home"),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),s=Object(m.a)(r,2),i=s[0],d=s[1],g=Object(n.useState)(null),f=Object(m.a)(g,2),C=f[0],b=f[1],y=Object(n.useState)(l.a.createElement(E.a,{size:"large"})),k=Object(m.a)(y,2),_=k[0],O=k[1];Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:return t=e.sent,e.next=5,o.a.send("VKWebAppGetAuthToken",{app_id:7384847,scope:"friends,status,photos"});case 5:a=e.sent,d(t),b(a),O(null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var l=document.createAttribute("scheme");l.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(l)}})),function(){e.apply(this,arguments)}()}),[]);var F=function(e){c(e.currentTarget.dataset.to)};return l.a.createElement(p.a,{activePanel:a,popout:_},l.a.createElement(D,{id:"home",fetchedUser:i,go:F}),l.a.createElement(ee,{id:"album",fetchedUser:i,share:function(e){var t=e.currentTarget.dataset.count;console.log(C.access_token),o.a.send("VKWebAppShowWallPostBox",{message:e.currentTarget.dataset.mes,attachments:e.currentTarget.dataset.img}).then((function(e){var a=new FormData;a.append("user_id",i.id),a.append("hero_count",t),a.append("post_id",e.post_id),a.append("first_name",i.first_name),a.append("last_name",i.last_name),a.append("photo_200",i.photo_200),a.append("user_acces_token",C.access_token),v.a.post("https://skynets.space/wall",a,{}).then((function(e){console.log(e.data)}))}))},go:F}),l.a.createElement(G,{id:"AddInfo",fetchedUser:i,go:F}),l.a.createElement(ie,{id:"Ranking",fetchedUser:i,go:F}))};o.a.send("VKWebAppInit"),r.a.render(l.a.createElement(he,null),document.getElementById("root"))},49:function(e,t,a){e.exports=a.p+"static/media/logo.1bc48af2.png"}},[[214,1,2]]]);
//# sourceMappingURL=main.4a4e24dd.chunk.js.map