import Vue from 'vue'
import eos from '../services/eos'
import bsc from '../services/bsc'
// const effectSdk = require('@effectai/effect-js')
const effectSdk = require('../../effect-js')

export default (context, inject) => {
  const blockchain = new Vue({
    data () {
      return {
        account: null,
        blockchain: null,
        provider: null,
        loginModal: false,
        efxAvailable: 0,
        eos,
        bsc,
        sdk: null,
        error: null
      }
    },
    computed: {
      vefxAvailable () {
        let balance
        const vAccountRows = context.$auth.user.vAccountRows
        if (vAccountRows) {
          vAccountRows.forEach((row) => {
            if (row.balance.contract === process.env.NUXT_ENV_EOS_TOKEN_CONTRACT) {
              balance = parseFloat(row.balance.quantity.replace(` ${process.env.NUXT_ENV_EOS_EFX_TOKEN}`, ''))
            }
          })
        }
        return balance
      }
    },

    methods: {
      async rememberLogin () {
        const rememberAccount = context.$auth.$storage.getUniversal('rememberAccount')
        if (rememberAccount) {
          const loggedIn = await this.login(rememberAccount.provider, rememberAccount.blockchain, rememberAccount)
          if (loggedIn) {
            await context.$auth.loginWith('blockchain', {
              account: this.account,
              $blockchain: this
            })
            // Needed because there is a redirect bug when going to a protected route from the login page
            const path = context.$auth.$storage.getUniversal('redirect') || '/'
            context.$auth.$storage.setUniversal('redirect', null)
            context.app.router.push(path)
          }
        }
      },
      async login (providerName, blockchain, rememberAccount) {
        let account
        if (blockchain === 'eos') {
          const wallet = await this.eos.login(providerName, rememberAccount ? rememberAccount.accountName : null, rememberAccount ? rememberAccount.permission : null)
          account = { accountName: wallet.auth.accountName, permission: wallet.auth.permission, publicKey: wallet.auth.publicKey }
        } else if (blockchain === 'bsc') {
          const provider = await this.bsc.login(providerName)
          this.registerBscListeners(provider)
          account = { accountName: this.bsc.wallet[0], publicKey: this.bsc.wallet[0] }
        }
        if (account) {
          this.initSdk()
          account.blockchain = blockchain
          account.provider = providerName
          this.account = account
          return true
        }
        return false
      },
      switchBscAccountBeforeLogin (address) {
        const account = { ...this.account }
        account.accountName = address
        account.publicKey = address
        this.account = account
        this.initSdk()
      },
      registerBscListeners (provider) {
        // Disconnected, requests can no longer be made with provider.
        provider.on('disconnect', () => {
          console.log('disconnecting provider')
          this.logout()
          context.$auth.logout()
        })

        // Inform user of account change, only one account can be selected
        provider.on('accountsChanged', (newWallet) => {
          this.bsc.wallet = newWallet
          if (newWallet.length) {
            if (context.$auth.loggedIn) {
              if (newWallet[0].toLowerCase() !== context.$auth.user.accountName.toLowerCase()) {
                context.$auth.logout()
              }
            } else {
              this.switchBscAccountBeforeLogin(newWallet[0])
            }
          } else {
            this.logout()
            context.$auth.logout()
          }
        })

        // Inform user of chain change
        provider.on('chainChanged', (_chainId) => {
          if (!this.bsc.web3.utils.isHex(_chainId)) {
            alert('This chain is not supported, logging out.')
            this.logout()
          } else if (_chainId !== process.env.NUXT_ENV_BSC_HEX_ID) {
            alert(`Please switch to the correct chain:\n${process.env.NUXT_ENV_BSC_CHAIN_NAME}, Mainnet, chainId: ${process.env.NUXT_ENV_BSC_NETWORK_ID}\n\nCurrently on: ${this.bsc.web3.utils.hexToNumberString(_chainId)}\n\nLogging out.`)
            // It is recommended to reload the entire window, or to logout the user to make sure the user doesn't do any txs.
            this.logout()
            context.$auth.logout() // Logout
            // window.location.reload() // reload window aswell?
          }
        })
      },

      async openVAccount () {
        await this.sdk.account.openAccount(this.account.accountName, this.account.permission)
      },
      async getVAccount () {
        return await this.sdk.account.getBalance(this.account.accountName)
      },

      async deposit (amount) {
        return await this.sdk.account.deposit(this.account.accountName, this.account.accountName, amount, this.account.permission)
      },

      async withdraw (toAccount, amount, memo) {
        return await this.sdk.account.withdraw(this.account.accountName, toAccount, amount, this.account.permission, memo)
      },

      async vTransfer (toAccount, amount) {
        return await this.sdk.account.vtransfer(this.account.accountName, toAccount, amount, this.account.permission)
      },

      async logout () {
        await this.eos.logout()
        await this.bsc.logout()
        context.$auth.$storage.setUniversal('rememberAccount', null)
        this.clear()
      },

      clear () {
        Object.assign(this.$data, this.$options.data.call(this))
      },

      async getAccountBalance () {
        if (this.account) {
          const efxRow = (await this.eos.wallet.eosApi.rpc.get_currency_balance(process.env.NUXT_ENV_EOS_TOKEN_CONTRACT, this.account.accountName, process.env.NUXT_ENV_EOS_EFX_TOKEN))[0]
          if (efxRow) {
            this.efxAvailable = parseFloat(efxRow.replace(` ${process.env.NUXT_ENV_EOS_EFX_TOKEN}`, ''))
          }
        }
      },

      initSdk () {
        const sdkOptions = {
          network: process.env.NUXT_ENV_EOS_NETWORK,
          host: `https://${process.env.NUXT_ENV_EOS_NODE_URL}:443`,
          signatureProvider: this.eos.wallet ? this.eos.wallet.provider.signatureProvider : null,
          web3: this.bsc.wallet ? this.bsc.web3 : null
        }
        this.sdk = new effectSdk.EffectClient(sdkOptions)
      },
      handleError (error) {
        console.error(error)
        if (error.response && error.response.data) {
          if (error.response.data.error) {
            this.error = error.response.data.error
          } else if (error.response.data.message) {
            this.error = error.response.data.message
          } else {
            this.error = error.response.data
          }
        } else if (error.message) {
          this.error = error.message
        } else {
          this.error = error
        }
      }
    }
  })

  inject('blockchain', blockchain)
}