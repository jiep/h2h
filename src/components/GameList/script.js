import firebase from '@/services/firebase';

export default {
  computed: {
    games() {
      return this.$root.h2h.reverse();
    }
  },
  created() {
    firebase.firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.push('/login');
      }
    });
  },
};
