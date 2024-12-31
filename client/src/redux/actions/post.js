import axios from "axios";


export const getPostsAction = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:3000/getPosts"); 
    dispatch({ type: "GET_POSTS", payload: data });
  } catch (error) {
    if (error.response) {
      console.error("Hata:", error.response.data.message);
      alert(error.response.data.message);
    } else {
      console.error("Sunucuya bağlanılamadı:", error.message);
    }
  }
};


export const createPostAction = (postData) => async (dispatch) => {
    try {
      const { data } = await axios.post("http://localhost:3000/createPost", postData);
      dispatch({ type: "CREATE_POST", payload: data });
    } catch (error) {
      if (error.response) {
        console.error("Hata:", error.response.data.message);
        alert(error.response.data.message);
      } else {
        console.error("Sunucuya bağlanılamadı:", error.message);
      }
    }
  };
  
  export const updatePostAction = (postData, id) => async (dispatch) => {
    console.log('Güncelleme için gelen id:', id);
    console.log('Güncelleme için gönderilen veri:', postData);
  
    try {
  const { data } = await axios.patch(`http://localhost:3000/updatePost/${id}`, postData);
      dispatch({ type: 'UPDATE_POST', payload: data });
    } catch (error) {
      if (error.response) {
        console.error('Hata:', error.response.data.message);
        alert(error.response.data.message);
      } else {
        console.error('Sunucuya bağlanılamadı:', error.message);
      }
    }
  };
  


  export const deletePostAction = (id) => async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3000/deletePost/${id}`);
      dispatch({ type: "DELETE_POST", payload: id });
    } catch (error) {
      if (error.response) {
        console.error("Hata:", error.response.data.message); // Sunucudan gelen hata
        alert(error.response.data.message);
      } else {
        console.error("Sunucuya bağlanılamadı:", error.message); // Sunucu bağlantı hatası
      }
    }
  };
  