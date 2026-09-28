import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const OrderEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    phone: "",
    total_price: "",
    status: "pending",
    wilaya: "",
    communes: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/orders/${id}`, {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch order");
        }

        const data = await response.json();

        setOrder({
          first_name: data.first_name || "",
          last_name: data.last_name || "",
          email: data.email || "",
          address: data.address || "",
          phone: data.phone || "",
          total_price: data.total_price || "",
          status: data.status || "pending",
          wilaya: data.wilaya || "",
          communes: data.communes || "",
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setOrder((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSaving(true);
    setError("");

    try {
      const response = await fetch(`http://localhost:5001/api/orders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          first_name: order.first_name,
          last_name: order.last_name,
          email: order.email,
          address: order.address,
          phone: order.phone,
          total_price: Number(order.total_price),
          status: order.status,
          wilaya: order.wilaya,
          communes: order.communes,
        }),
      });

      if (!response.ok) {
        const text = await response.text();

        let data = {};

        try {
          data = text ? JSON.parse(text) : {};
        } catch {
          data = {};
        }

        throw new Error(data.message || "Failed to update order");
      }

      navigate("/admin/orders");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    setSaving(true);
    setError("");

    try {
      const response = await fetch(`http://localhost:5001/api/orders/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to delete order");
      }

      navigate("/admin/orders");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Loading order...</p>
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
              Order Management
            </p>

            <h1 className="mt-1 text-3xl font-bold text-gray-900">
              Edit Order #{id}
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Update customer and order information.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate(-1)}
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

        <form onSubmit={handleSubmit}>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="grid gap-6 md:grid-cols-2">
              {/* First Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  First Name
                </label>

                <input
                  type="text"
                  name="first_name"
                  value={order.first_name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#D2B021] focus:ring-2 focus:ring-[#D2B021]/20"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Last Name
                </label>

                <input
                  type="text"
                  name="last_name"
                  value={order.last_name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#D2B021] focus:ring-2 focus:ring-[#D2B021]/20"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={order.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#D2B021] focus:ring-2 focus:ring-[#D2B021]/20"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Phone
                </label>

                <input
                  type="text"
                  name="phone"
                  value={order.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#D2B021] focus:ring-2 focus:ring-[#D2B021]/20"
                />
              </div>

              {/* Wilaya */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Wilaya
                </label>

                <input
                  type="text"
                  name="wilaya"
                  value={order.wilaya}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#D2B021] focus:ring-2 focus:ring-[#D2B021]/20"
                />
              </div>

              {/* Commune */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Commune
                </label>

                <input
                  type="text"
                  name="communes"
                  value={order.communes}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#D2B021] focus:ring-2 focus:ring-[#D2B021]/20"
                />
              </div>

              {/* Total Price */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Total Price
                </label>

                <input
                  type="number"
                  name="total_price"
                  value={order.total_price}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#D2B021] focus:ring-2 focus:ring-[#D2B021]/20"
                />
              </div>

              {/* Status */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Status
                </label>

                <select
                  name="status"
                  value={order.status}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-[#D2B021] focus:ring-2 focus:ring-[#D2B021]/20"
                >
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Address
                </label>

                <textarea
                  name="address"
                  value={order.address}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#D2B021] focus:ring-2 focus:ring-[#D2B021]/20"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex justify-end gap-3 border-t border-gray-100 pt-6">
              <button
                type="button"
                onClick={() => navigate("/admin/orders")}
                className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDelete}
                disabled={saving}
                className="rounded-xl bg-danger px-6 py-3 text-sm font-medium text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving ? "Deleting..." : "Delete"}
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

export default OrderEdit;
