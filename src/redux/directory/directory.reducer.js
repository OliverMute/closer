const INITIAL_STATE = {
  sections: [
    {
      title: "Vêtements",
      imageUrl: "images/jackets.jpg",
      id: 1,
      linkUrl: "shop/jackets",
    },
    {
      title: "Chaussures",
      imageUrl: "images/sneakers.jpg",
      id: 2,
      linkUrl: "shop/sneakers",
    },
    {
      title: "Sacs",
      imageUrl: "images/cap.jpg",
      id: 3,
      linkUrl: "shop/hats",
    },
    {
      title: "Bijoux",
      imageUrl: "images/bijoux_1.jpg",
      id: 4,
      size: "large",
      linkUrl: "shop/womens",
    },
    {
      title: "Accessoires",
      imageUrl: "images/accessoire_1.jpg",
      id: 5,
      size: "large",
      linkUrl: "shop/womens",
    },

    /* {
      title: "womens",
      imageUrl: "images/women.jpg",
      id: 4,
      size: "large",
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl: "images/men.png",
      id: 5,
      size: "large",
      linkUrl: "shop/mens",
    },*/
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;

/* Is there a reason for us to move this outside of our
 * Directory class component from directory.component.jsx if we're
 * not going to update it or if we don't currently have another component that's
 * going to pull it in ? There is a benefit to it when we are writing testing.
 * Move our state outside of our component and into their own reducers
 * makes it easier to test. */
