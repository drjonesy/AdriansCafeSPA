const menuCategories = ['breakfast', 'sandwiches', 'burritos', 'tacos', 'sides','snacks','drinks'];

const inventory = [
	{image:'eggs-on-toast', ingredients:['Sunny-side up egg', 'tomato', 'green bell pepper', 'toast'], price: '2.25', category: 'breakfast', specials: false},
  {image:'torta-turkey', ingredients: ['Torta bread', 'sliced turkey', 'avocado', 'tomato', 'purple onion','lettuce'],  price: '5.50', category: 'sandwiches', specials: true},
  {image:'burrito-california', ingredients:['carne-asada', 'french-fries', 'cheese', 'tomato', 'cilantro', 'guacamole'], price: '5.00', category: 'burritos', specials: false},
  {image:'tacos-adobada', ingredients:['adobada', 'white onion', 'cilantro', 'avocado sauce', 'corn tortilla'], price: '3.00', category: 'tacos', specials: true},
  {image:'sides-fries', ingredients:['french-fries', 'salt', 'ketchup'], price: '1.50', category: 'sides', specials: false},
  {image:'chocolate-chip-cookie', ingredients:['cookie dough(contains gluten)','chocolate chips'], price: '0.25', category: 'snacks', specials: false},
  {image:'fountain-drink', ingredients:['Pepsi','Fanta','Dr. Pepper','Sprite'], price: '1.25', category: 'drinks', specials: false},
];


let profileInfo = {fname: 'Mark', lname: 'Johnson', email: 'mjohnson@gmail.com', phone: '858-989-7775'};

const timeOptionsArray = [
	'8:15 AM', '8:30 AM', '8:45 AM',
	'9:00 AM', '9:15 AM', '9:30 AM', '9:45 AM',
	'10:00 AM', '10:15 AM', '10:30 AM', '10:45 AM',
	'11:00 AM', '11:15 AM', '11:30 AM', '11:45 AM',
	'12:00 PM', '12:15 PM', '12:30 PM', '12:45 PM',
	'1:00 PM', '1:15 PM', '1:30 PM', '1:45 PM',
	'2:00 PM', '2:15 PM', '2:30 PM', '2:45 PM',
	'3:00 PM', '3:15 PM', '3:30 PM', '3:45 PM',
	'4:00 PM', '4:15 PM', '4:30 PM', '4:45 PM',
	'5:00 PM', '5:15 PM', '5:30 PM', '5:45 PM',
	'6:00 PM', '6:15 PM', '6:30 PM', '6:45 PM',
	'7:00 PM', '7:15 PM', '7:30 PM', '7:45 PM'
	];

let pickupTime = '';


// Get Today Date
let d = new Date();
let today = (d.getMonth()+1) + '/' + (d.getDate()) + '/' + (d.getFullYear());

// editable cart array
let cart = [];
