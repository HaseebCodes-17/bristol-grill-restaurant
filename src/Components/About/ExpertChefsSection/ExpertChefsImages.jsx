import React from "react";

const ExpertChefsImages = () => {
  const images = [
    "https://imgs.search.brave.com/sWSZzn_g6Q5SvrJeZZFhNJpSaW0R4QInIeN5fscIvdA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI5/OTczODYwMy9waG90/by9wb3J0cmFpdC1v/Zi1oYW5kc29tZS1t/YW4taW4ta2l0Y2hl/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9V0ZUbmtfS0dS/bmloS2VXY0N2MkNa/SVFtcWU5NTJrZkNP/UzYtWkZUOXZhUT0",
    "https://imgs.search.brave.com/oK1MeiNF9sQ-7gGXqaJmxPUy_hbN1iT4C88ilcBLovE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jaGVmLXBob3Rv/LXdpdGgtYXByb24t/aGF0XzEwMDY2MDMt/Njg5Ni5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw",
    "https://imgs.search.brave.com/Gi2zKV5VMAvSOHKgjhjTLnnWEYet4LmbpBZinY2y_y4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wcm9m/ZXNzaW9uYWwtY2hl/Zi13b3JrLTM4MjEy/OTYwLmpwZw",
  ];

  return (
    <>
      {images.map((image, index) => {
        return (
          <div className="size-full" key={index + 1}>
            <img
              className="size-full object-cover object-center"
              src={image}
              alt="Expert Chefs"
            />
          </div>
        );
      })}
    </>
  );
};

export default ExpertChefsImages;
