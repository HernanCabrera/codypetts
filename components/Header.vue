<template>
  <div class="header">
    <b-container class="py-3">
      <b-row>
        <b-col cols="6"><nuxt-link to="/"><svg id="Layer_1" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110.5 56.7"><style>.st0{fill:#E9E8E6;} .st1{fill:#B58A6D;}</style><path class="st0" d="M27.6 11.2c0-.9.3-1.7 1-2.3l8-8c.3-.3.1-.9-.4-.9h-25c-.9 0-1.7.3-2.3 1L1 8.9c-.6.6-1 1.5-1 2.3v34.3c0 .9.3 1.7 1 2.3l7.9 7.9c.6.6 1.5 1 2.3 1h25c.5 0 .7-.6.4-.9l-8-8c-.6-.6-1-1.5-1-2.3V11.2zm23.7-2.3c.6.6 1 1.5 1 2.3v8.6c0 .5.4 1 1 1H79c.5 0 1-.4 1-1v-8.6c0-.9-.3-1.7-1-2.3L71 1c-.6-.6-1.5-1-2.3-1h-25c-.5 0-.7.6-.4.9l8 8zm1 28v8.6c0 .9-.3 1.7-1 2.3l-8 8c-.3.3-.1.9.4.9h25c.9 0 1.7-.3 2.3-1l7.9-7.9c.6-.6 1-1.5 1-2.3v-8.6c0-.5-.4-1-1-1H53.3c-.6 0-1 .4-1 1"></path><path class="st1" d="M101.2 38c-5.1 0-9.3 4.2-9.3 9.3 0 5.1 4.2 9.3 9.3 9.3 5.1 0 9.3-4.2 9.3-9.3 0-5.1-4.2-9.3-9.3-9.3m4.7 10l-4 4c-.4.4-.9.4-1.3 0l-4.1-4c-.4-.4-.4-.9 0-1.3l4.1-4c.4-.4.9-.4 1.3 0l4 4c.3.4.3 1 0 1.3"></path></svg></nuxt-link></b-col>
        <b-col cols="6 d-flex justify-content-end">
          <div class="menu-box" @click="toggleMenu()">
            <div class="bar" :class="{ 'menu_active__bar__1': menuActive }"></div>
            <div class="bar" :class="{ 'menu_active__bar__2': menuActive }"></div>
            <div class="bar" :class="{ 'menu_active__bar__3': menuActive }"></div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    
    <transition name="input-routes">
      <ul class="routes" v-if="menuActive">
        <li class="route" v-for="(route, index) in routes" :key="route+index">
          <a @click="goToTheRoute(route.route)" class="route__link">{{ route.name }}</a>
        </li>
      </ul>
    </transition> 
  </div>


</template>



<script>

export default {
  data () {
    return {
      menuActive: false,
      routes: [
        {
          name: 'Cocktail Kits',
          route: 'cocktail'
        },
        {
          name: 'Indeed Brewing Co.',
          route: 'indeed'
        },
        {
          name: 'Caribou Coffee',
          route: 'caribou'
        },
        {
          name: 'MN Parks Posters',
          route: 'poster'
        },
        {
          name: 'Pine Typeface',
          route: 'pine'
        }
      ]
    }
  },
  methods: {
    
    toggleMenu () {
      this.menuActive = !this.menuActive
    },
    goToTheRoute (route) {
      this.toggleMenu()
      this.$router.push({
        name: route,
      })
    }

  }
}
</script>

