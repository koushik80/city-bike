import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Navbar from '../components/common/Navbar'


describe('Home Navbar', () => {

  it('should render correctly', () => {
    const wrapper = renderer.create(<BrowserRouter><Navbar /></BrowserRouter> )

    expect(wrapper).toMatchSnapshot()
  })
})