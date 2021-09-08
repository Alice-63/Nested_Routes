<template>
    <div class="user" >
       
        <h1>User: {{$route.params.benutzername}}</h1>
        <div class="links">
            <router-link :to="{name:'profile'}">Profile</router-link>
            <router-link :to="{name:'post'}">Post</router-link>
            <router-link :to="{name:'stories'}">Stroies</router-link>
        </div>

        
        <router-view class="content"/>
    </div>

</template>
<script>

</script>
<style scoped>
.user
{
display: flex;
flex-direction: column;
align-items: flex-start;
}
a
{
    text-decoration: none;
    color: #444;
    padding: 10px 20px;
    background-color:white ;

}
a.router-link-exact-active {
  background-color: coral;
}
.links
{
    display: flex;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
}
.content
{
background-color: white;
padding: 25px;
width: 100%;
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.11);
border-radius: 10px;
border-top-left-radius: 0;

}
</style>