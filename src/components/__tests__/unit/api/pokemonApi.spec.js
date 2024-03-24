import pokemonApi from '@/api/pokemonApi'
import { describe, it, expect, test } from 'vitest'
// import { mount } from '@vue/test-utils'

describe('pokemonApi', () => {
    test("axios debe de estar configurado con el api de pokemon", () => {
        expect(pokemonApi.defaults.baseURL)
            .toBe('https://pokeapi.co/api/v2/pokemon')
    })
})