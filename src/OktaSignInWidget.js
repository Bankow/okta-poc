import React, { useEffect, useRef } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';

const OktaSignInWidget = ({ config, onSuccess, onError }) => {
  const widgetRef = useRef();
  useEffect(() => {
    if (!widgetRef.current)
      return false;

    const widget = new OktaSignIn(config);

    widget.showSignInToGetTokens({
      el: widgetRef.current,
    }).then(onSuccess).catch(onError);

    return () => widget.remove();
  }, [config, onSuccess, onError]);

  return (
    <>
      <link
        href="https://ok1static.oktacdn.com/assets/js/sdk/okta-signin-widget/3.0.0/css/okta-sign-in.min.css"
        type="text/css"
        rel="stylesheet" />
      <div ref={widgetRef} />
    </>
  );
};
export default OktaSignInWidget;
