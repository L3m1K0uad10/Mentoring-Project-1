import MangoImage from "./assets/Mango.png";
import StrawBerryImage from "./assets/strawberry.png";
import GuavaImage from "./assets/guava.png";
import OrangeImage from "./assets/orange.png";
import BananaImage from "./assets/banana.png";
import AppleImage from "./assets/apple.png";


const FruitData = [
    {
        id : 1,
        name : "Mango",
        price : 1.92,
        vitamins : [ "vitamin A", "vitamin B6", "vitamin C", "vitamin K", "vitamin E", "Folate"],
        image : MangoImage
    },
    {
        id : 2,
        name : "Strawberry",
        price : 5.04,
        vitamins : [ "vitamin A", "vitamin B9", "vitamin C"],
        image : StrawBerryImage
    },
    {
        id : 3,
        name : "Guava",
        price : 1.71,
        vitamins : [ "vitamin A", "B vitamins", "vitamin C", "vitamin E"],
        image : GuavaImage
    },
    {
        id : 4,
        name : "Orange",
        price : 0.85,
        vitamins : [ "vitamin A", "Thiamine", "vitamin B6", "vitamin C", "Folate"],
        image : OrangeImage
    },
    {
        id : 5,
        name : "Banana",
        price : 0.31,
        vitamins : [ "Folate A", "vitamin B6", "vitamin C", "Potassium A", "Riboflavin"],
        image : BananaImage
    },
    {
        id : 6,
        name : "Apple",
        price : 0.32,
        vitamins : [ "vitamin C", "vitamin E", "vitamin K", "vitamin A", "Folate"],
        image : AppleImage
    }
]


export default FruitData;