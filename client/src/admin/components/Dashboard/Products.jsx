import { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState(null);
  const [loding, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/products");
        if (!response.ok) {
          throw new Error("failed to fetch products");
        }
        const data = await response.json();

        setProduct(data);
      } catch (err) {
        console.error("error fetching products", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loding) {
    return (
      <section className="bg-background text-text py-15 md:py-20 px-5">
        <p>Loading products...</p>
      </section>
    );
  }
  return (
    <>
      <section className=" overflow-x-hidden w-full justify-center  px-10 my-10">
        <div className="w-full px-4 py-4 bg-surface overflow-auto rounded-2xl h-200 shadow-md">
          <table className="w-full ">
            <tr className="font-medium sticky top-0 z-10 bg-surface shadow-md text-lg text-left border-b border-gray-300 pb-5">
              <th className="px-2 py-2 sticky top-0 z-10 bg-surface">id</th>
              <th className="px-2 py-2 sticky top-0 z-10 bg-surface">
                product Image
              </th>
              <th className="px-2 py-2 sticky top-0 z-10 bg-surface">
                product
              </th>
              <th className="px-2 py-2 sticky top-0 z-10 bg-surface">qty</th>
              <th className="px-2 py-2 sticky top-0 z-10 bg-surface">
                Unit price
              </th>
              <th className="px-2 py-2 sticky top-0 z-10 bg-surface">
                Actions
              </th>
            </tr>
            {product.length === 0 ? (
              <h1>No product found</h1>
            ) : (
              product.map((product) => (
                <tr className="items-center">
                  <td className="px-2 py-2">
                    <h1>{product.id}</h1>
                  </td>
                  <td className="px-2 py-2">
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </td>
                  <td className="px-2 py-2">
                    <h1>{product.name}</h1>
                  </td>
                  <td className="px-2 py-2">
                    <h1>{product.qty}</h1>
                  </td>
                  <td className="px-2 py-2">
                    <h1>{product.price} DZD</h1>
                  </td>
                  <td>
                    <div className="px-2 py-2 flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-green-600 flex items-center justify-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="#fff"
                          stroke="#fff"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-pen"
                        >
                          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                        </svg>
                      </div>
                      <div className="h-10 w-10 rounded-lg bg-danger flex items-center justify-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          stroke-width="1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-trash"
                        >
                          <path d="M10 11v6" />
                          <path d="M14 11v6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                          <path d="M3 6h18" />
                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </table>
        </div>
      </section>
    </>
  );
};

export default Products;
