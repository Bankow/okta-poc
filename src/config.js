const oktaAuthConfig = {
  issuer: '',
  clientId: '',
  redirectUri: window.location.origin + '/login/callback',
};

const oktaSignInConfig = {
  baseUrl: '',
  clientId: '',
  redirectUri: window.location.origin + '/login/callback',
  useInteractionCodeFlow: false,
  useClassicEngine: true,
  authParams: {
    responseMode: 'fragment',
    pkce: true
  }
};

export { oktaAuthConfig, oktaSignInConfig };
