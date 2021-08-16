import axios from 'axios'
import Debug from 'debug'

const TOKEN = '9NS0W3rNqRWTqWYpepMK'
const debug = Debug('app:request')

const request = axios.create({
  baseURL: 'https://the-one-api.dev/v2',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN}`
  },
})


export default async function client (opts) {
  try {
    debug('start', opts)
    const res = await request(opts)
    debug('success', res.data.docs)
    //console.log('res', res.data.docs)
    return res.data.docs
  } catch (err) {
    debug('error', err.response ? err.response.data : err.message)
    throw err
  }
}