<template>
  <div>
    <h1 class="category">Meetups</h1>
    <div class="meetup-wrapper" v-for="meetup in meetups">
      <v-meetup
        :title="meetup.title"
        :description="meetup.description"
        :imageUrl="meetup.image"
        :id="meetup.id"
        :location="meetup.location"
        :date="meetup.date"></v-meetup>
    </div>
  </div>
</template>

<script>
  import VMeetup from './MeetupItem/index.vue'

  export default {
    name: 'Meetups',
    components: { VMeetup },
    data () {
      return {
        logo: 'Meetups',
        meetups: [
          { title: 'California meetings',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            image: 'https://dohoavn.net/files/images/12440258.jpg',
            id: '1',
            location: 'USA, California',
            date: '21.05.2018'},
          { title: 'Paris Spring',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            image: 'http://theflightfinder.com/wp-content/uploads/2017/12/paris.jpg',
            id: '2',
            location: 'France, Paris',
            date: '01.04.2019'},
          { title: 'Romance in Vienna',
            description: 'Lorem ipsum dolor sit amet, at pro possit utroque, no molestie forensibus usu. Eam dicta graece ex, his an maiorum dissentias. Equidem commune honestatis usu ei, quo dicant debitis cu. An eos diam putant quaerendum, ut velit falli cum. Sed ex volumus delectus, vim ex luptatum voluptaria. Id vim perfecto atomorum adolescens, eligendi percipit dignissim in sit. Oporteat persequeris eu pro, percipit nominati voluptatibus eum ex. Postea albucius pri at. Ei cetero viderer pericula sea, tacimates constituto ut vel. Ne iisque fabulas docendi cum, per incorrupte conclusionemque in. Ex nec elitr nostrud similique, mundi choro molestie mea ex, duo ex porro debitis. Cum corpora laboramus ad. Tamquam efficiendi te eam, habeo possit possim sed id, mel ex alii modus persius. Id eruditi recteque inciderint per. Mazim tractatos ea qui, ei eos omnes vulputate. Stet audire persius ne duo, vis adipisci deterruisset ea. Eleifend expetendis mel cu. His et idque dicam adolescens. Nam persequeris concludaturque at, et adversarium interpretaris vis, vel doctus percipitur an. Nam ut stet ludus latine, id sit vidisse eripuit. Accusata instructior comprehensam eos an. Ne his solet persecuti, volumus alienum ut cum, choro labore expetendis vix id. Legere iriure latine sea ne, vel an dolore interpretaris. Ius cu deleniti expetendis, insolens prodesset concludaturque duo ea. Quo choro molestie signiferumque ad, enim legere complectitur his an. Ea habeo salutatus definitionem duo. Mel no aeterno accusata, in eos nobis oblique conceptam, laoreet maluisset tincidunt cum ad. Malis neglegentur pro ea.',
            image: 'https://lonelyplanetimages.imgix.net/mastheads/stock-photo-st-stephens-church-112868985.jpg?sharp=10&vib=20&w=1200',
            id: '3',
            location: 'Austria, Vienna',
            date: '15.03.2018'},
          { title: 'Berlin meetings',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            image: 'https://lonelyplanetwp.imgix.net/2015/12/brandenburg-gate-berlin-GettyRF-1500-cs.jpg?crop=entropy&fit=crop&h=421&sharp=10&vib=20&w=748',
            id: '4',
            location: 'Germany, Berlin',
            date: '04.07.2018'}
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
