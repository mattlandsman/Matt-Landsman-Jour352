(()=>{var t={543:function(t,e){!function(t){"use strict";function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function n(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?e(Object(i),!0).forEach((function(e){s(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e,n){var i,s="";if((t="number"==typeof t?String(t):t).length>e)return t;for(i=0;i<e;i+=1)s+=String(n);return(s+t).slice(-s.length)}function r(){this.reset()}function o(){this.events={}}r.prototype.toString=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["hours","minutes","seconds"],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:":",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;t=t||["hours","minutes","seconds"],e=e||":",n=n||2;var i,s=[];for(i=0;i<t.length;i+=1)void 0!==this[t[i]]&&("secondTenths"===t[i]?s.push(this[t[i]]):s.push(a(this[t[i]],n,"0")));return s.join(e)},r.prototype.reset=function(){this.secondTenths=0,this.seconds=0,this.minutes=0,this.hours=0,this.days=0},o.prototype.on=function(t,e){var n=this;return Array.isArray(this.events[t])||(this.events[t]=[]),this.events[t].push(e),function(){return n.removeListener(t,e)}},o.prototype.removeListener=function(t,e){if(Array.isArray(this.events[t])){var n=this.events[t].indexOf(e);n>-1&&this.events[t].splice(n,1)}},o.prototype.removeAllListeners=function(t){t?Array.isArray(this.events[t])&&(this.events[t]=[]):this.events={}},o.prototype.emit=function(t){for(var e=this,n=arguments.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];Array.isArray(this.events[t])&&this.events[t].forEach((function(t){return t.apply(e,i)}))};var c=10,l=60,h=60,d=24,u="secondTenths",p="seconds",y="minutes",f="hours",m="days",g=[u,p,y,f,m],v={secondTenths:100,seconds:1e3,minutes:6e4,hours:36e5,days:864e5},w={secondTenths:c,seconds:l,minutes:h,hours:d};function j(t,e){return(t%e+e)%e}function I(){var t,e,s,a,I,_,b,C,P,A,E=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},T=new r,k=new r,S=new o,O=!1,D=!1,x={},M={detail:{timer:this}};function F(t,e){var n=w[t];k[t]=e,T[t]=t===m?Math.abs(e):j(e>=0?e:n-j(e,n),n)}function L(t){return B(t,m)}function $(t){return B(t,f)}function V(t){return B(t,y)}function R(t){return B(t,p)}function z(t){return B(t,u)}function B(t,e){var n=k[e];return F(e,it(t,v[e])),k[e]!==n}function U(){q(),Y()}function q(){clearInterval(t),t=void 0,O=!1,D=!1}function H(t){mt()?(P=N(),_=st(I.target)):Z(t),J()}function J(){var n=v[e];Q(G(Date.now()))||(t=setInterval(W,n),O=!0,D=!1)}function N(){return G(Date.now())-k.secondTenths*v.secondTenths*s}function W(){var t=G(Date.now());K(X()),a(M.detail.timer),Q(t)&&(ot(),yt("targetAchieved",M))}function X(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G(Date.now()),e=s>0?t-P:P-t,n={};return n.secondTenths=z(e),n.seconds=R(e),n.minutes=V(e),n.hours=$(e),n.days=L(e),n}function G(t){return Math.floor(t/v[e])*v[e]}function K(t){t.secondTenths&&yt("secondTenthsUpdated",M),t.seconds&&yt("secondsUpdated",M),t.minutes&&yt("minutesUpdated",M),t.hours&&yt("hoursUpdated",M),t.days&&yt("daysUpdated",M)}function Q(t){return _ instanceof Array&&t>=A}function Y(){T.reset(),k.reset()}function Z(t){e=tt((t=t||{}).precision),a="function"==typeof t.callback?t.callback:function(){},C=!0===t.countdown,s=!0===C?-1:1,"object"===i(t.startValues)?at(t.startValues):b=null,P=N(),X(),"object"===i(t.target)?_=st(t.target):C?(t.target={seconds:0},_=st(t.target)):_=null,x={precision:e,callback:a,countdown:"object"===i(t)&&!0===t.countdown,target:_,startValues:b},I=t}function tt(t){if(!et(t="string"==typeof t?t:p))throw new Error("Error in precision parameter: ".concat(t," is not a valid value"));return t}function et(t){return g.indexOf(t)>=0}function nt(t){var e;if("object"===i(t))if(t instanceof Array){if(5!==t.length)throw new Error("Array size not valid");e=t}else{for(var n in t)if(g.indexOf(n)<0)throw new Error("Error in startValues or target parameter: ".concat(n," is not a valid input value"));e=[t.secondTenths||0,t.seconds||0,t.minutes||0,t.hours||0,t.days||0]}e=e.map((function(t){return parseInt(t,10)}));var s=e[0],a=e[1]+it(s,c),r=e[2]+it(a,l),o=e[3]+it(r,h),u=e[4]+it(o,d);return e[0]=s%c,e[1]=a%l,e[2]=r%h,e[3]=o%d,e[4]=u,e}function it(t,e){var n=t/e;return n<0?Math.ceil(n):Math.floor(n)}function st(t){if(t){var e=rt(_=nt(t));return A=P+e.secondTenths*v.secondTenths*s,_}}function at(t){b=nt(t),T.secondTenths=b[0],T.seconds=b[1],T.minutes=b[2],T.hours=b[3],T.days=b[4],k=rt(b,k)}function rt(t,e){var n=e||{};return n.days=t[4],n.hours=n.days*d+t[3],n.minutes=n.hours*h+t[2],n.seconds=n.minutes*l+t[1],n.secondTenths=n.seconds*c+t[[0]],n}function ot(){U(),yt("stopped",M)}function ct(){U(),H(I),yt("reset",M)}function lt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=n(n({},E),t),ft()||(H(t),yt("started",M))}function ht(){q(),D=!0,yt("paused",M)}function dt(t,e){S.on(t,e)}function ut(t,e){S.removeListener(t,e)}function pt(t){S.removeAllListeners(t)}function yt(t,e){S.emit(t,e)}function ft(){return O}function mt(){return D}function gt(){return T}function vt(){return k}function wt(){return x}Z(E),void 0!==this&&(this.start=lt,this.pause=ht,this.stop=ot,this.reset=ct,this.isRunning=ft,this.isPaused=mt,this.getTimeValues=gt,this.getTotalTimeValues=vt,this.getConfig=wt,this.addEventListener=dt,this.on=dt,this.removeEventListener=ut,this.removeAllEventListeners=pt,this.off=ut)}t.Timer=I,t.default=I,Object.defineProperty(t,"__esModule",{value:!0})}(e)}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=window;let e=[],i={};t.pmc_trackJwPlayerScriptLoaders=i;class s{constructor(t){this.playerId=t,this.jwPlayerDefaults=null,this.callbacks=[]}load(){return this.playerId?C(`https://${_.content_mask||"content.jwplatform.com"}/libraries/${this.playerId}.js`,this.handleOnLoaded.bind(this)):t.jwplayer&&t.jwplayer.defaults&&t.jwplayer.defaults.pid&&(this.playerId=t.jwplayer.defaults.pid,this.handleOnLoaded()),this}handleOnLoaded(){const e=this.callbacks;if(t.jwplayer&&t.jwplayer.defaults){if(_.ads_suppression&&delete t.jwplayer.defaults.advertising,this.playerId!==t.jwplayer.defaults.pid&&console.log(`Warning: JwPlayerLoader load "${this.playerId}" seeing "${t.jwplayer.defaults.pid}"`),this.jwPlayerDefaults=t.jwplayer.defaults,Array.isArray(e)){const n=e=>{if("function"==typeof e)try{const n=t.jwplayer.defaults;t.jwplayer.defaults=this.jwPlayerDefaults,e(Object.assign({jwPlayer:t.jwplayer},this)),t.jwplayer.defaults=n}catch(e){t.console.log(e)}};this.callbacks={push:n},e.forEach((t=>{this.callbacks.push(t)}))}return this}}}const a=function(){const n=e;if(t.jwplayer&&t.jwplayer.defaults&&t.jwplayer.defaults.pid){const e=t.jwplayer.defaults.pid;i[e]=i[e]||new s(e),i[e].handleOnLoaded()}Array.isArray(n)&&(e={push:t=>{const{playerId:e,callback:n}=t;i[e]=i[e]||new s(e).load(),n&&i[e].callbacks.push(n)}},n.forEach((t=>{e.push(t)})))},r=function(t,n){e.push({playerId:t,callback:n})},o=window;let c=[],l=!1;const h=function(){_.comscore&&!l&&(l=!0,C("https://sb.scorecardresearch.com/c2/plugins/streamingtag_plugin_jwplayer.js",(()=>{const t=c;Array.isArray(t)&&(c={push:t=>{if(o.ns_&&o.ns_.StreamingAnalytics){const e=t.getConfig();o.ns_.StreamingAnalytics.JWPlayer(t,_.comscore),o.console.log("comscore tracking initialized",{vid:e.id})}}},t.forEach((t=>{c.push(t)})))})))},d=function(t){c.push(t)};class u{constructor(t,e,n,i){this.playerInstance=n,this.playlist=i,this.activeChannel=t,this.inActiveChannel=e,this.tryingChannel=this.activeChannel,this.channelStatusErrorCount=0}init(){this.playerInstance.on("playlistComplete",this.handleFinished.bind(this)),this.playerInstance.on("error",(t=>{230001===t.code&&(this.timer&&(clearTimeout(this.timer),delete this.timer),this.handleFinished())})),this.playerInstance.on("remove",(()=>{this.timer&&(clearTimeout(this.timer),delete this.timer),delete this.playerInstance,delete this.activeChannel,delete this.inActiveChannel,delete this.playlist,delete this.channelStatusErrorCount,delete this.tryingChannel})),this.checkChannelStatus()}handleFinished(){this.timer&&(clearTimeout(this.timer),delete this.timer),A("Waiting for Live Channel to become active."),this.playerInstance.setConfig({repeat:!0}),this.playerInstance.load(this.playlist),this.checkChannelStatus(),this.playerInstance.play()}checkChannelStatus(){var t;this.timer&&(clearTimeout(this.timer),delete this.timer),(t=this.tryingChannel,P(`https://cdn.jwplayer.com/live/channels/${t}.json`)).then((t=>{A(`Received channel ${this.tryingChannel} status: ${t.status}`),this.channelStatusErrorCount=0;const e=t.current_event;return!("active"!==t.status||!e)&&e})).then((t=>{if(t){if(this.tryingChannel!==this.activeChannel){const t=this.activeChannel;this.activeChannel=this.tryingChannel,this.inActiveChannel=t}this.configurePlayer(t).catch((t=>{E(`Failed to start live event stream playback: ${t}`)}))}else this.inActiveChannel&&this.tryingChannel!==this.inActiveChannel?(this.tryingChannel=this.inActiveChannel,this.checkChannelStatus()):(this.tryingChannel=this.activeChannel,this.timer=setTimeout(this.checkChannelStatus.bind(this),1e4))})).catch((t=>{if(this.channelStatusErrorCount++,E(`Unable to fetch the channel status for ${this.tryingChannel}: ${t}`),this.channelStatusErrorCount>3){if(this.tryingChannel!==this.activeChannel){const t=this.activeChannel;this.activeChannel=this.tryingChannel,this.inActiveChannel=t}this.channelStatusErrorCount=0,this.timer=setTimeout(this.checkChannelStatus.bind(this),1e4)}else this.checkChannelStatus()}))}async configurePlayer(t){let e,n=0;for(A(`Fetching playlist for ${t}.`);!e;)try{e=await(i=t,P(`https://cdn.jwplayer.com/v2/media/${i}`,{cache:"no-cache"}))}catch(i){if(++n,E(`Error fetching playlist: ${i}`),n>=3){A("Configuring Player with m3u8"),e={playlist:[{mediaid:t,file:`https://cdn.jwplayer.com/live/events/${t}.m3u8`}]};break}await T(2**(n-1)*5e3)}var i;this.playerInstance.setConfig({repeat:!1}),this.playerInstance.load(e.playlist),this.playerInstance.play(),A(`Playing live event stream with id '${t}'.`)}}var p=n(543),y=n.n(p);class f{constructor(t,e,n){this.playerInstance=t,this.currentPlaylistItem=null,this.currentMediaID=null,this.startedMediaIDs=[],this.timer=new(y()),this.intervalHandler=null,this.mediaIntervals={},this.ga4Property=_?.livestream_ga4_property,this.eventCategory=e,this.eventLabelPrefix=n}init(){this.playerInstance.on("firstFrame",this.handleStart.bind(this)),this.playerInstance.on("pause",(t=>{let{pauseReason:e}=t;"interaction"===e&&this.timer.pause()})),this.playerInstance.on("play",(t=>{let{playReason:e}=t;"interaction"===e&&this.timer.start()})),["playAttemptFailed","error","remove","complete"].forEach((t=>{this.playerInstance.on(t,this.handleStop.bind(this))})),window.addEventListener("beforeunload",this.handleStop.bind(this))}handleStart(){this.currentPlaylistItem=this.playerInstance.getPlaylistItem(),this.currentMediaID=this.currentPlaylistItem.mediaid,this.startedMediaIDs.includes(this.currentMediaID)||(this.startedMediaIDs.push(this.currentMediaID),this.doViewedEvent("first_play")),this.timer.reset(),this.timer.start(),this.intervalHandler=setInterval(this.doElapsedTimeCheck.bind(this),3e3),this.doElapsedTimeCheck()}doElapsedTimeCheck(){const t=this.timer.getTotalTimeValues().seconds,e=this.timer.getTotalTimeValues().minutes;void 0===this.mediaIntervals[this.currentMediaID]&&(this.mediaIntervals[this.currentMediaID]=[]),this.mediaIntervals[this.currentMediaID].includes(e)||(this.mediaIntervals[this.currentMediaID].push(e),e>=1&&this.doViewedEvent("viewed_duration",e,t),e>=10&&this.handleStop())}handleStop(){Array.isArray(this.mediaIntervals[this.currentMediaID])&&!this.mediaIntervals[this.currentMediaID].includes(1)&&this.doViewedEvent("viewed_duration",0,this.timer.getTotalTimeValues().seconds),this.timer.pause(),clearInterval(this.intervalHandler),this.intervalHandler=null}doViewedEvent(t,e,n){const i={[`${this.eventLabelPrefix}_title`]:this.currentPlaylistItem?.title,[`${this.eventLabelPrefix}_media_id`]:this.currentMediaID,[`${this.eventLabelPrefix}_channel_id`]:this.currentPlaylistItem?.livestream_channel_id,[`${this.eventLabelPrefix}_event`]:t};void 0!==e&&(i[`${this.eventLabelPrefix}_viewed_min`]=e),void 0!==n&&(i[`${this.eventLabelPrefix}_total_viewed_sec`]=n),this.doEvent(i)}doEvent(t){"undefined"!=typeof gtag&&this.ga4Property&&gtag("event",this.eventCategory,{send_to:this.ga4Property,...t})}}const m=window,g=m.document;class v{constructor(t){this.divId=t,this.isReady=!1,this.actions=[],this.jwInstance=null,this.options={},this.callbacks=[]}whenReady(t){this.callbacks.push(t)}ready(t){if(this.isReady||!t)return;if(this.jwInstance=t(this.divId),!this.jwInstance)return void console.log(`Error instantiate JwPlayer instance for div ${this.divId}`);this.isReady=!0;const e=this.actions,n=this.callbacks;if(Array.isArray(e)){const t=t=>{this.doAction(t)};this.actions={push:t},e.forEach((t=>{this.actions.push(t)}))}if(Array.isArray(n)){const t=t=>{t(this.jwInstance)};this.callbacks={push:t},n.forEach((t=>{this.callbacks.push(t)}))}}doAction(t){const{cmd:e,args:n}=t;this.jwInstance&&this.jwInstance[e]&&("setup"===e?this.setup.apply(this,n):this.jwInstance[e].apply(this.jwInstance,n))}hasDirectSold(){return _&&_.has_direct_sold_ad}setup(t){if(t&&(this.options=t),this.adjustDeviceScreenSize().adjustAdvertisingTag().adjustFloating(),t&&(this.jwInstance.setup(this.options),this.jwInstance.on("ready",function(){this.maybeAddLiveTag()}.bind(this)),this.options.channelId)){const{channelId:t,backupChannelId:e,playlist:n}=this.options;new u(t,e,this.jwInstance,n).init(),_.livestream_ga_enabled&&new f(this.jwInstance,"harmony-livestream","livestream").init()}return this.applyCaption().monetize().pushVideoEvents().overlayCatapult().comscoreTracking(),this}adjustDeviceScreenSize(){try{const t=m.screen?.orientation?.angle||m.orientation||0;if(this.width=0==t||180==t?m.screen.width:m.screen.height,void 0!==m.devicePixelRatio&&m.devicePixelRatio>1&&(this.width=this.width/m.devicePixelRatio,this.width<300&&(this.width=300)),void 0!==this.options.width&&this.width<this.options.width){if(void 0!==this.options.height){const t=this.width/this.options.width;this.options.height=Math.floor(this.options.height*t)}this.options.width=this.width}}catch(t){m.console.log(t)}return this}adjustAdvertisingTag(){try{if(this.options&&this.options.advertising&&this.options.advertising.tag){const t=1e15*Math.random(),e=this.options.advertising.tag.replace("[rand]",t);this.options.advertising.tag=e}}catch(t){m.console.log(t)}return this}adjustFloating(t){let e=t;return(this.hasDirectSold()||_.disable_floating||_.noFloatIds.includes(this.divId))&&(e=!1),"boolean"==typeof e&&this.canFloat()&&(this.options.floating=e,this.jwInstance&&this.jwInstance.setFloating(e)),this}maybeAddLiveTag(){if(!this.options.harmonyMode)return;const t=document.querySelector(".jw-float-bar");if(!t)return;const e=document.createElement("span");e.classList.add("jw-float-bar-live-tag"),e.innerHTML="Live",t.prepend(e)}canFloat(){return void 0===this.options.floating||this.options.floating}applyCaption(){try{_.cc_enabled&&this.jwInstance&&(this.jwInstance.setCurrentCaptions(1),this.jwInstance.setCaptions())}catch(t){m.console.log(t)}return this}overlayCatapult(){try{if(_.cgid&&!_.ads_suppression&&this.jwInstance){const t=this.jwInstance;t.on("ready",(function(){if("undefined"==typeof CXBootstrapper)return!1;const e=new CXBootstrapper(_.cgid),n=t.getConfig();e.initCX({videoDescriptors:[{product:"overlay",videoElementId:n.id,playerType:"jwplayer"}]}),m.console.log("catapult initialized",{vid:n.id})}))}}catch(t){m.console.log(t)}return this}monetize(){try{if(_.ads_suppression)return this;if(m.blogherads=m.blogherads||{},m.blogherads.adq=m.blogherads.adq||[],!this.jwInstance)return this;const t=this.jwInstance,e=this.getPosition();m.blogherads.adq.push((function(){const n={subAdUnitPath:"instream",targeting:{}};e&&(n.targeting={vloc:e}),m.blogherads.monetizeJWPlayer(t,n);const i=t.getConfig();m.console.log("monetizeJWPlayer",{vid:i.id,pid:i.pid,options:n})}))}catch(t){m.console.log(t)}return this}pushVideoEvents(){m.blogherads=m.blogherads||{},m.blogherads.adq=m.blogherads.adq||[];const t=this.jwInstance;return m.blogherads.adq.push((function(){"function"==typeof m.blogherads.pushVideoPlayEventMeta&&m.blogherads.pushVideoPlayEventMeta({jwPlayerInstance:t})})),this}getPosition(){let t=!1;try{if(this.jwInstance){const e=this.jwInstance.getConfig();if("string"==typeof e.pmc_position?t=e.pmc_position:"string"==typeof e.vloc&&(t=e.vloc),"floating"===t&&this.hasDirectSold()&&(t="auto"),"auto"===t||!1===t){const e=this.jwInstance.getContainer(),n=g.body.getBoundingClientRect(),i=(e.getBoundingClientRect().top-n.top)/Math.max(g.documentElement.clientHeight,m.innerHeight||1);t=1.5>=i?"top":1.5<i&&5>i?"mid":"bottom"}}}catch(t){m.console.log(t)}return t}comscoreTracking(){if(this.jwInstance)try{d(this.jwInstance)}catch(t){m.console.log(t)}return this}}class w{constructor(t){this.id=t,this._pmc=new v(t,this)}instance(){const{jwInstance:t}=this._pmc;return t}whenReady(t){return this._pmc.whenReady(t),this}whenNoFloat(t){if("function"==typeof t)return this.noFloatCallback=t,this._pmc.canFloat()||this.noFloatCallback(),this}noFloat(){this._pmc.adjustFloating(!1),this.noFloatCallback&&this.noFloatCallback()}setup(t){return t&&(this._pmc.options=t),this._pmc.actions.push({cmd:"setup",args:Array.from(arguments)}),this}remove(){this._pmc.actions.push({cmd:"remove",args:Array.from(arguments)})}on(){this._pmc.actions.push({cmd:"on",args:Array.from(arguments)})}play(){this._pmc.actions.push({cmd:"play",args:Array.from(arguments)})}pause(){this._pmc.actions.push({cmd:"pause",args:Array.from(arguments)})}stop(){this._pmc.actions.push({cmd:"stop",args:Array.from(arguments)})}getState(){const{jwInstance:t}=this._pmc;return t?t.getState():"error"}getVolume(){const{jwInstance:t}=this._pmc;return t?t.getVolume():0}setVolume(){this._pmc.actions.push({cmd:"setVolume",args:Array.from(arguments)})}getMute(){const{jwInstance:t}=this._pmc;return t?t.getMute():0}setMute(){this._pmc.actions.push({cmd:"setMute",args:Array.from(arguments)})}getPlaylist(){const{jwInstance:t}=this._pmc;return t?t.getPlaylist():[]}getPlaylistIndex(){const{jwInstance:t}=this._pmc;return t?t.getPlaylistIndex():0}getPlugin(t){const{jwInstance:e}=this._pmc;return e?e.getPlugin(t):null}getContainer(){const{jwInstance:t}=this._pmc;return t?t.getContainer():null}getConfig(){const{jwInstance:t}=this._pmc;return t?t.getConfig():{}}playlistItem(){this._pmc.actions.push({cmd:"playlistItem",args:Array.from(arguments)})}load(){this._pmc.actions.push({cmd:"load",args:Array.from(arguments)})}next(){this._pmc.actions.push({cmd:"next",args:Array.from(arguments)})}}const j=window,I=j.document,_=j.pmc_jwplayer_options=j.pmc_jwplayer_options||{};_.noFloatIds=_.noFloatIds||[];const b={};function C(t,e,n,i){const s=I.createElement("script"),a=I.getElementsByTagName("script")[0];s.type="text/javascript",s.async=!0,(e||n)&&(s.onload=function(){"function"==typeof e&&e(),n&&s.parentNode.removeChild(s)}),s.src=t,i&&(s.id=i),a.parentNode.insertBefore(s,a)}function P(t,e){return fetch(t,e).then((e=>{if(!e.ok)throw new Error(`Unable to fetch ${t}: ${e.statusText}`);return e.json()}))}function A(t,e){j.console.log(t,e)}function E(t,e){j.console.error(t,e)}function T(t){return new Promise((e=>setTimeout(e,t)))}const k=window;function S(){["jwplayer_contextual_player_div","jwplayer_floating_preroll_ad"].forEach((t=>{_.noFloatIds.includes(t)||_.noFloatIds.push(t);const e=b[t];e&&e.noFloat()}))}function O(t){_.has_direct_sold_ad=t||!0,Object.values(b).forEach((t=>{t.noFloat()}))}const D={"dfp:isdirect=true":O,"floatingplayer=nofloat":S};const x=window;let M=!1;function F(t){a(),M||(M=!0,_.pid&&r(_.pid),t&&t.players&&Array.isArray(t.players)&&t.players.forEach((t=>{r(t)})),h(),_.cgid&&!_.ads_suppression&&C("https://tags.catapultx.com/bootstrapper"))}x.pmc_jwplayer=function(t,e){let n=e||function(t){const e=/jwplayer_[^_]+_([^_]+)(?:_div(?:_\d+)?)?/.exec(t);if(e&&2===e.length&&"div"!==e[1])return e[1];const n=I.getElementById(t);return n?n.getAttribute("data-playerid")||n.getAttribute("data-player"):null}(t);t||j.jwplayer&&(t=j.jwplayer().id),j.pmc&&j.pmc.hooks&&(n=j.pmc.hooks.apply_filters("pmc_jwplayer_id",n)),!n&&j.jwplayer&&j.jwplayer.defaults&&j.jwplayer.defaults.pid&&(n=j.jwplayer.defaults.pid),n&&"default"!==n||(n=_.pid);let i=b[t];return i||(i=new w(t),b[t]=i,r(n,(t=>{i._pmc.ready(t.jwPlayer)})),i.on("remove",(()=>{delete b[t]}))),i},x.pmc_jwplayer.init=F,x.pmc_jwplayer.loadScript=C,x.pmc_jwplayer.load=r,x.pmc_jwplayer.extractPlayListFromDivId=function(t){const e=I.getElementById(t);if(e){const t=e.getAttribute("data-jsonfeed");if(t&&t.length)return t}const n=/jwplayer_([^_]+)_[^_]+_div(?:_\d+)?/.exec(t);if(n&&2===n.length){return i=`feeds/${n[1]}.json`,`https://${_.content_mask||"content.jwplatform.com"}/${i}`}var i;return null},x.pmc_jwplayer.handleDirectSold=O,x.pmc_jwplayer.handleFloatingPlayerNoFloat=S,x.pmc_jwplayer.add=F,k.addEventListener("message",(function(t){const e=t.data;if("string"==typeof e&&0===e.indexOf("pmcadm:"))for(const[t,n]of Object.entries(D))e.indexOf(t)>=7&&n()}),!1),k.pmc&&k.pmc.hooks&&k.pmc.hooks.add_action("pmc_adm_dfp_direct_sold",O)})()})();