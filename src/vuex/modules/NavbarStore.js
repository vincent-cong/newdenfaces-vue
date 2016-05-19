import toastr from 'toastr'
import { UPDATEONLINEUSERS, GETCHARACTERCOUNTSUCCESS, GETCHARACTERCOUNTFAIL } from '../types'

const state = {
  onlineUsers: 0,
  totalCharacters: 0
}

const mutations = {
  [UPDATEONLINEUSERS] (state, data) {
    state.onlineUsers = data.onlineUsers
  },
  [GETCHARACTERCOUNTSUCCESS] (state, data) {
    state.totalCharacters = data.count
  },
  [GETCHARACTERCOUNTFAIL] (sate, err) {
    toastr.error(err.message)
  }
}

export default {
  state,
  mutations
}
