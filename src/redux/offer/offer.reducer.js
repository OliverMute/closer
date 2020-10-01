const INITIAL_STATE = {
  offers: [
    {
      title: "Offer 1",
      imageUrl: "images/offer_1.jpg",
      id: 1,
      linkUrl: "shop/offer_1",
    },
    {
      title: "Offer 10",
      imageUrl: "images/offer_10.jpg",
      id: 2,
      linkUrl: "shop/offer_10",
    },
    {
      title: "Offer 3",
      imageUrl: "images/offer_3.jpg",
      id: 3,
      linkUrl: "shop/offer_3",
    },
  ],
};

const offerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default offerReducer;

/* Is there a reason for us to move this outside of our
 * Directory class component from directory.component.jsx if we're
 * not going to update it or if we don't currently have another component that's
 * going to pull it in ? There is a benefit to it when we are writing testing.
 * Move our state outside of our component and into their own reducers
 * makes it easier to test. */
