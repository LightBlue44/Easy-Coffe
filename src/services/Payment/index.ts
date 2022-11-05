import api from '../../config/api'
import PurchaseInterface from '../../models/interfaces/Purchase'

import { path } from '../Purchase'

const payment = (purchase: string, customerId: string) => api.post<PurchaseInterface>(`${path}/${customerId}`, purchase)
.then((response) => response.data)

export {
    payment
}