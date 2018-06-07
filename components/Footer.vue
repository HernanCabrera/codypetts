<template>
  <footer class="footer">
    <b-container class="py-5">
      <b-row>
        <b-col cols="12" md="10" class="d-flex align-items-center justify-content-center justify-content-md-start">
          <img class="d-none d-md-block img" src="~/static/petts-mark.svg" alt="">
          <ul class="social__networks px-4">
            <li class="social__network" v-for="(socialNetwork, index) in socialNetworks" :key="socialNetwork + index">
              <a class="social__network__link" :href="socialNetwork.url" target="_blank">{{ socialNetwork.name }}</a>
              <span class="bar px-2" v-if="(socialNetworks.length !== (index + 1))">/</span>
            </li>
          </ul>
        </b-col>
        <b-col cols="0" md="2">
          <p class="d-none d-md-block copyright text-right">© 2018</p>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>

export default {
  data () {
    return {
      socialNetworks: [
        {
          name: 'Behance',
          url: 'https://www.behance.net/CodyPetts'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/codypetts/'
        },
        {
          name: 'Dribble',
          url: 'https://dribbble.com/CodyPetts'
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/CodyPetts'
        }
      ]
    }
  }
}
</script>
