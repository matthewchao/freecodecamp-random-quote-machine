import React from "react";

function SocialLinks(props) {
  return (
    <div>
      <a
        class="twitter-share-button"
        href={"https://twitter.com/intent/" + encodeURIComponent(props.quote)}
      >
        Tweet
      </a>
    </div>
  );
}

export default SocialLinks;
