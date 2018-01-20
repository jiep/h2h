import router from '@/router';
import firebase from './firebase';

export default function googleAuth() {
  const provider = new firebase.firebase.auth.GoogleAuthProvider();
  return firebase.firebase.auth().signInWithPopup(provider).then(() => {
    router.push('/new');
  }, (error) => {
    console.log('Unable to auth', error);
  });
}
