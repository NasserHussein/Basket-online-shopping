export function formatDateTime(dateInput, options = {}) {
	// Default options
	const defaultOptions = {
		locale: "en-US",
		timeZone: "local", // 'local', 'utc', or a specific IANA timezone string
		includeTime: true,
		includeDate: true,
		intlOptions: {}, // Allows overriding with direct Intl.DateTimeFormatOptions
	};

	const mergedOptions = { ...defaultOptions, ...options };

	let date;
	try {
		date = new Date(dateInput);
	} catch (e) {
		console.error("Invalid date input:", dateInput, e);
		return ""; 
	}

	if (isNaN(date.getTime())) {
		console.error("Invalid date input (parsed as NaN):", dateInput);
		return ""; 
	}

	let intlOptions = { ...mergedOptions.intlOptions }; 

	if (mergedOptions.includeDate) {
		if (!intlOptions.year && !intlOptions.month && !intlOptions.day && mergedOptions.dateStyle) {
			intlOptions.dateStyle = mergedOptions.dateStyle;
		} else if (!intlOptions.year && !intlOptions.month && !intlOptions.day) {
			intlOptions.year = "numeric";
			intlOptions.month = "short";
			intlOptions.day = "numeric";
		}
	} else {
		delete intlOptions.year;
		delete intlOptions.month;
		delete intlOptions.day;
		delete intlOptions.dateStyle;
	}

	if (mergedOptions.includeTime) {
		if (!intlOptions.hour && !intlOptions.minute && !intlOptions.second && mergedOptions.timeStyle) {
			intlOptions.timeStyle = mergedOptions.timeStyle;
		} else if (!intlOptions.hour && !intlOptions.minute && !intlOptions.second) {
			intlOptions.hour = "numeric";
			intlOptions.minute = "2-digit";
		}
	} else {
		delete intlOptions.hour;
		delete intlOptions.minute;
		delete intlOptions.second;
		delete intlOptions.timeStyle;
	}

	if (mergedOptions.timeZone === "utc") {
		intlOptions.timeZone = "UTC";
	} else if (mergedOptions.timeZone !== "local") {
		intlOptions.timeZone = mergedOptions.timeZone;
	}
	if (!Object.keys(intlOptions).length) {
		intlOptions = {
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "numeric",
			minute: "2-digit",
		};
	}

	try {
		return new Intl.DateTimeFormat(mergedOptions.locale, intlOptions).format(date);
	} catch (e) {
		console.error("Error formatting date with Intl.DateTimeFormat:", e);
		return "";
	}
}



