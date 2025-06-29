export const updateLocalStorage = (state, storageKey, data) => {
	localStorage.setItem(storageKey, JSON.stringify(data));
	state = JSON.parse(localStorage.getItem(storageKey));
};
