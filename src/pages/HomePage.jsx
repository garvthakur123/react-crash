import Hero from "../components/Hero"
import HomeCards from "../components/HomeCards"
import JobListings from "../components/JobListings"
import ViewAllJobs from "../components/ViewAllJobs"

const HomePage = () => {

    const title = "Become a React Dev";
    const subtitle = "Find a React job which fits your skill set";

    return (
        <>
            <Hero title={title} subtitle={subtitle} />
            <HomeCards />
            <JobListings isHome={true} />
            <ViewAllJobs />
        </>
    )
}

export default HomePage