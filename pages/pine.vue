<template>
  <div class="pine">
    <section class="home">
      <div class="img"></div>
    </section>
    <section class="main-content mx-3 mx-md-5 px-lg-5">
      <b-container fluid class="px-4 px-lg-5">
        <b-row class="proyect-1">
          <b-col cols="12">
            <h1 class="title">Pine Typeface</h1>
          </b-col>

          <b-col cols="12" md="7" class="content-left">
            <p class="used-skills">Typography | Photography</p>
            <p class="copy">
              Pine is a finely crafted typeface meant to embody the strength and elegance of nature. Laser cut from northern pine, each character has rich physicality while maintaining graphic sophistication. In order to present the typeface in a way that emulated a naturalistic mood, the characters were documented with outdoor elements to evoke a more natural setting that pine was inspired from. It adds a modern twist with the contrasting minimal backdrop to add focus to the type specimen.
            </p>
          </b-col>

          <b-col cols="0" md="1" class="d-none d-md-block">
            <div class="line vertical-line center-x-v"></div>
          </b-col>

          <b-col cols="12" md="4" class="content-right">
            <p class="credits">CREDITS / COOL PEOPLE:</p>
            <p class="people">
              <span>Alex DeArmond</span>
              <br>
              <span>UW-Stout </span>
              <br>
              <span>Fabrication Lab</span>
            </p>
          </b-col>
        </b-row>
        <b-row class="my-5 proyect-1-img">
          <b-col cols="12" md="8" class="pr-md-1">
            <img class="img-fluid" src="~/static/pine/pine-2.jpg" alt="">
          </b-col>
          <b-col cols="12" md="4" class="pt-2 pl-md-1 pt-md-0">
            <img class="img-fluid" src="~/static/pine/pine-3.jpg" alt="">
          </b-col>
          <b-col cols="12" class="pt-2 pb-2">
            <img class="img-fluid" src="~/static/pine/pine-4.jpg" alt="">
          </b-col>
          <b-col cols="12" md="8" class="pr-md-1">
            <img class="img-fluid" src="~/static/pine/pine-5.jpg" alt="">
          </b-col>
          <b-col cols="12" md="4" class="pt-2 pl-md-1 pt-md-0">
            <img class="img-fluid" src="~/static/pine/pine-6.jpg" alt="">
          </b-col>
          <b-col cols="12" class="pt-2 pb-2">
            <img class="img-fluid" src="~/static/pine/pine-7.jpg" alt="">
          </b-col>
          <b-col cols="12" md="8" class="pr-md-1">
            <img class="img-fluid" src="~/static/pine/pine-8.jpg" alt="">
          </b-col>
          <b-col cols="12" md="4" class="pt-2 pl-md-1 pt-md-0">
            <img class="img-fluid" src="~/static/pine/pine-9.jpg" alt="">
          </b-col>
          <b-col cols="12" class="pt-2 pb-2">
            <img class="img-fluid" src="~/static/pine/pine-10.jpg" alt="">
          </b-col>
          <b-col cols="12" md="8" class="pr-md-1">
            <img class="img-fluid" src="~/static/pine/pine-11.jpg" alt="">
          </b-col>
          <b-col cols="12" md="4" class="pt-2 pl-md-1 pt-md-0">
            <img class="img-fluid" src="~/static/pine/pine-12.jpg" alt="">
          </b-col>
          <b-col cols="12" class="pt-2 pb-2">
            <img class="img-fluid" src="~/static/pine/pine-13.jpg" alt="">
          </b-col>
          <b-col cols="12" md="8" class="pr-md-1">
            <img class="img-fluid" src="~/static/pine/pine-14.jpg" alt="">
          </b-col>
          <b-col cols="12" md="4" class="pt-2 pl-md-1 pt-md-0">
            <img class="img-fluid" src="~/static/pine/pine-15.jpg" alt="">
          </b-col>
        </b-row>
        


        <b-row class="proyect-2">
          <b-col cols="12">
            <div class="line horizontal-line"></div>
          </b-col>
          <b-col cols="12" md="6" class="my-4">
            <h2 class="title py-3">Into The Wild.</h2>
            <p class="copy">
              Each word constructed in the typeface represents my appreciation of the natural world through various past experiences. Paired alongside each word is either a landscape or memory that ties into the outdoor settings to hopefully evoke a sense of place and emotion.
              <br><br>
              In the past, I've had numerous inquiries asking if Pine is available for purchase. Currently, Pine is not completely formatted for digital use, so unfortunately it is not available at this time.
            </p>
          </b-col>
          <b-col cols="0" md="6" class="d-none d-md-flex justify-content-center align-items-center">
            <img src="~/static/pine/pine-n.svg" width="170">
          </b-col>
        </b-row>

        <b-row class="my-5 proyect-2-img">
          <b-col cols="12" class="pt-2 pb-2">
            <img class="img-fluid" src="~/static/pine/pine-1.jpg" alt="">
          </b-col>
        </b-row>


        <b-row class="testimonial py-5">
          <b-col cols="12" class="mb-5">
            <div class="line horizontal-line center-x-h"></div>
          </b-col>
          <b-col cols="12" class="text-center">
            <h3 class="title">IN THE PRESS</h3>
            <p class="text my-3 px-lg-5 mx-lg-5">
              <span class="resaltado">“</span>We just love seeing a physical typeface, especially when it's one as beautiful as this. Petts has done an amazing job at presenting this simple yet elegant design, showcasing various letter of the alphabet with the name of a natural element that inspired the font's creation.<span class="resaltado">”</span>
              </p>
            <h4 class="author">CREATIVE BLOQ</h4>
            <h5 class="profession">July 05, 2013</h5>
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
    title: 'Pine Typeface - Cody Petts'
  }
}
</script>


<style lang="scss">
.pine {
  .home {
    .img {
      background-image: url(~/static/pine/pine-16.jpg);
    }
  }
}
</style>
