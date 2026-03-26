import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-6 flex flex-col gap-8 mt-4">
        {/* your page content here */}
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;