(this["webpackJsonprubydong.github.io"]=this["webpackJsonprubydong.github.io"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('[{"title":"The Kova","text":"A website I made for a restaurant in New York City. I took all the photos on the website and added  menu, location, and contact sections.","link":"https://thekovanyc.com","color":"#D5C7B8","img":"img/proj/thekova.png"},{"title":"Split Calculator","text":"A web application meant for splitting group expenses","link":"http://rubydong.me/split","color":"#a5c0cc","img":"img/proj/split.png"},{"title":"Elderly","text":"Videochat designed and created for the elderly. Coded in Node.js, Express, HTML, and CSS.","link":"https://github.com/rubydong/elder.ly","color":"#C8A4AE","img":"img/proj/elderly.jpg"},{"title":"Fresh Mangoes","text":"A movies and TV review website based off of Rotten Tomatoes. Built in Java, React, MySQL, HTML, and CSS.","link":"https://github.com/rubydong/FreshMangoes","color":"#6294D9","img":"img/proj/freshmangoes.png"},{"title":"Pokemon Bot","text":"Artificial intelligence bot that challenges players on pokemonshowdown.com in real time. Built with Java and Selenium.","link":"https://github.com/rubydong/Pokemon-AI","color":"#EDD6E8","img":"img/proj/pokemon.png"}]')},19:function(e){e.exports=JSON.parse('[{"place1":"New York City","place2":"New York","color1":"#85A2AF","color2":"#CFC9C0","images":["img/photography/carousel.JPG","img/photography/oculus.JPG"]},{"place1":"Kyoto & Osaka","place2":"Japan","color1":"#9FC69F","color2":"#AAA8AB","images":["img/photography/bamboo.JPG","img/photography/osakacastle.JPG"]},{"place1":"Tokyo","place2":"Japan","color1":"#778B9C","color2":"#B0BCC6","images":["img/photography/tokyoshibuya.JPG","img/photography/tokyomirror.JPG"]},{"place1":"London","place2":"England","color1":"#ECCA93","color2":"#9A6573","images":["img/photography/londonferris.JPG","img/photography/teatime.JPG"]},{"place1":"Paris","place2":"France","color1":"#A0B980","color2":"#D6C4B5","images":["img/photography/louvre.JPG","img/photography/parispark.JPG"]},{"place1":"Seattle","place2":"Washington","color1":"#CDA565","color2":"#AECBDF","images":["img/photography/spaceneedle.JPG","img/photography/garden.JPG"]},{"place1":"Los Angeles & SF","place2":"California","color1":"#A7B6C0","color2":"#CCA5B3","images":["img/photography/labeach.JPG","img/photography/sfbeach.JPG"]},{"place1":"Montreal","place2":"Canada","color1":"#8FA07C","color2":"#9FA8A6","images":["img/photography/montrealunderground.JPG","img/photography/montrealflower.JPG"]}]')},22:function(e){e.exports=JSON.parse('[{"link":"/","text":"Home","img":"img/icons/about.png","target":"_self"},{"link":"/#/projects","text":"Projects","img":"img/icons/projects.png","target":"_self"},{"link":"/#/photography","text":"Photography","img":"img/icons/photography.png","target":"_self"},{"link":"Ruby%20Dong%20Resume.pdf","text":"Resume","img":"img/icons/resume.png","target":"_blank"},{"link":"http://github.com/rubydong","text":"GitHub","img":"img/icons/github.png","target":"_blank"},{"link":"https://www.linkedin.com/in/rubydong1","text":"LinkedIn","img":"img/icons/linkedin.png","target":"_blank"},{"link":"http://instagram.com/iscreamforuby","text":"Instagram","img":"img/icons/instagram.png","target":"_blank"}]')},23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),l=a.n(r),i=a(20),c=a(1),s=a(6),m=a(7),g=a(9),p=a(8),h=function(e){Object(g.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"landing"},o.a.createElement("div",{id:"about"},o.a.createElement("h1",null,"Ruby Dong")," ",o.a.createElement("hr",null),o.a.createElement("div",{className:"bio"},o.a.createElement("div",{className:"bio-img"},o.a.createElement("img",{src:"img/wisteria.jpg",alt:"wisteria"})),o.a.createElement("div",{className:"bio-desc"},o.a.createElement("div",{className:"text"},o.a.createElement("h2",null,"Hello, I'm Ruby"),"I am currently a software engineer working for UiPath, with a history of working at IBM, The Corcoran Group, and Mogul Lab. My passion for creating fun things has led me to love both coding and designing. When I am not doing either of those things, you might find me exploring new cities, watercolor painting, strumming my ukulele, playing piano, or capturing my favorite moments through photography.")))))}}]),a}(n.Component),u=a(18),d=function(e){Object(g.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=[];return u.forEach((function(t,a){var n={backgroundColor:t.color};e.push(o.a.createElement("div",{key:t.title,className:a%2===0?"project":"project v2"},o.a.createElement("div",{className:"proj-background",style:n}),o.a.createElement("div",{className:"proj-img"},o.a.createElement("img",{src:t.img,alt:t.title})),o.a.createElement("div",{className:"proj-desc"},o.a.createElement("h2",null," 0",a+1,". ",t.title," "),o.a.createElement("div",{className:"text"}," ",t.text," "),o.a.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},"View Project"))))})),o.a.createElement("div",{className:"landing"},o.a.createElement("div",{id:"projects"},o.a.createElement("h1",null," Featured Projects "),o.a.createElement("hr",null),e))}}]),a}(n.Component),b=a(19),y=function(e){Object(g.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=[];return b.forEach((function(t,a){for(var n={backgroundColor:t.color1},r={backgroundColor:t.color2},l=[],i=0;i<t.images.length;i++)l.push(o.a.createElement("img",{key:i,src:t.images[i],alt:t.place1}));e.push(o.a.createElement("div",{key:a,className:a%2===0?"location":"location float-right"},o.a.createElement("div",{className:"place",style:n},o.a.createElement("h2",null,t.place1)," "),o.a.createElement("br",null),o.a.createElement("div",{className:"place place2",style:r},o.a.createElement("h2",null,t.place2)))),e.push(l),e.push(o.a.createElement("div",{style:{marginBottom:"40px"}}))})),o.a.createElement("div",{className:"landing"},o.a.createElement("div",{id:"photography"},o.a.createElement("h1",null," My Photography "),o.a.createElement("hr",null),e))}}]),a}(n.Component);a(28);function f(){return o.a.createElement(i.a,{basename:"/"},o.a.createElement(c.c,null,o.a.createElement(c.a,{exact:!0,path:"/",component:h}),o.a.createElement(c.a,{exact:!0,path:"/projects",component:d}),o.a.createElement(c.a,{exact:!0,path:"/photography",component:y})))}var E=a(22),v=function(e){Object(g.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={visible:!1},e}return Object(m.a)(a,[{key:"toggleVisible",value:function(){console.log("toggle visible",!this.state.visible),this.setState({visible:!this.state.visible})}},{key:"toggleOff",value:function(){console.log("off"),this.setState({visible:!1})}},{key:"render",value:function(){var e=this,t=[],a=[];return E.forEach((function(n,r){t.push(o.a.createElement("li",{onClick:e.toggleOff.bind(e),key:n.text},o.a.createElement("a",{href:n.link,target:n.target,rel:"noopener noreferrer"},o.a.createElement("span",{className:"nav-text"}," ",n.text," "),o.a.createElement("img",{src:n.img,alt:n.text})))),a.push(o.a.createElement("li",{key:n.text},o.a.createElement("a",{href:n.link,target:n.target,rel:"noopener noreferrer"}," ",n.text," ")))})),o.a.createElement("div",null,o.a.createElement("div",{className:"menu",onClick:this.toggleVisible.bind(this)},o.a.createElement("img",{src:"img/icons/menu.png",alt:"menu"})),this.state.visible?o.a.createElement("div",{id:"navbar"}," ",o.a.createElement("ul",null," ",t," ")):"",o.a.createElement("div",{id:"full-navbar"},o.a.createElement("ul",null,a)))}}]),a}(n.Component);l.a.render(o.a.createElement("div",null,o.a.createElement(v,null),o.a.createElement(f,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.d4ffa403.chunk.js.map