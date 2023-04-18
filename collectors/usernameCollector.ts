import collector from "./collector";

const usernameCollector = () => {
    return collector<string>(
        {"prompt_text": "What is your username?"},
        null,
        (text) => text
    );
}

export default usernameCollector;