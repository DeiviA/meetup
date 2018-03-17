<template>
  <div class="meetup-container">
    <div class="meetup-image-container">
      <img class="meetup-image" :src="imageUrl" alt="">
    </div>
    <div class="description">
      <div class="description__header">
        <p class="description__title">{{ title }}</p>
      </div>
      <div class="description__description">
        <p class="description__text">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'meetup',
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
    border: 1px solid #343434;
    overflow: hidden;
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
