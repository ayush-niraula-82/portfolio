import logo from "./assets/ayush.jpg";
const App = () => {
  return (
    <section className="bg-black relative overflow-hidden bg-no-repeat bg-center bg-cover bg-blend-mix h-min-screen">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-10">
        <div className="grid gap-12 sm:gap-20">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center rounded-md bg-gray-800 px-4 py-2">
              <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
              <p className="text-sm text-white font-medium">Open to Work</p>
            </div>
            <p className="text-lg text-white sm:text-2xl font-semibold">
              Software Engineer
            </p>
            <h1 className="mb-6 text-4xl font-extrabold md:text-7xl lg:mb-10 text-white leading-tight">
              Ayush Niraula
              <span className="text-green-500 animate-pulse text-5xl">.</span>
            </h1>
            <p className="text-base text-white sm:text-base leading-relaxed">
              Software engineer with a strong background in building scalable
              web applications and proficiency in modern JavaScript frameworks,
              including Angular and React, with expertise in state management
              tools such as Redux and full-stack development using the MEAN/MERN
              stack. Contributed to the development of multiple real-world
              projects, including a digital wallet, a digital agent module, a
              voting platform, and a modular architecture-based remittance
              application capable of dynamically building 21 applications within
              a single repository. Additionally, engaged as a freelancer on
              diverse projects, specializing in SEO optimization, web
              application development, and AI/ML initiatives. I hold a
              bachelor's degree in Computer Engineering and aspire to work for a
              leading technology company. Beyond engineering, I enjoy playing
              cricket and staying up to date with advancements in software
              development.
            </p>

            <a className="mt-3 flex items-center gap-8 text-cener text-base md:mb-10 lg:mb-4 text-white">
              <img
                src={logo}
                className="w-[60px] h-[60px] rounded-full border-2 border-green-500 p-1"
                alt="Profile"
              />
              <p>
                You can find me on{" "}
                <a
                  href="https://github.com/ayush-niraula-82"
                  target="_blank"
                  className="underline hover:text-gray-400 "
                >
                  GitHub
                </a>
                ,{" "}
                <a
                  href="https://np.linkedin.com/in/ayush-niraula-b70876198"
                  target="_blank"
                  className="underline hover:text-gray-400 "
                >
                  LinkedIn
                </a>
                , and{" "}
                <a
                  href="https://instagram.com/the.ayush.niraula"
                  target="_blank"
                  className="underline hover:text-gray-400 "
                >
                  Instagram
                </a>
                . Feel free to reach out to me via email at{" "}
                <a
                  href="mailto:youremail@example.com"
                  className="underline hover:text-gray-400 "
                >
                  ayushniraula82@gmail.com
                </a>
                , as I continuously check my inbox and am open to collaboration
                and new opportunities.{" "}
              </p>
            </a>

            <div className="mb-10 mt-10 h-px w-full bg-gray-600"></div>
            <div className="mb-6 flex flex-col gap-6 text-base text-white sm:text-base lg:mb-10">
              <p>
                <strong className="text-green-500">
                  2024 (May) - Present:
                </strong>
                <br />
                Frontend Team Lead at{" "}
                <a
                  href="https://thebigsolutions.com/"
                  target="_blank"
                  className="underline hover:text-gray-400"
                >
                  The Big Solutions
                </a>
              </p>
              <p>
                <strong className="text-green-500">
                  2023 (May) - 2024 (May):
                </strong>
                <br />
                Frontend Engineer at{" "}
                <a
                  href="https://mypay.com.np/"
                  target="_blank"
                  className="underline hover:text-gray-400"
                >
                  MyPay
                </a>
              </p>
              <p>
                <strong className="text-green-500">Prior to 2023:</strong>
                <br />
                Freelancer specializing in SEO, web application development, and
                ML/AI projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
