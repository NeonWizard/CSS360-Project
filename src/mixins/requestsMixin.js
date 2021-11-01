const APIURL = "http://localhost:3000";
const axios = require("axios");

export const requestsMixin = {
  methods: {
    getCalendar() {
      // return axios.get(`${APIURL}/calendar`);
      return [
        { title: 'event 1', date: '2021-11-03' },
        { title: 'event 2', date: '2021-11-05' },
      ]
    },
    addCalendar(data) {
      return axios.post(`${APIURL}/calendar`, data);
    },
    editCalendar(data) {
      return axios.put(`${APIURL}/calendar/${data.id}`, data);
    },
    deleteCalendar(id) {
      return axios.delete(`${APIURL}/calendar/${id}`);
    }
  }
};