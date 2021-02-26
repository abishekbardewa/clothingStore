import { CartActionsTypes } from './cart.types';

export const toggleCartHidden = () => ({
	type: CartActionsTypes.TOGGLE_CART_HIDDEN,
});
//Payload is optional and its not needed in this case
//payload: user,
