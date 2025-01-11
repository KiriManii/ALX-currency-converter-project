import ConverterForm from "./components/ConverterForm";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-secondary text-dark">
      <div className="w-full max-w-md p-6 bg-opacity-90 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Lewis Kimani Currency Converter
        </h2>
        <ConverterForm />
      </div>
    </div>
  );
};

export default App;
