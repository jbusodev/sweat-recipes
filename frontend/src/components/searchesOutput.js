import React from "react";
import ListView from "./listView";
import GridView from "./gridView";

function SearchesOutput(props) {
  const isList = props.isList !== undefined ? props.isList : true;
  if (isList) {
    return <ListView icons={props.icons} />;
  }
  return <GridView icons={props.icons} />;
}

export default SearchesOutput;
