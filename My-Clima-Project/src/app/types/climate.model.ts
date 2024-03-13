export interface Climate {
    _id: string;
    owner: string;
    brand: string;
    model: string;
    type: string;
    coolingCapacity: number;
    heatingCapacity: number;
    energyEfficiencyRating: string;
    price: number;
    description: string;
    imageUrl: string;
    createdAt: Date;
}
