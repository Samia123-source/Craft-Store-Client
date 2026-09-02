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
        
          <div className="min-h-screen p-16">

            <div className="max-w-5xl mx-auto bg-[#b99256] rounded-lg shadow-lg p-8">

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
                    <div className="md:w-1/2 text-[#0a0605]">

                        <h1 className="text-4xl font-bold text-[#0a0605] mb-5">
                            {name}
                        </h1>

                        <p className="text-lg mb-3">
                            <strong>Category:</strong> {category}
                        </p>

                        <p className="text-lg mb-3">
                            <strong>Availability:</strong> {availability}
                        </p>

                        <p className="text-lg mb-3">
                            <strong>Price:</strong> ৳{price}
                        </p>

                        <p className="text-lg mb-3">
                            <strong>Processing Time:</strong> {time}
                        </p>

                        <div className="mt-6">
                            <h2 className="text-2xl font-semibold mb-2">
                                Description
                            </h2>

                            <p className="text-lg text-gray-700 mb-8">
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