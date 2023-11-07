export const oktaConfig = {
    clientId: '0oad4hwk9gVgXrLSv5d7',
    issuer: 'https://dev-06318930.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid','profile','email'],
    pkce: true,
    disableHttpsCheck: true,
}