import AyurvedaPagesLayout from "../../layout/AyurvedaPagesLayout/AyurvedaPagesLayout";
import ayurvedaMassageData from "./AyurvedaMassages.json";

function AyurvedaMassages() {
  return (
    <>
      <AyurvedaPagesLayout
        images={ayurvedaMassageData.images}
        title="AYURVEDA MASSAGES"
        content={ayurvedaMassageData.content}
        whatWeOfferData={ayurvedaMassageData.whatWeOfferData}
      />
    </>
  );
}

export default AyurvedaMassages;
