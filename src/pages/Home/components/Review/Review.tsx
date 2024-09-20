import "./Review.css";
import reviewData from "./Review.json";

function Review() {
  return (
    <div className="review">
      <div className="homeTitle">
        <span>TRUSTED BY THOUSANDS OF HAPPY CUSTOMERS</span>
      </div>

      <div className="reviewSpanContainer">
        <span>
          Count on us – trusted by thousands of satisfied customers for
          exceptional service and reliability.
        </span>
      </div>

      <div className="reviewCardsContainer">
        {reviewData.map((data) => (
          <div className="reviewCard">
            <div className="reviewContainer">
              <div className="topCommaDiv">
                <img src={data.comma1} alt="comma1" />
              </div>

              <div className="reviewDescription">
                <span>{data.content}</span>
              </div>

              <div className="bottomCommaDiv">
                <img src={data.comma2} alt="comma1" />
              </div>

              <div className="authorNameContainer">
                <span>{data.name}</span>
              </div>

              <div className="authorPlaceContainer">
                <span>{data.place}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
