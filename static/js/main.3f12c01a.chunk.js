(this.webpackJsonpvov=this.webpackJsonpvov||[]).push([[0],{119:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},202:function(e,t,a){e.exports=a(329)},303:function(e,t,a){},329:function(e,t,a){"use strict";a.r(t);a(203),a(229),a(231),a(232),a(234),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(263),a(264),a(265),a(266),a(267),a(268),a(269),a(270),a(271);var n=a(0),l=a.n(n),i=a(75),c=a.n(i),r=a(44),o=a.n(r),h=a(77),s=a.n(h),u=a(116),d=a(49),m=a(123),p=a.n(m),g=a(76),E=a.n(g),C=(a(280),a(32)),f=a.n(C),v=a(33),b=a.n(v),y=a(26),F=a.n(y),O=a(78),x=a.n(O),k=a(117),j=a.n(k),S=a(34),D=a.n(S),B=a(118),P=a.n(B),H=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return l.a.createElement(f.a,{id:t},l.a.createElement(b.a,null,"\u0414\u043e\u0440\u043e\u0433\u0430 \u043f\u0430\u043c\u044f\u0442\u0438"),n&&l.a.createElement(x.a,{title:"User Data Fetched with VK Bridge"},l.a.createElement(j.a,{before:n.photo_200?l.a.createElement(P.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),l.a.createElement(x.a,{title:"Navigation Example"},l.a.createElement(D.a,null,l.a.createElement(F.a,{size:"xl",level:"2",onClick:a,"data-to":"album"},"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0441\u0432\u043e\u044e \u0444\u0430\u043c\u0438\u043b\u0438\u044e")),l.a.createElement(D.a,null,l.a.createElement(F.a,{size:"xl",level:"2",onClick:a,"data-to":"addinfo"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e \u0433\u0435\u0440\u043e\u044f")),l.a.createElement(D.a,null,l.a.createElement(F.a,{size:"xl",level:"2",onClick:a,"data-to":"album"},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u0433\u0435\u0440\u043e\u0435\u0432"))))},U=a(5),_=a(48),z=a.n(_),M=a(46),N=a.n(M),w=a(47),L=a.n(w),I=(a(119),a(303),Object(U.e)(),a(58)),R=a.n(I),Y=Object(U.e)();function A(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],i=t[1];return l.a.createElement("div",null,l.a.createElement(U.d,{type:"text",name:"FIO",placeholder:"\u0424\u0418\u041e"}),l.a.createElement(D.a,null,l.a.createElement(F.a,{size:"xl",level:"2",onClick:function(){R.a.get("https://skynets.space/hero").then((function(e){console.log(e.data),i(e.data.items)})).catch((function(e){console.log(e)})).finally((function(){}))}},"\u041f\u043e\u0438\u0441\u043a \u0433\u0435\u0440\u043e\u0435\u0432")),l.a.createElement("ul",null,a.map((function(e){return l.a.createElement("li",{key:e.id},e.Lastname," ",e.Firstname," ",e.Patronymic)}))))}var K=function(e){return l.a.createElement(f.a,{id:e.id},l.a.createElement(b.a,{left:l.a.createElement(z.a,{onClick:e.go,"data-to":"home"},Y===U.c?l.a.createElement(N.a,null):l.a.createElement(L.a,null))},"\u0413\u0430\u043b\u043b\u0435\u0440\u0435\u044f \u0433\u0435\u0440\u043e\u0435\u0432"),l.a.createElement(A,null))},V=a(120),W=a(121),J=a(122),G=a(59),T=a(124),q=a(125),Q=Object(U.e)(),X=function(e){Object(q.a)(a,e);var t=Object(T.a)(a);function a(e){var n;return Object(W.a)(this,a),(n=t.call(this,e)).onChangeHandler=function(e){n.setState({FotoFile:e.target.files[0],loaded:0})},n.onChangeHandler2=function(e){n.setState({MailFile1:e.target.files[0],loaded:0})},n.state={Foto:null,FotoFile:null,Famili:null,Name:null,Surname:null,BirthDate:null,BirthPlace:null,CallPlace:null,CallYear:null,CallLocation:null,Ranking:null,DeathDate:null,History:null,OtherSite:null,MailFile:null,MailFile1:null},n.handleChange=n.handleChange.bind(Object(G.a)(n)),n}return Object(J.a)(a,[{key:"handleChange",value:function(e){var t=e.target;this.setState(Object(V.a)({},t.name,t.value))}},{key:"publish",value:function(){var e=new FormData;e.append("Foto",this.state.FotoFile),e.append("MailFile",this.state.MailFile1),e.append("Famili",this.state.Famili),e.append("Name",this.state.Name),e.append("Surname",this.state.Surname),e.append("BirthDate",this.state.BirthDate),e.append("BirthPlace",this.state.BirthPlace),e.append("CallPlace",this.state.CallPlace),e.append("CallYear",this.state.CallYear),e.append("CallLocation",this.state.CallLocation),e.append("Ranking",this.state.Ranking),e.append("DeathDate",this.state.DeathDate),e.append("History",this.state.History),e.append("OtherSite",this.state.OtherSite),e.append("id_user",this.props.id_user),R.a.post("https://skynets.space",e,{}).then((function(e){console.log(e.data)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(U.a,null,l.a.createElement(U.b,null,l.a.createElement(U.d,{type:"file",name:"Foto",placeholder:"\u0414\u043e\u044e\u0430\u0432\u044c\u0442\u0435 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",value:this.state.Foto,onChange:this.onChangeHandler}),l.a.createElement(U.d,{type:"text",name:"Famili",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",value:this.state.Famili,onChange:this.handleChange}),l.a.createElement(U.d,{type:"text",name:"Name",placeholder:"\u0418\u043c\u044f",value:this.state.Name,onChange:this.handleChange}),l.a.createElement(U.d,{type:"text",name:"Surname",placeholder:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",value:this.state.Surname,onChange:this.handleChange}),l.a.createElement(U.d,{type:"text",name:"BirthDate",placeholder:"\u0413\u043e\u0434 / \u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",value:this.state.BirthDate,onChange:this.handleChange}),l.a.createElement(U.d,{type:"text",name:"BirthPlace",placeholder:"\u041c\u0435\u0441\u0442\u043e \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f / \u041e\u0431\u043b\u0430\u0441\u0442\u044c",value:this.state.BirthPlace,onChange:this.handleChange}),l.a.createElement(U.d,{type:"text",name:"CallPlace",placeholder:"\u041c\u0435\u0441\u0442\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 / \u041e\u0431\u043b\u0430\u0441\u0442\u044c",value:this.state.CallPlace,onChange:this.handleChange}),l.a.createElement(U.d,{type:"text",name:"CallYear",placeholder:"\u0413\u043e\u0434 / \u0414\u0430\u0442\u0430 \u043f\u0440\u0438\u0437\u044b\u0432\u0430",value:this.state.CallYear,onChange:this.handleChange}),l.a.createElement(U.d,{type:"text",name:"CallLocation",placeholder:"\u041c\u0435\u0441\u0442\u043e \u0441\u043b\u0443\u0436\u0431\u044b",value:this.state.CallLocation,onChange:this.handleChange}),l.a.createElement(U.d,{type:"text",name:"Ranking",placeholder:"\u0412\u043e\u0438\u043d\u0441\u043a\u043e\u0435 \u0437\u0432\u0430\u043d\u0438\u0435",value:this.state.Ranking,onChange:this.handleChange}),l.a.createElement(U.d,{type:"text",name:"DeathDate",placeholder:"\u0413\u043e\u0434 / \u0414\u0430\u0442\u0430 \u0441\u043c\u0435\u0440\u0442\u0438",value:this.state.DeathDate,onChange:this.handleChange}),l.a.createElement(U.d,{type:"text",name:"History",placeholder:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0433\u0435\u0440\u043e\u044f",value:this.state.History,onChange:this.handleChange}),l.a.createElement(U.d,{type:"text",name:"OtherSite",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0439 \u0440\u0435\u0441\u0443\u0440\u0441",value:this.state.OtherSite,onChange:this.handleChange}),l.a.createElement(U.d,{type:"file",name:"MailFile",placeholder:"\u041f\u0438\u0441\u044c\u043c\u0430 \u0433\u0435\u0440\u043e\u044f",value:this.state.MailFile,onChange:this.onChangeHandler2}),l.a.createElement(F.a,{size:"xl",level:"2",value:"Send",onClick:this.publish()},"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"))))}}]),a}(l.a.Component),Z=function(e){return l.a.createElement(f.a,{id:e.id},l.a.createElement(b.a,{left:l.a.createElement(z.a,{onClick:e.go,"data-to":"home"},Q===U.c?l.a.createElement(N.a,null):l.a.createElement(L.a,null))},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),e.fetchedUser.id,l.a.createElement(X,{id_user:e.fetchedUser.id}),l.a.createElement(D.a,null,l.a.createElement(F.a,{size:"xl",level:"2",onClick:e.go,"data-to":"home"},"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e")))},$=function(){var e=Object(n.useState)("home"),t=Object(d.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(null),r=Object(d.a)(c,2),h=r[0],m=r[1],g=Object(n.useState)(l.a.createElement(E.a,{size:"large"})),C=Object(d.a)(g,2),f=C[0],v=C[1];Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,m(t),v(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var l=document.createAttribute("scheme");l.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(l)}})),function(){e.apply(this,arguments)}()}),[]);var b=function(e){i(e.currentTarget.dataset.to)};return l.a.createElement(p.a,{activePanel:a,popout:f},l.a.createElement(H,{id:"home",fetchedUser:h,go:b}),l.a.createElement(Z,{id:"addinfo",fetchedUser:h,go:b}),l.a.createElement(K,{id:"album",go:b}))};o.a.send("VKWebAppInit"),c.a.render(l.a.createElement($,null),document.getElementById("root"))}},[[202,1,2]]]);
//# sourceMappingURL=main.3f12c01a.chunk.js.map