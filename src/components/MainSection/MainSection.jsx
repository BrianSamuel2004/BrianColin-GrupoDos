import React from "react";

const Card = ({ title, description }) => (
  <div className="flex flex-col sm:flex-row bg-[#3a4c61] rounded-lg overflow-hidden shadow-lg w-full sm:h-[152px]">
    <div className="sm:w-[320px] bg-[#5f81a9] h-48 sm:h-auto"></div>
    <div className="p-4 text-[#e6e8eb] flex flex-col justify-center">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 text-[#aebbc9]">{description}</p>
    </div>
  </div>
);

const MainSection = () => {
  const cards = [
    { title: "Titulo 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Ver más..." },
    { title: "Titulo 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Ver más..." },
    { title: "Titulo 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Ver más..." }
  ];

  return (
    <div className="flex flex-col justify-center items-center max-w-[1240px] min-h-screen mx-auto px-4 py-8 space-y-6 bg-[#0b0d0f]">
      <div className="grid grid-cols-1 gap-6 w-full">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default MainSection;
