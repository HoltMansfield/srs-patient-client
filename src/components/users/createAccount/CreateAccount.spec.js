import React from 'react'
import { shallow, mount } from 'enzyme'
import ReactDOM from 'react-dom'
import { Grid, Button } from 'semantic-ui-react'

import { CreateAccount } from './CreateAccount'

describe('CreateAccount component',  () => {
  const syntheticEvent = { preventDefault: () => undefined }

  it('renders', () => {
    const save = jest.fn();
    const wrapper = shallow(<CreateAccount save={save} />)
    const grids = wrapper.find(Grid)

    expect(grids.length).toEqual(1)
    expect(save.mock.calls.length).toBe(0)
  });

  it('renders nothing when user is logged in', () => {
    const save = jest.fn();
    const wrapper = mount(<CreateAccount save={save} />)
    const button = wrapper.find('button')

    expect(button.length).toEqual(1)
    button.simulate('click', syntheticEvent)
    //wrapper.find('[type="submit"]').get(0).click();
    //expect(save.mock.calls.length).toBe(1)
  });
})
