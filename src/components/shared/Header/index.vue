<template>
  <div class="header-wrapper">
    <div class="logo-container">
      <!--<p class="logo-container__text">{{logo}}</p>-->
      <router-link tag="p" class="logo-container__text" to="/">Meet<span class="logo-container__text_orange">Up</span></router-link>
    </div>
    <div class="menu-container">
      <div class="menu">
        <ul class="menu-list">
          <li class="menu-list__item"><router-link active-class="active" to="/meetups">Meetups</router-link></li>
          <li class="menu-list__item"><router-link active-class="active" to="/create-meetup">Create Meetup</router-link></li>
          <li class="menu-list__item"><router-link active-class="active" to="/contacts">Contacts</router-link></li>
        </ul>
      </div>
    </div>
    <div class="buttons-container">
      <div class="buttons-container-group" v-if="!getUserLoggedIn">
        <router-link tag="button" class="button" to="/signin">Sign In</router-link>
        <router-link tag="button" class="button" to="/signup">Sign Up</router-link>
      </div>
      <div class="buttons-container-group" v-else>
        <router-link tag="button" class="button" to="/account">Account</router-link>
        <button class="button" @click="onLogOut">Log Out</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'WHeader',
  data () {
    return {
      logo: 'MeetUp'
    }
  },
  computed: {
    ...mapGetters(['getUserLoggedIn'])
  },
  methods: {
    ...mapActions(['logOut']),
    onLogOut () {
      this.logOut()
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-wrapper {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100px;
    background-color: #343434;
    display: flex;
    justify-content: space-around;
  }

  .logo-container {
    display: flex;
    width: 200px;
    justify-content: center;
    align-items: center;
    &__text {
      color: white;
      font-weight: 700;
      font-size: 26px;
      cursor: pointer;
      &_orange {
        color: #d77b17;
      }
    }
  }

  .menu-container {
    display: flex;
    align-items: center;
  }

  .menu {
    width: 600px;
  }

  .menu-list {
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: space-around;
    &__item {
      font-size: 20px;
      text-transform: uppercase;
      display: inline-block;
      font-weight: 700;
      color: white;
      a {
        padding: 10px 0;
        border-bottom: 3px solid transparent;
      }

      .active {
        color: #d77b17;
        border-bottom: 3px solid #d77b17;
      }
    }
  }

  .buttons-container {
    width: 200px;
    display: flex;
    align-items: center;
  }

  .buttons-container-group {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

</style>
