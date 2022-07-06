const recipes = [
  {
    id: 1,
    title: "Ramen puuququ",
    description:
      "Etiam sit amet nunc rhoncus, porttitor enim non, ornare nisl. Nam finibus nulla orci, quis posuere eros blandit non. Ut mattis massa sed magna eleifend, posuere consequat turpis posuere. Aenean consequat mauris purus, in consectetur turpis consequat vitae. Proin sed tellus eget ex elementum malesuada dignissim sit amet neque. Curabitur ipsum tortor, imperdiet non nisi nec, tempus finibus mauris. Proin vitae risus ultrices, tempor justo vel, accumsan felis. Duis pretium sit amet nulla id vehicula. Pellentesque eu ex vel mauris condimentum vehicula. Sed eget felis hendrerit, cursus nulla sit amet, mollis lorem. Morbi vel risus dolor. Nulla sit amet nisl vel augue bibendum suscipit.",
    isSaved: false,
    isFavorited: true,
  },
  {
    id: 2,
    title: "Sweet potato pie",
    description:
      "Nunc faucibus sollicitudin odio, ac finibus dolor porttitor ut. Phasellus accumsan bibendum tristique. Phasellus rhoncus, erat non mattis imperdiet, enim eros molestie tellus, ut dictum lacus dui nec nibh. Mauris euismod, leo commodo cursus iaculis, odio libero gravida risus, sit amet cursus libero metus sit amet ipsum. Vivamus mollis euismod rutrum. Vivamus porttitor interdum erat, in fringilla mi scelerisque egestas. Maecenas ipsum sem, pharetra et vestibulum in, rutrum ac massa.",
    isSaved: true,
    isFavorited: false,
  },
  {
    id: 3,
    title: "Mac & Cheese",
    description:
      "Cras finibus neque lobortis mollis viverra. Nullam eu facilisis nisl. Vivamus malesuada, lectus et finibus pulvinar, leo sapien lobortis lorem, ac feugiat velit erat ut augue. Maecenas rutrum odio eu ligula dignissim, sed ultrices libero commodo. Cras dignissim efficitur elit at ultricies. Proin rhoncus eros at magna facilisis, nec condimentum quam tincidunt. Duis bibendum molestie felis, ac mattis orci elementum quis. Praesent euismod dictum quam vel pellentesque. Etiam dui metus, placerat sed quam ac, congue varius massa. Morbi vestibulum quam sed nisi dictum, a porttitor libero suscipit. Aliquam id tortor hendrerit, rhoncus quam vel, commodo diam. Sed tincidunt vulputate odio eget condimentum. Vivamus eget commodo lectus.",
    isSaved: true,
    isFavorited: true,
  },
  {
    id: 4,
    title: "Best Salad in the universe",
    description:
      "Cras non nibh eleifend, placerat nibh at, gravida tellus. Ut est arcu, elementum at egestas in, commodo et erat. Nullam cursus sem tristique turpis lacinia, aliquet bibendum leo vulputate. Vivamus rhoncus dolor sed enim fringilla gravida. Praesent hendrerit egestas dolor, non viverra metus fringilla et. In hac habitasse platea dictumst. Nulla facilisi. In dapibus eros mi, id mollis nisi pharetra et. Quisque et bibendum tortor. Duis a tellus non arcu tempus faucibus in sed augue.",
    isSaved: false,
    isFavorited: false,
  },
];

const listSaved = [
  {
    id: 1,
    title: "Ramen",
    description:
      "Etiam sit amet nunc rhoncus, porttitor enim non, ornare nisl. Nam finibus nulla orci, quis posuere eros blandit non. Ut mattis massa sed magna eleifend, posuere consequat turpis posuere. Aenean consequat mauris purus, in consectetur turpis consequat vitae. Proin sed tellus eget ex elementum malesuada dignissim sit amet neque. Curabitur ipsum tortor, imperdiet non nisi nec, tempus finibus mauris. Proin vitae risus ultrices, tempor justo vel, accumsan felis. Duis pretium sit amet nulla id vehicula. Pellentesque eu ex vel mauris condimentum vehicula. Sed eget felis hendrerit, cursus nulla sit amet, mollis lorem. Morbi vel risus dolor. Nulla sit amet nisl vel augue bibendum suscipit.",
    isSaved: false,
    isFavorited: true,
  },
  {
    id: 2,
    title: "Sweet potato pie",
    description:
      "Nunc faucibus sollicitudin odio, ac finibus dolor porttitor ut. Phasellus accumsan bibendum tristique. Phasellus rhoncus, erat non mattis imperdiet, enim eros molestie tellus, ut dictum lacus dui nec nibh. Mauris euismod, leo commodo cursus iaculis, odio libero gravida risus, sit amet cursus libero metus sit amet ipsum. Vivamus mollis euismod rutrum. Vivamus porttitor interdum erat, in fringilla mi scelerisque egestas. Maecenas ipsum sem, pharetra et vestibulum in, rutrum ac massa.",
    isSaved: true,
    isFavorited: false,
  },
  {
    id: 3,
    title: "Mac & Cheese",
    description:
      "Cras finibus neque lobortis mollis viverra. Nullam eu facilisis nisl. Vivamus malesuada, lectus et finibus pulvinar, leo sapien lobortis lorem, ac feugiat velit erat ut augue. Maecenas rutrum odio eu ligula dignissim, sed ultrices libero commodo. Cras dignissim efficitur elit at ultricies. Proin rhoncus eros at magna facilisis, nec condimentum quam tincidunt. Duis bibendum molestie felis, ac mattis orci elementum quis. Praesent euismod dictum quam vel pellentesque. Etiam dui metus, placerat sed quam ac, congue varius massa. Morbi vestibulum quam sed nisi dictum, a porttitor libero suscipit. Aliquam id tortor hendrerit, rhoncus quam vel, commodo diam. Sed tincidunt vulputate odio eget condimentum. Vivamus eget commodo lectus.",
    isSaved: true,
    isFavorited: true,
  },
  {
    id: 4,
    title: "Best Salad in the universe",
    description:
      "Cras non nibh eleifend, placerat nibh at, gravida tellus. Ut est arcu, elementum at egestas in, commodo et erat. Nullam cursus sem tristique turpis lacinia, aliquet bibendum leo vulputate. Vivamus rhoncus dolor sed enim fringilla gravida. Praesent hendrerit egestas dolor, non viverra metus fringilla et. In hac habitasse platea dictumst. Nulla facilisi. In dapibus eros mi, id mollis nisi pharetra et. Quisque et bibendum tortor. Duis a tellus non arcu tempus faucibus in sed augue.",
    isSaved: false,
    isFavorited: false,
  },
];
export { listSaved, recipes };
