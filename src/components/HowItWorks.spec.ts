import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HowItWorks from './HowItWorks.vue'
describe('Getting started', () => {
  it.each(['light', 'dark'])('explains setup once in %s mode', (mode) => {
    localStorage.setItem('vueuse-color-scheme', mode)
    const wrapper = mount(HowItWorks)
    expect(wrapper.findAll('li')).toHaveLength(3)
    expect(wrapper.text()).toContain('while parked')
    expect(wrapper.text()).toContain('Recalibrate')
    expect(wrapper.get('img').attributes('src')).toContain(`screen-${mode}_`)
    expect(wrapper.get('a').attributes('href')).toBe('#help')
  })
})
