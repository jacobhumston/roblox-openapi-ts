import createClient, { ClientOptions } from 'openapi-fetch';
import { paths } from './types.js';

export * from './types.js';

/**
 * Create a new Roblox API client.
 * @param url The URL for this client. Default is https://apis.roblox.com
 * @param options Options to pass to the API client.
 */
export function newRobloxAPIClient(url?: RobloxApiUrl, options?: ClientOptions) {
    return createClient<paths>({ ...(options ?? {}), ...{ baseUrl: url ?? 'https://apis.roblox.com' } });
}

/** Roblox API urls. */
export type RobloxApiUrl =
    | 'https://apis.roblox.com'
    | 'https://accountinformation.roblox.com'
    | 'https://accountsettings.roblox.com'
    | 'https://adconfiguration.roblox.com'
    | 'https://assetdelivery.roblox.com'
    | 'https://auth.roblox.com'
    | 'https://avatar.roblox.com'
    | 'https://badges.roblox.com'
    | 'https://catalog.roblox.com'
    | 'https://clientsettings.roblox.com'
    | 'https://contacts.roblox.com'
    | 'https://develop.roblox.com'
    | 'https://economy.roblox.com'
    | 'https://economycreatorstats.roblox.com'
    | 'https://engagementpayouts.roblox.com'
    | 'https://followings.roblox.com'
    | 'https://friends.roblox.com'
    | 'https://gameinternationalization.roblox.com'
    | 'https://games.roblox.com'
    | 'https://groups.roblox.com'
    | 'https://inventory.roblox.com'
    | 'https://itemconfiguration.roblox.com'
    | 'https://locale.roblox.com'
    | 'https://localizationtables.roblox.com'
    | 'https://notifications.roblox.com'
    | 'https://premiumfeatures.roblox.com'
    | 'https://presence.roblox.com'
    | 'https://privatemessages.roblox.com'
    | 'https://publish.roblox.com'
    | 'https://thumbnails.roblox.com'
    | 'https://thumbnailsresizer.roblox.com'
    | 'https://trades.roblox.com'
    | 'https://translationroles.roblox.com'
    | 'https://twostepverification.roblox.com'
    | 'https://users.roblox.com';
