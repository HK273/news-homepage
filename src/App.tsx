import Nav from "./components/Nav";
import MainImg from "./assets/images/image-web-3-desktop.jpg";
import RetroPic from "./assets/images/image-retro-pcs.jpg";
import GamingGrowth from "./assets/images/image-gaming-growth.jpg";
import TopLaptop from "./assets/images/image-top-laptops.jpg";
import Article from "./components/Article";
import Section from "./components/Section";

export default function App() {
  return (
    <>
      <Nav />
      <main className="max-w-8xl mx-auto grid gap-4 px-3 sm:grid-cols-2">
        <div className="rounded-md border sm:col-span-3">
          <img src={MainImg} alt="" />
        </div>
        <div className="inter-800 text-center text-7xl sm:col-span-1 sm:text-start">
          <h1>The Bright Future of Web 3.0?</h1>
        </div>
        <div className="inter-400 text-center text-xl text-gray-500 sm:text-start">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hand of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-s-red inter-400 my-10 rounded-sm px-12 py-3 text-white">
            READ MORE
          </button>
        </div>
        <div className="bg-v-d-blue row-span-2 rounded-md border p-10 sm:col-start-4 sm:row-start-1 sm:w-96">
          <h1 className="inter-700 text-soft-orange mb-10 text-5xl">New</h1>
          <div className="divide-y divide-slate-300 leading-relaxed">
            <Section
              h2="Hydrogen VS Electric Cars"
              p="Will hydrogen-fueled cars ever catch up to EVs?"
            />
            <Section
              h2="The Downsides of AI Artistry"
              p="Private funding by VC firms is down 50% YOY. We take a look at what
              that means"
            />
            <Section
              h2="Is VC Funding Drying Up?"
              p="Will hydrogen-fueled cars ever catch up to EVs?"
            />
          </div>
        </div>
      </main>
      {/* second grid section */}
      <div className="max-w-8xl mx-auto mt-1 grid px-3 sm:grid-cols-3 sm:gap-33">
        <Article
          img={RetroPic}
          h1="01"
          h2="Reviving retro PCs"
          p="What happens when old PCs are given modern upgrades?"
        />
        <Article
          img={TopLaptop}
          h1="02"
          h2="Top 10 Laptops of 2022"
          p="Our best picks for various needs and budgets"
        />
        <Article
          img={GamingGrowth}
          h1="03"
          h2="The Growth of Gaming"
          p="How the pandemic has sparked fresh opportunities"
        />
      </div>
    </>
  );
}
