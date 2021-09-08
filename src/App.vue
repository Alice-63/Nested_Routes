<template>
  <div id="app" class="wrapper">
    <div id="nav">
      <router-link to="/" class="home">Home</router-link> 
      
    </div>
    <router-view/>
  </div>
</template>

<style>
body
{
  background-color: thistle;
}
.wrapper
{
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.home
{
  font-size: 2em;
}
</style>
