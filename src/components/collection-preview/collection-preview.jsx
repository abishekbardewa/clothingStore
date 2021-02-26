import React from 'react';
import CollectionItem from '../collection-item/collection-item';
import './collection-preview.scss';
const collectionPreview = (props) => {
	return (
		<div className="collection-preview">
			<div className="title">{props.title.toUpperCase()}</div>
			<div className="preview">
				{props.items
					.filter((item, idx) => idx < 4)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};

export default collectionPreview;
