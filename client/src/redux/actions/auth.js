import axios from "axios";

// Kullanıcı Kayıt
export const registerAction = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:3000/register", authData);
    dispatch({ type: "REGISTER", payload: data });

    // Başarılı işlem sonrası yönlendirme
    window.location = "/";
  } catch (error) {
    if (error.response) {
      console.error("Hata:", error.response.data.message);
      alert(error.response.data.message); // Kullanıcıya hata mesajını göster
    } else {
      console.error("Sunucuya bağlanılamadı:", error.message);
    }
  }
};

// Kullanıcı Girişi
export const loginAction = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:3000/login", authData);
    dispatch({ type: "LOGIN", payload: data });

    // Başarılı giriş sonrası yönlendirme
    window.location = "/";
  } catch (error) {
    if (error.response) {
      console.error("Hata:", error.response.data.message);
      alert(error.response.data.message);
    } else {
      console.error("Sunucuya bağlanılamadı:", error.message);
    }
  }
};
