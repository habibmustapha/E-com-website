const TotalPrice = ({ cartItems }) => {
  const shippingFee = 900;

  const subTotal = cartItems.reduce(
    (total, item) => total + Number(item.unit_price) * Number(item.qty),
    0,
  );

  const total = subTotal + shippingFee;

  return (
    <section className="bg-surface rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.15)] grid grid-cols-1 w-full px-5 py-10">
      <h1 className="text-xl font-semibold">TOTAL CART</h1>

      <div className="pb-5">
        <table className="w-full table-fixed pt-10">
          <tbody>
            <tr className="w-full h-20 border-b border-gray-300">
              <td className="w-[60%] font-medium">Sub-Total</td>
              <td className="w-[40%] text-gray-500 text-right whitespace-nowrap">
                {subTotal.toLocaleString("fr-FR")} DA
              </td>
            </tr>

            <tr className="w-full h-20 border-b border-gray-300">
              <td className="w-[60%] font-medium">Shipping-fee</td>
              <td className="w-[40%] text-gray-500 text-right whitespace-nowrap">
                {shippingFee.toLocaleString("fr-FR")} DA
              </td>
            </tr>

            <tr className="w-full h-20">
              <td className="w-[60%] font-medium">Total</td>
              <td className="w-[40%] text-lg text-buttons font-semibold text-right whitespace-nowrap">
                {total.toLocaleString("fr-FR")} DA
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className="cursor-pointer bg-primary text-white shadow-lg hover:shadow-xs rounded-lg py-2">
        Submit order
      </button>
    </section>
  );
};

export default TotalPrice;
