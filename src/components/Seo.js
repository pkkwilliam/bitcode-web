import React from "react";
import Helmet from "react-helmet";

export default function Seo(props) {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Helmet>
  );
}
