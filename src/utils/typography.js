import Typography from 'typography'
import theme from 'typography-theme-github'
// import theme from 'typography-theme-fairy-gates'

theme.baseFontSize = '16px'

theme.headerFontFamily = [
  'Helvetica Neue',
  'Arial',
  'PingFang SC',
  'Hiragino Sans GB',
  'Microsoft YaHei',
  'WenQuanYi Micro Hei',
]

theme.bodyFontFamily = [
  'Helvetica Neue',
  'Arial',
  'PingFang SC',
  'Hiragino Sans GB',
  'Microsoft YaHei',
  'WenQuanYi Micro Hei',
]

const typography = new Typography(theme)

export default typography

export const rhythm = typography.rhythm
export const scale = typography.scale
export const options = typography.options
