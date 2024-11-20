export default function Hero() {
  return (
    <div>
      <main className="text-center py-20 px-4 max-w-2xl mx-auto">
        <h5 className="text-[#23A6F0] font-medium  mb-8">Welcome</h5>
        <h1 className="text-6xl font-bold mb-5 ">Selling on the</h1>
        <h1 className="text-6xl font-bold mb-10 ">internet like a pro</h1>

        <p className="text-2xl text-white mb-12">
          We know how large objects will act, but things on a <br /> small scale
          just do not act that way.
        </p>
        <div className="space-x-4">
          <a
            href="#"
            className="bg-[#23A6F0] text-white font-medium py-4 px-9 rounded-md"
          >
            Get Quote Now
          </a>
          <a
            href="#"
            className="border-2 border-[#23A6F0] text-[#23A6F0] font-medium py-4 px-9 rounded-md"
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  );
}
