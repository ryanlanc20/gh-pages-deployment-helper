// Import input collectors
import repoNameCollector from "./collectors/repoNameCollector";
import usernameCollector from "./collectors/usernameCollector";
import generateSourceMappingCollector from "./collectors/generateSourceMappingCollector";

// Import property inserters
import predeployInserter from "./prop_inserters/predeploy";
import deployInserter from "./prop_inserters/deploy";
import homepageInserter from "./prop_inserters/homepage";

// Import configuration merge helper
import mergeConfig from "./prop_mergers/mergeConfig";

const fs = require("fs");
import { parseArgs } from "util";

const {values: {package_path,env_path}} = parseArgs({
	options: {
		package_path: {
			type: "string",
			short: "p"
		},
		env_path: {
			type: "string",
			short: "e"
		}
	}
});


// Read config
let data: Record<string,string|Record<string,string>> = {};
try
{
	data = JSON.parse(fs.readFileSync(package_path,"utf8"));
}
catch (err)
{
	console.log("Unable to load package.json");
	process.exit();
}

// Check file is okay
if (!data.hasOwnProperty("scripts"))
{
    console.log("Scripts key not present. This tool is only designed for working with React projects.");
	process.exit();
}

// Get config details
let repoName: string = repoNameCollector();
let username: string = usernameCollector();
let generateSourceMapping: boolean = generateSourceMappingCollector();

// Add changes
let pushConfigs: Record<string,Record<string,string> | string> = {"scripts": {}};
pushConfigs = predeployInserter(data,pushConfigs);
pushConfigs = deployInserter(data,pushConfigs);
pushConfigs = homepageInserter(data,pushConfigs,username,repoName);

// Commit changes
data = mergeConfig(data,pushConfigs);

// Write changes
try
{
    fs.writeFileSync(package_path, JSON.stringify(data,null,4));
}
catch(err) 
{
	console.error(err);
}

// Append sourcemap attribute to env
try
{
	fs.appendFileSync(env_path,`GENERATE_SOURCEMAP=${generateSourceMapping}\n`)
}
catch(err)
{
    console.error(err);
}



