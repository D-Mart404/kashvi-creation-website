const CardContent = ({ title, description, children }) => {
    return (
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 my-2">{description}</p>
        <div className="mt-4">{children}</div>
      </div>
    );
  };
  
  export default CardContent;
  