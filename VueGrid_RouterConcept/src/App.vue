<template>
  <div id="app">
    <nav>
        <router-link to='/'>Home</router-link>
        <router-link to='/register'>Register</router-link>
        <router-link to='/login'>Login</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
    data () {
        return {
            
        }
    },
     methods: {
       doSomethingCool: function(e){
         debugger
       }
     }
}
</script>
