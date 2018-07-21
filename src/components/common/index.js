import iconSvg from './iconSvg/index'

const install = function (Vue, options) {
  // 公共组件
  Vue.component(
    'icon-svg', iconSvg
  )
}

export default {
  install
}
