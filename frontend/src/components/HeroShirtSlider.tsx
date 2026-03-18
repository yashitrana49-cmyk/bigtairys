type Shirt = {
  id: number;
  src: string;
};

const shirts: Shirt[] = [
  { id: 1, src: "/shirts/tee1.png" },
  { id: 2, src: "/shirts/tee2.png" },
  { id: 3, src: "/shirts/tee1.png" }, // repeat for smooth loop
];

export default function HeroShirtSlider() {
  return (
    <div className="shirt-lane">
      <div className="shirt-track">
        {shirts.map((shirt) => (
          <img
            key={shirt.id}
            src={shirt.src}
            alt="T-shirt"
            className="shirt-img"
          />
        ))}
      </div>
    </div>
  );
}