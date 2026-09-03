import { useLoaderData } from "react-router-dom"


const CraftDetails = () => {
    const craft = useLoaderData();

        const {
        name,
        category,
        availability,
        price,
        time,
        details,
        photo
    } = craft;

  return (
    <div>
        
          <div className="min-h-screen p-28 bg-[url('https://i.ibb.co.com/LdbZ5KgM/image.png')]">

            <div className="max-w-5xl mx-auto bg-black/10 backdrop-blur-md 
                  border border-black/40 shadow-xl rounded-lg p-8">

                <div className="md:flex gap-10">

                    {/* Image */}
                    <div className="md:w-1/2">
                        <img
                            src={photo}
                            alt={name}
                            className="w-full h-[400px] object-cover rounded-lg"
                        />
                    </div>

                    {/* Details */}
                    <div className="md:w-1/2 text-white">

                        <h1 className="text-4xl font-bold mb-5">
                            {name}
                        </h1>

                        <p className="text-lg mb-3">
                            <strong>Category:</strong> {category}
                        </p>

                        <p className="text-lg mb-3">
                            <strong>Availability:</strong> {availability}
                        </p>

                        <p className="text-lg mb-3">
                            <strong>Price: </strong> BDT {price}
                        </p>

                        <p className="text-lg mb-3">
                            <strong>Processing Time:</strong> {time}
                        </p>

                        <div className="mt-6">
                            <h2 className="text-2xl font-semibold mb-2">
                                Description:
                            </h2>

                            <p className="text-lg text-white mb-8">
                                {details}
                            </p>

                            <button className="btn btn-primary text-2xl">Buy Now</button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default CraftDetails