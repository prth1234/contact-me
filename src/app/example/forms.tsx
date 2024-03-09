import React from "react";

export function FormsXXX() {
  const iframeStyles = {
    width: "100vw",
    minWidth: "100%",
    height: "100vh",
    border: "none",
  };

  return (
    <>
      <iframe
        id=""
        allowTransparency={false}
        allowFullScreen={true}
        allow="geolocation; microphone; camera"
        src="https://my.forms.app/form/65ec1aaeda0e064e26253bf8"
        frameBorder="0"
        style={iframeStyles}
      ></iframe>
    </>
  );
}


