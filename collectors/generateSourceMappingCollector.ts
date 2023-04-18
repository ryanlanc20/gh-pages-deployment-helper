import collector from "./collector";

const generateSourceMappingCollector = ():boolean => {
    return collector<boolean>(
        {"prompt_text": "Use source mapping? (y/n)"},
        (text) => {
            if (text !== "y" && text !== "n")
            {
                console.log("Invalid option for overwrite. Must be y or n.")
                return "";
            }
            return text;
        },
        (text) => text === "y"
    );
}

export default generateSourceMappingCollector;