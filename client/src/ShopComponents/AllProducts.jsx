import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../reused components/ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const price = Number(product.promo_price ?? product.price);

    // Category filter
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const matchesBrand =
      selectedBrand.length === 0 || selectedBrand.includes(product.brand);

    // Price filter
    const matchesMinPrice = minPrice === "" || price >= Number(minPrice);

    const matchesMaxPrice = maxPrice === "" || price <= Number(maxPrice);

    return (
      matchesCategory && matchesMinPrice && matchesMaxPrice && matchesBrand
    );
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category],
    );

    setCurrentPage(1);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item !== brand)
        : [...prev, brand],
    );

    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrand([]);
    setMinPrice("");
    setMaxPrice("");
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <section className="bg-background text-text py-15 md:py-20 px-5">
        <p>Loading products...</p>
      </section>
    );
  }

  return (
    <section className="bg-background text-text py-15 md:py-20 px-5">
      <h1 className="text-2xl font-bold">All Products</h1>

      <h3 className="text-lg py-4 underline">Home / Shop</h3>

      <div className="flex w-full gap-10">
        {/* Filters */}
        {/* Filters */}
        <aside className="hidden min-[700px]:block w-2/12 shrink-0">
          <div className="sticky top-28">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Filters</h2>

              <button
                onClick={clearFilters}
                className="text-xs text-gray-500 hover:text-text transition cursor-pointer"
              >
                Clear all
              </button>
            </div>

            <div className="bg-card rounded-2xl border border-gray-200 overflow-hidden">
              {/* Price */}
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold mb-4">Price</h3>

                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-full min-w-0 rounded-lg border border-gray-300 bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  />

                  <span className="text-gray-400">–</span>

                  <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-full min-w-0 rounded-lg border border-gray-300 bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold mb-3">Category</h3>

                <div className="space-y-2">
                  {[
                    "Laptops",
                    "Smartphones",
                    "Tablets",
                    "Accessories",
                    "Monitors",
                    "Audio",
                  ].map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-3 cursor-pointer text-sm hover:text-primary transition"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="h-4 w-4 accent-primary"
                      />

                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand */}
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold mb-3">Brand</h3>

                <div className="space-y-2">
                  {[
                    "Apple",
                    "Samsung",
                    "Dell",
                    "Google",
                    "Logitech",
                    "Sony",
                  ].map((brand) => (
                    <label
                      key={brand}
                      className="flex items-center gap-3 cursor-pointer text-sm hover:text-primary transition"
                    >
                      <input
                        type="checkbox"
                        checked={selectedBrand.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
                        className="h-4 w-4 accent-primary"
                      />

                      <span>{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div className="p-4">
                <h3 className="font-semibold mb-3">Color</h3>

                <div className="space-y-2">
                  {["Black", "White", "Silver", "Blue"].map((color) => (
                    <label
                      key={color}
                      className="flex items-center gap-3 cursor-pointer text-sm hover:text-primary transition"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 accent-primary"
                      />

                      <span>{color}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Products */}

        <div className="w-full md:w-10/12 xl:w-10/12">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              {filteredProducts.length === 0
                ? "No products found"
                : `Showing ${startIndex + 1}–${Math.min(
                    startIndex + productsPerPage,
                    filteredProducts.length,
                  )} of ${filteredProducts.length} products`}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-5">
            {currentProducts.length === 0 ? (
              <p className="col-span-full py-10 text-center">
                No products match your filters.
              </p>
            ) : (
              currentProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <ProductCard products={product} />
                </Link>
              ))
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              aria-label="Product pagination"
              className="flex flex-wrap items-center justify-center gap-2 pt-8"
            >
              <button
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                className="rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    aria-current={currentPage === page ? "page" : undefined}
                    className={`h-10 min-w-10 rounded-lg border px-3 transition ${
                      currentPage === page
                        ? "border-primary bg-primary text-white"
                        : "border-gray-300 hover:bg-primary hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                onClick={() =>
                  setCurrentPage((page) => Math.min(totalPages, page + 1))
                }
                disabled={currentPage === totalPages}
                className="rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            </nav>
          )}
        </div>

        {/* Pagination */}
        {/* 
          <div className="pt-5">
            <Paginations.PaginationCardDefault
              page={currentPage}
              onPageChange={setCurrentPage}
            />
          </div> 
          */}
      </div>
    </section>
  );
};

export default AllProducts;
