const CardCategory = ({ category }) => {
  return (
    <>
      <div className="cursor-pointer grid gap-2 p-3 justify-items-center bg-white shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden">
        <div className="w-full h-24 md:h-36 xl:h-56">
          <img
            src={category.image}
            alt={category.name}
            className="rounded-xl w-full h-24 md:h-36 xl:h-42 px-3"
          ></img>
        </div>
        <div className="justify-items-center">
          <h2 className="text-xl ">{category.name}</h2>
          <p className="text-sm text-gray-500 line-clamp-2">
            {category.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardCategory;
