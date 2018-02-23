import Vue from 'vue'
import MagicProgressBar from '@/components/MagicProgressBar'

Vue.config.ignoredElements = [
    'b-progress', 'b-progress-bar', 'b-container', 'b-row', 'b-col', 'b-form-select', 'b-button'
]

describe('MagicProgressBar', () => {

    const Constructor = Vue.extend(MagicProgressBar)

    it('has a created hook', () => {
      expect(typeof MagicProgressBar.mounted).toBe('function')
    })    

    it('sets the correct default data', () => {
      expect(typeof MagicProgressBar.data).toBe('function')
      const defaultData = MagicProgressBar.data()
      expect(defaultData.msg).toBe('Welcome to Magic Progress Bar')
    })

    it('sets the correct default data', () => {
      expect(typeof MagicProgressBar.data).toBe('function')
      const defaultData = MagicProgressBar.data()
      expect(defaultData.apiUrl).toBe('http://localhost:4555/getInitProgressBarValue')
    })    

    it('should header present', () => {
      const vm = new Constructor().$mount()	
      const header = vm.$el.querySelector('.header')
      expect(header).not.toBe(null)
    })

})
