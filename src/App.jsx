import headshot from "./assets/headshot.png";
import './App.css';
import Popup from './Popup'
import library from './assets/library.png'
import alphabots from './assets/alphabots.jpeg'
import ProjectsSection from "./ProjectSection";
function App() {
  return (
    <>
    <Popup />
      <div className="flex justify-center items-center mt-20">
        <div className="max-w-3xl bg-white p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 ">
          <div className="flex flex-col space-y-4">
            <h1 className="text-5xl font-bold text-gray-800">Hey, I'm Rishaan 👋</h1>
            <h3 className="text-2xl text-gray-600">
            Tech enthusiast turned maker. I love coding, hardware, and capturing moments through my lens.
            </h3>
          </div>
          <img src={headshot} alt="Rishaan Headshot" className="w-52 h-52 aspect-square rounded-full object-cover shadow-md" />
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <div className="w-full max-w-3xl">
          <h1 className="font-bold text-2xl mb-4">About</h1>
          <p className="font-light">
            I began coding at age 9 and have been passionate about software and hardware ever since. My journey led me to compete in hackathons starting in 7th grade, and now I serve as the software captain of an FTC robotics team. Alongside my love for coding, I’m deeply fascinated by hardware and electronics, constantly experimenting with new projects. When I’m not working on tech, you’ll likely find me behind a camera, capturing moments through photography.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <div className="w-full max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">Work Experience</h1>

          <div className="flex flex-col justify-center divide-y divide-slate-200">
            <div className="py-8">
              <div className="flex items-start">
                <img src={alphabots} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Software Captain</h3>
                  <p className="text-gray-9000">Alphabots FTC Team #19639</p>
                  <p className="text-gray-600 font-light">June 2023 - Present</p>
                </div>
              </div>
            </div>
            <div className="py-8">
              <div className="flex items-start">
                <img src="https://media.licdn.com/dms/image/v2/D560BAQFW90irVLWTsQ/company-logo_200_200/company-logo_200_200/0/1709250220466/debaterly_logo?e=2147483647&v=beta&t=W11l1BYwt3prhfPMrPaZEFw5-ktGX8SJ0rDB3G2ERbY" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Student Advisor</h3>
                  <p className="text-gray-9000">Debaterly</p>
                  <p className="text-gray-600 font-light">September 2024 - Present</p>
                </div>
              </div>
            </div>

            <div className="py-8">
              <div className="flex items-start">
                <img src={library} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Volunteer</h3>
                  <p className="text-gray-9000">Newark Public Library (Alameda County Library)</p>
                  <p className="text-gray-600">March 2024 - June 2024</p>
                  <p className="mt-2 text-gray-500">
                    Demonstrated the use of fabrication tools to visitors at the library, providing hands-on experience and explaining their applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <div className="w-full max-w-3xl flex flex-col text-left">
          <h1 className="font-bold text-3xl mb-4">Skills</h1>
          <div className="flex flex-wrap justify-center">

            <span class="bg-gray-100 text-gray-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">React.js</span>
            <span class="bg-gray-100 text-gray-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">JavaScript</span>
            <span class="bg-gray-100 text-gray-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">HTML + CSS</span>
            <span class="bg-gray-100 text-gray-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Tailwind</span>
            <span class="bg-gray-100 text-gray-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Python</span>
            <span class="bg-gray-100 text-gray-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Firebase</span>
            <span class="bg-gray-100 text-gray-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Git</span>
            <span class="bg-gray-100 text-gray-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Figma</span>
            <span class="bg-gray-100 text-gray-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Swift</span>
            <span class="bg-gray-100 text-gray-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 mt-2">SwiftUI</span>



          </div>
        </div>
      </div>

      <ProjectsSection></ProjectsSection>






      <div className="flex-col justify-center items-center mx-auto text-center mt-24">
        <span className="bg-gray-100 text-gray-800 text-s font-medium me-2 px-10 py-1.5 rounded dark:bg-gray-700 dark:text-gray-300">Hackathons</span>
        <h1 className="text-5xl font-bold mt-2">I like to make stuff</h1>
    

      </div>
      <ol class="relative border-s border-gray-200 dark:border-gray-700 w-6/12 mt-24 mx-auto">      
        <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2025</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">LG Hacks</h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Kairo is a real-time ICU triage system that uses a custom-trained Machine Learning model to predict patient deterioration with 90% accuracy. Built with a modern Next.js + React + Tailwind + Firebase stack, it analyzes vitals like heart rate, oxygen saturation, and temperature, generating live risk scores and automated alerts. We integrated an ESP32-based IoT system for wireless nurse calls, and used synthetic patient data to simulate real ICU conditions. Kairo empowers faster response times and smarter care — with real potential to save lives at scale.</p>
            <span class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">1st Place</span>
        </li>           
        <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2025</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">BISV Hacks</h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">We built Elora, an EEG (electroencephalogram) interface designed to help PTSD and stroke recovery patients. Using a Muse S Gen 2, our complex and sophisticated self-trained CNN and Neural Network reads electrical signals from sensors placed on the forehead and behind the ears, detecting emotions, stress levels, and other neurological markers. With this data, Elora generates detailed reports and visualizations, giving specialists the insights they need to provide better care. </p>
            <span class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">1st Place</span>
        </li>
        <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2024</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Med Hacks</h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">We developed Leo, an all-in-one solution for managing senior retirement homes, incorporating various features and our own AI tools for optimization.</p>
            <span class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Best Track Project</span>
        </li>
        <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2024</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Bay Hacks</h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">We built Fuzz, an AI app, where you can instantly get a grade on what food you are eating using AI</p>
            <span class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Best Medical Hack</span>
            <span class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 ml-6 mt-2">Best Middle School Hack</span>
        </li>
        <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2024</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">HackaKhan</h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">We built Diligent, an AI app, where you can instantly assign and track students, by assigning them proper learning assignments made for them</p>
            <span class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 mt-2">Best Middle School Hack</span>
        </li>
        <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2024</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Milpitas Hacks</h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">We built NourishMate, an easy to use iOS app to help track what you eat</p>
        </li>
        <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2024</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Mateo Hacks</h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">We built PolitoBites, an Instagram type app, where you get the newest news feed, shortened, and gen-z-ified to help the youth get engaged in modern poltiics</p>
        </li>
        <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2024</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Teen Tech SF</h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">We built FotoFit, a website, where we use AI to determine a proper workout to get your desired physique</p>
        </li>
        
      </ol>


    </>
  );
}

export default App;
