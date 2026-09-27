import TotalPrice from "./TotalPrice";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

const CartProduct = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/cart/user", {
          credentials: "include",
        });

        const data = await response.json();

        if (!response.ok) {
          console.error(data.message);
          return;
        }

        console.log("CART:", data.cart);
        console.log("CART ITEMS:", data.items);

        setCartItems(data.items);
      } catch (err) {
        console.error("Failed to fetch cart:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleRemoveItem = async (cartItemId) => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/cartitems/${cartItemId}`,
        {
          method: "DELETE",
          credentials: "include",
        },
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Delete failed:", response.status, errorText);
        return;
      }

      setCartItems((prevItems) =>
        prevItems.filter((item) => item.cart_item_id !== cartItemId),
      );

      window.dispatchEvent(new Event("cartUpdated"));
    } catch (err) {
      console.error("Failed to remove cart item:", err);
    }
  };

  if (loading) {
    return <div>Loading cart...</div>;
  }

  if (!loading && cartItems.length === 0) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-xl font-semibold">Your cart is empty</h2>
        <p className="text-slate-500 mt-2">Add some products to your cart.</p>
      </section>
    );
  }

  return (
    <>
      <section className="bg-background text-text grid md:flex py-14 md:py-20 xl:py-20 md:px-5 md:pr-10 ">
        {/* desktop cart */}
        <div className="w-full md:w-8/12 px-5 hidden min-[800px]:block">
          <table className="w-full mt-5 gap-20 ">
            <thead>
              <tr className="h-10 border-b border-gray-300">
                <th> </th>
                <th className="w-7/12 text-left">product</th>
                <th>price</th>
                <th>quantity</th>
                <th>Sub-total</th>
              </tr>
            </thead>
            {cartItems.map((item) => (
              <tbody className="border-b border-gray-300">
                <tr className="w-full">
                  <td>
                    <X
                      onClick={() => handleRemoveItem(item.cart_item_id)}
                      className="text-text  hover:text-danger cursor-pointer"
                    />
                  </td>
                  <td className=" px-2">
                    <div className="flex items-center">
                      <img
                        src={item.image_url}
                        className="w-12 md:w-24 h-12 md:h-18 p-2"
                        alt=""
                      />
                      <h1 className="text-sm line-clamp-3 md:line-clamp-2">
                        {item.name}
                      </h1>
                    </div>
                  </td>
                  <td className="text-center">
                    {Number(item.unit_price).toLocaleString("fr-FR")} DA
                  </td>
                  <td className="">
                    <div className="flex justify-center">
                      <button className="w-6 md:w-8 h-8 border border-gray-300">
                        +
                      </button>
                      <span className="w-6 md:w-8 h-8 justify-center flex items-center border border-gray-300">
                        {item.qty}
                      </span>
                      <button className="w-6 md:w-8 h-8 border border-gray-300">
                        -
                      </button>
                    </div>
                  </td>
                  <td className="text-buttons font-semibold text-center">
                    {(
                      Number(item.promo_price ?? item.unit_price) * item.qty
                    ).toLocaleString("fr-FR")}
                    DA
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          <div className="pt-5 flex gap-5">
            <input
              type="text"
              className="border border-gray-300 py-2 px-5"
              placeholder="Code promo"
            />
            <button className="bg-primary px-5 py-2 rounded-lg cursor-pointer shadow-xl hover:shadow-sm">
              Apply cupon
            </button>
          </div>
        </div>

        {/* mobile cart */}
        <div className="px-3  pt-5 block min-[800px]:hidden">
          {cartItems.map((item) => (
            <div>
              <div className="flex pt-5 border-b border-gray-300 w-full">
                <X className="pt-3 h-8 w-8 text-danger hover:text-danger cursor-pointer" />
                <div className="flex-1 items-center">
                  <img
                    src={item.image}
                    className="w-24 h-auto justify-self-start"
                    alt=""
                  />
                </div>
                <div className="min-w-68 grid grid-cols-1">
                  <h3 className="h-10 pt-3">{item.name}</h3>
                  <div className="flex w-full h-fit justify-between items-center border-b py-2 border-gray-300">
                    <h3 className="font-bold text-gray-400">price</h3>
                    <h3 className="text-right">{item.price}</h3>
                  </div>
                  <div className="flex h-fit items-center w-full justify-between border-b py-2 border-gray-300">
                    <h3 className="font-bold text-gray-400">Quantity</h3>
                    <div className="flex justify-end">
                      <button className="w-6 md:w-8 h-8 border border-gray-300">
                        +
                      </button>
                      <span className="w-6 md:w-8 h-8 justify-center flex items-center border border-gray-300">
                        {item.qty}
                      </span>
                      <button className="w-6 md:w-8 h-8 border border-gray-300">
                        -
                      </button>
                    </div>
                  </div>
                  <div className="flex w-full h-10 items-center justify-between  py-2 border-gray-300">
                    <h3 className="font-bold text-gray-400">Sub Total</h3>
                    {(Number(item.unit_price) * item.qty).toFixed(2)} DA
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="pt-5 flex gap-5">
            <input
              type="text"
              className="border border-gray-300 py-2 px-5"
              placeholder="Code promo"
            />
            <button className="bg-primary px-5 py-2 rounded-lg cursor-pointer shadow-xl hover:shadow-sm">
              Apply cupon
            </button>
          </div>
        </div>
        <div className="w-full md:w-4/12 px-3 pt-10 md:pt-4 h-fit">
          <TotalPrice cartItems={cartItems} />
        </div>
      </section>
    </>
  );
};

export default CartProduct;
