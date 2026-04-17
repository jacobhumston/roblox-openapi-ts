import fs from 'node:fs';
import openapiTS, { astToString } from 'openapi-typescript';

const ast = await openapiTS('https://create.roblox.com/docs/cloud/openapi.json');
const contents = astToString(ast);

fs.writeFileSync('src/types.ts', contents);
