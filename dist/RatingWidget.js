!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("react/addons"));else if("function"==typeof define&&define.amd)define(["react/addons"],e);else{var i=e("object"==typeof exports?require("react/addons"):t.React);for(var n in i)("object"==typeof exports?exports:t)[n]=i[n]}}(this,function(t){return function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){i(1),t.exports.RatingWidget=i(3)},function(t,e,i){var n=i(2);"string"==typeof n&&(n=[[t.id,n,""]]);i(4)(n,{})},function(t,e,i){e=t.exports=i(6)(),e.push([t.id,".ddm-rating-widget{display:inline-block;cursor:pointer}.ddm-rating-widget--disabled{cursor:default}.ddm-rating-widget__step{position:relative;display:inline-block;margin-right:2px;font-size:16px;width:16px;height:16px;line-height:16px}.ddm-rating-widget__step:before,.ddm-rating-widget__step:after{position:absolute;left:0;top:0;overflow:hidden;content:'\\2605'}.ddm-rating-widget__step:before{color:#FA9E49;z-index:10;width:0}.ddm-rating-widget__step:after{color:#9F9F9F;z-index:5}@media (max-width:736px){.ddm-rating-widget__step{font-size:27px;width:27px;height:27px;line-height:27px;margin-left:10px}.ddm-rating-widget__step:first-child{margin-left:0}}.ddm-rating-widget--large .ddm-rating-widget__step{font-size:27px;width:27px;height:27px;line-height:27px;margin-left:10px}.ddm-rating-widget--large .ddm-rating-widget__step:first-child{margin-left:0}.ddm-rating-widget__step--hover:before{color:#2354ac}.ddm-rating-widget__step--whole:before{width:100%}.ddm-rating-widget__step--half:before{width:50%}",""])},function(t,e,i){var n=i(5),r=n.addons.classSet,s=i(7),a=function(){},o=n.createClass({displayName:"RatingWidget",propTypes:{size:n.PropTypes.number,onRate:n.PropTypes.func,startDisabled:n.PropTypes.bool,initialRating:n.PropTypes.number,halfRating:n.PropTypes.bool,hover:n.PropTypes.bool,className:n.PropTypes.string},getDefaultProps:function(){return{size:5,onRate:a,startDisabled:!1,initialRating:0,halfRating:!1,hover:!0,className:""}},getInitialState:function(){return{rating:this.props.initialRating,tempRating:null,disabled:this.props.startDisabled,supportsTouchEvents:s()}},disable:function(){this.setState({disabled:!0})},enable:function(){this.setState({disabled:!1})},handleClick:function(t,e){this.state.disabled||(t=this.calcHalfRating(t,e),t===this.state.rating&&(t=0),this.setState({rating:t}),this.setState({tempRating:null}),this.props.onRate(t))},handleOnMouseMove:function(t,e){!this.state.disabled&&this.props.hover&&(t=this.calcHalfRating(t,e),this.setState({tempRating:t}))},handleOnMouseLeave:function(){this.setState({tempRating:null})},calcHalfRating:function(t,e){if(!this.props.halfRating)return t;var i=e.target,n=i.offsetWidth,r=n/2,s=e.pageX-i.offsetLeft;return r>=s&&(t-=.5),t},render:function(){var t=this.renderSteps(),e={"ddm-rating-widget":!0,"ddm-rating-widget--disabled":this.state.disabled};return e=r(e)+" "+this.props.className,n.createElement("div",{className:e,onMouseLeave:this.handleOnMouseLeave},t)},renderSteps:function(){for(var t=[],e=this.state.tempRating||this.state.rating,i=Math.round(e),s=Math.ceil(e),o=this.state.supportsTouchEvents?a:this.handleOnMouseMove,d=1;d<=this.props.size;d++){var p=e>=d,l=i==d&&e!=d&&i==s&&this.props.halfRating,f={"ddm-rating-widget__step":!0,"ddm-rating-widget__step--whole":p,"ddm-rating-widget__step--half":l,"ddm-rating-widget__step--hover":this.state.tempRating};t.push(n.createElement("span",{className:r(f),onClick:this.handleClick.bind(this,d),onMouseMove:o.bind(this,d),key:"rating-step-"+d}))}return t}});t.exports=o},function(t){function e(t,e){for(var i=0;i<t.length;i++){var n=t[i],s=d[n.id];if(s){s.refs++;for(var a=0;a<s.parts.length;a++)s.parts[a](n.parts[a]);for(;a<n.parts.length;a++)s.parts.push(r(n.parts[a],e))}else{for(var o=[],a=0;a<n.parts.length;a++)o.push(r(n.parts[a],e));d[n.id]={id:n.id,refs:1,parts:o}}}}function i(t){for(var e=[],i={},n=0;n<t.length;n++){var r=t[n],s=r[0],a=r[1],o=r[2],d=r[3],p={css:a,media:o,sourceMap:d};i[s]?i[s].parts.push(p):e.push(i[s]={id:s,parts:[p]})}return e}function n(){var t=document.createElement("style"),e=f();return t.type="text/css",e.appendChild(t),t}function r(t,e){var i,r,s;if(e.singleton){var d=c++;i=u||(u=n()),r=a.bind(null,i,d,!1),s=a.bind(null,i,d,!0)}else i=n(),r=o.bind(null,i),s=function(){i.parentNode.removeChild(i)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else s()}}function s(t,e,i){var n=["/** >>"+e+" **/","/** "+e+"<< **/"],r=t.lastIndexOf(n[0]),s=i?n[0]+i+n[1]:"";if(t.lastIndexOf(n[0])>=0){var a=t.lastIndexOf(n[1])+n[1].length;return t.slice(0,r)+s+t.slice(a)}return t+s}function a(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=s(t.styleSheet.cssText,e,r);else{var a=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(a,o[e]):t.appendChild(a)}}function o(t,e){var i=e.css,n=e.media,r=e.sourceMap;if(r&&"function"==typeof btoa)try{i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(JSON.stringify(r))+" */",i='@import url("data:stylesheet/css;base64,'+btoa(i)+'")'}catch(s){}if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var d={},p=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},l=p(function(){return/msie 9\b/.test(window.navigator.userAgent.toLowerCase())}),f=p(function(){return document.head||document.getElementsByTagName("head")[0]}),u=null,c=0;t.exports=function(t,n){n=n||{},"undefined"==typeof n.singleton&&(n.singleton=l());var r=i(t);return e(r,n),function(t){for(var s=[],a=0;a<r.length;a++){var o=r[a],p=d[o.id];p.refs--,s.push(p)}if(t){var l=i(t);e(l,n)}for(var a=0;a<s.length;a++){var p=s[a];if(0===p.refs){for(var f=0;f<p.parts.length;f++)p.parts[f]();delete d[p.id]}}}}},function(e){e.exports=t},function(t){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];t.push(i[2]?"@media "+i[2]+"{"+i[1]+"}":i[1])}return t.join("")},t}},function(t){t.exports=function(){try{return document.createEvent("TouchEvent"),!0}catch(t){return!1}}}])});