function Error404Page() {
  return (
    <>
      <div className="mt-[80px] h-full flex flex-col space-y-4 justify-center items-center">
        <h1 className="leading-[150px] cursor-help text-[240px] font-handwriting font-bold hover:text-gray-700 transition-all ease-in-out">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl italic font-medium">
          Hic sunt dracones...
        </h2>
        <h2 className="text-xl sm:text-2xl italic">Here there be dragons...</h2>
        <a href="/" className="text-2xl hover:underline text-blue-600">
          Take me home
        </a>
      </div>
    </>
  );
}

export default Error404Page;
