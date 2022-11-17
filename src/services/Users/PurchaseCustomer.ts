import api from '../../config/api'
import UserInterface from '../../models/interfaces/User'

const pathPurchase = '/eay-coffee/v1/purchase/customer/{customerId}'

const returnPurchase = (purchase: string) => api.post<UserInterface>(`${pathPurchase}/purchase/${purchase}`)
  .then((response) => response.data)

export {
    returnPurchase
}