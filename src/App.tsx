import IngredientCard from "./components/IngredientCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
     <h1 className="text-2xl font-bold mb-8 text-slate-700">Welcome to React!</h1>
    <IngredientCard
    ingredient={{
    id: "1",
    name: "Tomato",
    diets: ["V", "G"],
  }}
/>
    <IngredientCard
    ingredient={{
    id: "2",
    name: "Potato",
    diets: ["L", "V"],
  }}
/>
    </div>
  )
}
export default App