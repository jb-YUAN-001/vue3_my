import { ref } from 'vue'

const DEFAULT_THEME = 'light'
const themeKey = 'theme'

export const themeMode = ref<'light' | 'dark'>(localStorage.getItem(themeKey) === 'dark' ? 'dark' : 'light')

export const getThemeMode = () => themeMode

export const applyTheme = (mode: 'light' | 'dark') => {
  themeMode.value = mode
  if (mode === 'dark') {
    document.documentElement.classList.add('dark-theme')
  } else {
    document.documentElement.classList.remove('dark-theme')
  }
  localStorage.setItem(themeKey, mode)
}

export const toggleThemeMode = () => {
  const next = themeMode.value === 'dark' ? 'light' : 'dark'
  applyTheme(next)
}

export const initTheme = () => {
  applyTheme(themeMode.value || DEFAULT_THEME)
}
