import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import App from './../App'
import renderer from 'react-test-renderer'

describe('renders app component', () => {

  it('App component match snapshot', () => {

    const wrapper = renderer.create(<Provider store={store}><App /></Provider>).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})