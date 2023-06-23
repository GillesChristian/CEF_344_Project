// Select the database to use.
use('Backend-Porfolio');

// Insert a few documents into the PortfolioData collection.
// db.getCollection('portfolios').insertMany(
//     [
//         {
          
//             image: 'https://gilleschristian.netlify.app/static/media/screen.a9075e0c80320d19f73d.png',
//             title: 'Portfolio',
//             github: 'https://github.com/GillesChristian/CEF_344_Project.git',
//             demo: 'https://gilleschristian.netlify.app/',
//         },
//         {
       
//             image: 'https://cdn.dribbble.com/userupload/7531024/file/original-28960363b0b1e5a03c2f6f1f077c298e.jpg?compress=1&resize=1504x1128',
//             title: 'Education App UIX',
//             github: 'https://github.com',
//             demo: 'https://dribbble.com/shots/21637001-Education-App-UIX',
//         },
//         {
//             image: 'https://cdn.dribbble.com/userupload/7474794/file/original-ec5e3ff0615f4ec018a8662d76206bde.jpg?compress=1&resize=1504x1126',
//             title: 'Recipe app design',
//             github: 'https://github.com',
//             demo: 'https://dribbble.com/shots/21617723-Recipe-app-design',
//         }

//     ]
// );

// Insert a few documents into the PortfolioData collection.
db.getCollection('testimonials').insertMany(
 [
        {
          avatar: 'https://gilleschristian.netlify.app/static/media/gilles.f8b7f62400a107ccd881.jpg',
          name: 'smith Brown',
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
        },
        
        {
          avatar: 'https://gilleschristian.netlify.app/static/media/gilles.f8b7f62400a107ccd881.jpg',
          name: 'Tina Wolf ',
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
        },
        {
          avatar: 'https://gilleschristian.netlify.app/static/media/gilles.f8b7f62400a107ccd881.jpg',
          name: 'Kevin Adams',
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
        },
        {
          avatar: 'https://gilleschristian.netlify.app/static/media/gilles.f8b7f62400a107ccd881.jpg',
          name: 'Louisa Eliot',
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
        },
      
      
      ]
);
