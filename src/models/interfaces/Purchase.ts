import UserInterface from "./User"

export default interface PurchaseInterface {
    id: string
    customer: UserInterface
    quantity: number
    value: number
    statusDescription: string
    purchaseDate:	string
    createdAt:	string
    updatedAt:	string
}