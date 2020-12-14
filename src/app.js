/* -------SERVER SETTINGS--------- */
import express from 'express'
import TasksRoutes from './routes/tasks.routes'
import morgan from 'morgan'
import cors from 'cors'

const app = express();


/* -----------------PORT/SETTINGS------------------------- */
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'))//llamo al modulo de morgan para mostrar logs por terminal
app.use(express.json());// llamo al modulo de express pra poder leer json
app.use(express.urlencoded({extended: false})); // permite leer peticiones que legan desde formulariohtml
app.use(cors());//Intercambio de recursos de origen cruzado 


/* --------------ROUTES------------- */

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my application' })
});

app.use('/api/tasks', TasksRoutes)

export default app;