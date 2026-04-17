import createClient from 'openapi-fetch';
import { $defs, components, operations, paths, webhooks } from './types.js';

export { $defs, components, operations, paths, webhooks };

/** Roblox API client. */
export const client = createClient<paths>({ baseUrl: 'https://apis.roblox.com' });
