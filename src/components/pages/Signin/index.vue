<template>
  <div>
    <h1 class="category">Sign In</h1>
    <div class="form-container">
      <form class="form">
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
        <button type="submit" class="button">Sign In</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Signin',
    data () {
      return {
        email: '',
        password: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
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
