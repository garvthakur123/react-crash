import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllComponents from './components/ViewAllComponents'

const App = () => {

  const title = "Become a React Dev";
  const subtitle = "Find a React job which fits your skill set";

  return (
    <div>
      < Navbar />
      <Hero title={title} subTitle={subtitle}/>
      <HomeCards />
      <JobListings />
      <ViewAllComponents />
    </div>
  )
}

export default App