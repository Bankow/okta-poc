const oktaAuthConfig = {
  issuer: process.env.REACT_APP_AUTH_ISSUER,
  clientId: process.env.REACT_APP_AUTH_CLIENT_ID,
  redirectUri: window.location.origin + '/login/callback',
};

const oktaSignInConfig = {
  issuer: process.env.REACT_APP_AUTH_ISSUER,
  clientId: process.env.REACT_APP_AUTH_CLIENT_ID,
  redirectUri: window.location.origin + '/login/callback',
  useInteractionCodeFlow: false,
  useClassicEngine: true,
  authParams: {
    responseMode: 'fragment',
    pkce: true
  }
};

export { oktaAuthConfig, oktaSignInConfig };
