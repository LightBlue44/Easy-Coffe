import api from '../../config/api'
import PurchaseInterface from '../../models/interfaces/Purchase'

const path = '/eay-coffee/v1/purchase/customer/'

const returnPurchase = (purchase: string, customerId: string) => api.post<PurchaseInterface>(`${path}/${customerId}`)

.then((response) => response.data)

const returnAllPurchase = (purchase: string, customerId: string) => api.get<PurchaseInterface>(`${path}/${customerId}get-all-open`)
.then((response) => response.data)

export {
    returnPurchase,
    returnAllPurchase
}