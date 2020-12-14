/**-----------MODEL------------- */
import Task from '../models/Task'

export const findAllTask = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.json(tasks)
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something has occurred searching the tasks'
        })
    }
}

export const createTask = async (req, res) => {
    if (!req.body.title) {  //primero compruebo si existe en la base de datos
        return res.status(400).send({ message: 'Content cannot be empty' });
    }

    try {
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            done: req.body.done ? req.body.done : false
        });
        const taskSaved = await newTask.save();
        console.log(newTask);
        res.json(taskSaved);// le envio al cliente los datos guradados en la base de datos
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong creating a task'
        });
    }

}

export const findOneTask = async (req, res) => {
    console.log(req.params.id);
    const { id } = req.params
    try {
        const task = await Task.findById(id);

        if (!task)
            return res
                .status(404)
                .json({ message: `Task with id ${id} does not exists` })

        res.json(task);
    } catch (error) {
        res.status(500).json({
            message: error.message || `Error returning the Task with the id:${id} `
        });
    }
}

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        await Task.findByIdAndDelete(id)
        res.json({
            message: 'Task has been deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: `Cannot delete task with id: ${id}`,
        })
    }
}

export const findAllDoneTask = async (req, res) => {
    const tasks = await Task.find({ done: true });
    res.json(tasks);
}

export const findAllPendingTask = async (req, res) => {
    const tasks = await Task.find({ done: false });
    res.json(tasks);
}

export const updateTask = async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        message: 'Task has been updated Successfully'
    });
}