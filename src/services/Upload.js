import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import { Button, Container } from 'react-bootstrap';

const Upload = () => {
  const newItems = [
    {
      category: 'Burguers',
      description:
        "Executives said the dollar-menu's double cheeseburger, which competes with McDonald's Dollar Menu double burger with one cheese slice, has helped improve restaurant traffic in the United States.",
      title: 'Double Burguer combo',
      stock: 20,
      stars: 5,
      price: 35,
      featured: false,
      discount: 0,
      image: 'https://dl.dropboxusercontent.com/s/f21xa5ipjs543m6/23036569_l.jpg?dl=0',
    },
    {
      category: 'Burguers',
      description:
        'Our Whopper Sandwich is a ¼ lb* of savory flame-grilled beef topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.',
      title: 'Wowper Cheesburguer',
      stock: 45,
      stars: 5,
      price: 25,
      featured: false,
      discount: 0,
      image: 'https://dl.dropboxusercontent.com/s/on8qpjci5lfo5a4/23700359_l.jpg?dl=0',
    },
    {
      category: 'Pizzas',
      description:
        "Here's our definition of Italian pizza: a pizza with simple flavors and a supple, thin crust, that's cooked in a very hot oven. (This is also the definition we use for our Neapolitan pizza.)",
      title: 'Italian Pizza',
      stock: 100,
      stars: 5,
      price: 45,
      featured: false,
      discount: 0,
      image: 'https://dl.dropboxusercontent.com/s/b6tb8d2843ej6dn/24166410_l.jpg?dl=0',
    },
    {
      category: 'Steak',
      description:
        'T-bone and porterhouse steaks are suited to fast, dry heat cooking methods, such as grilling or broiling. Since they contain a small amount of collagen relative to other cuts, longer cooking times are not necessary to tenderize the meat.',
      title: 'T-Bone Steak',
      stock: 5,
      stars: 5,
      price: 75,
      featured: false,
      discount: 0,
      image: 'https://dl.dropboxusercontent.com/s/98zhfs8b0jf55ed/29344585_l.jpg?dl=0',
    },
    {
      category: 'French Fries',
      description:
        'French fries are long, thin pieces of potato fried in oil or fat. The French fries were thin and crispy. To cook the French fries, put them into a deep pan of oil.',
      title: 'Classic French Fries',
      stock: 200,
      stars: 5,
      price: 20,
      featured: false,
      discount: 0,
      image: 'https://dl.dropboxusercontent.com/s/ir9jjr52pcqw36v/38273952_l.jpg?dl=0',
    },
    {
      category: 'French Fries',
      description:
        'Fry sauce is a condiment often served with French fries or tostones (twice-fried plantain slices) in many places in the world. It is usually a combination of one part tomato ketchup and two parts mayonnaise.',
      title: 'Fry Sauce French Fries',
      stock: 200,
      stars: 5,
      price: 25,
      featured: false,
      discount: 0,
      image: 'https://dl.dropboxusercontent.com/s/a8oaqwcwjl8k8s0/38274054_l.jpg?dl=0',
    },
    {
      category: 'Burguers',
      description:
        'I love this make-at-home takeaway alternative for a treat dinner. Crispy fish burger with easy garlic lemon mayo and a pile of crispy and totally addictive shoestring fries. This Fish Sandwich is a great way to get the kids (and husband) to eat more',
      title: 'Fish Burguer',
      stock: 30,
      stars: 5,
      price: 20,
      featured: false,
      discount: 0,
      image: 'https://dl.dropboxusercontent.com/s/9wc3uyzdu9irhw8/39045926_l.jpg?dl=0',
    },
    {
      category: 'Sandwichs',
      description:
        'Ham & Cheese Sandwich · Spread one side of each slice of bread with mayonnaise. In a small bowl, stir to combine mustard and honey. · On 2 of the',
      title: 'Ham & Cheese Sandwich',
      stock: 100,
      stars: 5,
      price: 15,
      featured: false,
      discount: 0,
      image: 'https://dl.dropboxusercontent.com/s/10u31adw0qm6sru/53509615_l.jpg?dl=0',
    },
    {
      category: 'Salads',
      description:
        'Garden salads use a base of leafy greens such as lettuce, arugula/rocket, kale or spinach; they are common enough that the word salad alone often refers specifically to garden salads. Other types include bean salad, tuna salad, fattoush, Greek salad (vegetable-based, but without leafy greens), and sōmen salad (a noodle-based salad).',
      title: 'Special Salad',
      stock: 30,
      stars: 5,
      price: 15,
      featured: false,
      discount: 0,
      image: 'https://dl.dropboxusercontent.com/s/89d1ymv39hjs2o2/58978038_l.jpg?dl=0',
    },
    {
      category: 'Coffe & Deli',
      description:
        'The definition of breakfast is a morning meal, or the first meal of the day. Eggs and bacon that you eat first thing in the morning for your first meal is an example of breakfast. ... (by extension) A meal consisting of food normally eaten in the morning, which may typically',
      title: 'Classic Breakfast',
      stock: 50,
      stars: 5,
      price: 10,
      featured: false,
      discount: 0,
      image: 'https://dl.dropboxusercontent.com/s/ahwqp9bzqtdostd/63246962_l.jpg?dl=0',
    },
    {
      category: 'Steak',
      description:
        "According to a tale, field marshal Joseph Radetzky von Radetz brought the recipe from Italy to Vienna in 1857. In 2007, linguist Heinz-Dieter Pohl could prove that this story had been invented.[7] According to Pohl, the dish is first mentioned in connection with Radetzky in 1869 in an Italian gastronomy book (Guida gastronomica d'Italia), which was published in German in 1871 as Italien tafelt, and it is claimed that the story instead concerned the cotoletta alla milanese.",
      title: 'Wiener Schitzel',
      stock: 10,
      stars: 5,
      price: 45,
      featured: false,
      discount: 0,
      image: 'https://dl.dropboxusercontent.com/s/ga3t185kfk0b2if/72712674_l.jpg?dl=0',
    },
  ];

  let [uploadItem, setUploadItem] = useState(0);

  useEffect(() => {
    if (uploadItem) {
      console.log(`Se cargo: ${uploadItem}`);
    }
  }, [uploadItem]);

  function handleUpload(newItems) {
    newItems.map(newItem => {
      const category = newItem.category;
      const title = newItem.title;
      const description = newItem.description;
      const stock = newItem.stock;
      const stars = newItem.stars;
      const price = newItem.price;
      const featured = newItem.featured;
      const discount = newItem.discount;
      const image = newItem.image;

      firestore
        .collection('items')
        .add({ category, title, description, stock, stars, price, featured, discount, image })
        .then(res => setUploadItem(res.title));
      return true;
    });
  }
  return (
    <Container className="my-2 text-center">
      <Button className="rounded-pill" size="lg" variant="outline-primary" onClick={() => handleUpload(newItems)}>
        <span className="ms-2 me-1">Upload</span>
      </Button>
    </Container>
  );
};

export default Upload;
