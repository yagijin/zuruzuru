/* default packages */
import * as React from "react";

/* props
 * url: string
 */

const GoogleMap = (props) => {
  return (
    <div class="google-map">
      <iframe
        src={props.url}
        width="600"
        height="450"
        frameBorder="0"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
