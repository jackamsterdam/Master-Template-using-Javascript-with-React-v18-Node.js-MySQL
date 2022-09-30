// //!Not sure if you make constants this way: 
// // Products State - products data needed in the application level:
// export class ProductsState {
//      products = [];
// }

// // Products Action Type - any action which can be done on the above products state:

//     const FETCH_PRODUCTS = "FETCH_PRODUCTS"
//     const ADD_PRODUCT = "ADD_PRODUCT"
//     const UPDATE_PRODUCT = "UPDATE_PRODUCT"
//     const DELETE_PRODUCT = "DELETE_PRODUCT"


// // Products Action - any single object sent to the store during "dispatch": none only in typescirpt

// // Products Action Creators - function for creating ProductsAction objects. each function creates one Action object:
// export function fetchProductsAction(products) {
//     return { type: FETCH_PRODUCTS, payload: products };
// }
// export function addProductAction(product) {
//     return { type: ADD_PRODUCT, payload: product };
// }
// export function updateProductAction(product) {
//     return { type: UPDATE_PRODUCT, payload: product };
// }
// export function deleteProductAction(id) {
//     return { type: DELETE_PRODUCT, payload: id };
// }

// // Products Reducer - the main function performing any action on products state:
// // the new ProductsState() is a default value for the first time only
// export function productsReducer(currentState = new ProductsState(), action) {

//     // Must duplicate the current state and not touch the given current state: 
//     const newState = { ...currentState };

//     switch (action.type) {

//         case FETCH_PRODUCTS:
//             newState.products = action.payload; // Here the payload is the products list.
//             break;

//         case ADD_PRODUCT:
//             newState.products.push(action.payload); // Here the payload is a single object to add.
//             break;

//         case UPDATE_PRODUCT:
//             const indexToUpdate = newState.products.findIndex(p => p.id === action.payload.id); // Here the payload is a single object to update.
//             if (indexToUpdate >= 0) {
//                 newState.products[indexToUpdate] = action.payload;
//             }
//             break;

//         case DELETE_PRODUCT:
//             const indexToDelete = newState.products.findIndex(p => p.id === action.payload); // Here the payload is the id to delete.
//             if (indexToDelete >= 0) {
//                 newState.products.splice(indexToDelete, 1);
//             }
//             break;
//     }

//     return newState;
// }
