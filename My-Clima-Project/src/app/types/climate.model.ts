export interface Climate {
    _id: string;
    owner: string;
    brand: string;
    model: string;
    type: string;
    coolingCapacity: string;
    heatingCapacity: string;
    energyEfficiencyRating: string;
    price: string;
    description: string;
    imageUrl: string;
    createdAt: Date;
    likes: string[];
}
