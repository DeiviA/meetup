<template>
  <div>
    <h1 class="category" @click="dummyFunc">Create Meetup</h1>
    <div class="create-meetup-container">
      <form class="create-meetup" @submit.prevent="onCreateNewMeeting">
        <input class="create-meetup__item" type="title"
               name="title"
               placeholder="Title"
               @blur="$v.meetup.title.$touch()"
               :class="{ 'error-msg': $v.meetup.title.$dirty && $v.meetup.title.$invalid }"
               v-model="meetup.title">

        <input class="create-meetup__item" type="location"
               name="location"
               placeholder="Location"
               @blur="$v.meetup.location.$touch()"
               :class="{ 'error-msg': $v.meetup.location.$dirty && $v.meetup.location.$invalid }"
               v-model="meetup.location">

        <textarea class="create-meetup__item create-meetup__item_textarea" type="description"
               name="description"
               placeholder="Description"
               @blur="$v.meetup.description.$touch()"
               :class="{ 'error-msg': $v.meetup.description.$dirty && $v.meetup.description.$invalid }"
               v-model="meetup.description"
        ></textarea>

        <div class="buttons-container">
          <datepicker
            v-model="meetup.date"
            :disabled="disabled"
            name="createDate"
            id="datePicker"
            input-class="create-meetup__item create-meetup__item_date"
            class="create-meetup__datepicker"></datepicker>

          <input class="create-meetup__item hidden" type="file"
                 @change="onPickImage"
                 ref="img"
                 accept="image/*">
          <button class="button-img" @click.stop.prevent="onClickButton"
                  :class="{ 'error-msg': $v.meetup.imageUrl.$dirty && $v.meetup.imageUrl.$invalid }"
          >Choose Image</button>
        </div>


        <div class="create-meetup__image">
          <img :src="meetup.imageUrl" alt="preview">
        </div>
        <button class="button" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker';
  import { mapActions, mapGetters } from 'vuex'
  import { required, minLength } from 'vuelidate/lib/validators'

  export default {
    name: 'CreateMeetup',
    components: { Datepicker },
    data () {
      return {
        meetup: {
          title: '',
          description: '',
          photo: null,
          imageUrl: '',
          location: '',
          date: new Date()
        },
        disabled: {
          to: new Date()
        }
      }
    },
    validations: {
      meetup: {
        title: {
          required,
          minLength: minLength(5)
        },
        description: {
          required,
          minLength: minLength(200)
        },
        imageUrl: {
          required
        },
        location: {
          required,
          minLength: minLength(3)
        }
      }
    },
    computed: {
      ...mapGetters(['getUser'])
    },
    methods: {
      ...mapActions(['createNewMeetup', 'getAllMeetups']),
      onClickButton () {
        this.$refs.img.click()
      },
      dummyFunc () {
        this.$v.$touch()
        console.log('dirty', this.$v.meetup.title.$dirty)
        console.log('required', this.$v.meetup.title.required)
        console.log('invalid', this.$v.meetup.title.$invalid)
        console.log('all', this.$v.meetup.$invalid)
      },
      onPickImage (event) {
        const file = event.target.files[0]
        const format = file.name.substring(file.name.lastIndexOf('.') + 1);
        const allowedFormats = ['png', 'jpg', 'jpeg', 'gif']
        if (!allowedFormats.find(elem => elem === format)) {
          console.log('ooooooooopssss - ' + format)
          return
        }
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.meetup.imageUrl = fileReader.result
        })
        fileReader.readAsDataURL(file)
        this.meetup.photo = file
      },
      convertDate (date) {
        return date.toISOString().substring(0, 10).split('-').reverse().join('.')
      },
      onCreateNewMeeting () {
        this.$v.$touch()
        if (this.$v.meetup.$invalid) return
        const convertedDate = this.convertDate(this.meetup.date)
        const user = {
          id: this.getUser.id,
          name: this.getUser.name,
          photo: this.getUser.photo
        }
        const newMeetup = {
          title: this.meetup.title,
          description: this.meetup.description,
          location: this.meetup.location,
          organizer: user,
          date: convertedDate,
          participants: [user],
          photo: this.meetup.photo
        }
        this.createNewMeetup(newMeetup)
          .then(() => {
            this.$router.push({ name: 'meetups'})
          })
      }
    }
  }
</script>

<style lang="scss">
  .create-meetup-container {
    width: 500px;
    margin: 0 auto;
  }

  .create-meetup {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &__item {
      border: 1px solid #343434;
      margin-bottom: 20px;
      height: 40px;
      font-size: 18px;
      padding: 10px;
      border-radius: 5px;
      &_textarea {
        min-height: 150px;
        resize: none;
      }
      &_date {
        cursor: pointer;
        width: 100%;
      }
    }
    &__image {
      margin-top: 20px;
      max-width: 500px;
      margin: 0 auto;
    }
    &__datepicker {
      display: flex;
      justify-content: center;
    }

    .error-msg {
      border-color: red;
    }
  }

  .buttons-container {
    display: flex;
    justify-content: space-around;
  }

  .button-img {
    width: 212px;
    height: 40px;
    text-transform: uppercase;
    border: 1px solid #343434;
    margin-bottom: 20px;
    font-size: 18px;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    line-height: 0;
    &:hover {
      border: 1px solid #343434;
    }
  }

  .create-meetup__datepicker {
    .vdp-datepicker__calendar .cell.selected,
    .vdp-datepicker__calendar .cell.selected.highlighted,
    .vdp-datepicker__calendar .cell.selected:hover {
      background-color: #d77b17;
    }

    .vdp-datepicker__calendar .cell.highlighted {
      background-color: #d77b17;
    }
  }
</style>
