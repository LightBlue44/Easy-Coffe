import api from '../../config/api'
import UserInterface from '../../models/interfaces/User'
import MyAccount from '../../pages/My account'

const path = '/easy-coffee/v1/customer'
const pathPurchase = '/eay-coffee/v1/purchase/customer/{customerId}'
const pathAllPurchase = '/eay-coffee/v1/purchase/customer/{customerId}/get-all-open'

const getByCpf = (cpf: string) => api.get<UserInterface>(`${path}/get-by-cpf/${cpf}`)
  .then((response) => response.data)

const returnPurchase = (purchase: string) => api.post<UserInterface>(`${pathPurchase}/purchase/${purchase}`)
  .then((response) => response.data)

const returnAllPurchase = (allPurchase: string) => api.post<UserInterface>(`${pathAllPurchase}/purchase/${allPurchase}`)
  .then((response) => response.data)

export {
  getByCpf
  returnPurchase
  returnAllPurchase
}