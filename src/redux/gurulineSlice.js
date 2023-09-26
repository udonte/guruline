import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const gurulineSlice = createSlice({
  name: "guruline",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.productData.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex !== -1) {
        state.productData = state.productData.map((item, index) =>
          index === itemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        state.productData.push(action.payload);
      }
    },

    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },

    resetCart: (state) => {
      state.productData = [];
    },

    incrementQuantity: (state, action) => {
      const itemIndex = state.productData.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex !== -1) {
        state.productData = state.productData.map((item, index) =>
          index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    },

    decrementQuantity: (state, action) => {
      const itemIndex = state.productData.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex !== -1) {
        if (state.productData[itemIndex].quantity > 1) {
          state.productData = state.productData.map((item, index) =>
            index === itemIndex
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        }
      }
    },
  },
});

export const {
  addToCart,
  deleteItem,
  resetCart,
  incrementQuantity,
  decrementQuantity,
} = gurulineSlice.actions;

export default gurulineSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   productData: [],
//   userInfo: null,
// };

// export const gurulineSlice = createSlice({
//   name: "guruline",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const item = state.productData.find(
//         (item) => item._id === action.payload._id
//       );
//       if (item) {
//         item.quantity += action.payload.quantity;
//       } else {
//         state.productData.push(action.payload);
//       }
//     },

//     deleteItem: (state, action) => {
//       state.productData = state.productData.filter(
//         (item) => item._id !== action.payload
//       );
//     },

//     resetCart: (state) => {
//       state.productData = [];
//     },

//     incrementQuantity: (state, action) => {
//       const item = state.productData.find(
//         (item) => item._id === action.payload._id
//       );
//       if (item) {
//         item.quantity++;
//       }
//     },
//     decrementQuantity: (state, action) => {
//       const item = state.productData.find(
//         (item) => item._id === action.payload._id
//       );
//       if (item.quantity === 1) {
//         item.quantity = 1;
//       } else {
//         item.quantity--;
//       }
//     },
//   },
// });

// export const {
//   addToCart,
//   deleteItem,
//   resetCart,
//   incrementQuantity,
//   decrementQuantity,
// } = gurulineSlice.actions;
// export default gurulineSlice.reducer;
