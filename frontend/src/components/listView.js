import React, { useEffect } from "react";
import { Table } from "reactstrap";
import ActionsIcons from "./actionsIcons";

function ListView(props) {
  let icons = props.icons;
  // const recipes = this.props.recipes;
  let isSaved = false;
  let isFavorited = false;

  useEffect(() => {
    // alert(JSON.stringify(icons));
  });

  return (
    <Table borderless>
      <thead>
        <tr>
          <th>Thumbnail</th>
          <th>Title</th>
          <th className="hideSm">Cooking Time</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Img 1</th>
          <td>Title 1</td>
          <td className="hideSm">00:30</td>
          <td className="icon-wrapper">
            <ActionsIcons
              icons={icons} // determined by query item
              isSaved={isSaved}
              isFavorited={isFavorited}
            />
          </td>
        </tr>
        <tr>
          <th scope="row">Img 2</th>
          <td>Title 2</td>
          <td className="hideSm">00:30</td>
          <td className="icon-wrapper">
            <ActionsIcons
              icons={icons}
              isSaved={isSaved}
              isFavorited={isFavorited}
            />
          </td>
        </tr>
        <tr>
          <th scope="row">Img 3</th>
          <td>Title 3</td>
          <td className="hideSm">00:30</td>
          <td className="icon-wrapper">
            <ActionsIcons
              icons={icons}
              isSaved={isSaved}
              isFavorited={isFavorited}
            />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ListView;
