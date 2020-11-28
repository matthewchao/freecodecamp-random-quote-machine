import React from "react";

function SocialLinks(props) {
  return (
    <div>
      <a
        class="twitter-share-button"
        // see https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview
        href={"https://twitter.com/intent/" + encodeURIComponent(props.quote)}
      >
        Tweet
      </a>
    </div>
  );
}

export default SocialLinks;
