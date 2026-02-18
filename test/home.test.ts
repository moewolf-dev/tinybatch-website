import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IndexPage from '../app/pages/index.vue'

describe('Tinybatch Home Page', () => {
    it('renders the product grid correctly', () => {
        // Note: In a real Nuxt 4 environment, we might need more setup for i18n/NuxtUI
        // This is a simplified test for the core logic
        const wrapper = mount(IndexPage, {
            global: {
                mocks: {
                    $t: (msg) => msg
                },
                stubs: {
                    NuxtLink: true
                }
            }
        })

        // Check if hero title is present
        expect(wrapper.text()).toContain('home.hero.title')

        // Check if product cards are rendered
        const cards = wrapper.findAll('.retro-card')
        expect(cards.length).toBeGreaterThan(0)

        // Verify specific product content
        expect(wrapper.text()).toContain('IMG-OPTIMIZER')
        expect(wrapper.text()).toContain('CSV-TO-JSON')
    })
})
