webpackJsonp([0],{"1uuo":function(t,e){},AgmR:function(t,e){},JUK7:function(t,e){},LFaB:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ol",t._l(t.items,function(e,n){return a("li",{key:n},[a("router-link",{attrs:{to:e.path}},[t._v("\n          "+t._s(e.title)+"\n       ")])],1)}),0)])},staticRenderFns:[]};var s={name:"App",components:{TabMenu:a("VU/8")({name:"TabMenu",data:function(){return{items:[{title:"top",path:"/"},{title:"profile",path:"/profile"},{title:"skills",path:"/skills"},{title:"works",path:"/works"},{title:"language",path:"/languages"},{title:"hobby",path:"/hobby"}]}}},r,!1,function(t){a("LFaB")},"data-v-70415d4a",null).exports}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("tab-menu"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var o=a("VU/8")(s,i,!1,function(t){a("TBUK")},null,null).exports,v=a("/ocq"),l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var u=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},l,!1,function(t){a("1uuo")},"data-v-d8ec41bc",null).exports,_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"work"},[n("h1",[t._v(" WORKS ")]),t._v(" "),n("h3",[t._v(" 作成したソフトやコンテンツをまとめています。")]),t._v(" "),t._l(t.items,function(e,r){return n("div",{key:r,staticClass:"content"},[n("h2",[t._v(" "+t._s(e.name)+" ")]),t._v(" "),2===r?n("img",{staticClass:"img",attrs:{src:a("gdZo"),width:"50%"}}):t._e(),t._v(" "),n("p",[t._v(" "+t._s(e.text)+" ")])])})],2)},staticRenderFns:[]};var c=a("VU/8")({name:"Work",data:function(){return{items:[{name:"同時投影",text:"大学で研究していました。",path:"../assets/ARNavi.png"},{name:"God Returns",text:"アイワナ風ゲームです。",path:"../assets/ARNavi.png"},{name:"AR Navi",text:"ARでナビします。",path:"ARNavi"},{name:"チャットアプリ",text:"LINEで作りました。",path:"../assets/ARNavi.png"},{name:"ホームページ",text:"これです。",path:"../assets/ARNavi.png"},{name:"競プロブログ",text:"https://nemurin-blog.hatenablog.com",path:"../assets/ARNavi.png"}]}}},_,!1,function(t){a("zUNi")},"data-v-833a6204",null).exports,m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"skill"},[a("h1",[t._v(" SKILLS ")]),t._v(" "),a("h3",[t._v(" 使用した経験のあるソフトやスキルをまとめています。３つ星で習熟度を表しています ")]),t._v(" "),t._l(t.items,function(e,n){return a("div",{key:n,staticClass:"content"},[a("h2",[t._v(" "+t._s(e.name)+" ")]),t._v(" "),a("h2",[t._v(" "+t._s(e.star)+" ")]),t._v(" "),a("p",[t._v(" "+t._s(e.text)+" ")])])})],2)},staticRenderFns:[]};var h=a("VU/8")({name:"Skill",data:function(){return{items:[{name:"GitHub",star:"★★★",text:"普段はSourceTreeやTortoiseGit等のクライアントを使用しています。また、プルリクエスト、レビューといった複数人での開発の経験があります。"},{name:"OpenCV",star:"★★★",text:"研究で画像処理を行う際に使用しています。ホモグラフィー変換、特徴点抽出、画像映像入出力、基本画像処理等の機能について使用経験があります。"},{name:"Unity",star:"★★★",text:"ゲーム製作やARNaviプロジェクトに使用しています。複数人開発でのCollaborate機能、ゲームパッド入力対応、Andoroid独自のコンパス等を使用した経験があります。"},{name:"Firebase",star:"★☆☆",text:"このサイトのHostingやチャットアプリ製作時の認証機能で使用しています。このサイトにも近々認証やデータベースなどを搭載できればと考えています。"},{name:"AWS",star:"★☆☆",text:"研究でMatlab計算などの重い処理を行う際に使用しています。EC2インスタンス以外にも様々な機能が存在するので興味を持っています。"},{name:"Vue.js",star:"★☆☆",text:"モダンなWeb開発に最近興味があり、勉強を始めています。このサイトをVue.jsで作成することを目標に学習中です。"},{name:"Blender",star:"★☆☆",text:"Unityに登場させる3Dモデルの作成を行うために使用しています。"},{name:"AviUtl",star:"★☆☆",text:"簡単な動画を作る際に使用しています。"},{name:"CakeWalkBandlab",star:"★☆☆",text:"簡単な効果音を作成する際に使用しています。"}]}}},m,!1,function(t){a("AgmR")},"data-v-11728c82",null).exports,p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile"},[a("h1",[t._v(" PROFILE ")]),t._v(" "),a("h3",[t._v(" 各項目クリックで別ページに移動します ")]),t._v(" "),a("div",{staticClass:"content"},[a("p",[t._v(t._s(t.text))]),t._v(" "),a("p",[t._v(t._s(t.univ))]),t._v(" "),a("p",[t._v("Twitter: "),a("a",{attrs:{href:"https://twitter.com/nemurin_tech",target:"_blank"}},[t._v(t._s(t.twitter))])]),t._v(" "),a("p",[t._v("Blog: "),a("a",{attrs:{href:"https://nemurin-blog.hatenablog.com/",target:"_blank"}},[t._v(t._s(t.blog))])]),t._v(" "),a("p",[t._v("Mail: "+t._s(t.Mail))]),t._v(" "),a("p",[t._v("Github: "),a("a",{attrs:{href:"https://github.com/nemurin",target:"_blank"}},[t._v(t._s(t.Github))])])])])},staticRenderFns:[]};var f=a("VU/8")({name:"Profile",data:function(){return{name:"プロフィール",twitter:"ねむー",text:"Name: ねむー",univ:"University: 九州大学システム情報科学府",blog:"ねむーの日記~AtCoderな日々~",Mail:"yh.kyud.28[at]gmail.com",Github:"nemurin"}}},p,!1,function(t){a("JUK7")},"data-v-0eb392f5",null).exports,d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language"},[a("h1",[t._v(" LANGUAGE ")]),t._v(" "),a("h3",[t._v(" 使用した経験のある言語をまとめています。３つ星で習熟度を表しています ")]),t._v(" "),t._l(t.items,function(e,n){return a("div",{key:n,staticClass:"content"},[a("h2",[t._v(" "+t._s(e.name)+" ")]),t._v(" "),a("h2",[t._v(" "+t._s(e.star)+" ")]),t._v(" "),a("p",[t._v(" "+t._s(e.text)+" ")])])})],2)},staticRenderFns:[]};var g=a("VU/8")({name:"Language",data:function(){return{items:[{name:"C++",star:"★★☆",text:"研究で画像処理を行う際にOPENCVとともに使用しています。またDXライブラリとともにゲーム製作にも使用しています。"},{name:"C#",star:"★★☆",text:"AtCoderで競技プログラミングをする際に使用しています。またUnityを使用したゲーム製作にも使用しています。"},{name:"Vue.js",star:"★☆☆",text:"このサイトを作成するために勉強しました。静的なページしか作れないのでいずれ動的なものを作りたいです。"},{name:"Kotlin",star:"★☆☆",text:"LINEのインターンにてサーバーサイドの作業を行うために使用しました。"},{name:"HTML",star:"★☆☆",text:"最初にホームページを作った際に勉強しました。"},{name:"Java",star:"★☆☆",text:"Springフレームワークの勉強に使用しています。"},{name:"Matlab",star:"★☆☆",text:"研究で最適化処理を行うために使用しています。"},{name:"Python",star:"★☆☆",text:"授業で機械学習をする際に使用しました。SckitLearnやTensorFlowが使えます。"},{name:"R",star:"★☆☆",text:"大学の授業で多変量解析を行う際に使用しました。"}]}}},d,!1,function(t){a("hZHJ")},"data-v-d09b0ef8",null).exports,b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hobby"},[a("h1",[t._v(" HOBBY ")]),t._v(" "),a("h3",[t._v(" 最近やってる趣味一覧です")]),t._v(" "),t._l(t.items,function(e,n){return a("div",{key:n,staticClass:"content"},[a("h2",[t._v(" "+t._s(e.name)+" ")]),t._v(" "),a("p",[t._v(" "+t._s(e.text)+" ")])])})],2)},staticRenderFns:[]};var x=a("VU/8")({name:"Hobby",data:function(){return{items:[{name:"競技かるた",star:"★★★",text:"高校生の頃から現在までやっています。現在はA級四段を取得しています。"},{name:"競技プログラミング",star:"★★★",text:"最近熱心にやっています。レートは緑色コーダーです。"},{name:"ドット絵",star:"★★★",text:"ドット絵を書いています。近日ドット絵公開予定です。"},{name:"音楽制作",star:"★☆☆",text:"まだ上手く形にならない…"},{name:"遊戯王",star:"★☆☆",text:"リアルカードの方をやっています。"},{name:"FGO",star:"★☆☆",text:"熱心にやっています。映画が楽しみ。"},{name:"Shadowverse",star:"★☆☆",text:"ローテではクオンウィッチ、アマツエルフ、潜伏ロイヤルなど、アンリミではAFネメシスやってます。"},{name:"デュエルマスターズプレイス",star:"★☆☆",text:"プラチナランクでボルコン握ってます。"},{name:"競技プログラミングブログ",star:"★☆☆",text:"ほそぼそやってます。"}]}}},b,!1,function(t){a("mOTG")},"data-v-c6ac05cc",null).exports;n.a.use(v.a);var k=new v.a({routes:[{path:"/",name:"HelloWorld",component:u},{path:"/skills",name:"Skill",component:h},{path:"/profile",name:"Profile",component:f},{path:"/works",name:"Work",component:c},{path:"/languages",name:"Language",component:g},{path:"/hobby",name:"Hobby",component:x}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:k,components:{App:o},template:"<App/>"})},TBUK:function(t,e){},gdZo:function(t,e,a){t.exports=a.p+"static/img/ARNavi.f62a190.png"},hZHJ:function(t,e){},mOTG:function(t,e){},zUNi:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.81d7e1ef1da295254d27.js.map