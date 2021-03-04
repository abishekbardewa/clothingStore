// import React from 'react';
// import CollectionItem from '../collection-item/collection-item';
// import './collection-preview.scss';
// const CollectionPreview = (props) => {
// 	return (
// 		<div className="collection-preview">
// 			<div className="title">{props.title.toUpperCase()}</div>
// 			<div className="preview">
// 				{props.items
// 					.filter((item, idx) => idx < 4)
// 					.map((item) => (
// 						<CollectionItem key={item.id} item={item} />
// 					))}
// 			</div>
// 		</div>
// 	);
// };

// export default CollectionPreview;

import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item';

import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './collection-preview.styles';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
	<CollectionPreviewContainer>
		<TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</TitleContainer>
		<PreviewContainer>
			{items
				.filter((item, idx) => idx < 4)
				.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
		</PreviewContainer>
	</CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
