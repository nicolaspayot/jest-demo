jest.mock('./api');
import { shallow } from '@vue/test-utils';
import FoodBar from './FoodBar';

describe('FoodBar component', () => {
  let wrapper;

  beforeEach(() => {
    const $router = { push: jest.fn() };
    wrapper = shallow(FoodBar, {
      mocks: { $router }
    });
  });

  it('should display orders', () => {
    wrapper.find('#burger').trigger('click');
    wrapper.find('#burger').trigger('click');
    wrapper.find('#burger').trigger('click');
    wrapper.find('#drink').trigger('click');
    wrapper.find('#fries').trigger('click');
    wrapper.find('#ice-cream').trigger('click');

    expect(wrapper.find('#menu').html()).toBe("<div id=\"menu\"><h2>Here's what your ordered:</h2> <div class=\"is-large\"><span>👉</span> <span>🍔🍔🍔🥤🍟🍦</span></div> <div class=\"checkout\"><button>Checkout!</button></div></div>");
  });

  it('should match snapshot', () => {
    wrapper.find('#burger').trigger('click');
    wrapper.find('#fries').trigger('click');
    wrapper.find('#drink').trigger('click');
    wrapper.find('#ice-cream').trigger('click');

    const renderer = require('vue-server-renderer').createRenderer();
    renderer.renderToString(wrapper.vm, (err, str) => {
      expect(str).toMatchSnapshot();
    });
  });

  it('should confirm order', async () => {
    await wrapper.vm.checkout();
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/confirm');
  });
});
