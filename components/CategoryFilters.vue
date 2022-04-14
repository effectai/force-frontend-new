<template>
  <div class="mx-auto">
    <client-only>
      <carousel :pagination-enabled="false" :per-page-custom="[[768, 3], [1024, 5]]" class="columns mb-5">
        <!-- <div class="is-pulled-left pt-4 is-vcentered my-auto">
          <div v-if="filter" class="tags has-addons">
            <span
              class="tag is-capitalized is-large is-info"
            >{{ filter }}</span>
            <a class="tag is-delete is-large" @click="$emit('categoryFilter')" />
          </div>
        </div> -->
        <slide v-for="dapp in effect_catagories" :key="dapp.value" class="column">
          <a
            href="#"
            class="box pt-1 pb-0"
            @mouseover="dapp.hover = true"
            @mouseleave="dapp.hover = false"
            @click.prevent="onClick(dapp.value)"
          >
            <div class="card-image has-text-centered">
              <h4 class="is-size-5"><b class="is-capitalized">{{ dapp.value }}</b></h4>
            </div>
          </a>
        </slide>
        <slide class="column py-3 is-2">
          <a href="#" class="box is-flat category-null" style="padding: 14px !important" @click.prevent="onClick()">
            <div class="card-image has-text-centered">
              <h4 class="is-size-5"><b>All</b></h4>
            </div>
          </a>
        </slide>
      </carousel>
    </client-only>
  </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'CategoryFilters',
  components: {
    Carousel,
    Slide
  },
  props: ['filter'],
  data () {
    return {
      effect_catagories: {
        qualifier: {
          hover: false,
          value: 'qualifiers',
          normalUrl: 'https://effect.network/_nuxt/img/effect-dao_h100.62b6528.png',
          whiteUrl: 'https://effect.network/_nuxt/img/effect-dao_white_h100.8128b59.png'
        },
        annotations: {
          hover: false,
          value: 'annotations',
          normalUrl: 'https://effect.network/_nuxt/img/effect-dao_h100.62b6528.png',
          whiteUrl: 'https://effect.network/_nuxt/img/effect-dao_white_h100.8128b59.png'
        },
        socials: {
          hover: false,
          value: 'socials',
          normalUrl: 'https://effect.network/_nuxt/img/effect-dao_h100.62b6528.png',
          whiteUrl: 'https://effect.network/_nuxt/img/effect-dao_white_h100.8128b59.png'
        }
      }
    }
  },
  methods: {
    onClick (category) {
      this.$emit('categoryFilter', category)
    }
  }
}
</script>
<style lang="scss" scoped>
  a.box:hover, a.box.is-active {
    &.category-qualifier {
      background: $dao-color;
    }
    &.category-socials {
      background:$socials-color;
    }
    &.category-annotations {
      background: $captions-color;
    }
    &.category-translate {
      background: $translate-color;
    }

  }
  a.box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    &.category-null {
      min-height: 70px
    }
    .card-image {
      padding: 5px;

      .category-logo {
        max-height: 50px;
      }
    }
  }
</style>
