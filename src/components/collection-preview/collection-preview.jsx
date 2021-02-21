import React from 'react';
import CollectionItem from '../collection-item/collection-item';
import './collection-preview.scss';
const collectionPreview = (props) => {
	console.log(props);
	return (
		<div className="collection-preview">
			<div className="title">{props.title.toUpperCase()}</div>
			<div className="preview">
				{props.items
					.filter((item, idx) => idx < 4)
					.map(({ id, ...otherItemProps }) => (
						<CollectionItem key={id} {...otherItemProps} />
					))}
			</div>
		</div>
	);
};

export default collectionPreview;
