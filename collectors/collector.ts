const input = require("prompt-sync")();

export default function collector<O>(
    inputs: Record<string,string>,
    validator: (text) => string|null,
    transformer: (text) => O
): O
{
    let text: string = "";

    while (text.length === 0)
    {
        text = input(inputs["prompt_text"]);

        if (validator)
            text = validator(text);
    }

    return transformer(text);
}