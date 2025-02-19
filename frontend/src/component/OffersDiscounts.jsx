import CardBox from "./CardBox";
import CardContent from "./CardContent";
import ActionButton from "./ActionButton";
import dis1 from "../assets/discounts/dis1.png"
import dis2 from "../assets/discounts/dis2.png"
import dis3 from "../assets/discounts/dis3.png"
const OffersDiscounts = () => {
  const offers = [
    {
      id: 1,
      title: "Flat 50% Off on Sarees",
      description: "Limited-time festive offer! Don't miss out.",
      image: dis1,
      buttonText: "Shop Now",
    },
    {
      id: 2,
      title: "Buy 1 Get 1 Free",
      description: "Grab two sarees at the price of one!",
      image: dis2,
      buttonText: "Claim Offer",
    },
    {
      id: 3,
      title: "Exclusive VIP Discounts",
      description: "Sign up for exclusive discounts on premium sarees.",
      image: dis3,
      buttonText: "Join Now",
    },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Exclusive Offers & Discounts</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <CardBox key={offer.id} image={offer.image}>
            <CardContent title={offer.title} description={offer.description}>
              <ActionButton>{offer.buttonText}</ActionButton>
            </CardContent>
          </CardBox>
        ))}
      </div>
    </div>
  );
};

export default OffersDiscounts;
