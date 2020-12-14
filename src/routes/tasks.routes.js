/* ---------URL DEFINITION---------------- */
import { Router } from 'express' //importo la función de expres routers

import * as taskCtrl from '../controllers/task.controller'
const router = Router()

/* --------------ROUTES---------------- */
router.post('/', taskCtrl.createTask);// utilizo las funciones importandolas desde task.controller

router.get('/', taskCtrl.findAllTask );

router.get('/done', taskCtrl.findAllDoneTask);

router.get('/pending', taskCtrl.findAllPendingTask);

router.get('/:id', taskCtrl.findOneTask)

router.delete('/:id', taskCtrl.deleteTask);

router.put('/:id',taskCtrl.updateTask);


export default router;