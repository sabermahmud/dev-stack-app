import { Suspense, useState } from "react";
import type { TechDataType } from "./Type/Type";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import TechnologySection from "./Components/Technology/TechnologySection";
import YourStack from "./Components/YourStack/YourStack";
import Footer from "./Components/Footer/Footer";

import { ToastContainer } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";

const fetchTechData = async (): Promise<TechDataType[]> => {
  const response = await fetch("/technology.json");

  if (!response.ok) {
    throw new Error("Failed to fetch technology data");
  }

  const data: TechDataType[] = await response.json();

  return data;
};

function App() {
  const [techDataPromise] = useState(() => fetchTechData());

  const [addedToStack, setAddedToStack] = useState<TechDataType[]>([]);

  return (
    <div className="mx-auto max-w-7xl ">
      <Navbar />

      <Hero />

      <ToastContainer position="top-right" autoClose={2000} />

      <main>
        <div className="mb-6 px-4">
          <h2 className="text-3xl font-bold md:text-4xl">
            Explore the <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-gray-500">
            Pick technologies and build your ideal development stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <Suspense
              fallback={
                <div className="flex min-h-75 items-center justify-center">
                  <ThreeDots
                    height="60"
                    width="60"
                    visible={true}
                  />
                </div>
              }
            >
              <TechnologySection
                techDataPromise={techDataPromise}
                addedToStack={addedToStack}
                setAddedToStack={setAddedToStack}
              />
            </Suspense>
          </div>

          <div className="lg:col-span-1">
            <YourStack
              addedToStack={addedToStack}
              setAddedToStack={setAddedToStack}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;