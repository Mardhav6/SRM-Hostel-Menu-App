const mealInfo1 = document.getElementById('mealInfo1');
const mealInfo2 = document.getElementById('mealInfo2');
const mealInfo3 = document.getElementById('mealInfo3');
const mealInfo4 = document.getElementById('mealInfo4');




const now = new Date();
const dayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)
const hour = now.getHours();
const weekNumber = getWeekNumber(now); // Get the week number

const isOddWeek = weekNumber % 2 === 1; // Check if it's an odd week



// Function to show the previous menu


// Function to show the next menu


// Define common items for Breakfast and Snacks
const breakfastItems = ['Tea', 'Coffee', 'Bread', 'Jam'];
const snacksItems = ['Tea', 'Coffee', 'Bread', 'Jam'];
const menusOdd = [
    // Sunday
    // ... (similar structure for other days of the week)
    // Sunday
    [
        [`Breakfast Menu (Sunday - Odd Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Poori', 'Potato Bajji'],
        [`Lunch Menu (Sunday - Odd Week):`, 'Chicken Briyani', 'Veg Briyani', 'Boondi Raitha', 'Rasam', 'Steam Rice','Butter Milk','Pickle','Ice Cream','Brinjal Salan','Appalam','Boiled Egg 1no'],
        [`Snacks Menu (Sunday - Odd Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Bhel Puri'],
        [`Dinner Menu (Sunday - Odd Week):`, 'Chappathi', 'Dal/Sabzi/Khorma', 'Variety Rice', 'Urulai Masala', 'Fryums','Banana 1no','Milk']
    ],
    // Monday
    [
        [`Breakfast Menu (Monday - Odd Week):`, 'Tea', 'Coffee', 'Bread', 'Jam','Pongal', 'Medhu vada', 'Gosthu', 'Coconut chutney'],
        [`Lunch Menu (Monday - Odd Week):`, 'Jeera Chappathi', 'Dal/Sabzi/Khorma', 'White Rice', 'Kadhamba Sambar', 'Tomato Rasam','Urulai Pattani Masala','Butter Milk','Appalam','Pickle'],
        [`Snacks Menu (Monday - Odd Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Fruit Muffin'],
        [`Dinner Menu (Monday - Odd Week):`, 'Chappati', 'Veg Khorma', 'Variety Rice', 'Fryums', 'Dry Vegetable','Banana 1no','Milk','Pickle']
    ],
    // Tuesday
    [
        [`Breakfast Menu (Tuesday - Odd Week):`, 'Tea', 'Coffee', 'Bread', 'Jam','Kal Dosa', 'Vada Curry', 'Pudhina Chutney'],
        [`Lunch Menu (Tuesday - Odd Week):`, 'Masala Chappathi', 'Dal/Sabzi/Khorma', 'White Rice',],
        [`Snacks Menu (Tuesday - Odd Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Spl Vada 80gm' ],
        [`Dinner Menu (Tuesday - Odd Week):`, 'Chappathi', 'Dal/Sabzi/Khorma', 'White Rice', 'Avarakal Sambar', 'Tomato','Gobi peas poriyal','Buuter Milk','Fryums','Pickle','Milk']
    ],
    // Wednesday
    [
        [`Breakfast Menu (Wednesday - Odd Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Idly', 'Masala Vada ', 'Pumpkin Sambar', 'Kara Chutney'],
        [`Lunch Menu (Wednesday - Odd Week):`, 'Triangle Chappati ', 'Dal/Sabzi/Khorma', 'White Rice',  'Kalyana Sambar', 'Paruppu Sambar','Kovvakal varuval(Chettinad)','Butter Milk','Appalam','Pickle'],
        [`Snacks Menu (Wednesday - Odd Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Veg Puff'],
        [`Dinner Menu (Wednesday - Odd Week):`, 'Triangle chappati', 'Paneer Butter Masala', 'White Rice', 'Vada Kozhambu', 'Paruppu Rasam','Butter Milk','Appalam','Pickle','Pooriyal','Chicken Masala','Sweet','Milk']
    ],
    // Thursday
    [
        [`Breakfast Menu (Thursday - Odd Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Veg Kitichidi', 'Veg Stew','Mint & Malli Chutney'],
        [`Lunch Menu (Thursday - Odd Week):`, 'Methi Chapathi','Dal/Sabzi/Khorma','White Rice','Vendai More Kozhambu','Kalayana Rasam','Vazhakkai podimas','Butter Milk','Fryums','Pickle' ],
        [`Snacks Menu (Thursday - Odd Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Veg Somosa'],
        [`Dinner Menu (Thursday - Odd Week):`, 'Idly 2nos', 'Spl Chutney', 'White Rice', 'Udipi Sambar', 'Kalyana Rasam','Veg Usuli','Butter Milk','Fryums','PIckle','Milk']
    ],
    // Friday
    [
        [`Breakfast Menu (Friday - Odd Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Idly', 'Item2', 'Mix Veg Sambar', 'ONion Chutney'],
        [`Lunch Menu (Friday - Odd Week):`, 'Chappati','Dal/Sabzi/Khorma', 'White Rice', 'Podalangal,Capsicum Sambar', 'Pineapple Rasam','Beet Chana Karaporiyal','Butter Milk','Appalam','Pickle'],
        [`Snacks Menu (Friday - Odd Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Veg Roll'],
        [`Dinner Menu (Friday - Odd Week):`, 'Chappati', 'Dal/Sabzi/Khorma', 'Veg Pulao', 'Crispy Vegetable', 'Banana 1no','Milk','Raitha']
    ],
    // Saturday
    [
        [`Breakfast Menu (Saturday - Odd Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Mini Podi Uthappam', 'Onion Sambar', 'Tomato Malli Chutney'],
        [`Lunch Menu (Saturday - Odd Week):`, 'Chappati', 'Dal/Sabzi/Khorma', 'Bise Beha Bath', 'Dry Vegetable', 'White Rice','Jeera Poondu Rassam','Curd rice','Butter Milk', 'Fryums', 'Pickle'],
        [`Snacks Menu (Saturday - Odd Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Beach Sundal'],
        [`Dinner Menu (Saturday - Odd Week):`, 'Palak Chappati', 'Dal/Sabzi/Khorma', 'White Rice', 'Spl Kara Kozhambu', 'Carrot,Beans,Channa Poriyal','Mysore Rasam','Appalam','Pickle','Milk']
    ]

    // ... (similar structure for other days of the week)
];

// Define menus for even and odd weeks
const menusEven = [

    // Sunday
    [
        [`Breakfast Menu (Sunday - Even Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Idiyappam', 'Veg Kitichidi', 'Veg Stew ', 'Mint Chutney'],
        [`Lunch Menu (Sunday - Even Week):`, 'Chicken Briyani', 'Veg Briyani', 'Raitha', 'Rasam', 'Steam Rice', 'Butter Milk', 'Pickle', 'Ice Cream', 'Brinjal Salan', 'Appalam', 'Boiled Egg'],
        [`Snacks Menu (Sunday - Even Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Bhel Puri'],
        [`Dinner Menu (Sunday - Even Week):`, 'Chappati', 'Veg Khurma', 'Sambar Rice', 'Fryums', 'Pickle', 'Banana 1no', 'Milk']
    ],
    // Monday
    [
        [`Breakfast Menu (Monday - Even Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Idly', 'Medhu Vada', 'Brinjal Sambar', 'Kara Chutney'],
        [`Lunch Menu (Monday - Even Week):`, 'Masala Chappati', 'Dal/Sabzi/Khurma', 'White Rice', 'Radish Mango Sambar', 'Garlic Rasam', 'Snake Guard Poriyal', 'Butter Milk', 'Appalam', ],
        [`Snacks Menu (Monday - Even Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Kara Bonda'],
        [`Dinner Menu (Monday - Even Week):`, 'Chappati', 'Kadalai Curry', 'White Rice', 'Garlic Rasam', 'Poriyal', 'Pickle', 'Banana no 1', 'Milk', 'Appalam']
    ],
    // Tuesday
    [
        [`Breakfast Menu (Tuesday - Even Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Pongal', 'Parupu Vada', 'Gosthu', 'Coconut Chutney'],
        [`Lunch Menu (Tuesday - Even Week):`, 'Meithi Chappathi', 'Dal/Sabzi/Khurma', 'White Rice', 'Pokora More kozhambu', 'Mysore Rasam', 'Yam KaraPoriyL', 'Butter Milk', 'Fryums', 'Pickle'],
        [`Snacks Menu (Tuesday - Even Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Sambar Vada'],
        [`Dinner Menu (Tuesday - Even Week):`, 'Chappati', 'Dal/Sabzi/Khurma', 'White Rice', 'Chow Chow Sambar', 'Tomato Rasam', 'Yam Chops', 'Butter Milk', 'Fryums', 'Pickle', 'Milk']
    ],
    // Wednesday
    [
        [`Breakfast Menu (Wednesday - Even Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Settu Dosa', 'Vada Curry', 'Pudhina Chutney'],
        [`Lunch Menu (Wednesday - Even Week):`, 'Triangle Chappati', 'Dal/Sabzi/Khurma', 'White Rice', 'Aravai Sambar', 'Tomato Rasam', 'Cabbage Carrot Peas Poriyal', 'Butter Milk', 'Appalam', 'Pickle'],
        [`Snacks Menu (Wednesday - Even Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Fruit Cake'],
        [`Dinner Menu (Wednesday - Even Week):`, 'Triangle Chappati', 'Paneer Butter Masala', 'Vatha Kozhambu', 'Paruppu Rasam', 'Butter Milk', 'Appalam', 'Pickle', 'Poriyal', 'Chicken Masala', 'Sweet', 'Milk']
    ],
    // Thursday
    [
        [`Breakfast Menu (Thursday - Even Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Poori', 'Channa Masala/Potato Bajji'],
        [`Lunch Menu (Thursday - Even Week):`, 'Chappati', 'Dal/Sabzi/Khurma', 'White Rice', 'Urundai Kozhambu', 'Kalyana Rasam', 'Beans Usuli', 'Butter Milk', 'Fryums', 'Pickle'],
        [`Snacks Menu (Thursday - Even Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Onion Somosa'],
        [`Dinner Menu (Thursday - Even Week):`, 'Idly ', 'Spl Chutney', 'White Rice', 'Udipi Sambar', 'Kalyana Rasam', 'Veg Usuli', 'Butter Milk', 'Fryums', 'Pickle', 'Milk']
    ],
    // Friday
    [
        [`Breakfast Menu (Friday - Even Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Idly', 'Masala Vada', 'Sambar', 'Tomato Malli Chutney'],
        [`Lunch Menu (Friday - Even Week):`, 'Chappati', 'Dal/Sabzi/Khurma', 'White Rice', 'Kathri', 'Murungai Sambar', 'Malli Rasam', 'Potato Roast', 'Butter Milk', 'Appalam', 'Pickle', 'Sweet'],
        [`Snacks Menu (Friday - Even Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Sweet Donut'],
        [`Dinner Menu (Friday - Even Week):`, 'Chappati', 'Dal/Sabzi/Khurma', 'Mushroom Pulao', 'Gobi Manchurian', 'Banana 1 no', 'Milk', 'Raitha']
    ],
    // Saturday
    [
        [`Breakfast Menu (Saturday - Even Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Masala Uthappam', 'Sambar', 'Malli chutney', ],
        [`Lunch Menu (Saturday - Even Week):`, 'Chappati', 'Dal/Sabzi/Khurma', 'White Rice', 'Cripsy dry veg', 'Jeera poondu rassam','Curd rice','Butter Milk','Fryums','Pickle'],
        [`Snacks Menu (Saturday - Even Week):`, 'Tea', 'Coffee', 'Bread', 'Jam', 'Pattani Sundal'],
        [`Dinner Menu (Saturday - Even Week):`, 'Mini Uthappam', 'Malli Chutney', 'White Rice', 'Mix veg sambar', 'Potato Kara Masala','Pepper Rasam','Appalam','Pickle','Milk','Sweet']
    ]

    // ... (similar structure for other days of the week)
];




// Determine which menu to use based on the week type
const menu = isOddWeek ? menusOdd[dayOfWeek] : menusEven[dayOfWeek];

if (hour >= 0 && hour < 9) {
    displayMenu(menu, 0); // Breakfast
} else if (hour >= 9 && hour < 14) {
    displayMenu(menu, 1); // Lunch
} else if (hour >= 14 && hour < 17) {
    displayMenu(menu, 2); // Snacks
} else {
    displayMenu(menu, 3); // Dinner
}

function displayMenu(menuArray, mealIndex) {
    mealInfo1.textContent = menuArray[mealIndex][0];

    // Loop through the items and display them
    for (let i = 1; i < menuArray[mealIndex].length; i++) {
        const item = document.createElement('p');
        item.textContent = menuArray[mealIndex][i];
        if (i <= 4) {
            mealInfo2.appendChild(item);
        } else if (i <= 8) {
            mealInfo3.appendChild(item);
        } else {
            mealInfo4.appendChild(item);
        }
    }
}

function getWeekNumber(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    var days = Math.floor((date - startOfYear) /
        (24 * 60 * 60 * 1000));
    var weekNumber = Math.ceil(days / 7);
    console.log(weekNumber)
    return weekNumber;
}
