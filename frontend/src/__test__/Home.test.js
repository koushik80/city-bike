import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { store } from '../app/store'
import Home from '../pages/Home'

describe('Home', () => {

  it('should render correctly', () => {
    const wrapper = renderer.create(<Provider store={store}><Home /></Provider>)

    expect(wrapper).toMatchSnapshot()
  })
})