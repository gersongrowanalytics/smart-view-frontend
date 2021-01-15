import React from "react";
import Widget from "components/Widget/index";
import EventItem from "./EventItem";

const Events = () => {
  const eventList = [
    {
      id: 1,
      image: "https://via.placeholder.com/575X480",
      title: 'Sundance Film Festival.',
      address: 'Downsview Park, Toronto, Ontario',
      date: 'Feb 23, 2019',
    },
    {
      id: 2,
      image: "https://via.placeholder.com/575X480",
      title: 'Underwater Musical Festival.',
      address: 'Street Sacramento, Toronto, Ontario',
      date: 'Feb 24, 2019',
    },
    {
      id: 3,
      image: "https://via.placeholder.com/575X480",
      title: 'Village Feast Fac',
      address: 'Union Street Eureka',
      date: 'Oct 25, 2019',
    }
  ];

  return (
    <Widget styleName="gx-card-profile">
      <div className="ant-card-head">
        <span className="ant-card-head-title gx-mb-1">Events</span>
        <p className="gx-text-grey gx-fs-sm gx-mb-0">What Kiley is up-to</p>
      </div>
      <div className="gx-pt-md-3">
        {eventList.map((data, index) =>
          <EventItem key={index} data={data}/>
        )}
      </div>
    </Widget>
  );
}

export default Events;
