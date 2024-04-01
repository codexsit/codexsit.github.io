import Heading from "@/components/Heading";

function Home() {
  return (
    <>
      <div className="bg-background-dark h-[calc(100vh-4.6rem)] flex">
        <div className="m-auto">
          <div className="text-7xl md:text-9xl lg:text-[11rem] text-primary text-center font-gothic uppercase">
            Codex, SIT
          </div>
          <div className="text-lg md:text-2xl lg:text-3xl mt-4 text-text-light text-center">
            Coding Club
          </div>
        </div>
      </div>
      <Heading text="What do we do?" />
    </>
  );
}

export default Home;
