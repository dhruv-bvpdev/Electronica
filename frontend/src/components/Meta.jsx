import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Electrónica",
  description: "Supreme Quality Electronics for affordable prices",
  keywords:
    "electronics, buy, cheap electronics, affordable, fast delivery elctronics",
};

export default Meta;
