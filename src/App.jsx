import InputComponent from "./Components/InputComponent.jsx";
import WeatherDisplayComponent from "./Components/WeatherDisplayComponent.jsx";
import { useEffect, useState } from "react";

function App() {
  const [countryName, setCountryName] = useState("Karachi");
  const [data, setData] = useState(null);

  useEffect(() => {
    async function FetchDataFromAPI() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=cb8ebfee2ef67aeb1ad786f660f7e600&units=metric`,
        );

        const result = await response.json();

        if (response.ok) {
          setData(result);
        } else {
          console.error("API Error:", result.message);
          setData(null);
        }
      } catch (error) {
        console.error("Network error:", error);
        setData(null);
      }
    }

    FetchDataFromAPI();
  }, [countryName]);

  return (
    <div className="bg-[#12132a] flex justify-center items-center min-h-screen p-3.75">
      <div className="w-full max-w-150">
        <InputComponent
          setCountryName={setCountryName}
          countryName={countryName}
        />
        <WeatherDisplayComponent result={data} />
        <p className="text-center mt-6 text-[#70839e] text-[17px]">Weather data provided by OpenWeather.</p>
      </div>
    </div>
  );
}

export default App;
