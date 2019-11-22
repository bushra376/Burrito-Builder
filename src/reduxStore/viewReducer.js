import { UPDATE_VIEW, UPDATE_PAGE } from './viewAction';

const initialState = {
  currentPage: 'landing',
  currentAddOnView: 'Base',
  allViews: [
    { view: 'Base', isSelected: true },
    { view: 'Toppings', isSelected: false },
    { view: 'Sauce', isSelected: false },
  ],
};

export default function reducer(state = initialState, action) {
    const { type } = action;
    switch(type) {
      case UPDATE_VIEW: {
        const { view } = action;
        return {
          ...state,
          currentAddOnView: view,
        }
      }
      case UPDATE_PAGE: {
        const { pageName } = action;
        return {
          ...state,
          currentPage: pageName,
        }
      }
      default:
        return state;
    }
}