export const getLocalStorageItem = (key, defaultValue) => {
	try {
		const item = localStorage.getItem(key);
		return item ? JSON.parse(item) : defaultValue;
	} catch (error) {
		console.error(`Error parsing localStorage item "${key}":`, error);
		return defaultValue;
	}
};
