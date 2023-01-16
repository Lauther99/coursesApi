const express = require('express');
const app = express();
app.use(express.json());
const db = require('./utils/db');
const initModels = require('./models/init');
const userRoutes = require('./routes/users.routes');
const courseRoutes = require('./routes/courses.routes');
const videoRoutes = require('./routes/videos.routes');
const categoryRoutes = require('./routes/category.routes');

db.authenticate()
    .then(() => console.log('autenticacion exitosa'))
    .catch(error => console.log(error));

initModels();

db.sync({ force: false })
    .then(() => console.log('Base de datos sincronizada'))
    .catch(error => console.log(error));

app.use('/api/v1', userRoutes);
app.use('/api/v1', courseRoutes);
app.use('/api/v1', videoRoutes);
app.use('/api/v1', categoryRoutes);





const PORT = 3000;
app.listen(PORT, () => console.log('listening on port ' + PORT));