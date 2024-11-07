// Task 1: Create the Asset Module

// Defining and exporting array of assets
export const assets = [
    { id: 777, name: 'Nvidia', type: 'stock', price: 145, quantity: 30 },
    { id: 2009, name: 'U.S Treasury Bond', type: 'bond', price: 200, quantity: 45 },
    { id: 33647, name: 'West Meadows', type: 'real-estate', price: 3000, quantity: 2 },
    { id: 33647, name: 'AMC', type: 'stock', price: 4, quantity: 975 },
    { id: 1998, name: 'Charizard Card', type: 'collectible', price: 220, quantity: 13 }
]

// Exporting function to return asset details based on provided id
export function getAssetbyId(id) {
    return assets.find(assets => assets.id === id)
}