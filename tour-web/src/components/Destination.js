import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/T1.jpg";
import Mountain4 from "../assets/T5.png";
import DestinationData from "./DestinationData"; 
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give  you the  opportunity to see
        a lot,within a time frame
      </p>
      <DestinationData className="first-des"
      heading="Mount Fuji"
      text="Mount Fuji, also known as Fujisan in Japanese, is a beautiful and iconic volcanic mountain located on Honshu Island in Japan. It is the highest mountain in Japan, standing at 3,776 meters (12,389 feet) tall.

      Mount Fuji is an active volcano that last erupted in 1707-1708. It is considered one of Japan's Three Holy Mountains and has been a sacred site for Shinto and Buddhist pilgrims for centuries. The mountain is known for its distinctive conical shape and is a popular tourist destination for hikers, climbers, and sightseers.
      
      The climbing season for Mount Fuji typically runs from early July to mid-September, when the weather is most favorable. It is possible to climb the mountain in one day, but many hikers choose to stay in one of the mountain huts along the way and break the climb up into two days. The most popular starting point for the climb is the Fuji Subaru Line 5th Station, which is accessible by bus from Tokyo."
      img1={Mountain1}
      img2={Mountain2}
      
      />
      <DestinationData className="first-des-reverse"
      heading="Thanjavur,India"
      text="The Brihadisvara Temple, also known as the Big Temple, is a Hindu temple located in the city of Thanjavur in the Indian state of Tamil Nadu. It was built in the 11th century by the Chola dynasty and is considered one of the finest examples of South Indian temple architecture.

      The temple is dedicated to Lord Shiva and features a towering vimana (temple tower) that stands at 66 meters (216 feet) tall, making it one of the tallest in India. The vimana is made of granite and is topped by a large dome-shaped finial, or kalash.
      
      The temple complex also includes a large Nandi bull statue, which is carved out of a single stone and stands at 3.7 meters (12 feet) tall and 6 meters (20 feet) long. The statue is located in a separate mandapa (pavilion) and is believed to be one of the largest Nandi statues in the world.
      
      The temple's walls are adorned with intricate carvings and sculptures, including depictions of various Hindu gods and goddesses. The interior of the temple features a large sanctum, or garbhagriha, which houses a lingam, or symbolic representation of Lord Shiva."
      img1={Mountain3}
      img2={Mountain4}
      
      />
    </div>
  );
};

export default Destination;
