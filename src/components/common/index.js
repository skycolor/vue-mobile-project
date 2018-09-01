import iconSvg from './iconSvg/index'

const install = function (Vue) {
  // 公共组件
  Vue.component(
    'icon-svg', iconSvg
  )
}

export default {
  install
}
