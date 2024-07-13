export default function Phoenixpage() {


  return (
    <>
      <nav className="bg-white p-4 flex justify-between items-center">
        <div className="text-blue-500 font-bold text-lg">
          PHOENIX TUTORIUM
        </div>
        <div className="flex space-x-5 text-blue-500 font-bold items-center">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Testimonial</a>
          <a href="#" className="hover:underline">Contact Us</a>
          <div className="flex gap-5">

            <button className="bg-transparent hover:bg-blue-500 text-text-blue-500 font-semibold hover:text-white  p-[10px] border border-[#2091F9] hover:border-transparent rounded">
              Become a tutor
            </button>
            <button className="bg-[#2091F9] hover:bg-blue-700 text-white font-bold py-2 px-50 p-[10px] rounded-lg	">
              Login
            </button>
          </div>
        </div>

      </nav>



      <div className="   ">

        <header className=" p-[10em]  bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply" >
          <div className="flex flex-row w-[90%] items-center justify-between m-auto ">
            <div>
              <h1 className="text-[40px] font-bold">Lorem ipsum</h1>
              <button className="bg-[#2091F9] hover:bg-blue-700 text-white  p-[5px] px-4 rounded">Become a tutor</button>
            </div>
            <div>
              <div className="max-w-md  mt-10">
                {/* <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div> */}
                <div>
                  <div className="flex items-center space-x-2 bg-white w-[196.57px] h-[64.46px] rounded relative top-5 p-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35"
                      />
                    </svg>
                    <span className="text-gray-700">Search</span>
                  </div>

                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
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

                  <div>
                    <button type="submit" className="inline-flex items-center py-2.5 px-5 ms-2 text-sm font-medium text-white bg-[#2091F9] rounded-lg border hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                      </svg>Find a Tutor
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </header>



        <section className=" flex flex-row items-center justify-around m-auto p-[3em] gap-[5%] w-[90%] rounded">
          <div >
            <svg xmlns="http://www.w3.org/2000/svg" width="415" height="488" viewBox="0 0 456 506" fill="none">
              <rect x="0.5" y="0.5" width="455" height="505" rx="9.5" fill="url(#pattern0_48_107)" stroke="black" />

            </svg>
          </div>
          <div className=" flex flex-col gap-5  ">
            <h3>About us </h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
            <button className="bg-[#2091F9] hover:bg-blue-700 text-white font-bold py-2 px-50 w-[10em] rounded-full">
              Read more
            </button>
          </div>

        </section>

        <section className="flex flex-row justify-between w-full pb-[3em] 	">
          <div className="w-[55%] h-[488px] bg-[#2091F9] p-[10em] rounded-md	">
            <h1 className="text-white text-2xl mt-[-2em] text-[40px] font-bold">Become a tutor</h1>
            <div className=" flex flex-col mt-[2em] ">
              <p className="text-white ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
              <button className="bg-white hover:bg-black-700 text-bleu font-bold py-2 px-50  w-[10em] mt-[1em]">Read more</button>
            </div>
          </div>
          <div className="pr-[5em]">
            <svg xmlns="http://www.w3.org/2000/svg" width="415" height="488" viewBox="0 0 456 506" fill="none">
              <rect x="0.5" y="0.5" width="455" height="505" rx="9.5" fill="url(#pattern0_48_107)" stroke="black" />
            </svg>
          </div>
        </section>

        <section className="bg-[#2091F9] p-12 flex flex-col items-center mb-[10em] rounded">
          <h1 className="text-white text-3xl mb-8 text-center">Testimonials</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-items-center">
            <div
              className="bg-white p-6 flex gap-10 "
              style={{ width: '577px', height: '233px', borderRadius: '40px', opacity: '1' }}
            >
              <div className="flex-shrink-0 w-20 h-20 bg-blue-500 rounded-full flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6v1h12v-1c0-3.31-2.69-6-6-6z" />
                </svg>
              </div>
              <div>
                <h1 className="text-blue-500 font-bold">Courtney Henry</h1>
                <p className="text-blue-900 mt-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>

            <div
              className="bg-white p-6 flex gap-10 "
              style={{ width: '577px', height: '233px', borderRadius: '40px', opacity: '1' }}
            >
              <div className="flex-shrink-0 w-20 h-20 bg-blue-500 rounded-full flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6v1h12v-1c0-3.31-2.69-6-6-6z" />
                </svg>
              </div>
              <div>
                <h1 className="text-blue-500 font-bold">Courtney Henry</h1>
                <p className="text-blue-900 mt-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>

            <div
              className="bg-white p-6 flex gap-10 "
              style={{ width: '577px', height: '233px', borderRadius: '40px', opacity: '1' }}
            >
              <div className="flex-shrink-0 w-20 h-20 bg-blue-500 rounded-full flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6v1h12v-1c0-3.31-2.69-6-6-6z" />
                </svg>
              </div>
              <div>
                <h1 className="text-blue-500 font-bold">Courtney Henry</h1>
                <p className="text-blue-900 mt-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
            <div
              className="bg-white p-6 flex gap-10 "
              style={{ width: '577px', height: '233px', borderRadius: '40px', opacity: '1' }}
            >
              <div className="flex-shrink-0 w-20 h-20 bg-blue-500 rounded-full flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6v1h12v-1c0-3.31-2.69-6-6-6z" />
                </svg>
              </div>
              <div>
                <h1 className="text-blue-500 font-bold">Courtney Henry</h1>
                <p className="text-blue-900 mt-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>

          </div>
        </section>

        <section className="bg-[#22466C] flex justify-between w-[945px] m-auto p-5 items-center relative top-5 z-50">
          <div>
            <h3 className="text-white">Subscribe</h3>
            <p className="text-white">To get the latest promo’s</p>
          </div>
          <div className="flex gap-10">
            {/* <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.94 4.94a1 1 0 011.32-.08l.1.08L10 10.59l5.64-5.63a1 1 0 011.32-.08l.1.08a1 1 0 01.08 1.32l-.08.1-6 6a1 1 0 01-1.32.08l-.1-.08-6-6a1 1 0 01-.08-1.32l.08-.1z" />
              </svg>
            </span> */}
            <input type="text" className="w-[408px] h-[54px] bg-white p-2" placeholder="Subscribe"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-[158px] flex items-center justify-center">

              Subscribe
            </button>
          </div>
        </section>



        <footer className="bg-[#00112C] p-20">
          <div className="flex justify-between">
            <div className="text-white">
              <h2 className="text-lg font-bold">PHOENIX TUTORIUM</h2>
              <p className="mt-2">Phone: (123) 456-7890</p>
              <p className="mt-2">Email: example@example.com</p>
            </div>
            <div className="text-white">
              <h2 className="text-lg font-bold">LOREM IPSUM</h2>
              <p className="mt-2">Lorem ipsum dolor sit amet</p>
              <p className="mt-2">Consectetur adipiscing elit</p>
            </div>
            <div className="text-white">
              <h2 className="text-lg font-bold">LOREM IPSUM</h2>
              <p className="mt-2">Lorem ipsum dolor sit amet</p>
              <p className="mt-2">Consectetur adipiscing elit</p>
            </div>
            <div className="text-white">
              <h2 className="text-lg font-bold">LOREM IPSUM</h2>
              <p className="mt-2">Lorem ipsum dolor sit amet</p>
              <p className="mt-2">Consectetur adipiscing elit</p>
            </div>
          </div>
        </footer>


      </div>
    </>
  );
}