// const APIURL = "http://localhost:3000";
// const axios = require("axios");

export const requestsMixin = {
  methods: {
    getCalendar() {
      // return axios.get(`${APIURL}/calendar`);
      return {"data": [
        { title: 'Test Event #1', date: '2021-11-03' },
        { title: 'Test Event #2', date: '2021-11-05' },
        { title: 'Test Event #3', date: '2021-11-05' }
      ]}
    },
    addCalendar(data) {
      console.log(data);
      // return axios.post(`${APIURL}/calendar`, data);
    },
    editCalendar(data) {
      console.log(data);
      // return axios.put(`${APIURL}/calendar/${data.id}`, data);
    },
    deleteCalendar(id) {
      console.log(id);
      // return axios.delete(`${APIURL}/calendar/${id}`);
    }
  }
};