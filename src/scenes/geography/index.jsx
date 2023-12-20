import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { styles } from '../../theme'
import { experiences } from "../../data/mockData";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      lineColor = {"black"}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <h4>{experience.date}</h4>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};


const Geography = () => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  return (
    // <Box m="20px">
    //   <Header title="Geography" subtitle="Simple Geography Chart" />

    //   <Box
    //     height="75vh"
    //     border={`1px solid ${colors.grey[100]}`}
    //     borderRadius="4px"
    //   >
    //     <GeographyChart />
    //   </Box>
    // </Box>

    <>
      <div>
        <p className={`${styles.sectionSubText} text-center`}>
            Timeline of the Project
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          T-13 : Balluana to Jhumba
        </h2>

        <h4 className="text-center text-[20px] font-semibold"
        >Start Date : 5th June 2023</h4>
      </div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor="black">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Geography;
