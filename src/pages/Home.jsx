import StudyCase from "../components/home-components/case-studies/StudyCase"
import FreePanel from "../components/home-components/free-panel/FreePanel"
import Main from "../components/home-components/main/Main"
import Services from "../components/home-components/services/Services"

function Home() {
    return (
        <>
            <Main />
            <Services />
            <FreePanel />
            <StudyCase />
        </>
    )
}
export default Home