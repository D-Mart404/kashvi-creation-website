const CardBox = ({ image, children }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
        <img src={image} alt="Offer" className="w-full h-48 object-cover" />
        <div className="p-4">{children}</div>
      </div>
    );
  };
  
  export default CardBox;
  