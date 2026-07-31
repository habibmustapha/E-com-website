const TotalPrice = () => {
  return (
    <>
      <section className="grid grid-cols-1 border border-gray-300 w-full px-5 py-10">
        <h1 className="text-xl font-semibold">TOTAL CART</h1>
        <div className="pb-5">
          <table className="w-full pt-10 ">
            <tbody className="w-full ">
              <tr className="w-full h-20 border-b border-gray-300">
                <td className="w-9/12 font-medium ">Sub-Total</td>
                <td className="text-gray-500 text-right">99000da</td>
              </tr>
              <tr className="w-full h-20 border-b border-gray-300">
                <td className="w-8/12 font-medium ">Shipping-fee</td>
                <td className="text-gray-500 text-right">900 da</td>
              </tr>
              <tr className="w-full h-20 ">
                <td className="w-8/12 font-medium "> Total</td>
                <td className="text-lg text-danger text-right">99 900da</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="cursor-pointer bg-primary text-white shadow-lg hover:shadow-xs rounded-lg py-2">
          Submit order
        </button>
      </section>
    </>
  );
};

export default TotalPrice;
