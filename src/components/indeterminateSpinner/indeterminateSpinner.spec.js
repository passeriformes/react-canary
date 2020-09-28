import React from 'react'
import { mount } from 'enzyme'

import { IndeterminateSpinner } from './index.js'

describe('IndeterminateSpinner', () => {
  test('renders at expected default size', () => {
    const wrapper = mount(<IndeterminateSpinner />)
    expect(wrapper.find(IndeterminateSpinner).props().size).toEqual(40)
  })
})
