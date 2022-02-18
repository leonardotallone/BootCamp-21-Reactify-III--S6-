const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img
            src={images[0] ? images[0].url :"https://kzutv.com/wp-content/uploads/2020/08/cerati-bios.jpg"}
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <div className="media-content">
              <p className="title is-6">{data.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
