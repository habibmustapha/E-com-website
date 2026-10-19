import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setError("");

        const response = await fetch("http://localhost:5001/api/categories");

        if (!response.ok) {
          throw new Error("Failed to fetch categories.");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Unexpected categories response.");
        }

        setCategories(data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleDelete = async (categoryId) => {
    const category = categories.find((item) => item.id === categoryId);

    if (!category) return;

    const confirmed = window.confirm(
      `Are you sure you want to delete "${category.name}"?`,
    );

    if (!confirmed) return;

    try {
      setDeletingId(categoryId);

      const response = await fetch(
        `http://localhost:5001/api/categories/${categoryId}`,
        {
          method: "DELETE",
          credentials: "include",
        },
      );

      if (!response.ok) {
        const text = await response.text();
        let data = {};

        try {
          data = text ? JSON.parse(text) : {};
        } catch {
          data = {};
        }

        throw new Error(data.message || "Failed to delete category.");
      }

      setCategories((prev) => prev.filter((item) => item.id !== categoryId));
    } catch (err) {
      console.error("Delete category error:", err);
      window.alert(err.message || "Failed to delete category.");
    } finally {
      setDeletingId(null);
    }
  };

  const pageContainer = "w-full min-w-0 px-4 py-6 sm:px-6 lg:px-8";

  if (loading) {
    return (
      <section className={pageContainer}>
        <div className="flex min-h-64 items-center justify-center rounded-2xl border border-gray-200 bg-white">
          <div className="flex items-center gap-3 text-gray-500">
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600" />
            <span className="text-sm font-medium">Loading categories...</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={pageContainer}>
      {/* Page heading */}
      <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-medium text-blue-600">
            CATALOG MANAGEMENT
          </p>

          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Categories
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage your product categories and their details.
          </p>
        </div>

        <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </span>

          <div>
            <p className="text-xs text-gray-500">Total categories</p>
            <p className="text-lg font-bold text-gray-900">
              {categories.length}
            </p>
          </div>
        </div>
      </div>

      {/* Categories table */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="flex flex-col gap-1 border-b border-gray-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-semibold text-gray-900">All categories</h2>

          <p className="text-sm text-gray-500">
            {categories.length}{" "}
            {categories.length === 1 ? "category" : "categories"}
          </p>
        </div>

        {error ? (
          <div className="p-8 text-center">
            <p className="font-medium text-red-600">
              Could not load categories
            </p>
            <p className="mt-2 text-sm text-gray-500">{error}</p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Try again
            </button>
          </div>
        ) : categories.length === 0 ? (
          <div className="flex min-h-64 flex-col items-center justify-center px-6 py-12 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            </div>

            <h3 className="font-semibold text-gray-900">No categories yet</h3>

            <p className="mt-1 max-w-sm text-sm text-gray-500">
              Your product categories will appear here once they have been
              created.
            </p>
          </div>
        ) : (
          <div className="max-w-full overflow-x-auto">
            <table className="w-full min-w-212.5 border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/80">
                  <th className="w-20 px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    ID
                  </th>

                  <th className="w-28 px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Image
                  </th>

                  <th className="min-w-48 px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Category
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Description
                  </th>

                  <th className="w-36 px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {categories.map((category) => (
                  <tr
                    key={category.id}
                    className="transition-colors hover:bg-gray-50/80"
                  >
                    <td className="px-5 py-4 align-middle">
                      <span className="font-mono text-sm text-gray-500">
                        #{category.id}
                      </span>
                    </td>

                    <td className="px-5 py-4 align-middle">
                      {category.image_url ? (
                        <img
                          src={category.image_url}
                          alt={category.name || "Category"}
                          className="h-14 w-14 rounded-xl border border-gray-200 bg-white object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-xs text-gray-400">
                          No image
                        </div>
                      )}
                    </td>

                    <td className="px-5 py-4 align-middle">
                      <p className="font-semibold text-gray-900">
                        {category.name}
                      </p>
                    </td>

                    <td className="max-w-sm px-5 py-4 align-middle">
                      <p className="line-clamp-2 text-sm leading-6 text-gray-500">
                        {category.description || "No description provided"}
                      </p>
                    </td>

                    <td className="px-5 py-4 align-middle">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          type="button"
                          title="Edit category"
                          aria-label={`Edit ${category.name}`}
                          onClick={() =>
                            navigate(`/admin/categories/${category.id}/edit`)
                          }
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L9 17l-4 1 1-4Z" />
                          </svg>
                        </button>

                        <button
                          type="button"
                          title="Delete category"
                          aria-label={`Delete ${category.name}`}
                          disabled={deletingId === category.id}
                          onClick={() => handleDelete(category.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {deletingId === category.id ? (
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-red-500" />
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="17"
                              height="17"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
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
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!error && categories.length > 0 && (
          <div className="border-t border-gray-200 bg-gray-50/60 px-5 py-3">
            <p className="text-xs text-gray-500">
              Showing all {categories.length} categories
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Categories;
