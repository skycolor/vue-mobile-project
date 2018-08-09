import MyHttp from '../request.js'
import musicApi from './music/'

const ALL_API = Object.assign({}, musicApi)
const Api = new MyHttp({}, ALL_API)
export default Api