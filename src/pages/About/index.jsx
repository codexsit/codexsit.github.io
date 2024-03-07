import Heading from "@/components/Heading/index";
import Stock1 from "@/assets/images/About/stockimage1.svg";
import Stock3 from "@/assets/images/About/stockimage3.svg";
import Stock4 from "@/assets/images/About/stockimage4.svg";
import Oval from "@/assets/images/About/oval.svg";

function About() {
  return (
    <div>
      <div className="min-h-screen">
        <Heading
          text="ABOUT US"
          className="my-6"
          frontTextStyle="text-text-light"
        />
        <div className="flex flex-grow flex-wrap items-center overflow-hidden">
          <div className="container space-y-8">
            <p className="p-2 px-64 mx-auto m-w-12 text-xl text-wrap text-text-light text-center mt-6 space-y-16">
              Praesent vestibulum libero non diam consequat euismod. Maecenas
              purus sapien, mollis ut dapibus et, varius in ipsum. Morbi mollis
              varius tincidunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <img
              src={Stock1}
              alt="Stock1"
              className="m-h-12 m-w-12 mx-auto space-y-8 rounded-2xl"
            />
          </div>
        </div>
        <Heading
          text="OUR MISSION"
          className="my-12"
          frontTextStyle="text-text-light"
        />
        <div className="flex flex-grow flex-wrap items-center relative">
          <div className="container space-y-8">
            <p className="p-2 px-64 mx-auto m-w-12 text-xl text-wrap text-text-light text-center mt-6 space-y-16">
              Praesent vestibulum libero non diam consequat euismod. Maecenas
              purus sapien, mollis ut dapibus et, varius in ipsum. Morbi mollis
              varius tincidunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <div className="w-48 h-24 rounded-tl-full rounded-tr-full bg-background-light absolute -bottom-15 right-20">
              {}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background-light min-h-screen relative">
        <div className="w-48 h-24 rounded-bl-full rounded-br-full bg-primary absolute bottom-15 right-20">
          {}
        </div>
        <Heading
          text="OUR VISION"
          className="mt-32"
          frontTextStyle="text-primary"
        />
        <div className="container space-y-8">
          <p className="p-2 px-64 py-32 space-y-16 mx-auto m-w-12 text-xl text-wrap text-text-dark text-center mt-6">
            Praesent vestibulum libero non diam consequat euismod. Maecenas
            purus sapien, mollis ut dapibus et, varius in ipsum. Morbi mollis
            varius tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>
        <div className="width-full">
          <img src={Oval} alt="Oval" className="absolute bottom-0" />
        </div>
      </div>
      <div className="min-h-screen overflow-hidden">
        <div className="items-center relative">
          <Heading
            text="WHAT WE DO?"
            className="mt-40 space-y-16"
            frontTextStyle="text-text-light"
          />
          <div className="w-20 h-20 rounded-full bg-primary absolute -top-10 right-10">
            {}
          </div>
        </div>
        <div className="flex flex-wrap items-center relative">
          <div className="space-y-8">
            <p className="p-2 px-64 mx-auto m-w-12 text-xl text-wrap text-text-light text-center mt-6 space-y-6">
              Praesent vestibulum libero non diam consequat euismod. Maecenas
              purus sapien, mollis ut dapibus et, varius in ipsum. Morbi mollis
              varius tincidunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <div className="w-12 h-12 rounded-full bg-background-light absolute top-2 left-10">
              {}
            </div>
            <div className="flex flex-row items-center flex-grow px-64 py-8">
              <img
                src={Stock1}
                alt="Stock1"
                className="h-96 w-96 object-none mx-auto"
              />
              <div className="w-24 h-24 rounded-full bg-background-light absolute top-60 right-48">
                {}
              </div>
              <img
                src={Stock3}
                alt="Stock3"
                className="h-96 w-96 mx-auto z-0"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-fit my-48 px-8">
        <div className="flex flex-row">
          <img src={Stock4} alt="Stock4" className="max-h-96 max-w-96" />
          <div className="flex flex-wrap px-12 mt-12">
            <p className="text-5xl text-text-light font-bold max-w-screen font-poppins">
              OUR VISION
            </p>
            <p className="mx-auto max-w-screen text-xl text-wrap text-text-light text-left">
              Praesent vestibulum libero non diam consequat euismod. Maecenas
              purus sapien, mollis ut dapibus et, varius in ipsum. Morbi mollis
              varius tincidunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
