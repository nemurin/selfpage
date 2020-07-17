<template>
  <div class="hobby">
    <h1> HOBBY </h1>
    <h3> 最近やってる趣味一覧です</h3>
    <div class="content" v-for="(item, index) in items" :key=index>
    <h2> {{ item.name }} </h2>
    <p> {{ item.text }} </p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Hobby',
  data () {
    return {
      items: [
        {
      name: '競技かるた',
      star: '★★★',
      text: '高校生の頃から現在までやっています。現在はA級四段を取得しています。'
        },
        {
      name: '競技プログラミング',
      star: '★★★',
      text: '最近熱心にやっています。レートは緑色コーダーです。'
        },
        {
      name: 'ドット絵',
      star: '★★★',
      text: 'ドット絵を書いています。近日ドット絵公開予定です。'
        },
        {
      name: '音楽制作',
      star: '★☆☆',
      text: 'まだ上手く形にならない…'
        },
        {
      name: '遊戯王',
      star: '★☆☆',
      text: 'リアルカードの方をやっています。'
        },
        {
      name: 'FGO',
      star: '★☆☆',
      text: '熱心にやっています。映画が楽しみ。'
        },
        {
      name: 'Shadowverse',
      star: '★☆☆',
      text: 'ローテではクオンウィッチ、アマツエルフ、潜伏ロイヤルなど、アンリミではAFネメシスやってます。'
        },
        {
      name: 'デュエルマスターズプレイス',
      star: '★☆☆',
      text: 'プラチナランクでボルコン握ってます。'
        },
        {
      name: '競技プログラミングブログ',
      star: '★☆☆',
      text: 'ほそぼそやってます。'
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.hobby {
  text-align: center;
}

div.content {
  background-color: #eee;
  display: inline-block;
  margin: 1%;
  width: 300px;
}

h3 {
  
}

p {
  font-size: 100%;
  width: 90%;
  display: inline-block;
  text-align: left;
}


</style>
