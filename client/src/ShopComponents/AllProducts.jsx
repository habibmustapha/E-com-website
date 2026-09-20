import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../reused components/ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
        <div className="w-2/12 hidden min-[700px]:block">
          <h1 className="text-2xl font-bold py-3">Filter</h1>

          {/* Price */}
          <div className="border-b border-t py-3 border-gray-300">
            <h3 className="text-lg font-bold">Filter By price</h3>
          </div>

          {/* Category */}
          <div className="border-b py-3 border-gray-300">
            <h3 className="text-lg font-bold">Filter By category</h3>

            <ul className="pl-5">
              <li>
                <input type="checkbox" /> Laptops
              </li>

              <li>
                <input type="checkbox" /> Smartphones
              </li>

              <li>
                <input type="checkbox" /> Tablets
              </li>

              <li>
                <input type="checkbox" /> Accessories
              </li>

              <li>
                <input type="checkbox" /> Monitors
              </li>

              <li>
                <input type="checkbox" /> Audio
              </li>
            </ul>
          </div>

          {/* Brand */}
          <div className="border-b py-3 border-gray-300">
            <h3 className="text-lg font-bold">Filter By brand</h3>

            <ul className="pl-5">
              <li>
                <input type="checkbox" /> Apple
              </li>

              <li>
                <input type="checkbox" /> Samsung
              </li>

              <li>
                <input type="checkbox" /> Dell
              </li>

              <li>
                <input type="checkbox" /> Google
              </li>

              <li>
                <input type="checkbox" /> Logitech
              </li>

              <li>
                <input type="checkbox" /> Sony
              </li>
            </ul>
          </div>

          {/* Color */}
          <div className="border-b py-3 border-gray-300">
            <h3 className="text-lg font-bold">Filter By color</h3>

            <ul className="pl-5">
              <li>
                <input type="checkbox" /> Black
              </li>

              <li>
                <input type="checkbox" /> White
              </li>

              <li>
                <input type="checkbox" /> Silver
              </li>

              <li>
                <input type="checkbox" /> Blue
              </li>
            </ul>
          </div>
        </div>

        {/* Products */}
        <div className="w-full md:w-10/12 xl:w-10/12">
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-5">
            {products.length === 0 ? (
              <p>No products found.</p>
            ) : (
              products.map((product) => (
                <Link key={product.id} to={`/products/${product.id}`}>
                  <ProductCard products={product} />
                </Link>
              ))
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
      </div>
    </section>
  );
};

export default AllProducts;
