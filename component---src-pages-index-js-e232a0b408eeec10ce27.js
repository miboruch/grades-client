(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return w}));n("Z2Ku"),n("L9s1");var a=n("q1tI"),r=n.n(a),i=n("vOnD"),o=n("7oih"),l=n("vrFN"),c=Object(i.e)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]),d=Object(i.e)(["0%{transform:rotate(0deg);}100%{transform:rotate(-360deg);}"]),s=i.d.div.withConfig({displayName:"Spinner__SpinnerWrapper",componentId:"sc-49bz8w-0"})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"]),u=i.d.div.withConfig({displayName:"Spinner__StyledSpinner",componentId:"sc-49bz8w-1"})(["display:block;position:relative;width:150px;height:150px;transform:translate(-50%,-50%);border-radius:50%;border:1px solid transparent;border-top-color:#fff;animation:"," 1.7s linear infinite;z-index:11;&:before{content:'';position:absolute;top:5px;left:5px;right:5px;bottom:5px;border-radius:50%;border:1px solid transparent;border-top-color:#1d1d1d;animation:"," 0.6s linear infinite;}&:after{content:'';position:absolute;top:15px;left:15px;right:15px;bottom:15px;border-radius:50%;border:1px solid transparent;border-top-color:#878787;animation:"," 1s linear infinite;}"],c,d,c),m=function(e){var t=e.id;return r.a.createElement(s,{"data-testid":t},r.a.createElement(u,null))},p=(n("rGqo"),n("yt8O"),n("Btvt"),n("3wr+")),f=n("Hdm1"),b=n("+XLu"),h=n("72Yz"),x=Object(i.d)(p.n).withConfig({displayName:"MobileTable__StyledWrapper",componentId:"sc-172s208-0"})(["width:100%;height:90%;display:flex;justify-content:space-around;","{display:none;}"],(function(e){return e.theme.mq.standard})),g=function(e){var t=e.data,n=Object(a.useContext)(h.a).isDarkTheme,i=r.a.useMemo((function(){return[{Header:function(){return null},id:"position",accessor:"position",Cell:function(e){return r.a.createElement(p.g,null,e.value,r.a.createElement(p.c,null,r.a.createElement(p.m,null)))}},{Header:"Nr indexu",accessor:"index",Cell:function(e){return r.a.createElement(p.f,null,e.value)}},{Header:"Ocena",accessor:"mark"},{Header:"Suma",accessor:"allPoints",Cell:function(e){return r.a.createElement(p.f,null,e.value)}},{Header:"Szczegóły",id:"redirect",Cell:function(e){var t=e.row.values;return r.a.createElement(b.a,{to:"/student/"+t.index,index:t.index},r.a.createElement(p.e,null))}}]}),[]);return r.a.createElement(x,{isDarkTheme:n},r.a.createElement(f.a,{data:t,columns:i}))},E=Object(i.d)(p.n).withConfig({displayName:"StandardTable__StyledWrapper",componentId:"usllau-0"})(["display:none;width:95%;height:90%;justify-content:space-around;","{display:flex;}"],(function(e){return e.theme.mq.standard})),v=function(e){var t=e.data,n=Object(a.useContext)(h.a).isDarkTheme,i=r.a.useMemo((function(){return[{Header:function(){return null},id:"position",accessor:"position",Cell:function(e){return r.a.createElement(p.g,null,e.value,r.a.createElement(p.c,null,r.a.createElement(p.m,null)))}},{Header:"Nr indexu",accessor:"index",Cell:function(e){return r.a.createElement(p.f,null,e.value)}},{Header:"Grupa",accessor:"group"},{Header:"Ocena",accessor:"mark"},{Header:"Pkt (Wykład)",accessor:"lecturePoints"},{Header:"Pkt (Lab.)",accessor:"homeworkPoints"},{Header:"Nieobecności",accessor:"absenceCounter"},{Header:"Suma",accessor:"allPoints",Cell:function(e){return r.a.createElement(p.f,null,e.value)}},{Header:"Szczegóły",id:"redirect",Cell:function(e){var t=e.row.values;return r.a.createElement(b.a,{to:"/student/"+t.index,index:t.index},r.a.createElement(p.e,null))}}]}),[]);return r.a.createElement(E,{isDarkTheme:n},r.a.createElement(f.a,{data:t,columns:i}))},y=i.d.div.withConfig({displayName:"pages__StyledWrapper",componentId:"sc-6kvjaa-0"})(["width:100%;height:calc(100% - 100px);display:flex;flex-direction:column;padding-bottom:3rem;align-items:center;background:",";transition:all 0.4s ease;","{height:calc(100% - 60px);}"],(function(e){var t=e.isDarkTheme,n=e.theme;return t?n.color.mainDarkGradient:"#fbfbfb"}),(function(e){return e.theme.mq.standard})),w="465952623";t.default=function(e){var t=e.data.students.data,n=Object(a.useContext)(h.a).isDarkTheme;return r.a.createElement(o.a,{render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:"Main page"}),r.a.createElement(y,{isDarkTheme:n},t?r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{data:t.filter((function(t){return t.index.includes(e)}))}),r.a.createElement(v,{data:t.filter((function(t){return t.index.includes(e)}))})):r.a.createElement(m,null)))}})}}}]);
//# sourceMappingURL=component---src-pages-index-js-e232a0b408eeec10ce27.js.map