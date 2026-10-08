/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Bảng màu thương hiệu Activate - lấy từ gradient của logo (tím → hồng → cam)
      colors: {
        brand: {
          violet: '#7A6CEA',
          deep: '#6A4FDB',
          purple: '#B04FCD',
          magenta: '#D33CB8',
          pink: '#EE3E99',
          coral: '#F3726F',
          amber: '#F8B736',
          plum: '#2D0F3B',
          blush: '#FBD5E8',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #7A6CEA 0%, #B04FCD 30%, #EE3E99 65%, #F3726F 82%, #F8B736 100%)',
      },
      fontFamily: {
        'archivo': ['Archivo', 'sans-serif'],
        'fzpoppins': ['FzPoppins', 'sans-serif'],
      },
      keyframes: {
        'overlay-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'overlay-out': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        'panel-in': {
          from: { opacity: '0', transform: 'translate3d(0, 22px, 0) scale(0.96)' },
          to: { opacity: '1', transform: 'translate3d(0, 0, 0) scale(1)' },
        },
        'panel-out': {
          from: { opacity: '1', transform: 'translate3d(0, 0, 0) scale(1)' },
          to: { opacity: '0', transform: 'translate3d(0, 12px, 0) scale(0.975)' },
        },
        'rise-in': {
          from: { opacity: '0', transform: 'translate3d(0, 14px, 0)' },
          to: { opacity: '1', transform: 'none' },
        },
        'slide-swap': {
          from: { opacity: '0', transform: 'scale(1.03)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'overlay-in': 'overlay-in 220ms ease-out both',
        'overlay-out': 'overlay-out 200ms ease-in forwards',
        'panel-in': 'panel-in 340ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'panel-out': 'panel-out 200ms cubic-bezier(0.4, 0, 1, 1) forwards',
        'rise-in': 'rise-in 420ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'slide-swap': 'slide-swap 320ms cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
