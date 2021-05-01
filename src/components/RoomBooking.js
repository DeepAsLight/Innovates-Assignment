import React, { useState, useEffect } from "react";
import Icon from "@material-ui/core/Icon";
import { loadCSS } from "fg-loadcss";
// import HotelIcon from "@material-ui/icons/Hotel";
import { Data } from "./RoomBookingData";
import "../assets/styles.scss";

export default function RoomBooking() {
  const [data, setData] = useState({
    rooms: 1,
    adult: 1,
    children: 0,
  });
  // const [count, setcount] = useState(0)
  const [getrooms, setrooms] = useState([]);

  const onIncrement = (e, id) => {
    if (id === 0) {
      let c = data.rooms + 1;
      var temp;
      for (let i = 0; i < c; i++) {
        console.log(c, "rooms");
        temp = 4 * i;
        console.log(temp, "temp");
      }
      temp += 1;
      setData({ ...data, adult: temp, rooms: c });
      console.log(data.adult, "adult");
    }
    if (id === 1) setData({ ...data, adult: data.adult + 1 });
    if (id === 2) setData({ ...data, children: data.children + 1 });
  };

  const onDecrement = (e, id) => {
    if (id === 0) var c = data.rooms - 1;
    var temp = 0;
    for (let i = 0; i < c; i++) {
      console.log(c, "rooms");
      temp = 4 * i;
      console.log(temp, "temp");
    }
    temp += 1;
    setData({ ...data, adult: temp, rooms: c });
    console.log(data.adult, "adult");
    var flag=0;
    if (id === 1) {
      if (data.adult % 4 === 1) {flag=1; }
      setData({ ...data, adult: data.adult - 1,rooms:data.rooms-flag });
    }
    if (id === 2) setData({ ...data, children: data.children - 1 });
  };

  const onCreateRoom = () => {
    console.log(data, "entered rooms");
    setrooms([...getrooms, data]);
    setData({ ...data, rooms: 1, adult: 1, children: 0 });
  };

  useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  console.log(data.rooms, "rrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
  return (
    <div className="">
      <div className="room_booking_title">
        <i
          class="fa fa-users"
          aria-hidden="true"
          style={{ fontSize: "20px" }}
        ></i>
        &nbsp;
        <div>
          Choose number of <b>people</b>
        </div>
      </div>
      <div className="room_booking_wrap">
        {Data.map((item, i) => {
          return (
            <div className="room_booking_container" key={i}>
              <div>
                <i
                  class={item.font}
                  aria-hidden="true"
                  style={{ fontSize: "20px" }}
                ></i>
                &nbsp;&nbsp;{item.text}
              </div>
              {console.log(getrooms)}
              <div>
                <button
                  onClick={(e) => onDecrement(e, i)}
                  disabled={
                    (i === 0 && data.rooms === 1) ||
                    (i === 1 &&
                      ( data.adult === 1)) ||
                    (i === 2 && data.children === 0)
                      ? true
                      : false
                  }
                >
                  <Icon className="fa fa-minus-circle minus_icon" />
                </button>

                {i === 0 ? <div>{data.rooms}</div> : null}
                {i === 1 ? <div>{data.adult}</div> : null}
                {i === 2 ? <div>{data.children}</div> : null}

                <button
                  onClick={(e) => onIncrement(e, i)}
                  disabled={
                    (i === 0 && data.rooms >= 5) ||
                    (i === 1 && data.rooms * 4 === data.adult) ||
                    (i === 2 && data.children >= 4)
                      ? true
                      : false
                  }
                >
                  <Icon className="fa fa-plus-circle plus_icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="createroom_wrap">
        <button onClick={() => onCreateRoom()}>Create Room</button>
      </div>

      {getrooms.map((item, i) => {
        return (
          <div className="content_display" key={i}>
            <div>Rooms : {item.rooms}</div>&nbsp;
            <div>Adult : {item.adult}</div>&nbsp;
            <div>Children : {item.children}</div>
          </div>
        );
      })}
    </div>
  );
}
