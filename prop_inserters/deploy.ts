import canOverwriteCollector from "../collectors/canOverwriteCollector";

const deployInserter = (
    data: Record<string,string|Record<string,string>>,
    pushConfigs: Record<string,string|Record<string,string>>
) => {
    let pushConfigsCpy = JSON.parse(JSON.stringify(pushConfigs));

    if (data["scripts"].hasOwnProperty("deploy"))
    {
        if (canOverwriteCollector("deploy"))
            pushConfigsCpy["scripts"]["deploy"] = "gh-pages -d build";
    }
    else
    {
        pushConfigsCpy["scripts"]["deploy"] = "gh-pages -d build";
    }

    return pushConfigsCpy;
};

export default deployInserter;