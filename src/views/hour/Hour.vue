<template>
  <section class="hero is-info is-fullheight">
    <div class="container">
      <div class="columns is-centered">
        <div class="column">
          <h1>HOLA</h1>
          <p># % $ ?</p>
          <h2>{{ employee.name }}</h2>
          <p>PULSA PARA REGISTRAR</p>
          <p>EL CONTROL HORARIO</p>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column">
          <button
            class="button is-large"
            @click="goCommit"
            :disabled="disabled"
          >
            <span class="icon is-medium">
              <i class="fas fa-clock"></i>
            </span>
            <span>GRABAR</span>
          </button>
        </div>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column">
        <button class="button is-large is-danger" @click="goCancel">
          <span class="icon is-medium">
            <i class="fas fa-external-link-square-alt"></i>
          </span>
          <span>CANCELAR</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import dayjs from 'dayjs';

export default {
  name: 'Hour',
  data() {
    return {
      disabled: false,
      time: {
        employee_id: null,
        date: null,
        name: null,
        dni: null,
        work_shift: null,
        start_time: null,
        end_time: null,
        hours: null,
        max: null,
        active: null
      },
      times: []
    };
  },
  computed: {
    ...mapState(['employee'])
  },
  methods: {
    ...mapMutations(['setLogout']),
    ...mapActions(['postTimes', 'getTimeDay']),
    goCancel() {
      this.setLogout();
      this.$router.go(-1);
    },
    goCommit() {
      this.getTimeDay({
        employee_id: this.employee._id,
        date: dayjs().format('YYYY-MM-DD')
      }).then(result => {
        if (result) {
          this.disabled = true;
          let x = setInterval(() => {
            clearInterval(x);
            this.setLogout();
            this.$router.go(-1);
          }, 3000);
        } else {
          this.loadTime(() => {
            this.postTimes(this.times);
            this.disabled = true;
            let x = setInterval(() => {
              clearInterval(x);
              this.setLogout();
              this.$router.go(-1);
            }, 3000);
          });
        }
      });
    },
    loadTime(callback) {
      let day = dayjs().format('YYYY-MM-DD');

      let count = 1;

      function work_shift_base() {
        return {
          employee_id: null,
          date: null,
          name: null,
          dni: null,
          work_shift: null,
          start_time: null,
          end_time: null,
          hours: null,
          max: null
        };
      }

      this.employee.schedule.forEach(element => {
        let work_shift = new work_shift_base();

        let random_start = Math.floor(Math.random() * element.random_start);
        let random_end = Math.floor(Math.random() * element.random_end);

        let start_time = dayjs(
          day + ' ' + element.start_time,
          'YYYY-MM-DD HH:mm'
        ).add(-random_start, 'minute');

        let end_time = dayjs(
          day + ' ' + element.end_time,
          'YYYY-MM-DD HH:mm'
        ).add(random_end, 'minute');

        work_shift.work_shift = count;
        work_shift.max = element.max;
        work_shift.start_time = start_time.format('YYYY-MM-DD HH:mm');
        work_shift.end_time = end_time.format('YYYY-MM-DD HH:mm');
        work_shift.hours = end_time.diff(start_time, 'minutes');

        work_shift.employee_id = this.employee._id;
        work_shift.date = day;
        work_shift.name = this.employee.name;
        work_shift.dni = this.employee.dni;

        if (element.active === true) {
          this.times.push(work_shift);
          count++;
        }
      });
      callback();
    }
  }
};
</script>
