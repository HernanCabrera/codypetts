<template>
  <div class="caribou">
    <section class="home">
      <div class="img"></div>
    </section>
    <section class="main-content mx-3 mx-md-5 px-lg-5">
      <b-container fluid class="px-4 px-lg-5">
        <b-row class="proyect-1">
          <b-col cols="12">
            <h1 class="title">Caribou Coffee</h1>
          </b-col>

          <b-col cols="12" md="7" class="content-left">
            <p class="used-skills">Packaging | Illustration | Photography</p>
            <p class="copy">
              Like any great adventure, Caribou Coffee believes that “if passion, hard work and excellence go into an endeavor, the outcome will be a quality experience, and therefore rewarding’’. These words have resonated with everything that Caribou has accomplished since their inception in 1992. Caribou is now the second largest company-operated premium coffeehouse in the United States with more than 273 company owned stores and 127 domestic license locations in 18 states.
              <br><br>
              While working as a designer at Duffy, I had the pleasure of helping Caribou Coffee elevate their packaging and other various applications.
            </p>
          </b-col>

          <b-col cols="0" md="1" class="d-none d-md-block">
            <div class="line vertical-line center-x-v"></div>
          </b-col>

          <b-col cols="12" md="4" class="content-right">
            <p class="credits">CREDITS / COOL PEOPLE:</p>
            <p class="people">
              <span>Duffy & Partners</span>
              <br>
              <span>Cue Inc.</span>
            </p>
          </b-col>
        </b-row>

        <b-row class="my-5 proyect-1-img">
          <b-col cols="12" md="6" class="pr-md-2">
            <b-row>
              <b-col cols="12" sm="6" class="pb-2 pr-sm-1">
                <img class="img-fluid" src="~/static/caribou/caribou-1.jpg" alt="">
              </b-col>
              <b-col cols="12" sm="6" class="pb-2 pl-sm-1 pr-md-2">
                <img class="img-fluid" src="~/static/caribou/caribou-2.jpg" alt="">
              </b-col>
              <b-col cols="12" class="pb-2 pr-md-2">
                <img class="img-fluid" src="~/static/caribou/caribou-3.jpg" alt="">
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" md="6" class="pb-2 pl-md-2">
            <img class="img-fluid" src="~/static/caribou/caribou-4.jpg" alt="">
          </b-col>

          <b-col cols="12" class="pb-2">
            <img class="img-fluid" src="~/static/caribou/caribou-5.jpg" alt="">
          </b-col>
          <b-col cols="12" lg="6" class="pb-2 pb-lg-0 pr-lg-1">
            <img class="img-fluid" src="~/static/caribou/caribou-6.jpg" alt="">
          </b-col>
          <b-col cols="12" lg="6" class="pl-lg-1">
            <img class="img-fluid" src="~/static/caribou/caribou-7.jpg" alt="">
          </b-col>
        </b-row>
        


        <b-row class="proyect-2">
          <b-col cols="12">
            <div class="line horizontal-line"></div>
          </b-col>
          <b-col cols="12" md="6" class="my-4">
            <h2 class="title py-3">Quality & Sustainability.</h2>
            <p class="copy">
              Being a 100% Rainforest Alliance Certified company is no small feat. Caribou and their amazing like-minded volunteers, work together to research new sustainable practices, help farming communities improve their overall quality of life, and implement water conservation to ensure that clean bodies of water can coexist with the economically viable farms. These volunteers believe in the “Do Good’’ mindset that’s at the heart of Caribou Coffee.
            </p>
          </b-col>
          <b-col cols="0" md="6" class="d-none d-md-flex justify-content-center align-items-center">
            <img src="~/static/caribou/caribou-u.png" width="170">
          </b-col>
        </b-row>

        <b-row class="my-5 proyect-2-img">
          <b-col cols="12" class="pb-2">
            <img class="img-fluid" src="~/static/caribou/caribou-8.jpg" alt="">
          </b-col>
          <b-col cols="12" md="4" class="pb-2 pb-md-0 pr-md-1">
            <img class="img-fluid" src="~/static/caribou/caribou-9.jpg" alt="">
          </b-col>
          <b-col cols="12" md="4" class="pl-md-1 pr-md-1 pb-2 pb-md-0">
            <img class="img-fluid" src="~/static/caribou/caribou-10.jpg" alt="">
          </b-col>
          <b-col cols="12" md="4" class="pl-md-1">
            <img class="img-fluid" src="~/static/caribou/caribou-11.jpg" alt="">
          </b-col>
        </b-row>

        <b-row class="testimonial py-5">
          <b-col cols="12" class="mb-5">
            <div class="line horizontal-line center-x-h"></div>
          </b-col>
          <b-col cols="12" class="text-center">
            <h3 class="title">IN THE PRESS</h3>
            <p class="text my-3 px-lg-5 mx-lg-5">
              <span class="resaltado">“</span>This summer I worked in one store, and a guest bought the coffee for the person in line behind her. And then 29 cars in a row bought the coffee for the car behind them. Where else does this happen?<span class="resaltado">”</span>
              </p>
            <h4 class="author">JOHN BUTCHER</h4>
            <h5 class="profession">President - Caribou Coffee</h5>
          </b-col>
        </b-row>

      </b-container>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>

import AppFooter from '~/components/Footer'

export default {
  components: { AppFooter },
  head: {
    title: 'Caribou Coffee - Cody Petts'
  }
}
</script>

<style lang="scss">
.caribou {
  .home {
    .img {
      background-image: url(~/static/caribou/caribou-hero.jpg);
    }
  }
}
</style>
