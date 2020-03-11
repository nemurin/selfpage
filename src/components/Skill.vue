<template>
  <div class="skill">
    <h1> SKILLS </h1>
    <h3> 使用した経験のあるソフトやスキルをまとめています。３つ星で習熟度を表しています </h3>
    <div class="content" v-for="(item, index) in items" :key=index>
    <h2> {{ item.name }} </h2>
    <h2> {{ item.star }} </h2>
    <p> {{ item.text }} </p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  data () {
    return {
      items: [
        {
      name: 'GitHub',
      star: '★★★',
      text: '普段はSourceTreeやTortoiseGit等のクライアントを使用しています。また、プルリクエスト、レビューといった複数人での開発の経験があります。'
        },
        {
      name: 'OpenCV',
      star: '★★★',
      text: '研究で画像処理を行う際に使用しています。ホモグラフィー変換、特徴点抽出、画像映像入出力、基本画像処理等の機能について使用経験があります。'
        },
        {
      name: 'Unity',
      star: '★★★',
      text: 'ゲーム製作やARNaviプロジェクトに使用しています。複数人開発でのCollaborate機能、ゲームパッド入力対応、Andoroid独自のコンパス等を使用した経験があります。'
        },
        {
      name: 'Firebase',
      star: '★☆☆',
      text: 'このサイトのHostingやチャットアプリ製作時の認証機能で使用しています。このサイトにも近々認証やデータベースなどを搭載できればと考えています。'
        },
        {
      name: 'AWS',
      star: '★☆☆',
      text: '研究でMatlab計算などの重い処理を行う際に使用しています。EC2インスタンス以外にも様々な機能が存在するので興味を持っています。'
        },
        {
      name: 'Vue.js',
      star: '★☆☆',
      text: 'モダンなWeb開発に最近興味があり、勉強を始めています。このサイトをVue.jsで作成することを目標に学習中です。'
        },
        {
      name: 'Blender',
      star: '★☆☆',
      text: 'Unityに登場させる3Dモデルの作成を行うために使用しています。'
        },
        {
      name: 'AviUtl',
      star: '★☆☆',
      text: '簡単な動画を作る際に使用しています。'
        },
        {
      name: 'CakeWalkBandlab',
      star: '★☆☆',
      text: '簡単な効果音を作成する際に使用しています。'
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.skill {
  text-align: center;
}

div.content {
  background-color: #eee;
  display: inline-block;
  margin: 10px;
  width: 30%;
}

h3 {
}

p {
  width: 90%;
  display: inline-block;
  text-align: left;
}

</style>
