import React from 'react'
import renderer from 'react-test-renderer'
import StationDetailsLoading from '../components/loader/StationDetailsLoading'


describe('Station Details Loading', () => {

  it('should render correctly', () => {
    const wrapper = renderer.create(<StationDetailsLoading />)

    expect(wrapper).toMatchSnapshot()
  })
})