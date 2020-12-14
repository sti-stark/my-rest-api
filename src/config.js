import {config} from 'dotenv'
config();

export default {
    mongodbURL: process.env.MONGODB_URI || 'monodb://localhost/tasksdb',
}