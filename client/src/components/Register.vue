<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" placeholder="email" v-model="email" /><br/><br/>
    <input type="password" name="password" placeholder="passsword" v-model="password" /><br/><br/>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import authentication from '@/services/authentication'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  // Check is email changed or not
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  },
  methods: {
    async register () {
      const response = await authentication.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  },
  // Change email after specific amount of time
  mounted () {
    setTimeout(() => {
      this.email = 'this@something.com'
    }, 2000)
  }
}
</script>

<style scoped>
</style>
