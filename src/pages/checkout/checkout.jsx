import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item';

import './checkout.scss';
import StripeCheckoutButton from '../../components/stripe-button/stripe';

const CheckoutPage = ({ cartItems, total }) => {
	return cartItems.length ? (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<div className="total">TOTAL: ${total}</div>
			<div className="test-warning">
				*Please use the following test card for credit card payments*
				<br />
				4242 4242 4242 4242 <br /> Exp: Any 3 digits <br /> CVV: Any future date
			</div>
			<StripeCheckoutButton price={total} />
		</div>
	) : (
		<div className="checkout-page">
			<span className="empty-message">You cart is empty</span>
		</div>
	);
};

const mapsStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapsStateToProps)(CheckoutPage);
