class Transport {
    constructor(type, price, brand, image) {
        this.type = type;
        this.price = price;
        this.brand = brand;
        this.image = image;
    }
    getInfo() {
        return this.type + " " + this.brand;
    }
    getPrice() {
        return "Price: " + this.price.toLocaleString("en-US", {style:"currency", currency:"USD"});
    }
    getImage() {
        return this.image;
    }
};
class Car extends Transport {
    constructor(type, price, brand, image, doors) {
        super(type, price, brand, image);
        this.doors = doors;
    }
    getDoorsCount() {
        return "Number of doors: " + this.doors;
    }
}
class Bike extends Transport {
    constructor(type, price, brand, image, maxSpeed) {
        super(type, price, brand, image);
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed() {
        return "Max speed: " + this.maxSpeed +" km/h";

    }
}

// Массив объектов c  инфоррмацией о траспортных средствах
const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson CVO Street Glide NEW, 2024 "Dark Platinum"',
        maxSpeed: 210,
        price: 67000,
        image: 'https://static.insales-cdn.com/images/products/1/6368/791992544/1.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

//экземпляры Car и Bike  на основе  массива data
const productCar1 = new Car(
    data[0].type,
    data[0].price,
    data[0].brand,
    data[0].image,
    data[0].doors
);
const productCar2 = new Car(
    data[1].type,
    data[1].price,
    data[1].brand,
    data[1].image,
    data[1].doors
);
const productBike1 = new Bike(
    data[2].type,
    data[2].price,
    data[2].brand,
    data[2].image,
    data[2].maxSpeed
);
const productBike2 = new Bike(
    data[3].type,
    data[3].price,
    data[3].brand,
    data[3].image,
    data[3].maxSpeed
);
// Массив,который объединяет все созданные объекты Car и Bike
const productCards = [
    productCar1,
    productCar2,
    productBike1,
    productBike2
];

//создание элеметов для отображения информации о продукте 
for (let productCard of productCards) {
    const catalogue = document.getElementById('catalogue');

    const productInfo = document.createElement('h2');
    productInfo.textContent = productCard.getInfo();

    const productPrice = document.createElement('h2');
    productPrice.textContent = productCard.getPrice();

    const productImage = document.createElement('img');
    productImage.src = productCard.getImage();

    catalogue.append(
        productImage,
        productInfo,
        productPrice
    );
}