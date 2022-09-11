import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://opensheet.elk.sh/1zUOKPNtIS0nihTcybVmPfTNAoCq3wFiV-TkfgeuLhSc', //google sheet data
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
  getData() {
    return apiClient.get('/sort_data')
  }
}