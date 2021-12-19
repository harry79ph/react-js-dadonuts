import donut1 from '../images/donuts/donut1.png';
import donut2 from '../images/donuts/donut2.png';
import donut3 from '../images/donuts/donut3.png';
import donut4 from '../images/donuts/donut4.png';
import donut5 from '../images/donuts/donut5.png';
import donut6 from '../images/donuts/donut6.png';
import donut7 from '../images/donuts/donut7.png';
import dessert1 from '../images/desserts/dessert1.png';
import dessert2 from '../images/desserts/dessert2.png';
import dessert3 from '../images/desserts/dessert3.png';
import dessert4 from '../images/desserts/dessert4.png';
import dessert5 from '../images/desserts/dessert5.png';
import dessert6 from '../images/desserts/dessert6.png';
import cookie1 from '../images/cookies/cookie1.png';
import cookie2 from '../images/cookies/cookie2.png';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { GoPackage } from 'react-icons/go';
import { GiDoughRoller } from 'react-icons/gi';

export const navItems = ['Donuts', 'Desserts', 'Cookies'];

export const donutList = [
    {
        img: donut1,
        name: 'Glazed Donut',
        price: '£2.49'
    },
    {
        img: donut2,
        name: 'Chocolate Donut',
        price: '£2.99'
    },
    {
        img: donut3,
        name: 'Nutella Filled Donut',
        price: '£3.49'
    },
    {
        img: donut4,
        name: 'Tiramisu Filled Donut',
        price: '£3.49'
    },
    {
        img: donut5,
        name: 'Blueberry Donut',
        price: '£2.99'
    },
    {
        img: donut6,
        name: 'Pistachio Donut',
        price: '£2.99'
    },
    {
        img: donut7,
        name: 'Coconut Donut',
        price: '£2.99'
    }
];

export const desertList = [
    {
        img: dessert1,
        name: 'Raspberry Cheesecake',
        price: '£3.99'
    },
    {
        img: dessert2,
        name: 'Lemon Cheesecake',
        price: '£3.99'
    },
    {
        img: dessert3,
        name: 'Caramel Cheesecake',
        price: '£3.99'
    },
    {
        img: dessert4,
        name: 'Oreo Cheesecake',
        price: '£3.99'
    },
    {
        img: dessert5,
        name: 'Tiramisu',
        price: '£3.99'
    },
    {
        img: dessert6,
        name: 'Banoffee Pie',
        price: '£3.99'
    }
];

export const cookieList = [
    {
        img: cookie1,
        name: 'Vanilla Cookie',
        price: '£1.49'
    },
    {
        img: cookie2,
        name: 'Chocolate Cookie',
        price: '£1.49'
    }
];

export const features = [
    {
        icon: <MdOutlineDeliveryDining />,
        title: 'Nationwide Delivery',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        button: 'Shop Now'
    },
    {
        icon: <GoPackage />,
        title: 'Carefully Packaged',
        desc: 'Quisque luctus dui turpis, quis semper lacus aliquam eu.',
        button: 'More Info'
    },
    {
        icon: <GiDoughRoller />,
        title: 'Made by Hand',
        desc: 'Quisque iaculis lacus at elit elementum ullamcorper.',
        button: 'Learn More'
    }
];