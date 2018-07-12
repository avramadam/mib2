import axios from "axios";

const api = {
 
  // Retrieves saved articles from the db
  getMessages: function(email) {
    return axios.get("/sendbottle/getmessages/" + email);
  },

  // Deletes a message from the db
  deleteMessage: function(id, email) {
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
 
};

export default api;
