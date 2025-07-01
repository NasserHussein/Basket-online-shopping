import Aboutpeople from "../../assets/about-people.jpg.png"

export default function AboutUs() {
  return (
    <>
      <div className=" h-[400px] flex flex-col items-center justify-center bg-[url('/src/assets/about-header.jpg.png')] bg-cover bg-center text-center text-white shadow-md">
        <div className="flex h-full w-full flex-col items-center justify-center bg-[#00000066]">
          <h2 className="text-4xl font-bold">About for Bacola</h2>
          <span className=" py-2 text-[12px] uppercase tracking-widest">We can do more for you</span>
        </div>
      </div>

      <div className="content-two mx-auto w-3/4">
        <div className="description-1">
          <p className="mt-7 mb-6">
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut
            libero commodo iaculis. Donec augue diam, tristique et ultricies
            nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id
            lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus
            in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum
            turpis. Curabitur porta auctor quam, pretium facilisis nisl.
            Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
          </p>
          <h1 className="mb-7 ml-7 text-xl font-bold">
            Quisque erat urna, congue et libero in <br /> eleifend euismod
            velit.
          </h1>
          <p className="mb-4 ml-7">
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut
            libero commodo iaculis. Donec augue diam, tristique et ultricies
            nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id
            lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus
            in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum
            turpis. Curabitur porta auctor quam, pretium facilisis nisl.
            Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
          </p>
        </div>

        <div className=" mt-10 relative flex flex-col items-start gap-6 lg:flex-row md:items-stretch">

          <div className="relative w-full h-1/2 lg:h-full lg:w-1/2">
            <img
              src={Aboutpeople}
              alt="About people"
              className="h-full w-full object-cover"
            />
          </div>

          <div className=" relative flex w-full flex-col justify-start lg:w-1/2 px-4 lg:px-8 py-6">
            <p className="mb-2 mt-8 text-sm text-gray-600">
              Rachel Leonard - Bacola CEO
            </p>

            <h2 className=" my-4 text-2xl font-bold leading-tight lg:text-3xl text-gray-900">
              Duis convallis luctus pretium. <br /> Pellentesque habitant morbi
            </h2>

            <p className="mb-4 text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>

            <p className="mb-4 text-gray-700 leading-relaxed">
              In fermentum mi ut sapien semper, a sagittis lorem vulputate.
              Integer gravida, dui eget aliquet tempus, turpis orci vehicula
              ipsum, eget porttitor sapien tortor at neque. Cras id pulvinar
              lacus, ac volutpat neque. Ut at magna id justo bibendum lobortis.
              Integer tortor nulla, ultricies et nisi sit amet, interdum dictum
              felis. In semper laoreet dui vitae pharetra. Etiam sit amet
              molestie nulla, eu efficitur orci. Praesent rutrum ante justo,
              eget malesuada ante ornare ac. Ut dignissim blandit urna, eget
              euismod leo rhoncus nec. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Quisque lobortis
              libero ante. Nullam in feugiat erat. Aenean sed justo dapibus,
              sodales nisi ut, fringilla lorem. Vestibulum in orci ac nisl
              condimentum fermentum at et sem. Curabitur fermentum dolor eu
              lacus consectetur varius.
            </p>

            <p className="absolute hidden xl:block bottom-0 lg:-bottom-10 left-0 lg:-left-[500px] lg:px-32 lg:py-8 z-10 lg:mt-0 rounded bg-white text-gray-800">
              In nec purus eget neque accumsan finibus. Duis condimentum elit ut
              libero commodo iaculis. Donec augue diam, tristique et ultricies
              nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus
              id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum
              metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id
              interdum turpis. Curabitur porta auctor quam, pretium facilisis
              nisl. Pellentesque efficitur elit ante, vel vulputate tortor
              blandit nec.
            </p>
          </div>
        </div>

        <footer className=" mt-4 lg:mt-24 mb-8">
          <p>
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut
            libero commodo iaculis. Donec augue diam, tristique et ultricies
            nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id
            lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus
            in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum
            turpis. Curabitur porta auctor quam, pretium facilisis nisl.
            Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
          </p>
        </footer>
      </div>
    </>
  );
}
