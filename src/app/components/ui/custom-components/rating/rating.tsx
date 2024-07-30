"use client";

import StarIcon from "@/app/components/icons/star";
import React, { useCallback, useState } from "react";

type RatingProps = {
  value: number;
  readOnly?: boolean;
};

const Rating: React.FC<RatingProps> = (props: RatingProps) => {
  const { value: initialValue, readOnly } = props;

  const [rating, setRating] = useState<number>(initialValue ?? 0);
  const [hover, setHover] = useState<number>(0);
  const [totalStars] = useState<number>(5);

  const handleMouseEnter = useCallback(
    (currentRating: number) => {
      if (readOnly) return;

      setHover(currentRating);
    },
    [readOnly],
  );

  const handleMouseLeave = useCallback(() => {
    if (readOnly) return;

    setHover(0);
  }, [readOnly]);

  return (
    <div>
      {[...Array<number>(totalStars)].map((star, index) => {
        const currentRating = index + 1;

        const iconColor =
          currentRating <= (hover || rating) ? "#FFAD33" : "#000000";

        return (
          <label key={index}>
            <input
              className="hidden"
              key={star}
              type="radio"
              name="rating"
              value={currentRating}
              onChange={() => setRating(currentRating)}
            />
            <span
              className={`${!readOnly && "cursor-pointer"} inline-block p-[1px] text-lg`}
              style={{
                color:
                  currentRating <= (hover || rating) ? "#FFAD33" : "#000000",
                opacity: currentRating <= (hover || rating) ? 1 : "25%",
              }}
              onMouseEnter={() => handleMouseEnter(currentRating)}
              onMouseLeave={() => handleMouseLeave()}
            >
              <StarIcon color={iconColor} />
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
