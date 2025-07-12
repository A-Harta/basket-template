import { SELECTORS } from './selectors.js'

// счетчик добавить
if (SELECTORS) {
  SELECTORS?.counterBtnUp?.addEventListener('click', () => {
    console.log('click')
  })
}
// счетчик убавить
if (SELECTORS) {
  SELECTORS?.counterBtnDown?.addEventListener('click', () => {
    console.log('click')
  })
}
