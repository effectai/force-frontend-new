<template>
  <div class="modal" :class="{'is-active': showModal}" :style="{position: 'fixed'}">
    <div class="modal-background" />
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          Automatically Sign Transactions
        </p>
        <button class="delete" aria-label="close" @click.prevent="onCancel()" />
      </header>
      <section class="modal-card-body">
        <p>Sign all your transactions on Effect Force automatically by importing your private key. Your private key will be stored locally inside your browser.</p>
        <br>
        <input v-model="privateKey" class="input is-primary is-medium" type="password" placeholder="Private Key...">
      </section>
      <footer class="modal-card-foot">
        <template>
          <button class="button is-primary" @click.prevent="onClick()">
            Submit
          </button>
          <button class="button" @click.prevent="onCancel()">
            Cancel
          </button>
        </template>
      </footer>
    </div>
  </div>
</template>
<script>

export default {
  name: 'AutomaticallySignModal',
  props: {
    show: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      privateKey: null
    }
  },
  computed: {
    showModal: {
      get () {
        return this.show
      },
      set (val) {
        this.$emit('clicked', val)
      }
    }
  },
  methods: {
    onCancel () {
      this.showModal = false
      console.log('hello', this.showModal)
    },
    async onClick () {
      await this.$blockchain.importPrivateKey(this.privateKey)
      this.onCancel()
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
