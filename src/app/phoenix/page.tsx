export default function Phoenixpage() {


  return (
    <><nav></nav>


      <div className=" p-[3em]  ">

        <header className="flex flex-row  items-center justify-between w-[85%]  m-auto " >
          <div>
            <h1 className="text-[40px] font-bold">Lorem ipsum</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Become a tutor</button>
          </div>
          <div>
            <div className="max-w-md  mt-10">
              {/* Search Input */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Form Container */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                {/* City and Suburb Inputs */}
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Suburb"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Subject and Price Inputs */}
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Price"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Find Tutor Button */}
                <div>
                  <button
                    type="button"
                    className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                  >
                    Find Tutor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

       
    
      <section className=" flex flex-row    m-auto">
          <div className="">
<img className="w-[50em]"  src="./assets/p.png" alt="" ></img>
          </div>
          <div className=" flex flex-col   gap-5  ">
            <h3>About us </h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
          </div>

        </section>

        </div>
    </>
  );
}