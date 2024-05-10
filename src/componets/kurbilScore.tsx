import { useState } from "react";

export const useKurbilScore = () => {
  const [kurbilScore, setKurbilScore] = useState(6);

  return { kurbilScore, setKurbilScore };
};
