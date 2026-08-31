import { NavLink } from "react-router-dom";


const Crafts = ({craft}) => {

    const {_id, name, availability, price, details, photo} = craft;
  return (
    <div className="card card-compact bg-base-100 w-80 object-contain shadow-xl">
          <figure>
              <img
                  src={photo}
                  alt="Shoes" />
          </figure>
          <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>{price}</p>
              <NavLink to={`/craft/${_id}`}>
                  <div className="card-actions justify-end">
                      <button className="btn btn-primary">View Details</button>
                  </div></NavLink>
          </div>
      </div>
  )
}

export default Crafts