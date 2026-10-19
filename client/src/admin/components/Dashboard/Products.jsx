import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5001/api";

const emptyForm = {
  name: "",
  price: "",
  promo_price: "",
  cat_id: "",
  brand: "",
  qty: "0",
  description: "",
  image_url: "",
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/products`);
      if (!response.ok) throw new Error("Failed to fetch products");

      setProducts(await response.json());
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Could not load products. Please refresh the page.");
    } finally {
      setLoading(false);
    }
  };

  // const fetchCategories = async () => {
  //   try {
  //     const response = await fetch(`${API_URL}/categories`);
  //     if (!response.ok) throw new Error("Failed to fetch categories");

  //     setCategories(await response.json());
  //   } catch (err) {
  //     console.error("Error fetching categories:", err);
  //     setError("Could not load categories. Check your category API route.");
  //   }
  // };

  useEffect(() => {
    let cancelled = false;

    const loadInitialData = async () => {
      try {
        const [productsResponse, categoriesResponse] = await Promise.all([
          fetch(`${API_URL}/products`),
          fetch(`${API_URL}/categories`),
        ]);

        if (!productsResponse.ok) {
          throw new Error("Failed to fetch products");
        }

        if (!categoriesResponse.ok) {
          throw new Error("Failed to fetch categories");
        }

        const [productsData, categoriesData] = await Promise.all([
          productsResponse.json(),
          categoriesResponse.json(),
        ]);

        if (cancelled) return;

        setProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        if (cancelled) return;

        console.error("Error loading products:", err);
        setError("Could not load products or categories. Please refresh.");
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadInitialData();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const openModal = () => {
    setError("");
    setSuccess("");
    setForm(emptyForm);
    setShowModal(true);
  };

  const closeModal = () => {
    if (saving) return;
    setShowModal(false);
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    const price = Number(form.price);
    const qty = Number(form.qty);
    const promoPrice =
      form.promo_price.trim() === "" ? null : Number(form.promo_price);

    if (!form.name.trim()) {
      setError("Product name is required.");
      return;
    }

    if (form.price.trim() === "" || !Number.isFinite(price) || price <= 0) {
      setError("Enter a valid price greater than zero.");
      return;
    }

    if (form.qty.trim() === "" || !Number.isInteger(qty) || qty < 0) {
      setError("Quantity must be a non-negative whole number.");
      return;
    }

    if (
      promoPrice !== null &&
      (!Number.isFinite(promoPrice) || promoPrice <= 0 || promoPrice >= price)
    ) {
      setError("Promotional price must be lower than the regular price.");
      return;
    }

    setSaving(true);

    try {
      const response = await fetch(`${API_URL}/products`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          price,
          promo_price: promoPrice,
          cat_id: form.cat_id || null,
          brand: form.brand.trim() || null,
          qty,
          description: form.description.trim() || null,
          image_url: form.image_url.trim() || null,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Failed to create product.");
      }

      await fetchProducts();

      setShowModal(false);
      setForm(emptyForm);
      setSuccess("Product added successfully.");
    } catch (err) {
      console.error("Create product error:", err);
      setError(err.message || "Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/products/${productId}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete product.");
      }

      setProducts((previous) =>
        previous.filter((product) => product.id !== productId),
      );
      setSuccess("Product deleted successfully.");
      setError("");
    } catch (err) {
      console.error("Delete product error:", err);
      setError(err.message || "Could not delete product.");
    }
  };

  if (loading) {
    return (
      <section className="px-5 py-10 text-text">
        <p>Loading products...</p>
      </section>
    );
  }

  return (
    <section className="flex h-full min-h-0 min-w-0 flex-col overflow-hidden px-3 py-3 sm:px-5 sm:py-4 lg:px-6">
      {/* Header */}
      <div className="mb-5 flex shrink-0 flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text">Products</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your store inventory.
          </p>
        </div>

        <button
          type="button"
          onClick={openModal}
          className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
        >
          + Add Product
        </button>
      </div>

      {success && (
        <p
          role="status"
          className="mb-3 shrink-0 rounded-lg bg-green-100 p-3 text-green-800"
        >
          {success}
        </p>
      )}

      {error && !showModal && (
        <p
          role="alert"
          className="mb-3 shrink-0 rounded-lg bg-red-100 p-3 text-red-700"
        >
          {error}
        </p>
      )}

      {/* Keep scrolling inside this container, as in the smooth version. */}
      <div className="min-h-0 min-w-0 flex-1 overflow-auto rounded-xl border border-gray-200 bg-surface shadow-md">
        <table className="w-full min-w-162.5 border-collapse text-left">
          <thead className="sticky top-0 z-10 bg-surface shadow-sm">
            <tr className="border-b border-gray-300 text-sm">
              <th className="px-4 py-4">ID</th>
              <th className="px-4 py-4">Image</th>
              <th className="px-4 py-4">Product</th>
              <th className="px-4 py-4">Quantity</th>
              <th className="px-4 py-4">Unit price</th>
              <th className="px-4 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-10 text-center text-gray-500"
                >
                  No products found.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-gray-200 last:border-0"
                >
                  <td className="px-4 py-3">{product.id}</td>

                  <td className="px-4 py-3">
                    {product.image_url ? (
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="h-14 w-14 rounded-lg object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-100 text-xs text-gray-500">
                        No image
                      </div>
                    )}
                  </td>

                  <td className="px-4 py-3 font-medium">{product.name}</td>
                  <td className="px-4 py-3">{product.qty}</td>
                  <td className="px-4 py-3">{product.price} DZD</td>

                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        title="Edit product"
                        aria-label={`Edit ${product.name}`}
                        onClick={() =>
                          navigate(`/admin/products/${product.id}/edit`)
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-600 text-white hover:bg-green-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="m16 4 4 4L8 20H4v-4Z" />
                          <path d="m14 6 4 4" />
                        </svg>
                      </button>

                      <button
                        type="button"
                        title="Delete product"
                        aria-label={`Delete ${product.name}`}
                        onClick={() => handleDelete(product.id)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-white hover:bg-red-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M3 6h18" />
                          <path d="M8 6V4h8v2" />
                          <path d="m19 6-1 14H6L5 6" />
                          <path d="M10 11v5" />
                          <path d="M14 11v5" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add Product Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-product-title"
            className="my-auto max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2
                  id="add-product-title"
                  className="text-xl font-bold text-gray-900"
                >
                  Add a product
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Enter the product details below.
                </p>
              </div>

              <button
                type="button"
                onClick={closeModal}
                disabled={saving}
                aria-label="Close modal"
                className="rounded-lg px-3 py-2 text-xl text-gray-500 hover:bg-gray-100 disabled:opacity-50"
              >
                ×
              </button>
            </div>

            {error && (
              <p
                role="alert"
                className="mb-4 rounded-lg bg-red-100 p-3 text-sm text-red-700"
              >
                {error}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Product name *
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  maxLength={255}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="e.g. Logitech G502 Mouse"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="price"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Price (DZD) *
                  </label>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={form.price}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    placeholder="12500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="promo_price"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Promotional price (DZD)
                  </label>
                  <input
                    id="promo_price"
                    name="promo_price"
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={form.promo_price}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    placeholder="Optional"
                  />
                </div>

                <div>
                  <label
                    htmlFor="qty"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Quantity *
                  </label>
                  <input
                    id="qty"
                    name="qty"
                    type="number"
                    min="0"
                    step="1"
                    value={form.qty}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="cat_id"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Category
                  </label>
                  <select
                    id="cat_id"
                    name="cat_id"
                    value={form.cat_id}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">No category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="brand"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Brand
                  </label>
                  <input
                    id="brand"
                    name="brand"
                    value={form.brand}
                    onChange={handleChange}
                    maxLength={100}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    placeholder="e.g. Logitech"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="image_url"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Image URL
                  </label>
                  <input
                    id="image_url"
                    name="image_url"
                    type="url"
                    value={form.image_url}
                    onChange={handleChange}
                    maxLength={255}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    placeholder="https://example.com/product.jpg"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    placeholder="Describe the product..."
                  />
                </div>
              </div>

              <div className="flex flex-col-reverse gap-3 border-t border-gray-200 pt-5 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={saving}
                  className="rounded-lg border border-gray-300 px-5 py-2.5 font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving ? "Saving product..." : "Save product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
