export const UPDATE_BASE = 'UPDATE_BASE';
export const UPDATE_TOPPINGS = 'UPDATE_TOPPINGS';
export const UPDATE_SAUCE = 'UPDATE_SAUCE';

export const updateBase = base => {
	return {
		type: UPDATE_BASE,
		base
	}
}

export const updateToppings = toppingName => {
	return {
		type: UPDATE_TOPPINGS,
		toppingName
	}
}

export const updateSauce = sauceName => {
	return {
		type: UPDATE_SAUCE,
		sauceName
	}
}
