(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c5ec776"],{"0c16":function(e,t,r){"use strict";var n=r("3df5"),a=r.n(n);a.a},"124c":function(e,t,r){e.exports=r.p+"img/thumb-up.a38f0888.png"},"13d5":function(e,t,r){"use strict";var n=r("23e7"),a=r("d58f").left,i=r("a640"),s=r("ae40"),c=i("reduce"),o=s("reduce",{1:0});n({target:"Array",proto:!0,forced:!c||!o},{reduce:function(e){return a(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"14c3":function(e,t,r){var n=r("c6b6"),a=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var i=r.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"255a":function(e,t,r){e.exports=r.p+"img/servings.a3bb1ff9.png"},"2b5f":function(e,t,r){e.exports=r.p+"img/clock.fff543aa.png"},"3df5":function(e,t,r){},5319:function(e,t,r){"use strict";var n=r("d784"),a=r("825a"),i=r("7b0b"),s=r("50c4"),c=r("a691"),o=r("1d80"),u=r("8aa5"),p=r("14c3"),l=Math.max,f=Math.min,d=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,m=/\$([$&'`]|\d\d?)/g,g=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var h=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,x=n.REPLACE_KEEPS_$0,_=h?"$":"$0";return[function(r,n){var a=o(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,a,n):t.call(String(a),r,n)},function(e,n){if(!h&&x||"string"===typeof n&&-1===n.indexOf(_)){var i=r(t,e,this,n);if(i.done)return i.value}var o=a(e),d=String(this),v="function"===typeof n;v||(n=String(n));var m=o.global;if(m){var y=o.unicode;o.lastIndex=0}var E=[];while(1){var R=p(o,d);if(null===R)break;if(E.push(R),!m)break;var $=String(R[0]);""===$&&(o.lastIndex=u(d,s(o.lastIndex),y))}for(var I="",w=0,C=0;C<E.length;C++){R=E[C];for(var S=String(R[0]),k=l(f(c(R.index),d.length),0),F=[],T=1;T<R.length;T++)F.push(g(R[T]));var A=R.groups;if(v){var O=[S].concat(F,k,d);void 0!==A&&O.push(A);var P=String(n.apply(void 0,O))}else P=b(S,d,k,F,A,n);k>=w&&(I+=d.slice(w,k)+P,w=k+S.length)}return I+d.slice(w)}];function b(e,r,n,a,s,c){var o=n+e.length,u=a.length,p=m;return void 0!==s&&(s=i(s),p=v),t.call(c,p,(function(t,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,n);case"'":return r.slice(o);case"<":c=s[i.slice(1,-1)];break;default:var p=+i;if(0===p)return t;if(p>u){var l=d(p/10);return 0===l?t:l<=u?void 0===a[l-1]?i.charAt(1):a[l-1]+i.charAt(1):t}c=a[p-1]}return void 0===c?"":c}))}}))},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("1d80"),a=r("5899"),i="["+a+"]",s=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),o=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(s,"")),2&e&&(r=r.replace(c,"")),r}};e.exports={start:o(1),end:o(2),trim:o(3)}},6619:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preview-container"},[e.recipe?n("div",[n("div",{staticClass:"recipe-header mt-3 mb-4"},[n("h1",{staticClass:"title"},[e._v(e._s(e.recipe.title))]),n("img",{staticClass:"image",attrs:{src:e.recipe.image}})]),n("div",{staticClass:"recipe-body"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"wrapped1"},[n("div",{staticClass:"mb-3"},[n("div",[n("img",{staticClass:"icons",attrs:{src:r("2b5f")}}),e._v(" "+e._s(e.recipe.readyInMinutes)+" minutes")]),n("div",[n("img",{staticClass:"icons",attrs:{src:r("255a")}}),e._v(" "+e._s(e.recipe.servings)+" servings")]),e.recipe.popularity?n("div",[n("img",{staticClass:"icons",attrs:{src:r("124c")}}),e._v(" "+e._s(e.recipe.popularity)+" likes")]):e._e(),e.recipe.vegetarian?n("div",[n("img",{staticClass:"icons",attrs:{src:r("8dde")}}),e._v(" Vegeterian")]):e._e(),e.recipe.vegan?n("div",[n("img",{staticClass:"icons",attrs:{src:r("7bea")}}),e._v(" Vegan")]):e._e(),e.recipe.glutenFree?n("div",[n("img",{staticClass:"icons",attrs:{src:r("0545")}}),e._v(" Gluten Free")]):e._e(),e.recipe.creator?n("div",[e._v("Made by: "+e._s(e.recipe.creator))]):e._e(),e.recipe.customary?n("div",[e._v("Usally Make in: "+e._s(e.recipe.customary))]):e._e(),e.recipe.isFavorite&&e.$root.store.username&&"/users/familyRecipes"!=this.$route.params.route_name&&"/users/myRecipes"!=this.$route.params.route_name&&"/users/lastSearch"!=this.$route.params.route_name&&"/recipes/search"!=this.$route.params.route_name?n("div",[n("img",{staticClass:"icons",attrs:{src:r("e469")}}),e._v(" Favorite Recipe ")]):e._e(),!e.recipe.isFavorite&&e.$root.store.username&&"/users/familyRecipes"!=this.$route.params.route_name&&"/users/myRecipes"!=this.$route.params.route_name&&"/users/lastSearch"!=this.$route.params.route_name&&"/recipes/search"!=this.$route.params.route_name?n("div",[n("b-button",{staticClass:"heart-button",on:{click:function(t){return e.addToFavorites(e.$route.params.recipeId)}}},[n("img",{staticClass:"icons",attrs:{src:r("6a76")}}),e._v(" Add to Favorites")])],1):e._e()]),e._m(0),n("ul",e._l(e.recipe.ingredients,(function(t){return n("li",{key:t.name},[e._v(" "+e._s(t.amount)+" "+e._s(t.name))])})),0)]),n("div",{staticClass:"wrapped2"},[e._m(1),n("ol",e._l(e.recipe._instructions,(function(t){return n("li",{key:t.number},[e._v(e._s(t.step))])})),0)])])])]):e._e()])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b",[r("u",[e._v("Ingredients:")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b",[r("u",[e._v("Instructions:")])])}],i=(r("99af"),r("d81d"),r("13d5"),r("b0c0"),r("e25e"),r("ac1f"),r("5319"),r("2909")),s=(r("96cf"),r("1da1")),c={data:function(){return{recipe:null,myRecipe:!1,familyRecipes:!1}},watch:{"recipe.isFavorite":function(e){this.recipe.isFavorite=e}},methods:{addToFavorites:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.axios.post(t.$root.store.server_domain+"/users/favorites/",{recipeId:e});case 3:r.sent,t.recipe.isFavorite=!0,r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a,s,c,o,u,p,l,f,d,v,m,g,h,x,_,b,y,E,R,$,I;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a="/recipes/",s=e.$route.params.recipeId,"/users/myRecipes"===e.$route.params.route_name&&(a="/users/myRecipes/",e.myRecipe=!0),"/users/familyRecipes"===e.$route.params.route_name&&(a="/users/familyRecipes/",e.familyRecipes=!0),t.prev=5,t.next=8,e.axios.get(e.$root.store.server_domain+a+s,{params:{id:e.$route.params.recipeId}});case 8:r=t.sent,200!==r.status&&e.$router.replace("/NotFound"),t.next=17;break;case 12:return t.prev=12,t.t0=t["catch"](5),console.log("error.response.status",t.t0.response.status),e.$router.replace("/NotFound"),t.abrupt("return");case 17:n=e.myRecipe||e.familyRecipes?r.data[0]:r.data,c=n,o=c.instructions,u=c.ingredients,p=c.popularity,l=c.readyInMinutes,f=c.servings,d=c.image,v=c.title,m=c.vegan,g=c.vegetarian,h=c.glutenFree,x=c.isWatched,_=c.isFavorite,b=c.creator,y=c.customary,(e.myRecipe||e.familyRecipes)&&(E=JSON.parse(u),R=JSON.parse(o),u=E.map((function(e){return{name:e.name,amount:parseInt(e.amount)}})),o=R.map((function(e){return{name:e.name,steps:e.steps.map((function(e){return{number:e.number,step:e.step}}))}}))),console.log(e.$route.params.route_name),$=o.map((function(e){return e.steps[0].step=e.name+e.steps[0].step,e.steps})).reduce((function(e,t){return[].concat(Object(i["a"])(e),Object(i["a"])(t))}),[]),I={_instructions:$,ingredients:u,popularity:p,readyInMinutes:l,servings:f,image:d,title:v,vegan:m,vegetarian:g,glutenFree:h,isWatched:x,isFavorite:_,creator:b,customary:y},e.recipe=I,t.next=29;break;case 26:t.prev=26,t.t1=t["catch"](0),console.log(t.t1);case 29:case"end":return t.stop()}}),t,null,[[0,26],[5,12]])})))()}},o=c,u=(r("0c16"),r("2877")),p=Object(u["a"])(o,n,a,!1,null,"4507aec5",null);t["default"]=p.exports},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9263:function(e,t,r){"use strict";var n=r("ad6d"),a=r("9f7f"),i=RegExp.prototype.exec,s=String.prototype.replace,c=i,o=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,p=void 0!==/()??/.exec("")[1],l=o||p||u;l&&(c=function(e){var t,r,a,c,l=this,f=u&&l.sticky,d=n.call(l),v=l.source,m=0,g=e;return f&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),g=String(e).slice(l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&"\n"!==e[l.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,m++),r=new RegExp("^(?:"+v+")",d)),p&&(r=new RegExp("^"+v+"$(?!\\s)",d)),o&&(t=l.lastIndex),a=i.call(f?r:l,g),f?a?(a.input=a.input.slice(m),a[0]=a[0].slice(m),a.index=l.lastIndex,l.lastIndex+=a[0].length):l.lastIndex=0:o&&a&&(l.lastIndex=l.global?a.index+a[0].length:t),p&&a&&a.length>1&&s.call(a[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),e.exports=c},"99af":function(e,t,r){"use strict";var n=r("23e7"),a=r("d039"),i=r("e8b5"),s=r("861d"),c=r("7b0b"),o=r("50c4"),u=r("8418"),p=r("65f0"),l=r("1dde"),f=r("b622"),d=r("2d00"),v=f("isConcatSpreadable"),m=9007199254740991,g="Maximum allowed index exceeded",h=d>=51||!a((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),x=l("concat"),_=function(e){if(!s(e))return!1;var t=e[v];return void 0!==t?!!t:i(e)},b=!h||!x;n({target:"Array",proto:!0,forced:b},{concat:function(e){var t,r,n,a,i,s=c(this),l=p(s,0),f=0;for(t=-1,n=arguments.length;t<n;t++)if(i=-1===t?s:arguments[t],_(i)){if(a=o(i.length),f+a>m)throw TypeError(g);for(r=0;r<a;r++,f++)r in i&&u(l,f,i[r])}else{if(f>=m)throw TypeError(g);u(l,f++,i)}return l.length=f,l}})},"9f7f":function(e,t,r){"use strict";var n=r("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},c20d:function(e,t,r){var n=r("da84"),a=r("58a8").trim,i=r("5899"),s=n.parseInt,c=/^[+-]?0[Xx]/,o=8!==s(i+"08")||22!==s(i+"0x16");e.exports=o?function(e,t){var r=a(String(e));return s(r,t>>>0||(c.test(r)?16:10))}:s},d58f:function(e,t,r){var n=r("1c0b"),a=r("7b0b"),i=r("44ad"),s=r("50c4"),c=function(e){return function(t,r,c,o){n(r);var u=a(t),p=i(u),l=s(u.length),f=e?l-1:0,d=e?-1:1;if(c<2)while(1){if(f in p){o=p[f],f+=d;break}if(f+=d,e?f<0:l<=f)throw TypeError("Reduce of empty array with no initial value")}for(;e?f>=0:l>f;f+=d)f in p&&(o=r(o,p[f],f,u));return o}};e.exports={left:c(!1),right:c(!0)}},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),i=r("b622"),s=r("9263"),c=r("9112"),o=i("species"),u=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),p=function(){return"$0"==="a".replace(/./,"$0")}(),l=i("replace"),f=function(){return!!/./[l]&&""===/./[l]("a","$0")}(),d=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,l){var v=i(e),m=!a((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),g=m&&!a((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[o]=function(){return r},r.flags="",r[v]=/./[v]),r.exec=function(){return t=!0,null},r[v](""),!t}));if(!m||!g||"replace"===e&&(!u||!p||f)||"split"===e&&!d){var h=/./[v],x=r(v,""[e],(function(e,t,r,n,a){return t.exec===s?m&&!a?{done:!0,value:h.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:p,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),_=x[0],b=x[1];n(String.prototype,e,_),n(RegExp.prototype,v,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}l&&c(RegExp.prototype[v],"sham",!0)}},d81d:function(e,t,r){"use strict";var n=r("23e7"),a=r("b727").map,i=r("1dde"),s=r("ae40"),c=i("map"),o=s("map");n({target:"Array",proto:!0,forced:!c||!o},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},e25e:function(e,t,r){var n=r("23e7"),a=r("c20d");n({global:!0,forced:parseInt!=a},{parseInt:a})},e469:function(e,t,r){e.exports=r.p+"img/redheart1.4d489340.png"}}]);
//# sourceMappingURL=chunk-0c5ec776.9845be39.js.map