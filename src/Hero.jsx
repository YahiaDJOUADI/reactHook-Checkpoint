export default () => {
    return (
      <div
        className="relative bg-cover bg-center text-white p-16 rounded-lg shadow-lg mb-8"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509564324749-471bd272e1ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, // Movie background
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">🎬 Movie Explorer</h1>
          <p className="text-lg">
            Explore your favorite movies, add to your collection, and filter by
            rating or title. A personalized movie experience awaits!
          </p>
          <button className="mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition">
            Get Started
          </button>
        </div>
      </div>
    );
  };
  
 
  