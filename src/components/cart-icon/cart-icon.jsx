import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg.svg';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-icon.scss';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">{itemCount}</span>
	</div>
);
const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapsStateToProps = (state) => ({
	itemCount: selectCartItemsCount(state),
});
export default connect(mapsStateToProps, mapDispatchToProps)(CartIcon);
