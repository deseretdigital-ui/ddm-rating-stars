!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react/addons"));else if("function"==typeof define&&define.amd)define(["react/addons"],t);else{var n=t("object"==typeof exports?require("react/addons"):e.React);for(var s in n)("object"==typeof exports?exports:e)[s]=n[s]}}(this,function(e){return function(e){function t(s){if(n[s])return n[s].exports;var r=n[s]={exports:{},id:s,loaded:!1};return e[s].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){n(1),e.exports.RatingWidget=n(4),e.exports.RatingStep=n(5)},function(e,t,n){var s=n(!function(){var e=new Error('Cannot find module "!!/Users/rahlstrom/Projects/ddm-rating-widget/node_modules/css-loader/index.js!/Users/rahlstrom/Projects/ddm-rating-widget/node_modules/autoprefixer-loader/index.js?{browsers:["last 2 version", "> 1%", "ie 8"]}!/Users/rahlstrom/Projects/ddm-rating-widget/node_modules/sass-loader/index.js!/Users/rahlstrom/Projects/ddm-rating-widget/src/scss/styles.scss"');throw e.code="MODULE_NOT_FOUND",e}());"string"==typeof s&&(s=[[e.id,s,""]]);n(3)(s,{})},,function(e){function t(e,t){for(var n=0;n<e.length;n++){var s=e[n],o=p[s.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](s.parts[i]);for(;i<s.parts.length;i++)o.parts.push(r(s.parts[i],t))}else{for(var a=[],i=0;i<s.parts.length;i++)a.push(r(s.parts[i],t));p[s.id]={id:s.id,refs:1,parts:a}}}}function n(e){for(var t=[],n={},s=0;s<e.length;s++){var r=e[s],o=r[0],i=r[1],a=r[2],p=r[3],d={css:i,media:a,sourceMap:p};n[o]?n[o].parts.push(d):t.push(n[o]={id:o,parts:[d]})}return t}function s(){var e=document.createElement("style"),t=u();return e.type="text/css",t.appendChild(e),e}function r(e,t){var n,r,o;if(t.singleton){var p=f++;n=c||(c=s()),r=i.bind(null,n,p,!1),o=i.bind(null,n,p,!0)}else n=s(),r=a.bind(null,n),o=function(){n.parentNode.removeChild(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function o(e,t,n){var s=["/** >>"+t+" **/","/** "+t+"<< **/"],r=e.lastIndexOf(s[0]),o=n?s[0]+n+s[1]:"";if(e.lastIndexOf(s[0])>=0){var i=e.lastIndexOf(s[1])+s[1].length;return e.slice(0,r)+o+e.slice(i)}return e+o}function i(e,t,n,s){var r=n?"":s.css;if(e.styleSheet)e.styleSheet.cssText=o(e.styleSheet.cssText,t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function a(e,t){var n=t.css,s=t.media,r=t.sourceMap;if(r&&"function"==typeof btoa)try{n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(JSON.stringify(r))+" */",n='@import url("data:stylesheet/css;base64,'+btoa(n)+'")'}catch(o){}if(s&&e.setAttribute("media",s),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},l=d(function(){return/msie 9\b/.test(window.navigator.userAgent.toLowerCase())}),u=d(function(){return document.head||document.getElementsByTagName("head")[0]}),c=null,f=0;e.exports=function(e,s){s=s||{},"undefined"==typeof s.singleton&&(s.singleton=l());var r=n(e);return t(r,s),function(e){for(var o=[],i=0;i<r.length;i++){var a=r[i],d=p[a.id];d.refs--,o.push(d)}if(e){var l=n(e);t(l,s)}for(var i=0;i<o.length;i++){var d=o[i];if(0===d.refs){for(var u=0;u<d.parts.length;u++)d.parts[u]();delete p[d.id]}}}}},function(e,t,n){var s=n(6),r=n(5),o=s.addons.classSet,i=function(){},a=n(7),p=s.createClass({displayName:"RatingWidget",propTypes:{size:s.PropTypes.number,onChange:s.PropTypes.func,disabled:s.PropTypes.bool,initialRating:s.PropTypes.number,halfRating:s.PropTypes.bool,hover:s.PropTypes.bool,className:s.PropTypes.string},getDefaultProps:function(){return{size:5,onChange:i,disabled:!1,initialRating:0,halfRating:!1,hover:!0,className:""}},getInitialState:function(){return{rating:this.props.initialRating,tempRating:null}},handleClick:function(e,t){this.props.disabled||(e=this.calcHalfRating(e,t),e===this.state.rating&&(e=0),this.setState({rating:e}),this.setState({tempRating:null}),this.props.onChange(e))},handleOnMouseMove:function(e,t){a||this.props.disabled||!this.props.hover||(e=this.calcHalfRating(e,t),this.setState({tempRating:e}))},handleOnMouseLeave:function(){this.setState({tempRating:null})},calcHalfRating:function(e,t){if(!this.props.halfRating)return e;var n=t.target,s=n.offsetWidth,r=s/2,o=n.getBoundingClientRect(),i=t.pageX-(o.left+document.body.scrollLeft);return r>=i&&(e-=.5),e},render:function(){var e=this.renderSteps(),t={"ddm-rating-widget":!0,"ddm-rating-widget--disabled":this.props.disabled};return t=o(t)+" "+this.props.className,s.createElement("div",{className:t,onMouseLeave:this.handleOnMouseLeave},e)},renderSteps:function(){for(var e=[],t=this.state.tempRating||this.state.rating,n=Math.round(t),o=Math.ceil(t),i=1;i<=this.props.size;i++){var a="empty";t>=i?a="whole":n==i&&n==o&&this.props.halfRating&&(a="half"),e.push(s.createElement(r,{step:i,type:a,temporaryRating:null!==this.state.tempRating,onClick:this.handleClick,onMouseMove:this.handleOnMouseMove,key:"rating-step-"+i}))}return e}});e.exports=p},function(e,t,n){var s=n(6),r=s.addons.classSet,o=function(){},i=s.createClass({displayName:"RatingStep",propTypes:{step:s.PropTypes.number,type:s.PropTypes.oneOf(["empty","half","whole"]),temporaryRating:s.PropTypes.bool,onClick:s.PropTypes.func,onMouseMove:s.PropTypes.func},getDefaultProps:function(){return{step:0,type:"empty",temporaryRating:!1,onClick:o,onMouseMove:o}},handleClick:function(e){this.props.onClick(this.props.step,e)},handleMouseMove:function(e){this.props.onMouseMove(this.props.step,e)},render:function(){var e={"ddm-rating-widget__step":!0,"ddm-rating-widget__step--hover":this.props.temporaryRating};return e["ddm-rating-widget__step--"+this.props.type]=!0,s.createElement("span",{className:r(e),onClick:this.handleClick,onMouseMove:this.handleMouseMove})}});e.exports=i},function(t){t.exports=e},function(e){e.exports=function(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}()}])});