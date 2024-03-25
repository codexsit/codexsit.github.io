import error404Image from "@/assets/images/error404.svg";

function PageNotFound() {
  return (
    <div className="w-full h-[calc(100vh-4.6rem)] flex items-center justify-center text-center">
      <div className="text-center">
        <img
          className="block m-auto xs:w-[90vw] sm:w-[70vw] md:w-[45vw]"
          src={error404Image}
          alt="Error 404"
        />
        <p className="text-white xs:m-6 xs:text-lg lg:text-xl">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}

export default PageNotFound;
