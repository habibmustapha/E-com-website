import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    promo_price: "",
    cat_id: "",
    brand: "",
    description: "",
    qty: "",
    image_url: "",
    rating: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:5001/api/products/${id}`,
          {
            credentials: "include",
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await response.json();

        setProduct({
          name: data.name || "",
          price: data.price || "",
          promo_price: data.promo_price || "",
          cat_id: data.cat_id || "",
          brand: data.brand || "",
          description: data.description || "",
          qty: data.qty || "",
          image_url: data.image_url || "",
          rating: data.rating || "",
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSaving(true);
    setError("");

    try {
      const response = await fetch(`http://localhost:5001/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to update product");
      }

      navigate(-1);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Loading product...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-[#D2B021]">
              Product Management
            </p>

            <h1 className="mt-1 text-3xl font-bold text-gray-900">
              Edit Product
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Update the information of this product.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate(-1  )}
            className="rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Product name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Product Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#D2B021] focus:ring-2 focus:ring-[#D2B021]/20"
                  required
                />
              </div>

              {/* Brand */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Brand
                </label>

                <input
                  type="text"
                  name="brand"
                  value={product.brand}
                  onChange={handleChange}
                  placeholder="Apple, Samsung, Google..."
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#D2B021] focus:ring-2 focus:ring-[#D2B021]/20"
                />
              </div>

              {/* Price */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Price
                </label>

                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#D2B021] focus:ring-2 focus:ring-[#D2B021]/20"
                  required
                />
              </div>

              {/* Promo price */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Promo Price
                </label>

                <input
                  type="number"
                  name="promo_price"
                  value={product.promo_price}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  placeholder="Optional"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#D2B021] focus:ring-2 focus:ring-[#D2B021]/20"
                />
              </div>

              {/* Category */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Category ID
                </label>

                <input
                  type="number"
                  name="cat_id"
                  value={product.cat_id}
                  onChange={handleChange}
                  min="1"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#D2B021] focus:ring-2 focus:ring-[#D2B021]/20"
                />
              </div>

              {/* Quantity */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Quantity
                </label>

                <input
                  type="number"
                  name="qty"
                  value={product.qty}
                  onChange={handleChange}
                  min="0"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#D2B021] focus:ring-2 focus:ring-[#D2B021]/20"
                />
              </div>

              {/* Rating */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Rating
                </label>

                <input
                  type="number"
                  name="rating"
                  value={product.rating}
                  onChange={handleChange}
                  min="0"
                  max="5"
                  step="0.1"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#D2B021] focus:ring-2 focus:ring-[#D2B021]/20"
                />
              </div>

              {/* Image */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Image URL
                </label>

                <input
                  type="text"
                  name="image_url"
                  value={product.image_url}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#D2B021] focus:ring-2 focus:ring-[#D2B021]/20"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Description
                </label>


                <textarea
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  rows="6"
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#D2B021] focus:ring-2 focus:ring-[#D2B021]/20"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex justify-end gap-3 border-t border-gray-100 pt-6">
              <button
                type="button"
                onClick={() => navigate(-1  )}
                className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={saving}
                className="rounded-xl bg-[#D2B021] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#e1c132] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
