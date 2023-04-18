import collector from "./collector";

const canOverwriteCollector = (key: string): boolean => {
	return collector<boolean>(
		{"prompt_text": `${key} already exists. Overwrite? (y/n)`},
		(text) => {
			if(text !== "y" && text !== "n")
			{
				console.log("Invalid option for overwrite. Must be y or n.");
				return "";
			}
			return text;
		},
		(text) => text === "y"
	);
};

export default canOverwriteCollector;