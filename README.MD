# Github pages deployment helper

This tool helps to simplify the deployment of React production builds to github pages.
It guides you through the various modifications that need to be made in package.json.

## Using the tool

### Install gh-pages
```bash
    npm install gh-pages
```

### Install package dependencies
```bash
    npm install
```

### Compile into javascript
```bash
tsc --project ./tsconfig.json
```

### Pass file paths as CLI arguments
```bash
node app.js -p ../package.json -e ../.env
```

Where -p is the package.json file path, and -e is the file path of your .env file.
Ensure that the file paths are outside of the folder for this tool.
