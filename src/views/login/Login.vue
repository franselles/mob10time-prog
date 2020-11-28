<template>
  <section class="hero is-info is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form class="box" @submit.prevent="login">
              <div class="field">
                <label for="" class="label">DNI/NIE</label>
                <div class="control has-icons-left">
                  <input
                    v-model="pin"
                    type="password"
                    placeholder="*********"
                    class="input"
                    maxlength="9"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <button class="button is-success" :disabled="disabled">
                  Login
                </button>
              </div>
              <article class="message is-danger" v-if="error">
                <div class="message-header">
                  <p>ERROR</p>
                </div>
                <div class="message-body">DNI / NIE INCORRECTOS</div>
              </article>
              <a href="#" class="float-right">0.1.14</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      pin: null,
      disabled: true,
      error: false,
    };
  },
  mounted() {
    this.getActiveServer().then((result) => {
      if (result.state === 'active') {
        this.disabled = false;
        this.resetEmployee();
      }
    });
  },
  methods: {
    ...mapActions(['getActiveServer', 'getEmployee']),
    ...mapMutations(['setLogin', 'resetEmployee']),
    login() {
      let s = this.pin;
      this.getEmployee(s.toUpperCase())
        .then((result) => {
          if (result.active === true) {
            this.setLogin();
            this.$router.push({ name: 'Hour' });
          } else {
            this.error = true;
          }
        })
        .catch(() => {
          this.error = true;
        });
    },
  },
  computed: {
    ...mapState(['usuarios']),
  },
};
</script>
