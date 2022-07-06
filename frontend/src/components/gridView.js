import React from "react";
import styled from "styled-components";
import ActionsIcons from "./actionsIcons";
import truncate from "./truncate";
import { recipes } from "./data";

/* Grid */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 12px;
`;

const Item = styled.div`
  min-height: 200px;
`;

export default function GridView(props) {
  // const searchQuery = props.searchQuery;
  let icons = props.icons;

  // Returns a new array of objects made up of full names.
  const reformatField = (list, prop) => {
    return list.map((item) => {
      const obj = Object.assign({}, item);
      obj[prop] = truncate(obj[prop], true);
      return obj;
    });
  };

  const output = reformatField(recipes, "description");

  return (
    <Grid className="p-2">
      {output.map((result) => {
        return (
          <Item xs="6" key={result.id} className="rounded p-1 card-item">
            <ActionsIcons
              icons={icons}
              isSaved={result.isSaved}
              isFavorited={result.isFavorited}
              className="ActionsIcons"
            />
            <div className="card-title">
              <h4>{result.title}</h4>
              <p>{result.description}</p>
            </div>
          </Item>
        );
      })}
    </Grid>
  );
}
