import StudyCase from "../components/home-components/case-studies/StudyCase"
import FreePanel from "../components/home-components/free-panel/FreePanel"
import Main from "../components/home-components/main/Main"
import Services from "../components/home-components/services/Services"
import Team from "../components/home-components/team/Team"
import Testimonials from "../components/home-components/testimonials/Testimonials"
import WorkProcess from "../components/home-components/working-process/WorkProcess"

function Home() {
    return (
        <>
            <Main />
            <Services />
            <FreePanel />
            <StudyCase />
            <WorkProcess />
            <Team />
            <Testimonials />
        </>
    )
}
export default Home