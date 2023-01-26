import React from "react";

const Demo = () => {
  const data = [
    { id: 1, title: "Data Range", subtitle: "Filter By Data" },
    { id: 2, title: "Data Range", subtitle: "ASC & DESC Sorting" },
    { id: 3, title: "Extra Options", subtitle: "Many Taxonomies" },
    { id: 4, title: "Cool Layouts", subtitle: "Many Custom Grid" },
    { id: 5, title: "Info Package", subtitle: "Extra Info Bar" },
    { id: 6, title: "Login System", subtitle: "Personal Account" },
    { id: 7, title: "Price Filter", subtitle: "Custom Slider Range" },
    { id: 8, title: "Custom Icons", subtitle: "Travel Cool Icons" },
    { id: 9, title: "Cool Tooltip", subtitle: "Extra Typologies Info" },
    { id: 10, title: "Grid/List Layout", subtitle: "+ Display Options" },
  ];

  const Feature = ({ title, subtitle, index }) => {
    return (
      <div>
        <div className="flex gap-4">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full h-14 w-14 flex justify-center items-center">
            {index}
          </div>
          <div>
            <h2 className="font-bold text-black">{title}</h2>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="md:grid grid-cols-5 gap-4 md:space-y-0 space-y-8 mb-20">
      <div
        className="col-span-1 flex flex-col justify-center pl-10 gap-10"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        {data.slice(0, 5).map((item) => (
          <Feature
            key={item?.id}
            title={item?.title}
            subtitle={item?.subtitle}
            index={item?.id}
          />
        ))}
      </div>
      <div className="col-span-3 shadow-lg">
        <img src="https://i.ibb.co/K50htrm/hotels-Page.png" alt="Features" />
      </div>
      <div
        className="col-span-1 flex flex-col justify-center pl-10 gap-10"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        {data.slice(5, 10).map((item) => (
          <Feature
            key={item?.id}
            title={item?.title}
            subtitle={item?.subtitle}
            index={item?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Demo;
