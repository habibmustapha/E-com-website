import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    address: "",
    city: "",
    postal_code: "",
  });

  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const shippingFee = shippingMethod === "standard" ? 600 : 1000;

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/cart/user", {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch cart");
        }

        const data = await response.json();

        setCartItems(data.items || []);
      } catch (err) {
        console.error("Failed to fetch cart:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.unit_price) * Number(item.qty),
    0,
  );

  const total = subtotal + shippingFee;

  const formatPrice = (price) => {
    return Number(price).toLocaleString("fr-FR", {
      maximumFractionDigits: 0,
    });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      console.log("Cart is empty");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/api/orders", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          address: formData.address,
          phone: formData.phone,
          total_price: total,
          wilaya: formData.wilaya,
          communes: formData.communes,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Order failed:", data);
        return;
      }

      console.log("ORDER SUCCESS:", data);

      // SHOW TOAST
      console.log("SHOWING SUCCESS TOAST");
      setShowSuccess(true);

      // Update cart badge
      window.dispatchEvent(new Event("cartUpdated"));

      // Redirect after 3 seconds
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      console.error("Failed to place order:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading checkout...</p>
      </div>
    );
  }

  return (
    <>
      {showSuccess && (
        <div className="fixed top-6 right-6 z-9999 w-96 bg-white border border-gray-200 shadow-2xl rounded-xl p-4 flex items-center gap-4">
          <div className="relative w-12 h-12 shrink-0">
            <svg className="w-12 h-12 -rotate-90" viewBox="0 0 40 40">
              <circle
                cx="20"
                cy="20"
                r="16"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="4"
              />

              <circle
                cx="20"
                cy="20"
                r="16"
                fill="none"
                stroke="#22c55e"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="100"
                strokeDashoffset="100"
                className="checkout-progress"
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-green-500 text-xl font-bold">✓</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">
              Order placed successfully
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Your order has been confirmed.
            </p>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-900">Checkout</h1>

            <p className="text-gray-500 mt-2">
              Complete your order details below.
            </p>
          </div>

          <form
            onSubmit={handlePlaceOrder}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* LEFT SIDE */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Information */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-6">
                  Shipping Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name
                    </label>

                    <input
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name
                    </label>

                    <input
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Address
                    </label>

                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows="3"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Postal Code
                    </label>

                    <input
                      type="text"
                      name="postal_code"
                      value={formData.postal_code}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Method */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-6">Delivery Method</h2>

                <div className="space-y-4">
                  <label className="flex items-center justify-between border border-gray-200 rounded-lg p-4 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shipping"
                        value="standard"
                        checked={shippingMethod === "standard"}
                        onChange={(e) => setShippingMethod(e.target.value)}
                      />

                      <div>
                        <p className="font-medium">Standard Delivery</p>

                        <p className="text-sm text-gray-500">
                          2–5 business days
                        </p>
                      </div>
                    </div>

                    <span className="font-medium">600 DA</span>
                  </label>

                  <label className="flex items-center justify-between border border-gray-200 rounded-lg p-4 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shipping"
                        value="express"
                        checked={shippingMethod === "express"}
                        onChange={(e) => setShippingMethod(e.target.value)}
                      />

                      <div>
                        <p className="font-medium">Express Delivery</p>

                        <p className="text-sm text-gray-500">
                          1–2 business days
                        </p>
                      </div>
                    </div>

                    <span className="font-medium">1 000 DA</span>
                  </label>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-6">Payment Method</h2>

                <label className="flex items-center gap-3 border border-gray-200 rounded-lg p-4 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />

                  <div>
                    <p className="font-medium">Cash on Delivery</p>

                    <p className="text-sm text-gray-500">
                      Pay when your order arrives.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-6">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                {/* Products */}
                <div className="space-y-5">
                  {cartItems.map((item) => (
                    <div key={item.cart_item_id} className="flex gap-4">
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg border"
                      />

                      <div className="flex-1">
                        <h3 className="font-medium text-sm">{item.name}</h3>

                        <p className="text-sm text-gray-500 mt-1">
                          Qty: {item.qty}
                        </p>

                        <p className="font-medium mt-2">
                          {formatPrice(
                            Number(item.unit_price) * Number(item.qty),
                          )}{" "}
                          DA
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 my-6" />

                {/* Prices */}
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)} DA</span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Delivery</span>
                    <span>{formatPrice(shippingFee)} DA</span>
                  </div>

                  <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>{formatPrice(total)} DA</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 bg-black text-white py-3.5 rounded-lg font-medium hover:bg-gray-800 transition"
                >
                  Place Order
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/cart")}
                  className="w-full mt-3 border border-gray-300 py-3.5 rounded-lg font-medium hover:bg-gray-50 transition"
                >
                  Back to Cart
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
