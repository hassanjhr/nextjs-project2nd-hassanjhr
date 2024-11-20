export default function Navbar() {
  return (
    <div>
      <header className="gap-20 container ml-20 pl-20 flex flex-wrap p-6 flex-col-reverse md:flex-row items-center ">
        <span className="flex mr-20 pl-2 gap-2">
          <div className="text-2xl font-bold ml-19 pl-20 ">BrandName</div>
          <nav>
            <ul className="md:mr-auto md:ml-4 md:py-1 md:pl-4 	flex flex-wrap items-center text-base justify-center">
              <li>
                <a href="#" className="text-white  mr-5 ml-10 font-normal">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white font-normal mr-5">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="text-white font-normal mr-5">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-white font-normal mr-5">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </span>

        <span>
          <div className="   pl-20 float-right ml-20">
            <a
              href="#"
              className="bg-transparent text-white font-normal py-2 px-4  mr-5"
            >
              Login
            </a>
            <a
              href="#"
              className="bg-[#23A6F0] text-white font-normal py-3 px-5  hover:bg-[#1A86C8] mr-5 rounded-tl-md rounded-bl-md  text-bold"
            >
              JOIN US
            </a>
          </div>
        </span>
      </header>{" "}
      <br />
      <br />
    </div>
  );
}
