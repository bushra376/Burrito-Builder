export const UPDATE_VIEW = 'UPDATE_VIEW';
export const UPDATE_PAGE = 'UPDATE_PAGE';

export const updateView = view => {
	return {
		type: UPDATE_VIEW,
		view
	}
}

export const updatePage = pageName => {
	return {
		type: UPDATE_PAGE,
		pageName
	}
}
