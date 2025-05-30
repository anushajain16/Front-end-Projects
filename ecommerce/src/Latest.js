import './Latest.css';

const items = [
  {
    id: 1,
    image: "https://www.lakmeindia.com/cdn/shop/files/67062_H-8909106033214.jpg?v=1738127216",
    descBtn: "new",
    itemName: "Matte Pressed Powder",
    description: "soft-matte powder",
    price: 1200,
    link: "",
  },
  {
    id: 2,
    image: "https://www.lakmeindia.com/cdn/shop/files/67054_H-8909106034327.jpg?v=1738213895",
    descBtn: "trending",
    itemName: "Nude Lipstick",
    description: "hydrated shine",
    price: 200,
    link: "",
  },
  {
    id: 3,
    image: "https://www.lakmeindia.com/cdn/shop/files/27032_H-8901030974229_5747dff6-bc61-4f98-bad8-01bf3cbb208e.jpg?v=1736503487",
    descBtn: "latest",
    itemName: "Cheeky Mood",
    description: "hydrated blush",
    price: 1000,
    link: "",
  },
  {
    id: 4,
    image: "https://www.lakmeindia.com/cdn/shop/files/29728_S1-8901030984587_1000x.jpg?v=1734506616",
    descBtn: "new",
    itemName: "Highlighter Glow",
    description: "natural finish",
    price: 850,
    link: "",
  },
  {
    id: 5,
    image: "https://www.lakmeindia.com/cdn/shop/files/24894_H-8901030979552_1000x.jpg?v=1709807080",
    descBtn: "hot",
    itemName: "Lash Eyeliner",
    description: "length & volume",
    price: 600,
    link: "",
  },
  {
    id: 6,
    image: "https://www.lakmeindia.com/cdn/shop/files/1732271562099_5e5aee11-e2d6-4015-bc78-87b1c91768d1_1000x.jpg?v=1732271567",
    descBtn: "trending",
    itemName: "Makeup Fixer",
    description: "long-lasting spray",
    price: 628,
    link: "",
  }
];

const chunkItems = (arr, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

const Latest = () => {
  const slides = chunkItems(items, 3); 

  return (
    <main>
      <section>
        <div id="carouselExampleCaptions" className="carousel slide">
          <section>
            <p className='latest-head'>Trending Now</p>
          </section>

          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
              ></button>
            ))}
          </div>

          <div className="carousel-inner">
            {slides.map((group, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  {group.map((item) => (
                    <div className="col" key={item.id}>
                      <div className="card shadow-sm mx-2 my-3">
                        <small className="text-bg-warning px-2 rounded">
                          {item.descBtn}
                        </small>
                        <img
                          src={item.image}
                          className="card-img-top"
                          alt={item.itemName}
                          height="200"
                        />
                        <div className="card-body">
                          <p className="card-text">{item.itemName}</p>
                          <p className='card-para'>{item.description}</p>
                          <p className='item-price'><strong>₹{item.price}</strong></p>
                          <a href={item.link} className="view-btn" target="_blank" rel="noopener noreferrer"> View Product</a>
                        </div>
                        
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="control-btn">
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <i className="fa-solid fa-arrow-right"></i>
              <span className="visually-hidden">Next</span>
            </button>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <i className="fa-solid fa-arrow-left"></i>
              <span className="visually-hidden">Previous</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Latest;
