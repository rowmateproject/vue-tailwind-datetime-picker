import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/wrapper.js',
  output: {
    name: 'VueTailwindDatetimePicker',
    exports: 'named',
    extractCSS: false,
    globals: {
      'dayjs': 'dayjs',
      'dayjs/plugin/isToday': 'dayjs/plugin/isToday',
      'dayjs/plugin/isBetween': 'dayjs/plugin/isBetween',
      'dayjs/plugin/customParseFormat': 'dayjs/plugin/customParseFormat',
      'dayjs/plugin/localizedFormat': 'dayjs/plugin/localizedFormat',
      'dayjs/plugin/advancedFormat': 'dayjs/plugin/advancedFormat',
      'dayjs/plugin/isSameOrBefore': 'dayjs/plugin/isSameOrBefore',
      'dayjs/plugin/isSameOrAfter': 'dayjs/plugin/isSameOrAfter',
      'dayjs-dynamic-locale': 'dayjs-dynamic-locale'
    },
  },
  external: [
    'dayjs',
    'dayjs/plugin/isToday',
    'dayjs/plugin/isBetween',
    'dayjs/plugin/customParseFormat',
    'dayjs/plugin/localizedFormat',
    'dayjs/plugin/advancedFormat',
    'dayjs/plugin/isSameOrBefore',
    'dayjs/plugin/isSameOrAfter',
    'dayjs-dynamic-locale'
  ],
  plugins: [
    commonjs(),
    vue({
      css: true,
      compileTemplate: true,
    }),
    buble()
  ]
}
