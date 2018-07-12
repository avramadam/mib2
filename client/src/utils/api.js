import axios from "axios";

const api = {

  // Retrieves saved articles from the db
  getMessages: function (email) {
    return axios.get("/sendbottle/getmessages/" + email);
  },

  getKeptMessages: function (email) {
    return axios.get("/sendbottle/getkeptmessages/" + email);
  },

  // Deletes a message from the db
  deleteMessage: function (id, email) {
    /*const params = {
      email: email,
      id: id
    };*/
    return axios.delete(`/sendbottle/getmessages`, {
      params: {
        email: email,
        id: id
      }
    });
  },

  throwBack: function (id, email) {


    return axios.post(`/throwback/${id}/users/${email}`);

  },
  keepIt: function (id, email) {


    return axios.post(`/keep_it/${id}/users/${email}`);

  },

  reportIt: function (id, email) {
    console.log(id);
    console.log(email);



    return axios.post(`/reportit/${id}/users/${email}`);

  }

};

export default api;
