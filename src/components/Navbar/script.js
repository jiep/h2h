import firebase from '@/services/firebase';

export default {
  data() {
    return {
      isLogged: false,
    };
  },
  methods: {
    logOut() {
      firebase.firebase.auth().signOut()
    },
  },
};
