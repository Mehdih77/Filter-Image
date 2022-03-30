import { useState } from "react";

//TODO: fix bugs and style

function App() {
  const [filter, setFilter] = useState("");
  const handleFilter = () => {
    switch (filter) {
      case "grayscale":
        return "grayscale";
      case "hue-rotate":
        return "hue-rotate";
      case "sepia":
        return "sepia";
      case "invert":
        return "invert";
      case "saturate":
        return "saturate";
      case "contrast":
        return "contrast";
      case "blur":
        return "blur";
    }
  };
  const [rotates, setRotates] = useState("0");
  const [bright, setBright] = useState("1");
  const [flip, setFlip] = useState("");
  const handleFlip = () => {
    switch (flip) {
      case "flip":
        return "flip";
      case "flap":
        return "flap";
    }
  };

  return (
    <section className="App">
      <div className="wrapper">
        <div className="right">
          <img
            className={`${handleFilter()} ${handleFlip()}`}
            src={`${process.env.PUBLIC_URL}/images/photo.png`}
            alt="photo"
            style={{
              transform: `rotate(${rotates}deg)`,
              filter: `brightness(${bright})`,
            }}
          />
          <span>فیلتر: {filter}</span>
          <span>چرخش: {rotates}</span>
          <span>روشنایی: {bright}</span>
        </div>
        <div className="left">
          <div className="filters">
            <h5>فیلترها</h5>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/photo.png`}
                alt="photo"
                onClick={() => setFilter("")}
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/photo.png`}
                alt="photo"
                className="grayscale"
                onClick={() => setFilter("grayscale")}
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/photo.png`}
                alt="photo"
                className="hue-rotate"
                onClick={() => setFilter("hue-rotate")}
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/photo.png`}
                alt="photo"
                className="sepia"
                onClick={() => setFilter("sepia")}
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/photo.png`}
                alt="photo"
                className="invert"
                onClick={() => setFilter("invert")}
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/photo.png`}
                alt="photo"
                className="saturate"
                onClick={() => setFilter("saturate")}
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/photo.png`}
                alt="photo"
                className="contrast"
                onClick={() => setFilter("contrast")}
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/photo.png`}
                alt="photo"
                className="blur"
                onClick={() => setFilter("blur")}
              />
            </div>
          </div>
          <div className="settings">
            <h5>تنظیمات</h5>
            <label>چرخش</label>
            <input
              type="range"
              min="0"
              max="360"
              step="20"
              value={rotates}
              onChange={(e) => setRotates(e.target.value)}
            />
            <label>روشنایی</label>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={bright}
              onChange={(e) => setBright(e.target.value)}
            />
            <button onClick={() => setFlip("flip")}>Flip</button>
            <button onClick={() => setFlip("flap")}>Flap</button>
            <button onClick={() => setFlip("")}>NOTHING</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
