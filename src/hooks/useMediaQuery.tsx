import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(true);
  useEffect(() => {
    const media = window.matchMedia(query);

    if(media.matches !== matches) {
        setMatches(media.matches);
    }

    const handleTabletChange = () => {
        setMatches(media.matches);
    };

    media.addListener(handleTabletChange);
    handleTabletChange(); // Set the initial value
    
    return () => media.removeListener(handleTabletChange);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
