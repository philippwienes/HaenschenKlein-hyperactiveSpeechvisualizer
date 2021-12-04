var selectedTextmode,selectedFontsize,appNetworkMode,locale,intro=introJs(),tutorialStep=0;a=new AudioContext,console.log("%c ________________________________________\n< Hänschen Klein ging allein in die weite Welt hinein. >\n ----------------------------------------\n        \\   ^__^\n         \\  (oo)\\_______\n            (__)\\       )\\/\\\n                ||----w |\n                ||     ||","font-family:monospace"),$("#dataStream").click((function(){$("body").toggleClass("datastream-active")}));var constraints={video:{width:{ideal:1920},height:{ideal:1080}}};$(".menu-wrap").clone().appendTo(".a3d").removeClass("-original").addClass("-copy"),$(".onboarding-step-1 button").click((function(){language=$(this).attr("data-lang"),setLanguage(),console.log(language),startApp(),$(".onboarding-step-1").removeClass("-active"),$(".onboarding-step-2").addClass("-active")})),$(".hint").each((function(t){})),$(document).ready((function(){console.log("test"),setInterval((function(){var t=Math.floor(Math.random()*($(".hint").length-0+1))+0;console.log("randomHint"),$(".hint").removeClass("-active"),$(".hint").eq(t).addClass("-active");var e=setInterval((function(){$(".hint").removeClass("-active"),clearInterval(e)}),4e3)}),6e4),setInterval((function(){$(".donation").hasClass("-active")||$(".donation").addClass("-active"),firstRun+=1}),28e4)})),$(".onboarding-step-2 button").click((function(){$(".onboarding-step-2").removeClass("-active"),"english"==language?vorlesen("Welcome you cream Dumpling","medium",(function(){})):vorlesen("Willkommen du Knödel","medium",(function(){}))})),$(".close").click((function(){$(".donation").removeClass("-active")}));var firstRun=0;function stopOnboarding(){$("html").removeClass("-activeOnboarding")}function setLanguage(){$("html").removeClass("german"),$("html").addClass(language),"german"==language?(locale="de_de",$("html").attr("lang","de")):(locale="en_us",$("html").attr("lang","en"),$(".onboarding-step-2 span").text("Would you like to see a short tutorial?"),$(".onboarding-step-2 button:first-child").text("Yes"),$(".onboarding-step-2 button:nth-child(2)").text("No"),$(".submenu-wrap .submenu-zoomIn").text("Zoom In"),$(".submenu-wrap .submenu-zoomOut").text("Zoom Out"),$(".submenu-wrap .submenu-dynamisch").text("Dynamic"),$(".step-1-trigger").attr("data-intro","Say: 'Hello Hello' to open the menu"),$(".step-3-trigger").attr("data-intro","Here you can make various settings. Say for example 'Feedback'"),$(".step-2-trigger").attr("data-intro","Here you can see the keywords with which you can switch between the different visualizations. For example say 'Meme'."))}function startTutorial(){$("html").addClass("-activeTutorial"),stopOnboarding(),intro.start()}function getTranslation(t,e){return $.ajax({url:"https://"+url+"/translation/"+e+"/"+t})}function getImage(t,e){var a,n,o=10*Math.round((40*Math.random()+0)/10),i="all";i=Math.floor(41*Math.random())+0>=10?"all":"animatedgif",n=e?"1":"0",console.log(e),console.log(n);var r=Math.floor(101*Math.random())+0;t.split(" ").length<4?a=t.split(" "):(r>80&&(a=t.split(" ").splice(-3)),r>95&&(a=t.split(" ").splice(-5)),r<81&&(a=t.split(" ").splice(-1))),t=t.replace(/\s+/g,"%");var l="https://api.qwant.com/v3/search/images?locale="+locale+"&safesearch="+n+"&offset="+o+"&sr=de&r=DE&q="+a+"&imagetype="+i;return console.log(l),$.ajax({url:l,success:function(t){console.log(t)}})}function getShoppingImage(t){var e;Math.round((40*Math.random()+0)/10),Math.floor(41*Math.random());return e="https://api.qwant.com/v3/search/shopping?count=10&q="+t+"&t="+t+"&f=&offset=1&locale="+locale+"&uiv=4",$.ajax({url:e})}function getWebsite(t,e){console.log(e);e=e;var a,n=10*Math.round((40*Math.random()+0)/10);Math.floor(41*Math.random());return filter?safesearch="":safesearch="off","wiki"==e?(a="https://api.qwant.com/v3/search/web?count=10&q="+t+"%Wikipedia&t="+t+"%Wikipedia&f=&offset="+n+"&locale="+locale+"&uiv=4&safesearch="+safesearch,console.log(a)):(a="https://api.qwant.com/v3/search/web?count=10&q="+t+"&t="+t+"&f=&offset="+n+"&locale="+locale+"&uiv=4&safesearch="+safesearch,console.log(a)),$.ajax({url:a})}function getIcon(t){return $.ajax({url:"https://"+url+"/icon/"+t})}class En{constructor(t){this._el=t,this._fieldElSet=this._makeFieldElSet(),this._boundingClientRect=this._el.getBoundingClientRect(),this._matterRect=this._makeMatterRect()}get htmlEl(){return this._el}get fieldElSet(){return this._fieldElSet}get matterRect(){return this._matterRect}get cssPosition(){return{x:this._matterRect.position.x-this._boundingClientRect.width/2-this._boundingClientRect.left,y:this._matterRect.position.y-this._boundingClientRect.height/2-this._boundingClientRect.top}}get cssRotation(){return this._matterRect.angle}_makeFieldElSet(){const t=Array.from(this._el.querySelectorAll("input, select, button"));return new WeakSet(t)}_makeMatterRect(){const t=this._el.getBoundingClientRect(),e=t.left+t.width/2,a=t.top+t.height/2;let n;return n=Matter.Bodies.rectangle(e,a,t.width,t.height),n.friction=.01,n.restitution=.5,n}}const BTN_ANG_VEL=-10,BTN_FORCE={x:-.1,y:-.1},INPUT_VALID_FORCE={x:.2,y:-.3},INPUT_INVALID_FORCE={x:-.2,y:.3};var walls,liveWalls,engine,runner,prevID,prevID2,b,ens=[];function beep(t,e,n){v=a.createOscillator(),u=a.createGain(),v.connect(u),v.frequency.value=e,v.type="triangle",u.connect(a.destination),u.gain.value=.01*t,v.start(a.currentTime),v.stop(a.currentTime+.001*n)}function rebuildPhysicsStatic(){Matter.Composite.remove(engineStatic.world,Matter.Composite.allBodies(engineStatic.world)),$("#physic-wrap p span").removeClass("activeWord"),$("#physic-wrap p span").removeAttr("style"),$("#physic-wrap img").removeClass("activeWord"),$("#physic-wrap img").removeAttr("style"),ensStatic=[],engineStatic.events={},Matter.Engine.clear(engineStatic),Matter.World.clear(engineStatic.world),Matter.Runner.stop(engineStatic),engineStatic=Matter.Engine.create(),runnerStatic=Matter.Runner.run(engineStatic),setTimeout((function(){wallsStatic=buildWalls(document.querySelector(".physic-wrap")),Matter.World.add(engineStatic.world,[wallsStatic.B,wallsStatic.L,wallsStatic.R,wallsStatic.T]);var t=1;t=menuState?1/.66:1,Matter.Events.on(engineStatic,"tick",(e=>{let a=!0;for(const e of ensStatic){const{x:n,y:o}=e.cssPosition;e.htmlEl.style.transform=`translate(${n*t}px, ${o*t}px)rotate(${e.cssRotation}rad)`,a&=e.matterRect.position.y>wallsStatic.B.position.y}}))}),400)}function buildPhysicsStatic(){ensStatic=[],engineStatic=Matter.Engine.create(),runnerStatic=Matter.Runner.run(engineStatic),wallsStatic=buildWalls(document.querySelector(".physic-wrap")),Matter.World.add(engineStatic.world,[wallsStatic.B,wallsStatic.L,wallsStatic.R,wallsStatic.T]),Matter.Events.on(engineStatic,"tick",(t=>{let e=!0;for(const t of ensStatic){const{x:a,y:n}=t.cssPosition;t.htmlEl.style.transform=`translate(${a}px, ${n}px)rotate(${t.cssRotation}rad)`,e&=t.matterRect.position.y>wallsStatic.B.position.y}}))}function resetStaticPhysics(){Matter.Composite.remove(engineStatic.world,Matter.Composite.allBodies(engineStatic.world))}function resetPhysicsLive(){for(const t of ens)Matter.World.remove(engine.world,t.matterRect);ens=[],engine.events={},Matter.Engine.clear(engine),Matter.World.clear(engine.world),Matter.Runner.stop(runner)}function buildPhysicsOnTheGo(t){engine=Matter.Engine.create(),runner=Matter.Runner.run(engine);var e=1;$("body").hasClass("-menuActive")&&(e=1/.66,console.log(e)),2==zoomLevel&&zoomState&&(e=1/.3333,console.log(e)),3==zoomLevel&&zoomState&&(e=5,console.log(e)),4==zoomLevel&&zoomState&&(e=1/.143,console.log(e)),zoomState||menuState||(e=1,console.log(e)),liveWalls=buildWalls(document.querySelector(".item:last-child")),Matter.World.add(engine.world,[liveWalls.B,liveWalls.L,liveWalls.R,liveWalls.T]),console.log(liveWalls),Matter.Events.on(engine,"tick",(t=>{let a=!0;for(const t of ens){const{x:n,y:o}=t.cssPosition;t.htmlEl.style.transform=`translate(${n*e}px, ${o*e}px)rotate(${t.cssRotation}rad)`,a&=t.matterRect.position.y>liveWalls.B.position.y}}))}function buildWalls(t){const e=t.getBoundingClientRect(),a=e.width,n=e.height,o=a/2,i=.5;return{T:Matter.Bodies.rectangle(e.left+o,e.top-i,a,1,{isStatic:!0}),B:Matter.Bodies.rectangle(e.left+o,e.bottom+i,a,1,{isStatic:!0}),L:Matter.Bodies.rectangle(e.left-i,e.top+n/2,1,n,{isStatic:!0}),R:Matter.Bodies.rectangle(e.right+i,e.top+n/2,1,n,{isStatic:!0})}}$(document).ready((function(){engine=Matter.Engine.create(),b=new AudioContext,a=new AudioContext,runner=Matter.Runner.run(engine)}));var gravityForce=1;function buildObjects(t,e){var a=Math.floor(40*Math.random())-1,n=(Math.floor(7*Math.random()),1);if("live"==e){const e=Array.from(document.getElementById(t).querySelectorAll(".physical"));for(const t of e)if($(t).hasClass("activeWord"));else{const e=new En(t);$(t).addClass("activeWord"),ens.push(e),$("body").hasClass("-menuActive")&&(n=.66),2==zoomLevel&&zoomState&&(n=.3333),3==zoomLevel&&zoomState&&(n=.2),4==zoomLevel&&zoomState&&(n=.143),zoomState||menuState||(n=1),engine.world.gravity.y=a>90?-1.3*n:1.3*n,Matter.World.add(engine.world,e.matterRect)}}if("transkript"==e){const t=Array.from(document.getElementById("physic-wrap").querySelectorAll(".physical"));Math.floor(2*Math.random());var o=Math.floor(100*Math.random())-1;for(const e of t)if($(e).hasClass("activeWord"));else{$(e).addClass("activeWord");const t=new En(e);ensStatic.push(t),o>20?(engineStatic.world.gravity.y=1,engineStatic.world.gravity.x=0):(a>60&&(engineStatic.world.gravity.y=-1,a>80?setTimeout((function(){engineStatic.world.gravity.x=-1}),300):setTimeout((function(){engineStatic.world.gravity.x=1}),300)),a<=60&&(engineStatic.world.gravity.y=1,a<20?setTimeout((function(){engineStatic.world.gravity.x=-1}),300):setTimeout((function(){engineStatic.world.gravity.x=1}),300))),Matter.World.add(engineStatic.world,t.matterRect)}}if("folie"==e){const t=Array.from(document.getElementById("folie-1").querySelectorAll(".physical"));Math.floor(2*Math.random()),o=Math.floor(100*Math.random())-1;for(const e of t)if($(e).hasClass("activeWord"));else{$(e).addClass("activeWord");const t=new En(e);ensStatic.push(t),engineStatic.world.gravity.y=1,Matter.World.add(engineStatic.world,t.matterRect)}Matter.World.add(engineStatic.world,[wallsStatic.B,wallsStatic.L,wallsStatic.R,wallsStatic.T])}}