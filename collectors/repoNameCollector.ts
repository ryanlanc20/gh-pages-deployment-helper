import collector from "./collector";

const repoNameCollector = () => {
    return collector<string>(
        {"prompt_text": "What is the name of your repo?"},
        null,
        (text) => text
    );
};

export default repoNameCollector;