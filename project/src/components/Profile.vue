<template>
  <div class="profile">
    <h1> PROFILE </h1>
    <h3> 各項目クリックで別ページに移動します </h3>
    <div class="content">
    <p>{{ text }}</p>  
    <p>Twitter: <a href= "https://twitter.com/nemurin_tech" target="_blank" >{{twitter}}</a></p>
    <p>Blog: <a href= "https://nemurin-blog.hatenablog.com/" target="_blank" >{{ blog }}</a></p>
    <p>Mail: {{ Mail }}</p> 
    <p>Github: <a href= "https://github.com/nemurin" target="_blank" >{{ Github }}</a></p> 
  </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      name: 'プロフィール',
      twitter: 'ねむー',
      text: 'Name: ねむー',
      blog: 'ねむーの日記~AtCoderな日々~',
      Mail: 'yh.kyud.28[at]gmail.com',
      Github: 'nemurin',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.profile {
  text-align: center;
}

div.content {
  background-color: #eee;
  display: inline-block;
  margin: 10px;
  width: 30%;
}

a{
  text-decoration: none;
  font-weight: bolder;
}

h3 {
}

p {
  width: 90%;
  display: inline-block;
  text-align: center;
}

</style>
