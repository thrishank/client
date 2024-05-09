// useScoreBadge.tsx
import { useState } from "react";

interface ScoreBadgeState {
  showScoreBadge: boolean;
  handleScoreBadgeClick: () => void;
  handleCloseBadge: () => void;
}

export const useScoreBadge = (): ScoreBadgeState => {
  const [showScoreBadge, setShowScoreBadge] = useState<boolean>(false);

  const handleScoreBadgeClick = () => {
    setShowScoreBadge(true);
  };

  const handleCloseBadge = () => {
    setShowScoreBadge(false);
  };

  return { showScoreBadge, handleScoreBadgeClick, handleCloseBadge };
};
