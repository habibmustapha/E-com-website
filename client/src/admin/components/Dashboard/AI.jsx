const AI = () => {
  return (
    <>
      <section className="bg-background h-full min-h-0 flex flex-col">
        {/* Messages */}
        <div className="flex-1 min-h-0 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-6 py-10">
            {/* AI message */}
            <div className="flex gap-4 mb-8">
              <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center shrink-0">
                AI
              </div>

              <div className="pt-1">
                <p className="text-gray-800 leading-7">
                  How may I be at your service?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom composer */}
        <div className="shrink-0 px-6 pb-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center bg-surface border border-gray-300 rounded-2xl shadow-sm p-2">
              <input
                type="text"
                placeholder="Ask something..."
                className="flex-1 min-w-0 bg-transparent px-4 py-3 outline-none text-gray-800 placeholder:text-gray-400"
              />

              <button className="shrink-0 w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition">
                ↑
              </button>
            </div>

            <p className="text-center text-xs text-gray-400 mt-2">
              AI can make mistakes. Check important information.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AI;
