<template>
  <div class="language">
    <h1> LANGUAGE </h1>
    <h3> 使用した経験のある言語をまとめています。３つ星で習熟度を表しています </h3>
    <div class="content" v-for="(item, index) in items" :key=index>
    <h2> {{ item.name }} </h2>
    <h2> {{ item.star }} </h2>
    <p> {{ item.text }} </p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Language',
  data () {
    return {
      items: [
        {
      name: 'C++',
      star: '★★☆',
      text: '研究で画像処理を行う際にOPENCVとともに使用しています。またDXライブラリとともにゲーム製作にも使用しています。'
        },
        {
      name: 'C#',
      star: '★★☆',
      text: 'AtCoderで競技プログラミングをする際に使用しています。またUnityを使用したゲーム製作にも使用しています。'
        },
        {
      name: 'Vue.js',
      star: '★☆☆',
      text: 'このサイトを作成するために勉強しました。静的なページしか作れないのでいずれ動的なものを作りたいです。'
        },
        {
      name: 'Kotlin',
      star: '★☆☆',
      text: 'LINEのインターンにてサーバーサイドの作業を行うために使用しました。'
        },
        {
      name: 'HTML',
      star: '★☆☆',
      text: '最初にホームページを作った際に勉強しました。'
        },
        {
      name: 'Java',
      star: '★☆☆',
      text: 'Springフレームワークの勉強に使用しています。'
        },
        {
      name: 'Matlab',
      star: '★☆☆',
      text: '研究で最適化処理を行うために使用しています。'
        },
        {
      name: 'Python',
      star: '★☆☆',
      text: '授業で機械学習をする際に使用しました。SckitLearnやTensorFlowが使えます。'
        },
        {
      name: 'R',
      star: '★☆☆',
      text: '大学の授業で多変量解析を行う際に使用しました。'
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.language {
  text-align: center;
  display: inline-block;
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
