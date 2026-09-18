import { Link } from "react-router-dom";

const drops = [
  {
    id: "1",
    name: "Liberty Front",
    image: "/shirts/tshirt1front.png",
  },
  {
    id: "1",
    name: "Liberty Back",
    image: "/shirts/tshirt1back.png",
  },
  {
    id: "1",
    name: "Liberty Edition",
    image: "/shirts/tshirt1front.png",
  },
];

export default function HeroShirtSlider() {
  return (
    <section className="drop-section" aria-label="Featured products">
      <div className="product-rail">
        {drops.map((drop, index) => (
          <Link
            key={`${drop.name}-${index}`}
            to={`/product/${drop.id}`}
            className="product-rail-card"
          >
            <div className="product-rail-image">
              <img src={drop.image} alt={drop.name} />
            </div>

            <div className="product-rail-info">
              <span>{drop.name}</span>
              <span className="product-rail-link">View drop →</span>
            </div>
          </Link>
        ))}
      </div>

      <Link to="/shop" className="shop-drop-button">
        Shop the drop
      </Link>
    </section>
  );
}