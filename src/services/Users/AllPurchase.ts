import api from '../../config/api'
import UserInterface from '../../models/interfaces/User'

const pathAllPurchase = '/eay-coffee/v1/purchase/customer/{customerId}/get-all-open'

const returnAllPurchase = (allPurchase: string) => api.post<UserInterface>(`${pathAllPurchase}/purchase/${allPurchase}`)
  .then((response) => response.data)

export {
    returnAllPurchase
}