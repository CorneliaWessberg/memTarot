import React from "react";

function Card() {
  return (
    <>
      <div className="p-20">
        <div className="bg-white rounded-lg shadow-2xl md:flex">
          <img
            src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8"
            alt="Laptop on Desk"
            className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
          <div className="p-6">
            <h2 className="font-bold text-xl md:text-3xl mb-2 text-orange-700">
              Horizontal Card
            </h2>
            <p className="text-orange-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
