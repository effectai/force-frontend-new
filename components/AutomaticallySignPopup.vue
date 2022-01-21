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
        <form>
          <input v-model="privateKey" :disabled="$auth.user.privateKey || success" class="input is-primary is-medium mt-4" type="password" placeholder="Private Key...">
        </form>
        <p v-if="$auth.user.privateKey || success" class="mt-3 has-text-success">Private successfully imported, your transactions on Effect Force will be signed automatically</p>
      </section>
      <footer class="modal-card-foot">
        <template>
          <button class="button is-primary" :disabled="$auth.user.privateKey" @click.prevent="onClick()">
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
      privateKey: this.$auth.user.privateKey ? this.$auth.user.privateKey : null,
      success: false
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
    },
    async onClick () {
      await this.$blockchain.importPrivateKey(this.privateKey)
      this.success = true
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
