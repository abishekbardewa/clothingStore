import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAxC7O3OTl0qputiR-PIcACQAPvDLAs5eY',
	authDomain: 'clothingstore-66a36.firebaseapp.com',
	projectId: 'clothingstore-66a36',
	storageBucket: 'clothingstore-66a36.appspot.com',
	messagingSenderId: '907900849326',
	appId: '1:907900849326:web:64778c511fc9f5b9d8b13f',
	measurementId: 'G-9GZDYPWR41',
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) {
		return;
	}
	//Qry inside a firebase to see if it exist or not
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	objectsToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc();
		console.log(newDocRef);
		batch.set(newDocRef, obj);
	});
	return await batch.commit();
};

export const covertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map((doc) => {
		const { title, items } = doc.data();
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		};
	});
	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
