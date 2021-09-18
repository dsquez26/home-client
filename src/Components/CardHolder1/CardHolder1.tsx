import Card1 from "../Card1/Card1";
import "./CardHolder1.css";

const CardHolder1 = () => {
  const content1 =
    "New member? Register or download the Sydney Health app to access all our digital tools, including claims, benefits, pharmacy, and ID cards.";
  const content2 =
    "Stay current with your vaccinations whether flu, shingles, or COVID-19. Most are available at pharmacies in your network.";
  const content3 =
    "Everyone needs help from time to time. Visit our Community Resource Link to find resources in your area that can help with food, housing, utilities, and more.";

  return (
    <div className="card-holder">
      <Card1 content={content1} icon="icon 1" />
      <Card1 content={content2} icon="icon 2" />
      <Card1 content={content3} icon="icon 3" />
    </div>
  );
};

export default CardHolder1;
