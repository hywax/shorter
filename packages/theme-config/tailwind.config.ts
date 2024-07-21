// @ts-expect-error no declared types at this time
import primeui from 'tailwindcss-primeui'

export default {
  darkMode: 'class',
  corePlugins: {
    preflight: false,
  },
  plugins: [primeui],
}
