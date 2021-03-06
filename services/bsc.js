// import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3 from 'web3'
import { createAccount, defaultConfiguration } from '@effectai/effect-js'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const config = defaultConfiguration(process.env.NUXT_ENV_SDK_ENV)

// Used for add chain network functionality. only for metamask atm
const chainObject = {
  chainId: config.bscHexId,
  chainName: config.bscChainName,
  nativeCurrency: {
    name: config.bscTokenName,
    symbol: config.bscTokenSymbol,
    decimals: config.bscTokenDecimals
  },
  rpcUrls: [config.bscRpcUrl],
  blockExplorerUrls: [config.bscExplorerUrl]
}

const bsc = {
  currentProvider: null,
  web3: config.web3, // TODO check this
  wallet: null,
  loginModal: false,
  metamask: window.ethereum || null,
  binance: window.BinanceChain || null,
  walletConnect: null,
  explorer: config.bscExplorerUrl,

  connect: async (provider, pk) => {
    switch (provider) {
      case 'trustwallet':
        return await bsc.onTrustWalletConnect()
      case 'metamask':
        return await bsc.onMetaMaskConnect()
      case 'bsc':
        return await bsc.onBinanceConnect()
      case 'walletconnect':
        return await bsc.onWalletConnectWeb3()
      case 'burner-wallet':
        return await bsc.onBurnerWallet(pk)
    }
  },
  disconnect: async () => {
    if (bsc.currentProvider) {
      if (bsc.currentProvider === bsc.walletConnect) {
      // This method is only available for WalletConnect
        await bsc.walletConnect.disconnect()
      }
    }
    bsc.wallet = null
    bsc.web3 = config.web3
    bsc.web3.setProvider(config.bscRpcUrl)
  },

  sign: async (message) => {
    try {
      if (bsc.currentProvider === 'burner-wallet') {
        return (await bsc.web3.eth.accounts.sign(message, bsc.wallet.privateKey)).signature
      } else {
        return await bsc.web3.eth.personal.sign(message, bsc.wallet.address)
      }
    } catch (error) {
      console.error(error)
      return Promise.reject(error)
    }
  },

  testTx: () => {
    const web32 = new Web3(bsc.currentProvider)
    const receiver = '0x541209bd9C60cDb11A5076b785ba1BD44cd15768' // TODO who does this belong to?
    const sender = bsc.wallet.address
    web32.eth.sendTransaction({
      to: receiver,
      from: sender,
      value: web32.utils.toWei('0.5', 'ether')
    }
    // eslint-disable-next-line node/handle-callback-err
    , function (err, res) {})
  },

  checkBinanceInstalled: () => {
    return Boolean(bsc.binance)
  },

  checkBscFormat: (bscAddress) => {
    try {
      return bsc.web3.utils.isAddress(bscAddress, config.bscNetworkId)
    } catch (error) {
      console.error(error)
    }
  },

  onTrustWalletConnect: async () => {
    try {
      if (!bsc.metamask) { bsc.metamask = window.ethereum }
      return await bsc.registerProvider(bsc.metamask)
    // bsc.checkBscFormat(bsc.wallet.address)
    } catch (error) {
      console.error(error)
      return Promise.reject(error)
    }
  },

  onMetaMaskConnect: async () => {
    try {
      if (!bsc.metamask) { bsc.metamask = window.ethereum }
      return await bsc.registerProvider(bsc.metamask)
    } catch (error) {
      console.error(error)
      return Promise.reject(error)
    }
  },

  onBinanceConnect: async () => {
    try {
      if (!bsc.binance) {
        bsc.binance = window.BinanceChain
      }
      return await bsc.registerProvider(bsc.binance)
    } catch (error) {
      console.error(error)
      return Promise.reject(error)
    }
  },

  // onWalletConnectWeb3: async () => {
  onWalletConnectWeb3: () => {
    // const wcProvider = new WalletConnectProvider({
    //   chainId: process.env.NUXT_ENV_BSC_NETWORK_ID,
    //   rpc: {
    //     56: process.env.NUXT_ENV_BSC_RPC
    //   },
    //   qrcodeModalOptions: {
    //     mobileLinks: ['metamask', 'trust']
    //   },
    //   bridge: process.env.NUXT_ENV_BRIDGE
    // })

    // bsc.walletConnect = wcProvider

    try {
      // const provider = await bsc.registerProvider(wcProvider)
      // bsc.wallet = bsc.walletConnect.accounts
      // bsc.walletConnect.updateRpcUrl(process.env.NUXT_ENV_BSC_NETWORK_ID, process.env.NUXT_ENV_BSC_RPC)
      // return provider
      return undefined
    } catch (error) {
      console.error(error)
      return Promise.reject(error)
    }
  },
  onBurnerWallet: async (pk) => {
    try {
      return await bsc.registerProvider('burner-wallet', pk)
    } catch (error) {
      console.error(error)
      return Promise.reject(error)
    }
  },

  /**
   * Method to add the correct chain to the wallet of the user.
   * method `wallet_addEthereumChain` is only supported for the Metamask wallet
   * https://docs.metamask.io/guide/rpc-api.html#wallet-addethereumchain
   *
   * Check the following links for updates
   * https://eips.ethereum.org/EIPS/eip-3085, https://github.com/ethereum/EIPs/pull/3326
   * When the proposal for the eips is finalized we need to update bsc.
   */
  addChain: async () => {
    const chainId = await bsc.getCurrentChainNetwork()
    if (chainId !== parseInt(config.bscNetworkId)) {
      let correctChain = false
      if (bsc.currentProvider === bsc.metamask) {
        try {
          await bsc.web3.givenProvider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: config.bscHexId }]
          })
          correctChain = true
          // Sleep needed to make sure the next popup for request accounts opens
          await sleep(500)
        } catch (switchError) {
          if (switchError.code === 4902) { // 4902 indicates that the chain has not been added yet.
            console.log('isMetaMask')
            // This method is only available for metamask right now.
            await bsc.web3.givenProvider.request({
              method: 'wallet_addEthereumChain',
              params: [chainObject]
            })
            correctChain = true
            // Sleep needed to make sure the next popup for request accounts opens
            await sleep(500)
          } else {
            throw switchError
          }
        }
      } else {
      // Notify the user to change the chain they are on manually.
        alert(`Please update the current chain in your wallet. Current-chain: ${await bsc.getCurrentChainNetwork()}`)
      }
      return correctChain
    }
    return true
  },

  /**
   * Return the network
   * @returns the network web3 is connected to as an integer
   */
  getCurrentChainNetwork: async () => {
    try {
      return await bsc.web3.eth.getChainId()
    } catch (error) {
      console.error(`Error requesting currentchain, ${error}`)
      return Promise.reject(error)
    }
  },

  /**
   * getBlockHeight
   * @returns the current blockheight of the chain
   */
  getBlockHeight: async () => {
    return await bsc.web3.eth.getBlockNumber().catch(console.error)
  },

  /**
   * Assign provider to currentProvider, instantiate web3, and register eventlisteners.
   */
  registerProvider: async (provider, privateKey) => {
    bsc.currentProvider = provider
    bsc.wallet = null
    let keypair = null

    if (bsc.currentProvider !== 'burner-wallet') {
      bsc.web3 = new Web3(provider)
      if (!(await bsc.addChain())) {
        return Promise.reject(new Error('Wrong chain'))
      }
      // Enable provider to instantiate connection with wallet
      await bsc.currentProvider.enable()
    }
    try {
      if (bsc.currentProvider === bsc.binance || bsc.currentProvider === bsc.walletConnect) {
        bsc.wallet = { address: (await bsc.web3.eth.getAccounts())[0] }
      } else if (bsc.currentProvider === 'burner-wallet') {
        // either generate private key or retrieve private key
        keypair = createAccount(privateKey)
        // creates empty wallet.
        bsc.web3.eth.accounts.wallet.create()
        // add current account (in the burner-wallet) to the actual wallet.
        bsc.web3.eth.accounts.wallet.add(keypair)
        // assign wallet.
        bsc.wallet = bsc.web3.eth.accounts.wallet[0]
      } else {
        bsc.wallet = { address: (await bsc.web3.eth.requestAccounts())[0] }
      }
    } catch (error) {
      console.error(error)
      return Promise.reject(error)
    }

    bsc.checkBscFormat(bsc.wallet.address)
    return provider
  }
}

export default bsc
