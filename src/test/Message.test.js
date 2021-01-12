import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Message from '../js/Message'
Enzyme.configure({ adapter: new Adapter() })
describe('<Message />', () => {
  test('renders a single <p> tag', () => {
    const wrapper = shallow(<Message />)
    expect(wrapper.find('p')).toHaveLength(1)
  })
})
