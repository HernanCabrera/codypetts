<template>
  <div class="pine">
    <section class="home">
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
          <b-col cols="12 pt-2" md="4" class="pt-2 pl-md-1 pt-md-0">
            <img class="img-fluid" src="~/static/pine/pine-3.jpg" alt="">
          </b-col>
          <b-col cols="12 pt-2 pb-2">
            <img class="img-fluid" src="~/static/pine/pine-4.jpg" alt="">
          </b-col>
          <b-col cols="12" md="8" class="pr-md-1">
            <img class="img-fluid" src="~/static/pine/pine-5.jpg" alt="">
          </b-col>
          <b-col cols="12 pt-2" md="4" class="pt-2 pl-md-1 pt-md-0">
            <img class="img-fluid" src="~/static/pine/pine-6.jpg" alt="">
          </b-col>
          <b-col cols="12 pt-2 pb-2">
            <img class="img-fluid" src="~/static/pine/pine-7.jpg" alt="">
          </b-col>
          <b-col cols="12" md="8" class="pr-md-1">
            <img class="img-fluid" src="~/static/pine/pine-8.jpg" alt="">
          </b-col>
          <b-col cols="12 pt-2" md="4" class="pt-2 pl-md-1 pt-md-0">
            <img class="img-fluid" src="~/static/pine/pine-9.jpg" alt="">
          </b-col>
          <b-col cols="12 pt-2 pb-2">
            <img class="img-fluid" src="~/static/pine/pine-10.jpg" alt="">
          </b-col>
          <b-col cols="12" md="8" class="pr-md-1">
            <img class="img-fluid" src="~/static/pine/pine-11.jpg" alt="">
          </b-col>
          <b-col cols="12 pt-2" md="4" class="pt-2 pl-md-1 pt-md-0">
            <img class="img-fluid" src="~/static/pine/pine-12.jpg" alt="">
          </b-col>
          <b-col cols="12 pt-2 pb-2">
            <img class="img-fluid" src="~/static/pine/pine-13.jpg" alt="">
          </b-col>
          <b-col cols="12" md="8" class="pr-md-1">
            <img class="img-fluid" src="~/static/pine/pine-14.jpg" alt="">
          </b-col>
          <b-col cols="12 pt-2" md="4" class="pt-2 pl-md-1 pt-md-0">
            <img class="img-fluid" src="~/static/pine/pine-15.jpg" alt="">
          </b-col>
        </b-row>
        


        <b-row class="proyect-2">
          <b-col cols="12">
            <div class="line horizontal-line"></div>
          </b-col>
          <b-col cols="12 my-4" md="6">
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
          <b-col cols="12 pt-2 pb-2">
            <img class="img-fluid" src="~/static/pine/pine-1.jpg" alt="">
          </b-col>
        </b-row>


        <b-row class="testimonial py-5">
          <b-col cols="12 mb-5">
            <div class="line horizontal-line center-x-h"></div>
          </b-col>
          <b-col cols="12 text-center">
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
  </div>
</template>

<script>
// ~/components/AppLogo.vue
export default {
  head: {
    title: 'Pine Typeface - Cody Petts'
  }
}
</script>

<style lang="scss">
:root {
  --fondo: #fefefe;
  --primary: #333333;
  --secondary: #BB8868;
}
.pine {
  .home {
    // transform: scale(1.1);
    height: 100vh;
    background-image: url(~/static/pine/pine-16.jpg);
    background-repeat: none;
    background-position: center center;
    background-size: cover;
  }
  .main-content {
    padding-top: 120px; 
    z-index: 2;
    position: relative;
    top: -17vh;
    background-color: var(--fondo);
    .title {
      font-family: 'Exo', sans-serif;
      color: var(--primary);
    }
    .copy {
      font-size: 1em;
      letter-spacing: 0.5px;
      line-height: 1.8em;
      font-weight: 400;
      font-family: "Crimson Text", serif;
      // color: var(--primary);
    }
    .proyect-1 {
      .title {
        font-family: 'Exo', sans-serif;
        font-size: 3.5em;
        letter-spacing: 3px;
        color: var(--primary);
      }
      .content-left {
        .used-skills {
          color: var(--secondary);
          letter-spacing: 0.5px;
          font-family: "Crimson Text", serif;
        }
      }
      .content-right {
        .credits {
          font-family: 'Exo', sans-serif;
          color: var(--secondary);
          font-size: 1em;
          letter-spacing: 1.75px;
        }
        .people {
          font-family: 'Crimson Text', serif;
          color: var(--primary);
          font-size: 1em;
          letter-spacing: 1px;
          line-height: 1.825em;
        }
      }
    }
    .proyect-2, .proyect-3 {
      .title {
        font-size: 1.8em;
        letter-spacing: 2.5px;
      }
    }
    .testimonial {
      .title {
        color: var(--secondary);
        font-size: 1.25em;
        letter-spacing: 3px;
      }
      .text {
        font-size: 1.5em;
        font-family: 'Crimson Text', serif;
        color: var(--primary);
        letter-spacing: 0.05em;
        line-height: 2em;
        .resaltado {
          color: var(--secondary);
        }
      }
      .author {
        color: var(--secondary);
        font-size: 1.125em;
        letter-spacing: 3px;
        margin: 50px 0 20px;
      }
      .profession {
        color: var(--secondary);
        font-size: 15px;
        font-family: 'Crimson Text', serif;
        font-style: italic;
        display: block;
        font-weight: bold;
      }
    }
  }
  .img-fluid {
    width: 100%;
    height: 100%;
  }
  .line {
    background-color: var(--secondary);
    position: absolute;
    top: 42px;
  }
  .vertical-line {
    height: 50px;
    width: 1px;
  }
  .horizontal-line {
    height: 1px;
    width: 50px;
    top: 0;
  }
  .center-x-v {
    right: 50%;
  }
  .center-x-h {
    right: calc(50% - 25px);
  }
  .copy-link {
    color: var(--secondary);
  }
}


@media (max-width: 770px) {
  .cocktail {
    .main-content {
      .title {
        font-size: 2.5em;
      }
    }
  }
}

</style>
