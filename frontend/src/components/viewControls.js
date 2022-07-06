import React from "react";
import { InputGroup, InputGroupAddon } from "reactstrap";

import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FiList } from "react-icons/fi";

function ViewControls({ isList, ongridView, onListView }) {
  let list = "active";
  let grid = "";

  if (!isList) {
    list = "";
    grid = "active";
  }

  return (
    <InputGroup className="justify-content-end">
      <InputGroupAddon addonType="append" id="view-controls" className="d-flex">
        <div
          className={`rounded-left icon-wrapper p-2 ${list}`}
          onClick={onListView}
        >
          <FiList className="d-flex" />
        </div>
        <div
          className={`rounded-left icon-wrapper p-2 ${grid}`}
          onClick={ongridView}
        >
          <BsFillGrid3X3GapFill className="d-flex" />
        </div>
      </InputGroupAddon>
    </InputGroup>
  );
}

export default ViewControls;
