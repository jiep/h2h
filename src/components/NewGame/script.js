import firebase from '@/services/firebase';

export default {
  data () {
    return {
      player1: {
        result: 0,
        name: '',
      },
      player2: {
        result: 0,
        name: '',
      },
    };
  },
  methods: {
    newGame () {
      this.$root.$firebaseRefs.h2h.push(
        {
          player1: this.player1,
          player2: this.player2,
          created_at: new Date().getTime(),
        })
        .then(() => {
          this.$toast.open({
            message: 'Game added correctly!',
            type: 'is-success',
            position: 'is-bottom',
          });
          this.$router.push('/');
        })
        .catch(() =>{
          this.$toast.open({
            message: 'It was an error. Please try again',
            type: 'is-danger',
            position: 'is-bottom',
          });
        });
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
