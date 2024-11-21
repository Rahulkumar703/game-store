import { Star, StarHalf } from "lucide-react";

const Ratings = ({ rating, size = 18 }) => {
  const fullStars = parseInt(rating);
  const halfStar = rating - fullStars >= 0.5;

  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        if (index < fullStars) {
          return <Star key={index} size={size} className={`fill-red-400`} />;
        } else if (halfStar)
          return (
            <StarHalf key={index} size={size} className={`fill-red-400`} />
          );
        else {
          return <Star key={index} size={size} />;
        }
      })}
    </div>
  );
};

export default Ratings;
