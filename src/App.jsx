import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'

const App = () => {

  const title = "Become a React Dev";
  const subtitle = "Find a React job which fits your skill set";

  return (
    <div>
      < Navbar />
      <Hero title={title} subTitle={subtitle}/>
      <HomeCards />
      <JobListings />
      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
          >View All Jobs</a
        >
      </section>
    </div>
  )
}

export default App