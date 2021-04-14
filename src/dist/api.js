import axios from 'axios';
export default axios.create({
// baseURL: 'http://52.86.219.102:8088/api/',
baseURL: 'http://52.86.219.102:8094/grand/public/api/',
headers:{
'Content-Type':'application/json'
}
});