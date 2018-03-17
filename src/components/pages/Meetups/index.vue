<template>
  <div>
    <h1 class="category">Meetups</h1>
    <div class="meetup-wrapper" v-for="meetup in meetups">
      <v-meetup :title="meetup.title" :description="meetup.description" :imageUrl="meetup.image"></v-meetup>
    </div>
  </div>
</template>

<script>
  import VMeetup from './Meetup/index.vue'

  export default {
    name: 'Meetups',
    components: { VMeetup },
    data () {
      return {
        logo: 'Meetups',
        meetups: [
          { title: 'California meetings',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            image: 'https://dohoavn.net/files/images/12440258.jpg' },
          { title: 'California meetings',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            image: 'https://dohoavn.net/files/images/12440258.jpg' },
          { title: 'California meetings',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            image: 'https://dohoavn.net/files/images/12440258.jpg' },
          { title: 'California meetings',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            image: 'https://dohoavn.net/files/images/12440258.jpg' },
          { title: 'California meetings',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            image: 'https://dohoavn.net/files/images/12440258.jpg' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .meetup-wrapper {
    margin-bottom: 50px;
  }

</style>
