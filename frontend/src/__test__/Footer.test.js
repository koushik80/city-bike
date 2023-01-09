import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Footer from '../components/common/Footer'


describe('Footer', () => {

  it('should render correctly', () => {
    const wrapper = renderer.create(<BrowserRouter><Footer /></BrowserRouter> )

    expect(wrapper).toMatchSnapshot()
  })
})