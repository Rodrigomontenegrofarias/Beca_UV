import {config} from 'dotenv'
config();

export default {
    port: process.env.PORT || 3000,
    apikey: process.env.API_KEY
}