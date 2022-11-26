import ProductCard from "./ProductCard";
const Product = [
  {
    img: "https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg",
    product: "cocooil",
    preis: "30$",
    beschreibung: "lorem lorem lorem lorem",
  },
  {
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80 ",
    product: "Polaroid",
    preis: "60$",
    beschreibung: "lorem lorem lorem lorem",
  },
  {
    img: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80 ",
    product: "Maui Moisture",
    preis: "20$",
    beschreibung: "lorem lorem lorem lorem",
  },
];
const GallareyItems = () => {
  return (
    <div className="grid">
      {Product.map((product) => (
        <ProductCard
          img={product.img}
          product={product.product}
          preis={product.preis}
        />
      ))}
    </div>
  );
};

export default GallareyItems;
