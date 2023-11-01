import Gettouch from "./components/Gettouch";
import Header from "./components/Header";
import Icons from "./components/Icons";
import Links from "./components/Links";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0)

  // const Tittle = " "
  // const Desc = "seasoned software engineer especially in "

  return (
    <>
      <main className=" w-full bg-white md:py-4 ">
        <section className="max-w-2xl mx-auto px-4 md:border-2 md:rounded-lg md:shadow-lg bg-[#f6f6ef]">
          <Header />
          <Icons />
          <Links />
          <Gettouch />
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
