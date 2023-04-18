const mergeConfig = (
    data: Record<string,string|Record<string,string>>,
    pushConfigs: Record<string,string|Record<string,string>>
) => {
    let dataCpy = JSON.parse(JSON.stringify(data));

    Object.entries(pushConfigs).forEach(([key,val]) => {
        if (key === "scripts")
        {
            Object.entries(val).forEach(([scriptKey,script]) => {
                dataCpy["scripts"][scriptKey] = script;
            });
        }
        else
        {
            dataCpy[key] = val;
        }
    });

    return dataCpy;
};

export default mergeConfig;