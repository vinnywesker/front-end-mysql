import axios from 'axios'
import { URL_BACKEND } from '../Config/Vars'

const Instance = axios.create({
    baseURL: URL_BACKEND
});

export default Instance;