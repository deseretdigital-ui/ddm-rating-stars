!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("react/addons"));else if("function"==typeof define&&define.amd)define(["react/addons"],e);else{var n=e("object"==typeof exports?require("react/addons"):t.React);for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(this,function(t){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){n(1),t.exports.RatingWidget=n(3)},function(t,e,n){var i=n(2);"string"==typeof i&&(i=[[t.id,i,""]]);n(4)(i,{})},function(t,e,n){e=t.exports=n(6)(),e.push([t.id,".ddm-rating-widget{display:inline-block}.ddm-rating-widget__step{position:relative;display:inline-block;margin-right:2px;height:24px;width:16px}.ddm-rating-widget__step:before{content:'\\2605';color:#FA9E49;z-index:2;width:0}.ddm-rating-widget__step:after{content:'\\2605';color:#9F9F9F;z-index:1}.ddm-rating-widget__step:before,.ddm-rating-widget__step:after{position:absolute;left:0;top:0;overflow:hidden}.ddm-rating-widget__step--hover:before{color:#2354ac!important}.ddm-rating-widget__step--whole:before{width:100%}.ddm-rating-widget__step--half:before{width:50%}",""])},function(t,e,n){var i=n(5),r=function(){},a=i.createClass({displayName:"RatingWidget",propTypes:{size:i.PropTypes.number,emptyFunction:i.PropTypes.func,disabled:i.PropTypes.bool,initialRating:i.PropTypes.number,halfRating:i.PropTypes.bool,hover:i.PropTypes.bool},getDefaultProps:function(){return{size:5,onRate:r,disabled:!1,initialRating:0,halfRating:!1,hover:!0}},getInitialState:function(){return{rating:this.props.initialRating,tempRating:null}},handleClick:function(t,e){this.props.disabled||(t=this.calchalfRating(t,e),t===this.state.rating&&(t=0),this.setState({rating:t}),this.setState({tempRating:null}),this.props.onRate(t))},handleOnMouseMove:function(t,e){this.props.disabled||this.props.hover&&(t=this.calchalfRating(t,e),this.setState({tempRating:t}))},handleOnMouseLeave:function(){this.setState({tempRating:null})},calchalfRating:function(t,e){var n=e.target,i=n.offsetWidth,r=i/2,a=e.pageX-n.offsetLeft;return r>=a&&this.props.halfRating&&(t-=.5),t},render:function(){for(var t=[],e=this.state.tempRating||this.state.rating,n=Math.round(e),r=Math.ceil(e),a=1;a<=this.props.size;a++){var s=e>=a,o=n==a&&e!=a&&n==r&&this.props.halfRating,d={"ddm-rating-widget__step":!0,"ddm-rating-widget__step--whole":s,"ddm-rating-widget__step--half":o,"ddm-rating-widget__step--hover":this.state.tempRating};t.push(i.createElement("span",{className:i.addons.classSet(d),onClick:this.handleClick.bind(this,a),onMouseMove:this.handleOnMouseMove.bind(this,a)}))}return i.createElement("div",{className:"ddm-rating-widget",onMouseLeave:this.handleOnMouseLeave},t)}});t.exports=a},function(t){function e(t,e){for(var n=0;n<t.length;n++){var i=t[n],a=d[i.id];if(a){a.refs++;for(var s=0;s<a.parts.length;s++)a.parts[s](i.parts[s]);for(;s<i.parts.length;s++)a.parts.push(r(i.parts[s],e))}else{for(var o=[],s=0;s<i.parts.length;s++)o.push(r(i.parts[s],e));d[i.id]={id:i.id,refs:1,parts:o}}}}function n(t){for(var e=[],n={},i=0;i<t.length;i++){var r=t[i],a=r[0],s=r[1],o=r[2],d=r[3],p={css:s,media:o,sourceMap:d};n[a]?n[a].parts.push(p):e.push(n[a]={id:a,parts:[p]})}return e}function i(){var t=document.createElement("style"),e=f();return t.type="text/css",e.appendChild(t),t}function r(t,e){var n,r,a;if(e.singleton){var d=c++;n=u||(u=i()),r=s.bind(null,n,d,!1),a=s.bind(null,n,d,!0)}else n=i(),r=o.bind(null,n),a=function(){n.parentNode.removeChild(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else a()}}function a(t,e,n){var i=["/** >>"+e+" **/","/** "+e+"<< **/"],r=t.lastIndexOf(i[0]),a=n?i[0]+n+i[1]:"";if(t.lastIndexOf(i[0])>=0){var s=t.lastIndexOf(i[1])+i[1].length;return t.slice(0,r)+a+t.slice(s)}return t+a}function s(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=a(t.styleSheet.cssText,e,r);else{var s=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function o(t,e){var n=e.css,i=e.media,r=e.sourceMap;if(r&&"function"==typeof btoa)try{n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(JSON.stringify(r))+" */",n='@import url("data:stylesheet/css;base64,'+btoa(n)+'")'}catch(a){}if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var d={},p=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},l=p(function(){return/msie 9\b/.test(window.navigator.userAgent.toLowerCase())}),f=p(function(){return document.head||document.getElementsByTagName("head")[0]}),u=null,c=0;t.exports=function(t,i){i=i||{},"undefined"==typeof i.singleton&&(i.singleton=l());var r=n(t);return e(r,i),function(t){for(var a=[],s=0;s<r.length;s++){var o=r[s],p=d[o.id];p.refs--,a.push(p)}if(t){var l=n(t);e(l,i)}for(var s=0;s<a.length;s++){var p=a[s];if(0===p.refs){for(var f=0;f<p.parts.length;f++)p.parts[f]();delete d[p.id]}}}}},function(e){e.exports=t},function(t){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];t.push(n[2]?"@media "+n[2]+"{"+n[1]+"}":n[1])}return t.join("")},t}}])});