import { CiCloud, CiDroplet } from "react-icons/ci";
import { FaWind } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaThermometerEmpty } from "react-icons/fa";
import { FiSunrise } from "react-icons/fi";
import { LuSunset } from "react-icons/lu";

function WeatherDisplayComponent({ result }) {
  
  if (!result || result.cod === "404") {
    return (
      <div className="text-red-400 text-center mt-5">
        No data available. Please search for a valid city.
      </div>
    );
  }

  function formatDate(unixTime) {
    const date = new Date(unixTime * 1000);

    return date
      .toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      .toUpperCase();
  }

  return (
    <div className="bg-[#13192c] p-7.5 rounded-[10px] border-2 border-solid border-[#1c253a]">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[20px] text-[#70839e] mb-1.5">
            {result.name} - {result.sys.country}
          </p>
          <p className="text-[16px] text-[#3c465e]">
            {result.weather[0].description || "No Description"}
          </p>
        </div>

        <div className="text-[60px] text-[#29ccf5] animate-float">
          <CiCloud />
        </div>
      </div>

      <div className="mt-5 font-medium text-[#ffffff] mb-5">
        <span className="text-[60px]">{Math.round(result.main.temp)}</span>
        <span className="text-[35px] text-[#70839e]"> °C</span>
      </div>

      <p className="text-[#70839e] mb-10">
        Feels Like {Math.round(result.main.feels_like)}
      </p>

      <div className="mt-5 grid grid-cols-[1fr_1fr_1fr] gap-3.75">
        <div className="flex items-center gap-2.5 p-2.5 rounded-lg">
          <span className="flex items-center justify-center p-2.5 bg-[#1b2236] rounded-xl">
            <CiDroplet className="text-[18px] text-[#29ccf5]" />
          </span>

          <div>
            <p className="text-[18px] text-[#6c7f99]">Humidity</p>
            <p className="text-[16px] text-[#ffffff] font-medium">
              {result.main.humidity}%
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 p-2.5 rounded-lg">
          <span className="flex items-center justify-center p-2.5 bg-[#1b2236] rounded-xl">
            <FaWind className="text-[18px] text-[#29ccf5]" />
          </span>

          <div>
            <p className="text-[18px] text-[#6c7f99]">Wind</p>
            <p className="text-[16px] text-[#ffffff] font-medium">
              {Math.round(result.wind.speed)} km/h
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 p-2.5 rounded-lg">
          <span className="flex items-center justify-center p-2.5 bg-[#1b2236] rounded-xl">
            <FaEye className="text-[18px] text-[#29ccf5]" />
          </span>

          <div>
            <p className="text-[18px] text-[#6c7f99]">Visibilty</p>
            <p className="text-[16px] text-[#ffffff] font-medium">
              {Math.round(result.visibility / 1000)} km
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 p-2.5 rounded-lg">
          <span className="flex items-center justify-center p-2.5 bg-[#1b2236] rounded-xl">
            <FaThermometerEmpty className="text-[18px] text-[#29ccf5]" />
          </span>

          <div>
            <p className="text-[18px] text-[#6c7f99]">UV Index</p>
            <p className="text-[16px] text-[#ffffff] font-medium">5</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 p-2.5 rounded-lg">
          <span className="flex items-center justify-center p-2.5 bg-[#1b2236] rounded-xl">
            <FiSunrise className="text-[18px] text-[#29ccf5]" />
          </span>

          <div>
            <p className="text-[18px] text-[#6c7f99]">Sunrise</p>
            <p className="text-[16px] text-[#ffffff] font-medium">
              {formatDate(result.sys.sunrise)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 p-2.5 rounded-lg">
          <span className="flex items-center justify-center p-2.5 bg-[#1b2236] rounded-xl">
            <LuSunset className="text-[18px] text-[#29ccf5]" />
          </span>

          <div>
            <p className="text-[18px] text-[#6c7f99]">Sunset</p>
            <p className="text-[16px] text-[#ffffff] font-medium">
              {formatDate(result.sys.sunset)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplayComponent;
