<template>
  <div>
    <h1 class="category">{{ meetup.title }}</h1>
    <div class="meetup">
      <div class="meetup__date">
        <p>{{ meetup.date }}</p>
      </div>
      <div class="meetup__image">
        <img :src="meetup.imageUrl" :alt="meetup.title">
        <div class="meetup__location">
          <p>{{ meetup.location }}</p>
        </div>
      </div>
      <div class="meetup__date">
        <p>{{ meetup.date }}</p>
      </div>
      <div class="meetup__description">
        <p>{{ meetup.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Meetup',
    data () {
      return {
        meetup: {
          title: 'Meetup',
          id: '',
          description: 'Lorem ipsum dolor sit amet, at pro possit utroque, no molestie forensibus usu.',
          imageUrl: '',
          location: 'Location',
          date: '22.02.2022'
        }
      }
    },
    created () {
      console.log(this.$route.params)
      this.meetup = {...this.$route.params}
      console.log(this.meetup)
    }
  }
</script>

<style lang="scss" scoped>
  .meetup {
    width: 100%;
    padding: 0 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &__date {
      font-size: 16px;
      color: #8f8f8f;
      padding: 10px;
      text-align: center;
    }
    &__image {
      max-width: 600px;
      position: relative;
    }
    &__location {
      width: 100%;
      position: absolute;
      bottom: 2px;
      color: white;
      background-color: rgba(209, 119, 24, 0.63);
      padding: 15px;
      font-size: 20px;
      text-align: center;
      text-transform: uppercase;
    }
    &__description {
      line-height: 25px;
      padding: 0 50px;
    }
  }
</style>
