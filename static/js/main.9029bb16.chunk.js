(this["webpackJsonpmonsters-app"]=this["webpackJsonpmonsters-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(13),n(3)),i=n(4),l=n(6),m=n(5),u=n(7),h=(n(14),n(15),function(e){return r.a.createElement("div",{key:e.monster.id,className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id)}),r.a.createElement("h2",null," ",e.monster.name),r.a.createElement("p",null,e.monster.email))}),d=(n(16),function(e){var t=e.monsters;return r.a.createElement("div",{className:"card-list"},t.map((function(e){return r.a.createElement(h,{key:e.id,monster:e})})))}),p=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{type:"search",placeholder:t,onChange:n,className:"search-box"})}),f=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLocaleLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"App-title"},"Monsters Rolodex"),r.a.createElement(p,{placeholder:"search monster",handleChange:this.handleChange}),r.a.createElement(d,{monsters:a}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.9029bb16.chunk.js.map