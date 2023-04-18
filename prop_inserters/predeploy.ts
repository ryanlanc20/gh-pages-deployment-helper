import canOverwriteCollector from "../collectors/canOverwriteCollector";

const predeployInserter = (
    data: Record<string,string|Record<string,string>>,
    pushConfigs: Record<string,string|Record<string,string>>
) => {
    let pushConfigsCpy = JSON.parse(JSON.stringify(pushConfigs));

    if(data["scripts"].hasOwnProperty("predeploy"))
    {
        if (canOverwriteCollector("predeploy"))
            pushConfigsCpy["scripts"]["predeploy"] = "npm run build"
    }
    else
    {
	    pushConfigsCpy["scripts"]["predeploy"] = "npm run build"
    }

    return pushConfigsCpy;
};

export default predeployInserter;