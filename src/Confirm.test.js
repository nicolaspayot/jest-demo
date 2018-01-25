import { shallow } from '@vue/test-utils';
import Confirm from './Confirm';

describe('Confirm component', () => {
  it('should display "Bon appetit!"', () => {
    const wrapper = shallow(Confirm);
    expect(wrapper.find('.main').text()).toBe('Bon appetit!');
  });
});
