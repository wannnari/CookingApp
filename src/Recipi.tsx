import React from "react";

type Recipi = {
  id: number;
  title: string;
  image: string;
};

type RecipiListProps = {
  recipes: Recipi[];
};

const Recipi: React.FC<RecipiListProps> = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipi) => (
        <div key={recipi.id}>
          <img src={recipi.image} alt={recipi.title} />
          <h3>{recipi.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Recipi;
