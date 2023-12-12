export const oktaConfig = {
    clientId: '0oad4hwk9gVgXrLSv5d7',
    issuer: 'https://dev-06318930.okta.com/oauth2/default',
    redirectUri: 'http://192.168.0.105:8084/login/callback',
    scopes: ['openid','profile','email'],
    pkce: true,
    disableHttpsCheck: true,
}