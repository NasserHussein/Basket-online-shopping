export function formatText(type = "", text) {
  if (type === "description") {
  
    if (!text || typeof text !== "string") {
			return "";
		}
    
    const cleanedDescription = text.replace(/[\t\n]/g, " ");
    
    const wordsArray = cleanedDescription.split(/\s+/).filter((word) => word.length > 0); // Filter out any empty strings from split
    
    const maxWords = 4;
    let resultString = "";
    
    if (wordsArray.length > maxWords) {
      const limitedWords = wordsArray.slice(0, maxWords);
      resultString = limitedWords.join(" ") + "...";
    } else {
      resultString = wordsArray.join(" ");
    }
    
    return resultString;
  } else {
    const titleSplitted = text.split(" ");
		titleSplitted.splice(2, titleSplitted.length);
		const titleFormatted = titleSplitted.join(" ");
		return titleFormatted;
}

}
