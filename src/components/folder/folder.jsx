import React from 'react'
import { bundles } from "../../assets/data/bundles";

const folder = () => {
  const bundlesList = bundles.map((bundle) => (
    <div className="bundle--container" key={bundle["name"]}>
      <img src={bundle["icon"]} alt="Icon of bundle"></img>
      <span>{bundle["name"]}</span>
    </div>
  ));
  return <div>{bundlesList}</div>;
};

export default folder
