import React, { useEffect } from "react";
import {
  MdFavoriteBorder,
  MdFavorite,
  MdStarBorder,
  MdStar,
  MdInfo,
} from "react-icons/md";

export default function ActionsIcons({
  isSaved,
  isFavorited,
  onSaveList,
  onFavList,
  onShowDetails,
  icons,
}) {
  let InfoIcon = <MdInfo />;
  let SaveIcon = <MdFavoriteBorder />; // When recipe is not saved
  let FavIcon = <MdStarBorder />; // When recipe is not favorite

  if (isSaved) {
    SaveIcon = <MdFavorite />; // When recipe is saved
  }
  if (isFavorited) {
    FavIcon = <MdStar />; // When recipe is favorite
  }
  useEffect(() => {}, [isSaved, isFavorited]);

  // icons array
  const iconsList = [];

  icons.map((icon) => {
    switch (icon.name) {
      case "info":
        iconsList.push(
          <div
            key={icon.key}
            className="icon-wrapper p-2 info-white"
            onClick={onShowDetails}
          >
            {InfoIcon}
          </div>
        );
        break;
      case "save":
        iconsList.push(
          <div
            key={icon.key}
            className="icon-wrapper p-2 save-red"
            onClick={onSaveList}
          >
            {SaveIcon}
          </div>
        );
        break;
      case "favorite":
        iconsList.push(
          <div
            key={icon.key}
            className="icon-wrapper p-2 fav-yellow"
            onClick={onFavList}
          >
            {FavIcon}
          </div>
        );
        break;
      default:
        break;
    }
    return iconsList;
  });

  return (
    <div>
      <div className="d-flex">{iconsList}</div>
    </div>
  );
}
