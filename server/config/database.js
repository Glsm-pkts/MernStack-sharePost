const mongoose = require('mongoose');

const database = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB bağlantısı başarılı!');
    })
    .catch((error) => {
        console.log('MongoDB bağlantı hatası:', error);
    });

}
    


module.exports = database;