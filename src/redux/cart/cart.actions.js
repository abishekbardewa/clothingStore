import { CartActionsTypes } from './cart.types';

//Payload is optional and its not needed in this case
//payload: user,
export const toggleCartHidden = () => ({
	type: CartActionsTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
	type: CartActionsTypes.ADD_ITEM,
	payload: item,
});
