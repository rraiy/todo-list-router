
import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from '../../firebase.config'


firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

const db = firebase.firestore();

export const test = () => {
    return db.collection('test3').add({
        user:'123',
        mail:'456'
    })
}

export default db;
