<template>
  <router-link tag="div" class="meetup-container"
               :to="{ name: 'meetup',
               params: {id, title, description, imageUrl, location, date} }">
    <div class="meetup-image-container">
      <img class="meetup-image" :src="imageUrl" :alt="title">
    </div>
    <div class="description">
      <div class="description__header">
        <p class="description__title">{{ title }}</p>
      </div>
      <div class="description__description">
        <p class="description__text">{{ description }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'MeetupItem',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  data () {
      return {
      }
  }
}
</script>

<style lang="scss" scoped>
  .meetup-container {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    display: flex;
    justify-content: flex-start;
    border: 4px solid white;
    overflow: hidden;
    -webkit-box-shadow: -1px -1px 32px 6px rgba(97,97,97,0.36);
    -moz-box-shadow: -1px -1px 32px 6px rgba(97,97,97,0.36);
    box-shadow: -1px -1px 32px 6px rgba(97,97,97,0.36);
    transition: transform 0.3s;
    cursor: pointer;
    &:hover {
      transform: translate(0, -10px);
    }
  }

  .meetup-image-container {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .meetup-image {
    display: block;
  }

  .description {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 20px;
    &__title {
      font-size: 25px;
      margin-bottom: 25px;
    }
    &__text {
      line-height: 20px;
    }
  }

</style>
