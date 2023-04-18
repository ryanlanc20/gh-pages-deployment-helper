import canOverwriteCollector from "../collectors/canOverwriteCollector";

const homepageInserter = (
    data: Record<string,string|Record<string,string>>,
    pushConfigs: Record<string,string|Record<string,string>>,
    username: string,
    repoName: string
) => {
    let pushConfigsCpy = JSON.parse(JSON.stringify(pushConfigs));

    if (data.hasOwnProperty("homepage"))
    {
        if (canOverwriteCollector("homepage"))
            pushConfigsCpy["homepage"] = `https://${username}.github.io/${repoName}`;
    }
    else
    {
        pushConfigsCpy["homepage"] = `https://${username}.github.io/${repoName}`;
    }

    return pushConfigsCpy;
};

export default homepageInserter;