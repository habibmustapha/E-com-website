import { FaArrowRight } from "react-icons/fa";

const CardCategory = ({ category }) => {
  return (
    <>
      <div className="cursor-pointer grid gap-2 p-7 justify-items-center bg-white shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden">
        <div className="w-full h-24 md:h-36 xl:h-56">
          <img
            src={category.image_url}
            alt={category.name}
            className="rounded-xl w-full h-24 md:h-36 xl:h-42 px-3"
          ></img>
        </div>
        <div className="justify-items-start gap-4 grid grid-cols-1">
          <h2 className="text-2xl font-medium text-start">{category.name}</h2>
          <p className="text-sm text-gray-500 line-clamp-2">
            {category.description}
          </p>

          <div className="rounded-full ">
            <div className="rounded-full bg-amber-200 p-2 h-fit">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCategory;
