import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: true,
	stylistic: {
    indent: 'tab', // 2, 4, or 'tab'
    quotes: 'single', // or 'double'
  },
})
