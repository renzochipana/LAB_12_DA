const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/api_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
    console.log('Conexión con MongoDB exitosa');
});

module.exports = mongoose;
