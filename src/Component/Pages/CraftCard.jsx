

const CraftCard = ({craft}) => {
    const {name, category, availability, price, time, details, photo} = craft;
  return (
      <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src={photo}
      alt="pottery" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className="text-2xl">{details}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
  )
}

export default CraftCard