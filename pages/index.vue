<template>
  <div>
    <div class="app__carousel">
      <ul class="app__carousel__sliders">
        <li 
          class="app__slider" 
          @mouseover="changeSlide(indexProyect)" 
          @mouseleave="initializeSlide"
          v-for="(proyect, indexProyect) in proyectArray"
          :key="proyect + indexProyect">
          <img class="app__slider__img" :src="proyect.image">
          <div :class="{ 'app__slider__no_hover': slide !== indexProyect }"></div>
          <transition name="input">
            <div class="proyect" v-if="slide === indexProyect">
              <div class="title text-center">{{ proyect.title }}</div>
              <div class="used-skills text-center">{{ proyect.usedSkills }}</div>
              <div class="container-link my-4">
                <nuxt-link class="link" :to="proyect.route"><span>VIEW PROYECT</span></nuxt-link>
                <div class="hover"></div>
              </div>
            </div>
          </transition>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AppFooter from '~/components/Footer'
export default {
  components: { AppFooter },
  data () {
    return {
      slide: -1,
      sliding: null,
      proyectArray: [
        {
          title: 'Cocktail Kits',
          usedSkills: 'Print | Packaging | Photography',
          route: 'cocktail',
          image: require('~/static/cocktail/cocktail-1.jpg')
        },
        {
          title: 'MN Parks Poster',
          usedSkills: 'Print | Illustration | Photography',
          route: 'poster',
          image: require('~/static/poster-hero.jpg')
        },
        {
          title: 'Pine Typeface',
          usedSkills: 'Typography | Photography',
          route: 'pine',
          image: require('~/static/pine/pine-16.jpg')
        },
        {
          title: 'Caribou Coffee',
          usedSkills: 'Packaging | Illustration | Photography',
          route: 'caribou',
          image: require('~/static/caribou/caribou-hero.jpg')
        },
        {
          title: 'Indeed Brewing Co.',
          usedSkills: 'Design | Packaging | Marketing | Photography',
          route: 'indeed',
          image: require('~/static/indeed/indeed-hero.jpg')
        }
      ]
    }
  },
  methods: {
    changeSlide (slide) {
      this.slide = slide
    },
    initializeSlide () {
      this.slide = -1
    }
  }
}
</script>

<style lang="scss">
.app__carousel {
  width: 100vw;
  height: 100vh;
  .app__carousel__sliders {
    padding: 0;
    margin: 0;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    .app__slider {
      list-style: none;
      width: 20%;
      height: 100%;
      transition: .3s;
      cursor: pointer;
      position: relative;
      background: rgba(0,0,0,0.3);
      &:hover {
        width: 100%;
      }
      .proyect {
        position: absolute;
        top: 0;
        height: 100vh;
        width: 100%;
        z-index: 10;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: rgba(0,0,0,0.3);
        .title {
          font-family: 'Exo', sans-serif;
          font-size: 56px;
          font-weight: 600;
          color: #e9e8e6;
        }
        .used-skills {
          font-family: "Crimson Text", serif;
          font-size: 18px;
          font-weight: 400px;
          color: #e9e8e6;
        }
        .container-link {
          position: relative;
          overflow: hidden;
          border: 1px solid #BB8868;
          padding: 10px 20px;
          text-align: center;
          &:hover .hover {
            left: 0;
          }
          .link {
            font-family: 'Exo', sans-serif;
            padding: 10px 20px;
            color: #e9e8e6;
            border-radius: 0;
            font-weight: 700;
            letter-spacing: 4px;
            text-decoration: none;
          }
          .hover {
            position: absolute;
            width: 100%;
            height: 200%;
            background-color: #BB8868;
            bottom: -50%;
            left: -100%;
            z-index: 8;
            transition: .3s;
            z-index: -1;
          }
        }
      }
      .app__slider__no_hover {
        position: absolute;
        height: 100%;
        width: 100%;
        background: rgba(0,0,0,0.7);
        top: 0;
        left: 0;
      }
      .app__slider__img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
}

.input-enter-active,
.input-leave-active {
  transition: all .3s;
}
.input-enter, 
.input-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}


@media (max-width: 767px) {
  .app__carousel {
    .app__carousel__sliders {
      .app__slider {
        .proyect {
          .title {
            font-size: 46px;
          }
          .used-skills {
            font-size: 12px;
          }
          .container-link {
            padding: 5px;
            .link {
              padding: 5px;
              letter-spacing: 2px;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 474px) {
  .app__carousel {
    .app__carousel__sliders {
      .app__slider {
        .proyect {
          .title {
            font-size: 35px;
          }
        }
      }
    }
  }
}

@media (max-width: 350px) {
  .app__carousel {
    .app__carousel__sliders {
      .app__slider {
        .proyect {
          .title {
            font-size: 25px;
          }
        }
      }
    }
  }
}

</style>
