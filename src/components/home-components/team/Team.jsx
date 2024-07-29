import Person from "./Person"
import "./Team.css"
function Team() {
    return (
        <>
            <section className="team-section" id="team">
                <div className="team-header">
                    <h2>Team</h2>
                    <p>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
                </div>
                <div className="team-container flex">
                    <Person />
                    {/* <button>See all team</button> */}
                </div>
                <button>See all team</button>

            </section>
        </>
    )
}
export default Team