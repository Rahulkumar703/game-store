import { Star, StarHalf } from "lucide-react";

const Ratings = ({ rating }) => {
  const fullStars = parseInt(rating);
  const halfStar = rating - fullStars >= 0.5;

  return Array.from({ length: 5 }).map((_, index) => {
    if (index < fullStars) {
      return <Star className={`fill-red-400`} />;
    } else if (halfStar) return <StarHalf className={`fill-red-400`} />;
    else {
      return <Star />;
    }
  });
};

export default Ratings;
