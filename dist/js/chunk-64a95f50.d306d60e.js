(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64a95f50"],{"13d5":function(e,t,r){"use strict";var n=r("23e7"),a=r("d58f").left,i=r("a640"),s=r("ae40"),c=i("reduce"),o=s("reduce",{1:0});n({target:"Array",proto:!0,forced:!c||!o},{reduce:function(e){return a(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"14c3":function(e,t,r){var n=r("c6b6"),a=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var i=r.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"2a2b":function(e,t,r){},5319:function(e,t,r){"use strict";var n=r("d784"),a=r("825a"),i=r("7b0b"),s=r("50c4"),c=r("a691"),o=r("1d80"),u=r("8aa5"),l=r("14c3"),d=Math.max,p=Math.min,v=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,h=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var x=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=n.REPLACE_KEEPS_$0,y=x?"$":"$0";return[function(r,n){var a=o(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,a,n):t.call(String(a),r,n)},function(e,n){if(!x&&m||"string"===typeof n&&-1===n.indexOf(y)){var i=r(t,e,this,n);if(i.done)return i.value}var o=a(e),v=String(this),f="function"===typeof n;f||(n=String(n));var g=o.global;if(g){var E=o.unicode;o.lastIndex=0}var _=[];while(1){var I=l(o,v);if(null===I)break;if(_.push(I),!g)break;var R=String(I[0]);""===R&&(o.lastIndex=u(v,s(o.lastIndex),E))}for(var $="",w=0,S=0;S<_.length;S++){I=_[S];for(var k=String(I[0]),T=d(p(c(I.index),v.length),0),A=[],C=1;C<I.length;C++)A.push(h(I[C]));var N=I.groups;if(f){var F=[k].concat(A,T,v);void 0!==N&&F.push(N);var O=String(n.apply(void 0,F))}else O=b(k,v,T,A,N,n);T>=w&&($+=v.slice(w,T)+O,w=T+k.length)}return $+v.slice(w)}];function b(e,r,n,a,s,c){var o=n+e.length,u=a.length,l=g;return void 0!==s&&(s=i(s),l=f),t.call(c,l,(function(t,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,n);case"'":return r.slice(o);case"<":c=s[i.slice(1,-1)];break;default:var l=+i;if(0===l)return t;if(l>u){var d=v(l/10);return 0===d?t:d<=u?void 0===a[d-1]?i.charAt(1):a[d-1]+i.charAt(1):t}c=a[l-1]}return void 0===c?"":c}))}}))},6619:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",attrs:{id:"view-recipe"}},[e.recipe?r("div",[r("div",{staticClass:"recipe-header mt-3 mb-4"},[r("h1",{attrs:{id:"title-recipe"}},[e._v(e._s(e.recipe.title))]),r("img",{staticClass:"center",attrs:{id:"recipe-img",src:e.recipe.image}})]),r("div",{staticClass:"recipe-body"},[r("div",{staticClass:"mb-3",attrs:{id:"recipe-details"}},[r("div",{staticStyle:{display:"inline"}},[e._v(" TOTAL TIME: "+e._s(e.recipe.readyInMinutes)+" MIN | ")]),r("div",{staticStyle:{display:"inline"}},[e._v(e._s(e.recipe.servings)+" SERVINGS |")]),r("div",{staticStyle:{display:"inline"}},[e._v(" "+e._s(e.recipe.aggregateLikes)+" LIKES | ")]),e.vegan?r("div",{staticStyle:{display:"inline"}},[e._v("VEGAN |")]):e._e(),e.vegetarian?r("div",{staticStyle:{display:"inline"}},[e._v("VEGETARIAN |")]):e._e(),e.glutenFree?r("div",{staticStyle:{display:"inline"}},[e._v("GLUTEN FREE")]):e._e(),e.$root.store.username&&!e.myRecipe?r("div",{attrs:{id:"icons"}},[e.favorite?r("b-icon-heart-fill",{staticClass:"h5 mb-2",staticStyle:{display:"inline"},attrs:{variant:"danger"}}):e._e(),e.favorite?e._e():r("button",{attrs:{title:"Add To Favorite",id:"fav-button"},on:{click:e.markAsFavorite}},[r("b-icon-heart",{staticClass:"h5 mb-2",attrs:{variant:"secondary"}})],1),r("b-icon-eye-fill",{staticClass:"h5 mb-2",attrs:{variant:"secondary"}})],1):e._e()]),r("div",{staticClass:"wrapper"},[r("div",{staticClass:"wrapped"},[r("h3",{attrs:{id:"ing-title"}},[e._v("INGREDIENTS :")]),e.myRecipe?r("div",{staticStyle:{"white-space":"pre-wrap"}},[e._v(" "+e._s(e.recipe.extendedIngredients)+" ")]):r("ul",e._l(e.recipe.extendedIngredients,(function(t,n){return r("li",{key:n+"_"+t.id},[e._v(" "+e._s(t.original)+" ")])})),0)]),r("div",{staticClass:"wrapped"},[r("h3",{attrs:{id:"ins-title"}},[e._v("INSTRUCTIONS :")]),e.myRecipe?r("div",{staticStyle:{"white-space":"pre-wrap"}},[e._v(" "+e._s(e.recipe.analyzedInstructions)+" ")]):r("ol",e._l(e.recipe._instructions,(function(t){return r("li",{key:t.number},[e._v(" "+e._s(t.step)+" ")])})),0)])])])]):e._e()])},a=[],i=(r("99af"),r("d81d"),r("13d5"),r("b0c0"),r("ac1f"),r("5319"),r("2909")),s=(r("96cf"),r("1da1")),c={data:function(){return{recipe:null,favorite:!1,vegan:!1,vegetarian:!1,glutenFree:!1,myRecipe:!1}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a,s,c,o,u,l,d,p,v,f,g,h,x,m,y,b,E,_,I,R,$,w,S,k;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,n=e.$route.params.recipeId,e.favorite=e.$route.params.favorite,e.vegan=e.$route.params.vegan,e.vegetarian=e.$route.params.vegetarian,e.glutenFree=e.$route.params.glutenFree,e.myRecipe=e.$route.params.myRecipe,e.myRecipe){t.next=51;break}return t.prev=8,t.next=11,e.axios.get(e.$root.store.server_domain+"/recipes/"+n,{});case 11:r=t.sent,200!==r.status&&e.$router.replace("/NotFound"),t.next=20;break;case 15:return t.prev=15,t.t0=t["catch"](8),console.log("error.response.status",t.t0.response.status),e.$router.replace("/NotFound"),t.abrupt("return");case 20:if(console.log(r.data),a=r.data,s=a.analyzedInstructions,c=a.instructions,o=a.extendedIngredients,u=a.aggregateLikes,l=a.readyInMinutes,d=a.image,p=a.title,v=a.servings,f=s.map((function(e){return e.steps[0].step=e.name+e.steps[0].step,e.steps})).reduce((function(e,t){return[].concat(Object(i["a"])(e),Object(i["a"])(t))}),[]),g={instructions:c,_instructions:f,analyzedInstructions:s,extendedIngredients:o,aggregateLikes:u,readyInMinutes:l,image:d,title:p,servings:v},e.recipe=g,!e.$root.store.username){t.next=49;break}return t.prev=26,h=e.$route.params.recipeId,t.next=30,e.axios.post(e.$root.store.server_domain+"/users/lastWatchedRecipes",{recipeId:h});case 30:t.sent,t.next=36;break;case 33:t.prev=33,t.t1=t["catch"](26),console.log(t.t1);case 36:return t.prev=36,t.next=39,e.axios.get(e.$root.store.server_domain+"/users/lastWatchedRecipes");case 39:x=t.sent,m=x.data,y=[],y.push.apply(y,Object(i["a"])(m)),e.$root.store.updateViewedList(y),t.next=49;break;case 46:t.prev=46,t.t2=t["catch"](36),console.log(t.t2);case 49:t.next=66;break;case 51:return t.prev=51,t.next=54,e.axios.get(e.$root.store.server_domain+"/users/myRecipes/"+n,{});case 54:r=t.sent,200!==r.status&&e.$router.replace("/NotFound"),t.next=63;break;case 58:return t.prev=58,t.t3=t["catch"](51),console.log("error.response.status",t.t3.response.status),e.$router.replace("/NotFound"),t.abrupt("return");case 63:b=r.data,E=b.analyzedInstructions,_=b.extendedIngredients,I=b.aggregateLikes,R=b.readyInMinutes,$=b.image,w=b.title,S=b.servings,k={analyzedInstructions:E,extendedIngredients:_,aggregateLikes:I,readyInMinutes:R,image:$,title:w,servings:S},e.recipe=k;case 66:t.next=71;break;case 68:t.prev=68,t.t4=t["catch"](0),console.log(t.t4);case 71:case"end":return t.stop()}}),t,null,[[0,68],[8,15],[26,33],[36,46],[51,58]])})))()},methods:{markAsFavorite:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=e.$route.params.recipeId,t.next=4,e.axios.post(e.$root.store.server_domain+"/users/favorites",{recipeId:r});case 4:t.sent,e.$root.toast("Favorite","The Recipe successfully saved as favorite","success"),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:e.updateFavoriteList(),e.favorite=!0;case 13:case"end":return t.stop()}}),t,null,[[0,8]])})))()},updateFavoriteList:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/users/favorites");case 3:r=t.sent,n=r.data,a=[],a.push.apply(a,Object(i["a"])(n)),e.$root.store.updateFavoriteList(a),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}},o=c,u=(r("a576"),r("2877")),l=Object(u["a"])(o,n,a,!1,null,"4275f636",null);t["default"]=l.exports},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9263:function(e,t,r){"use strict";var n=r("ad6d"),a=r("9f7f"),i=RegExp.prototype.exec,s=String.prototype.replace,c=i,o=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],d=o||l||u;d&&(c=function(e){var t,r,a,c,d=this,p=u&&d.sticky,v=n.call(d),f=d.source,g=0,h=e;return p&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),h=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(f="(?: "+f+")",h=" "+h,g++),r=new RegExp("^(?:"+f+")",v)),l&&(r=new RegExp("^"+f+"$(?!\\s)",v)),o&&(t=d.lastIndex),a=i.call(p?r:d,h),p?a?(a.input=a.input.slice(g),a[0]=a[0].slice(g),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:o&&a&&(d.lastIndex=d.global?a.index+a[0].length:t),l&&a&&a.length>1&&s.call(a[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),e.exports=c},"99af":function(e,t,r){"use strict";var n=r("23e7"),a=r("d039"),i=r("e8b5"),s=r("861d"),c=r("7b0b"),o=r("50c4"),u=r("8418"),l=r("65f0"),d=r("1dde"),p=r("b622"),v=r("2d00"),f=p("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",x=v>=51||!a((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),m=d("concat"),y=function(e){if(!s(e))return!1;var t=e[f];return void 0!==t?!!t:i(e)},b=!x||!m;n({target:"Array",proto:!0,forced:b},{concat:function(e){var t,r,n,a,i,s=c(this),d=l(s,0),p=0;for(t=-1,n=arguments.length;t<n;t++)if(i=-1===t?s:arguments[t],y(i)){if(a=o(i.length),p+a>g)throw TypeError(h);for(r=0;r<a;r++,p++)r in i&&u(d,p,i[r])}else{if(p>=g)throw TypeError(h);u(d,p++,i)}return d.length=p,d}})},"9f7f":function(e,t,r){"use strict";var n=r("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a576:function(e,t,r){"use strict";var n=r("2a2b"),a=r.n(n);a.a},ac1f:function(e,t,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},d58f:function(e,t,r){var n=r("1c0b"),a=r("7b0b"),i=r("44ad"),s=r("50c4"),c=function(e){return function(t,r,c,o){n(r);var u=a(t),l=i(u),d=s(u.length),p=e?d-1:0,v=e?-1:1;if(c<2)while(1){if(p in l){o=l[p],p+=v;break}if(p+=v,e?p<0:d<=p)throw TypeError("Reduce of empty array with no initial value")}for(;e?p>=0:d>p;p+=v)p in l&&(o=r(o,l[p],p,u));return o}};e.exports={left:c(!1),right:c(!0)}},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),i=r("b622"),s=r("9263"),c=r("9112"),o=i("species"),u=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),v=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,d){var f=i(e),g=!a((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),h=g&&!a((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[o]=function(){return r},r.flags="",r[f]=/./[f]),r.exec=function(){return t=!0,null},r[f](""),!t}));if(!g||!h||"replace"===e&&(!u||!l||p)||"split"===e&&!v){var x=/./[f],m=r(f,""[e],(function(e,t,r,n,a){return t.exec===s?g&&!a?{done:!0,value:x.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),y=m[0],b=m[1];n(String.prototype,e,y),n(RegExp.prototype,f,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}d&&c(RegExp.prototype[f],"sham",!0)}},d81d:function(e,t,r){"use strict";var n=r("23e7"),a=r("b727").map,i=r("1dde"),s=r("ae40"),c=i("map"),o=s("map");n({target:"Array",proto:!0,forced:!c||!o},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-64a95f50.d306d60e.js.map