import { useState, useEffect } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/categories");

        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }

        const data = await response.json();
        setCategories(data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <section className="bg-background text-text py-15 md:py-20 px-5">
        <p>Loading categories...</p>
      </section>
    );
  }

  return (
    <section className="w-full px-10 my-10">
      <div className="w-full px-4 py-4 bg-surface overflow-auto rounded-2xl h-200 shadow-md">
        <table className="w-full min-w-225">
          <thead>
            <tr className="font-medium sticky top-0 z-10 bg-surface shadow-md text-lg text-left border-b border-gray-300">
              <th className="px-4 py-4">ID</th>
              <th className="px-4 py-4">Product Image</th>
              <th className="px-4 py-4">Product</th>
              <th className="px-4 py-4">Description</th>
              <th className="px-4 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-10">
                  No categories found
                </td>
              </tr>
            ) : (
              categories.map((category) => (
                <tr key={category.id} className="border-b border-gray-200">
                  {/* ID */}
                  <td className="px-4 py-4">{category.id}</td>

                  {/* Image */}
                  <td className="px-4 py-4">
                    {category.image_url ? (
                      <img
                        src={category.image_url}
                        alt={category.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-lg bg-gray-200 flex items-center justify-center text-sm">
                        No image
                      </div>
                    )}
                  </td>

                  {/* Name */}
                  <td className="px-4 py-4">{category.name}</td>

                  {/* Description */}
                  <td className="px-4 py-4 max-w-md">{category.description}</td>

                  {/* Actions */}
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-center gap-4">
                      {/* Edit */}
                      <button
                        type="button"
                        className="h-10 w-10 rounded-lg bg-green-600 flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                        </svg>
                      </button>

                      {/* Delete */}
                      <button
                        type="button"
                        className="h-10 w-10 rounded-lg bg-danger flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M10 11v6" />
                          <path d="M14 11v6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                          <path d="M3 6h18" />
                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
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
    </section>
  );
};

export default Categories;
