import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const LandingPage = () => {
  return (
    <div className="font-sans text-[#0B2B59] bg-[#E5EEF5] scroll-smooth">
      {/* 🔝 Navigation */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 py-4">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-xl font-bold">SOMOLEKAE & ASSOCIATES</h1>
          <div className="space-x-4 text-sm md:text-base">
            <a href="#home" className="hover:text-[#1B74E4]">Home</a>
            <a href="#about" className="hover:text-[#1B74E4]">About</a>
            <a href="#services" className="hover:text-[#1B74E4]">Services</a>
            <a href="#contact" className="hover:text-[#1B74E4]">Contact</a>
          </div>
        </nav>
      </header>

      {/* 🔽 Main Sections with consistent spacing */}
      <main className="pt-24 space-y-6 md:space-y-10">
        {/* Each section is styled with rounded corners and shadow for subtle separation */}
        
        <section id="home" className="rounded-3xl shadow-lg overflow-hidden mx-4 md:mx-10">
          <Home />
        </section>

        <section id="about" className="rounded-3xl shadow-lg overflow-hidden mx-4 md:mx-10">
          <About />
        </section>

        <section id="services" className="rounded-3xl shadow-lg overflow-hidden mx-4 md:mx-10">
          <Services />
        </section>

        <section id="contact" className="rounded-3xl shadow-lg overflow-hidden mx-4 md:mx-10">
          <Contact />
        </section>
      </main>

      {/* 🔚 Footer */}
      <footer className="text-center text-sm py-6 text-gray-600 bg-white mt-20 border-t border-[#D1D9E6]">
        © {new Date().getFullYear()} Semolekae Legal. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
