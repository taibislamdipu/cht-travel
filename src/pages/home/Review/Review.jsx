import React from "react";
import "./Review.css";
import ScrollContainer from "react-indiana-drag-scroll";
import userImg from "../../../assets/images/userImg.jpg";

const Review = () => {
  const data = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
  ];

  return (
    <div className="">
      <div>
        <h2 className="section-title">Reviews</h2>
        <p>What users feel about CHT-Travel</p>
      </div>

      <ScrollContainer className="flex cursor-grab p-1">
        <div>
          <section className="mt-6 flex gap-4">
            {data.map((review, i) => (
              <div className="review-card">
                <div className="space-y-4 rounded-lg hover:shadow-lg p-4">
                  <div>
                    <p>4.7 *</p>
                    <p>Jan 2023</p>
                  </div>
                  <p>
                    First time scuba diving. Great learning experience in the
                    pool and had a great dive in the ocean. JJ was an excellent
                    instructor and dive guide. Thank you!
                  </p>
                  <div className="flex items-center gap-2 ">
                    <div>
                      <img className="w-14 rounded-full" src={userImg} alt="" />
                    </div>
                    <h4>Sylvia Davidson</h4>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </ScrollContainer>
    </div>
  );
};

export default Review;
