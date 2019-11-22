import { UPDATE_BASE, UPDATE_TOPPINGS, UPDATE_SAUCE } from './burritoAction';

const initialState = {
  base: [
    { type: 'white', isPresent: true },
    { type: 'brown', isPresent: false },
  ],
  toppings: [
    {
      type: 'beans',
      isPresent: false,
      location: [
        { x:145, y:140},
        { x:165, y:160},
        { x:185, y:180},
        { x:205, y:200},
        { x:225, y:220},
        { x:255, y:240},
        { x:255, y:220},
        { x:165, y:140},
        { x:185, y:140},
        { x:205, y:160},
        { x:225, y:160},
        { x:255, y:180},
        { x:255, y:200},
        { x:255, y:200},
        { x:125, y:160},
        { x:135, y:180},
        { x:145, y:180},
        { x:165, y:190},
        { x:195, y:190},
        { x:215, y:180},
        { x:235, y:190},
        { x:225, y:230},
      ],
    },
    {
      type: 'rice',
      isPresent: false,
      location: [
        { x: 125, y: 130 },
        { x: 55, y: 60 },
      ],
    },
    {
      type: 'onions',
      isPresent: false,
      location: [
        { x: 125, y: 130 },
        { x: 165, y: 130 },
        { x: 185, y: 190 },
      ],
    },
  ],
  sauce: [
    { type: 'ketchup', isPresent: false },
    { type: 'bbq', isPresent: false },
    { type: 'hot', isPresent: false },
  ],
};

export default function reducer(state = initialState, action) {
    const { type } = action;
    switch(type) {
      case UPDATE_BASE: {
        const { base } = action;
        const baseCopy = state.base.map(ele => {
          if (ele.type === base) {
            return {
              ...ele,
              isPresent: true,
            };
          }
          return {
            ...ele,
            isPresent: false,
          }
        })
        return {
          ...state,
          base: baseCopy,
        }
      }
      case UPDATE_TOPPINGS: {
        const { toppingName } = action;
        const toppingsCopy = state.toppings.map(top => {
          if (top.type === toppingName) {
            top.isPresent = !top.isPresent;
          }
          return top;
        });
        return {
          ...state,
          toppings: toppingsCopy,
        }
      }
      case UPDATE_SAUCE: {
        const { sauceName } = action;
        const sauceCopy = state.sauce.map(ele => {
          if (ele.type === sauceName) {
            ele.isPresent = !ele.isPresent;
          }
          return ele;
        })
        return {
          ...state,
          sauce: sauceCopy,
        } 
      }
      default:
        return state;
    }
}