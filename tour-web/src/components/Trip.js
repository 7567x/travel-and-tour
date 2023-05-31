import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/A5.jpg";
import Trip2 from "../assets/M2.jpg";
import Trip3 from "../assets/B1.jpg";
function Trip(){
    return(
        <div className="trip">
             <h1>Recent Trips</h1>
             <p>You can discover unique
                destination using Google Maps.
            </p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading ="Trip in Andaman Islands"
                text="The Andaman Islands are an Indian archipelago in the Bay of Bengal.
                 These roughly 300 islands are known for their palm-lined, white-sand beaches, 
                 mangroves and tropical rainforests. Coral reefs supporting marine life such as sharks and rays make 
                 for popular diving and snorkeling sites. Indigenous Andaman Islanders inhabit the more remote islands,
                  many of which are off limits to visitors"
                />

                <TripData
                image={Trip2}
                heading ="Malaysia"
                text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo.
                 It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences. 
                 The capital, Kuala Lumpur, is home to colonial buildings, busy shopping districts such as Bukit Bintang and 
                 skyscrapers such as the iconic, 451m-tall Petronas Twin Towers."
                />

                <TripData
                image={Trip3}
                heading ="Brazil"
                text="Brazil, officially the Federative Republic of Brazil, is the largest country in 
                South America and in Latin America. At 8.5 million square kilometers and with over 217 million people,
                 Brazil is the world's fifth-largest country by area and the seventh most populous."
                />

            </div>

        </div>
    );
}
export default Trip;