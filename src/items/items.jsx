import { v4 as uuidv4 } from 'uuid';

import Blog1 from "../img/bg-card.jpg";
import Blog2 from "../img/bg-card2.jpg";

import CelebImg1 from "../img/celeb/celeb111.jpg";
import CelebImg2 from "../img/celeb/celeb2.jpg";
import CelebImg3 from "../img/celeb/celeb3.jpg";
import CelebImg4 from "../img/celeb/celeb4.jpg";
import CelebImg5 from "../img/celeb/celeb5.jpg";
import CelebImg6 from "../img/celeb/celeb6.jpg";
import CelebImg7 from "../img/celeb/celeb7.jpg";

import Tale from "../img/tale.png";
import Ice from "../img/ice.png";
import Beige from "../img/beige.png";
import Mint from "../img/mint.png";


import Bonsai from "../img/bonsai.png";
import Cactus from "../img/cactus.png";
import Creepers from "../img/creepers.png";
import Seeds from "../img/seeds.png";
import Gifting from "../img/gifting.png";
import Succulents from "../img/succulents.png";


import Adenium from "../img/adenium.png";
import Ficus from "../img/ficus.png";
import Rhoeo from "../img/rhoeo.png";
import Ctenanthe from "../img/ctenanthe.png";


import PlantsImg from "../img/plants.jpg";
import FlowerImg from "../img/flower.jpg";
import IndoorImg from "../img/indoor.jpg";

import Jade from "../img/jade.jpg";
import Syngorium from "../img/syngorium.jpg";
import CactusP from "../img/CactusP.jpg";
import Chloro from "../img/Chlorop.jpg";
import Aloe from "../img/aloe.jpg";
import Areca from "../img/areca.jpg";
import Sanse from "../img/sanse.jpg";

const blogItems = [
    {
        img: Blog1, title: (
            <>
                8 Best  <br />
                Low Maintenance Plants  <br /> For a Busy Home
            </>
        ), alt: "8 Best Low Maintenance Plants For a Busy Home"
    },
    {
        img: Blog2, title: (
            <>
                Air Purifying Plants <br /> You Should Take Home <br /> Today
            </>
        ), alt: "Air Purifying Plants You Should Take Home Today"
    }
]

const CelebItems = [
    { img: CelebImg1, title: 'Celeb 1', alt: 'Celeb 1', id: 1 },
    { img: CelebImg2, title: 'Celeb 2', alt: 'Celeb 2', id: 2 },
    { img: CelebImg3, title: 'Celeb 3', alt: 'Celeb 3', id: 3 },
    { img: CelebImg4, title: 'Celeb 4', alt: 'Celeb 4', id: 4 },
    { img: CelebImg5, title: 'Celeb 5', alt: 'Celeb 5', id: 5 },
    { img: CelebImg6, title: 'Celeb 6', alt: 'Celeb 6', id: 6 },
    { img: CelebImg7, title: 'Celeb 7', alt: 'Celeb 7', id: 7 }
]

const plantersItems = [
    { img: Tale, title: "Tale Pot", alt: "Tale Pot", price: 350, newPrice: 450, discount: 25, id: 8 },
    { img: Ice, title: "Ice Cream Pot", alt: "Ice Cream Pot", price: 350, newPrice: 450, discount: 25, id: 9 },
    { img: Beige, title: "Beige Fracture", alt: "Beige Fracture", price: 350, newPrice: 450, discount: 2, id: 10 },
    { img: Mint, title: "Mint Fusione", alt: "Mint Fusion", price: 350, newPrice: 450, discount: 2, id: 11 }
]

const plantItems = [
    { img: Bonsai, alt: "Bonsai", title: "BONSAI", id: 12 },
    { img: Cactus, alt: "Cactus", title: "CACTUS", id: 13 },
    { img: Creepers, alt: "Creepers", title: "CREEPERS", id: 14 },
    { img: Seeds, alt: "Seeds", title: "SEEDS", id: 15 },
    { img: Gifting, alt: "Gifting", title: "GIFTING", id: 16 },
    { img: Succulents, alt: "Succulents", title: "SUCCULENTS", id: 17 },
];

const saleItems = [
    { img: Adenium, title: "Adenium Plant", alt: "Adenium Plant", price: 350, newPrice: 450, discount: 25, id: 18 },
    { img: Ficus, title: "Ficus Twilight", alt: "Ficus Twilight", price: 350, newPrice: 450, discount: 25, id: 19 },
    { img: Rhoeo, title: "Rhoeo Plant", alt: "Rhoeo Plant", price: 350, newPrice: 450, discount: 25, id: 20 },
    { img: Ctenanthe, title: "Ctenanthe burle", alt: "Ctenanthe burle", price: 350, newPrice: 450, discount: 25, id: 21 }
]

const sellingItems = [
    { img: PlantsImg, alt: "Indoor Plants", title: "Indoor  Plants", id: 22 },
    { img: IndoorImg, alt: "Air Purifying Plants", title: "Air Purifying Plants,", id: 23 },
    { img: FlowerImg, alt: "FloweringPlants", title: "Flowering  Plants", id: 24 },
];

const trendingItems = [
    { img: Jade, alt: "Jade Terrarium", title: "Jade Terrarium", price: 350, id: 25 },
    { img: Ficus, alt: "Ficus Benjamina", title: "Ficus Benjamina", price: 350, id: 26 },
    { img: Syngorium, alt: "Syngorium Plant", title: "Syngorium Plant", price: 350, id: 27 },
    { img: CactusP, alt: "Cactus Peruvianus", title: "Cactus Peruvianus", price: 350, id: 28 },
    { img: Chloro, alt: "Chlorophytum Lemon", title: "Chlorophytum Lemon", price: 350, id: 29 },
    { img: Aloe, alt: "Aloe Rauhii", title: "Aloe Rauhii", price: 350, id: 30 },
    { img: Areca, alt: "Areca Palm", title: "Areca Palm", price: 350, id: 31 },
    { img: Sanse, alt: "Sansevieria Black", title: "Sansevieria Black", price: 350, id: 32 },
];

const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia",
    "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
    "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia",
    "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China",
    "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt",
    "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji",
    "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
    "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland",
    "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
    "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo",
    "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
    "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives",
    "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
    "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
    "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea",
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
    "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
    "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
    "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
    "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
    "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
    "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
    "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];



export { blogItems, CelebItems, plantersItems, plantItems, saleItems, sellingItems, trendingItems, countries };
