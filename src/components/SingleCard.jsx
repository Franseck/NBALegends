import {useState} from "react";


const SingleCard = ({ name, img, statistics }) => {
  const [show, setShow] = useState(true);
  const handleClick = () => setShow(!show);

  return (

    <div className="legend" role="button" onClick={handleClick}>{show ? (<img src={img} alt="" className="legend-img" />) : (
        <ul className="stats">
          {statistics.map((item) => (
            <li>🍾  {item}</li>
          ))}
        </ul>
      )}
      <h3 className="mb-3">{name}</h3>
    </div>

  );
};
export default SingleCard