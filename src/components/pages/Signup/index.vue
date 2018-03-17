<template>
  <div>
    <h1 class="category">Sign Up</h1>
    <div class="form-container">
      <form class="form" @submit.prevent="onSubmit">
        <input class="form__item" type="email"
               name="email"
               placeholder="Your Email"
               v-model="email"
        ></input>
        <input class="form__item" type="password"
               name="password"
               placeholder="Your Password"
               v-model="password"
        ></input>
        <input class="form__item" type="password"
               name="confirm-password"
               placeholder="Confirm Password"
               v-model="confirmPassword"
        ></input>
        <button type="submit" class="button">Sign In</button>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Signup',
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    methods: {
      ...mapActions(['signUserUp']),
      onSubmit () {
        if (this.email === '' || this.password === '') return
        this.signUserUp({email: this.email, password: this.password})
          .then(() => {
            this.$router.push({ path: '/'})
          })
          .catch(error => {
            console.log('onSubmit', error)
          })
      }
    }
  }
</script>

<style lang="scss">
  .form-container {
    width: 500px;
    padding: 20px;
    margin: 0 auto;
  }

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    &__item {
      border: 1px solid #343434;
      margin-bottom: 20px;
      height: 40px;
      font-size: 18px;
      padding: 10px;
      border-radius: 5px;
    }
  }
</style>
