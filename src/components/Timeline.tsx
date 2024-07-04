import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience } from "../../src/data/data.json";
import { DotIcon } from "lucide-react";

const Timeline = () => {
  return (
    <VerticalTimeline>
      {experience.map((exp) => (
        <VerticalTimelineElement
          key={exp.subtitle}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "hsl(233,18%,19%)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date={exp.date}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img src={exp.icon} alt={exp.title} className="xl:w-11 w-7 " />
            </div>
          }
          iconStyle={{
            background: "#c59649",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 className="vertical-timeline-element-title text-gold">
            {exp.title}
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-muted-gold">
            {exp.subtitle}
          </h4>
          <ul className="mt-4">
            {exp.description.map((point) => (
              <div key={point} className="flex flex-row">
                {exp.description.length > 1 ? <DotIcon /> : <></>}
                <li>{point}</li>
              </div>
            ))}
          </ul>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
