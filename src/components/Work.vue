<template>
  <div class="work">
    <h1> WORKS </h1>
    <h3> 作成したソフトやコンテンツをまとめています。</h3>
    <div class="content" v-for="(item, index) in items" :key=index>
    <h2> {{ item.name }} </h2>
    <img v-if="index === 0" class="img" src="../assets/GTX1.png" width="50%" />
    <img v-if="index === 1" class="img" src="../assets/GODRETURNS.png" width="50%" />
    <img v-if="index === 2" class="img" src="../assets/ARNavi.png" width="25%" />
    <img v-if="index === 3" class="img" src="../assets/GTX1.png" width="50%" />
    <img v-if="index === 4" class="img" src="../assets/HOMEPAGE.png" width="50%" />
    <img v-if="index === 5" class="img" src="../assets/blog.png" width="50%" />
    <p> {{ item.text }} </p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Work',
  data () {
    return {
      items: [
        {
      name: '同時投影',
      text: '大学で研究していました。',
      path: "../assets/ARNavi.png"
        },
        {
      name: 'God Returns',
      text: 'アイワナ風ゲームです。',
      path: "../assets/ARNavi.png"
        },
        {
      name: 'AR Navi',
      text: 'ARでナビします。',
      path: "ARNavi"
        },
        {
      name: 'チャットアプリ',
      text: 'LINEで作りました。',
      path: "../assets/ARNavi.png"
        },
        {
      name: 'ホームページ',
      text: 'これです。',
      path: "../assets/ARNavi.png"
        },
        {
      name: '競プロブログ',
      text: 'https://nemurin-blog.hatenablog.com',
      path: "../assets/ARNavi.png"
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.work {
  text-align: center;
}

div.content {
  background-color: #eee;
  display: inline-block;
  margin: 1%;
  width: 300px;
}

h2 {
  font-size: 130%;
}

p {
  font-size: 100%;
  width: 90%;
  display: inline-block;
  text-align: left;
}

</style>
