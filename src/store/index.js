import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logged: false,
    usuarios: [{ nombre: 'Admin', pin: '0000' }],
    employees: [],
    employee: {
      _id: null,
      dni: null,
      passport: null,
      name: null,
      active: null,
      schedule: []
    }
  },
  mutations: {
    setLogin(state) {
      state.logged = true;
    },
    setLogout(state) {
      state.logged = false;
    },
    setEmployees(state, payload) {
      state.employees = payload;
    },
    setEmployee(state, payload) {
      state.employee._id = payload._id;
      state.employee.dni = payload.dni;
      state.employee.password = payload.password;
      state.employee.name = payload.name;
      state.employee.active = payload.active;
      state.employee.schedule = payload.schedule;
    },
    resetEmployee(state) {
      state.employee._id = null;
      state.employee.dni = null;
      state.employee.password = null;
      state.employee.name = null;
      state.employee.active = null;
      state.employee.schedule = [];
    }
  },
  actions: {
    async getEmployees({ commit }) {
      try {
        const { data } = await Vue.axios({
          method: 'get',
          url: 'worktime/employees'
        });
        commit('setEmployees', data);
      } catch (e) {
        console.log('todosError', e.message);
        console.log(e.response.data);
        console.log(e.response.status);
        console.log(e.response.headers);
      } finally {
        console.log('La petición para obtener los datos ha finalizado');
      }
    },
    async getActiveServer() {
      try {
        const { data } = await Vue.axios({
          method: 'get',
          url: 'worktime/status'
        });
        return data[0];
      } catch (e) {
        console.log('todosError', e.message);
        console.log(e.response.data);
        console.log(e.response.status);
        console.log(e.response.headers);
      } finally {
        console.log('La petición para obtener los datos ha finalizado');
      }
    },
    async getEmployee({ commit }, payload) {
      try {
        const { data } = await Vue.axios({
          method: 'get',
          url: `worktime/employee/${payload}`
        });
        commit('setEmployee', data);
        return data;
      } catch (e) {
        console.log('todosError', e.message);
        console.log(e.response.data);
        console.log(e.response.status);
        console.log(e.response.headers);
      } finally {
        console.log('La petición para obtener los datos ha finalizado');
      }
    },
    async postTimes(context, payload) {
      try {
        await Vue.axios({
          method: 'post',
          url: 'worktime/time',
          data: payload
        });
      } catch (e) {
        console.log('todosError', e.message);
        console.log(e.response.data);
        console.log(e.response.status);
        console.log(e.response.headers);
      } finally {
        console.log('La petición para obtener los datos ha finalizado');
      }
    },
    async getTimeDay(context, payload) {
      try {
        await Vue.axios({
          method: 'get',
          url: `worktime/timeday/${payload.employee_id}/${payload.date}`
        });
        return true;
      } catch (e) {
        console.log('todosError', e.message);
        console.log(e.response.data);
        console.log(e.response.status);
        console.log(e.response.headers);
      } finally {
        console.log('La petición para obtener los datos ha finalizado');
      }
    }
  },
  modules: {}
});
