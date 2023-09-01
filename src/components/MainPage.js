import TopSection from "./TopSection";
import CardList from "./CardList";
function MainPage({cardData }) {
    return (
      <div style={{ backgroundColor: "  #fbf7e9" }}>
        
        <TopSection />
        <CardList data={cardData} />
      </div>
    );
  }
  
export default MainPage;