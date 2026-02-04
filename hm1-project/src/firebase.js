import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
	apiKey: 'AIzaSyCGgG-nfGc7UknWjRTg1YCNXXUK0tUyS3Y',
	authDomain: 'todos-creating-and-search.firebaseapp.com',
	projectId: 'todos-creating-and-search',
	storageBucket: 'todos-creating-and-search.firebasestorage.app',
	messagingSenderId: '302305844347',
	appId: '1:302305844347:web:855762b8078600946596de',
	databaseURL: 'https://todos-creating-and-search-default-rtdb.europe-west1.firebasedatabase.app/'
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)
