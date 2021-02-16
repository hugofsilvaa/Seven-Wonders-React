const sevenWonders = [
    {
        id: 1,
        name: "Great Wall of China",
        location: "China",
        year: "700 BC",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/The_Great_Wall_of_China_at_Jinshanling.jpg"
    },
    {
        id: 2,
        name: "Petra",
        location: "Ma'an, Jordan",
        year: "312 BC",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/The_Monastery%2C_Petra%2C_Jordan8.jpg"
    },
    {
        id: 3,
        name: "Colosseum",
        location: "Rome, Italy",
        year: "80 Ad",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/KOLOSSEUM_-_panoramio.jpg"
    },
    {
        id: 4,
        name: "Chichen Itza",
        location: "Yucatán, Mexico",
        year: "600 AD",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Chichen-Itza-Castillo-Seen-From-East.JPG"
    },
    {
        id: 5,
        name: "Machu Picchu",
        location: "Cuzco Region, Peru",
        year: "1450 AD",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg"
    },
    {
        id: 6,
        name: "Taj Mahal",
        location: "Agra, Uttar Pradesh, India",
        year: "1643 AD",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Taj_Mahal_in_March_2004.jpg"
    },
    {
        id: 7,
        name: "Christ the Redeemer",
        location: "Rio de Janeiro, Brazil",
        year: "1932 AD",
        image: "data:image/jpeg;base64,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"
    }
]

export default sevenWonders