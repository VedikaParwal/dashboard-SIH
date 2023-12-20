import { useEffect, useState } from "react";
import React from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

import sendImage from '../..//assets/send.png'
import adminImage from '../../assets/admin.png'
import logoImage from '../../assets/logo.png'
import { runChat } from '../../prompts/dashboard'
import axios from "axios";


const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  // const handleDateClick = (selected) => {
  //   const title = prompt("Please enter a new title for your event");
  //   const calendarApi = selected.view.calendar;
  //   calendarApi.unselect();

  //   if (title) {
  //     calendarApi.addEvent({
  //       id: `${selected.dateStr}-${title}`,
  //       title,
  //       start: selected.startStr,
  //       end: selected.endStr,
  //       allDay: selected.allDay,
  //     });
  //   }
  // };

  // const handleEventClick = (selected) => {
  //   if (
  //     window.confirm(
  //       `Are you sure you want to delete the event '${selected.event.title}'`
  //     )
  //   ) {
  //     selected.event.remove();
  //   }
  // };

  const msgEnd = React.useRef(null);
  const [chat, setChat] = useState('');
  let modifiedChat = chat;
  const [selectedImage, setSelectedImage] = useState(null);
  const [messages, setMessages] = useState([
      {
          text : "Hello, I am Vedika, How can I help you today?",  
          isBot : true,
      }
  ])

  React.useEffect(() => {
      msgEnd.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    //if there is any image selected then call the api with the folllowing text prompt and if there is not then just call the api with the chat prompt
    if (selectedImage) {
      modifiedChat =  chat + "Do the OCR of the following image and Extract the text from the images and and calculate : Clay / Silt (-75 micron) percent, Sand (-4.75 mm + 75 micron) percent: and Gravel (-100 mm + 4.75 mm) percent: and compare it with following From the given data, we can calculate the percentage of Clay / Silt (-75 micron), Sand (-4.75 mm + 75 micron) and Gravel (-100 mm + 4.75 mm) as follows:. Clay / Silt (-75 micron) percent:- For dry sieving on 450 mm diameter sieves, the percentage passing 75 micron sieve is 38.46%.- For dry sieving on 300 mm diameter sieves, the percentage passing 75 micron sieve is 59.23%.- For wet sieving on 200 mm diameter sieves, the percentage passing 75 micron sieve is 96%.Therefore, the average Clay / Silt (-75 micron) percent is: (38.46% + 59.23% + 96%) / 3 = 64.56%. Sand (-4.75 mm + 75 micron) percent:- For dry sieving on 450 mm diameter sieves, the percentage retained on 75 micron sieve and passing 4.75 mm sieve is 61.54%.- For dry sieving on 300 mm diameter sieves, the percentage retained on 75 micron sieve and passing 4.75 mm sieve is 30.77%.- For wet sieving on 200 mm diameter sieves, the percentage retained on 75 micron sieve and passing 2 mm sieve is 10%.Therefore, the average Sand (-4.75 mm + 75 micron) percent is: (61.54% + 30.77% + 10%) / 3 = 34.10%. Gravel (-100 mm + 4.75 mm) percent:- For dry sieving on 450 mm diameter sieves, the percentage retained on 4.75 mm sieve is 25%.- For dry sieving on 300 mm diameter sieves, the percentage retained on 4.75 mm sieve is 10%.Therefore, the average Gravel (-100 mm + 4.75 mm) percent is: (25% + 10%) / 2 = 17.50% and tell if there is any discrepancy in both of the data."
    } else {
      modifiedChat = chat;
    }
  }, [selectedImage])

  const handleSend = async () => {
    const response = await axios.post('http://localhost:4000/api/runQCRImage', {
      text: modifiedChat,
    })
    console.log(response.data.message);
    setMessages([
        ...messages,
        {
            text : chat,
            isBot : false,
        },
        {
            text : response.data.message,
            isBot : true,
        }
    ])
  }

  const handleEnterKey = async (e) => {
      if (e.key === 'Enter') {
          await handleSend();
      }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };



  return (
    // <Box m="20px">
    //   <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

    //   <Box display="flex" justifyContent="space-between">
    //     {/* CALENDAR SIDEBAR */}
    //     <Box
    //       flex="1 1 20%"
    //       backgroundColor={colors.primary[400]}
    //       p="15px"
    //       borderRadius="4px"
    //     >
    //       <Typography variant="h5">Events</Typography>
    //       <List>
    //         {currentEvents.map((event) => (
    //           <ListItem
    //             key={event.id}
    //             sx={{
    //               backgroundColor: colors.greenAccent[500],
    //               margin: "10px 0",
    //               borderRadius: "2px",
    //             }}
    //           >
    //             <ListItemText
    //               primary={event.title}
    //               secondary={
    //                 <Typography>
    //                   {formatDate(event.start, {
    //                     year: "numeric",
    //                     month: "short",
    //                     day: "numeric",
    //                   })}
    //                 </Typography>
    //               }
    //             />
    //           </ListItem>
    //         ))}
    //       </List>
    //     </Box>

    //     {/* CALENDAR */}
    //     <Box flex="1 1 100%" ml="15px">
    //       <FullCalendar
    //         height="75vh"
    //         plugins={[
    //           dayGridPlugin,
    //           timeGridPlugin,
    //           interactionPlugin,
    //           listPlugin,
    //         ]}
    //         headerToolbar={{
    //           left: "prev,next today",
    //           center: "title",
    //           right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
    //         }}
    //         initialView="dayGridMonth"
    //         editable={true}
    //         selectable={true}
    //         selectMirror={true}
    //         dayMaxEvents={true}
    //         select={handleDateClick}
    //         eventClick={handleEventClick}
    //         eventsSet={(events) => setCurrentEvents(events)}
    //         initialEvents={[
    //           {
    //             id: "12315",
    //             title: "All-day event",
    //             date: "2022-09-14",
    //           },
    //           {
    //             id: "5123",
    //             title: "Timed event",
    //             date: "2022-09-28",
    //           },
    //         ]}
    //       />
    //     </Box>
    //   </Box>
    // </Box>
    <div className='main'>
        <div className="chats">

            {
                messages.map((message) => {
                    return (
                        <div className={`chat ${message.isBot ? 'bot' : ''}`}>
                            <img src={message.isBot ? logoImage : adminImage} className='chatimg' alt="" />
                            <p className='txt'>{message.text}</p>
                        </div>
                    )
                })
            }

            <div ref={msgEnd}></div>
        </div>

        <div className="chatFooter">
            <div className="inp">
                <input type="text" placeholder='Send a message' value={chat} 
                onChange = {
                    (e) => {
                        setChat(e.target.value)
                    }
                }
                onKeyDown={handleEnterKey}
                 />
                 <input type="file" onChange={handleImageChange} />
                  {selectedImage && (
                    <div>
                      <p>Selected Image:</p>
                      <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
                    </div>
                  )}

                  <button className='send ml-6'
                      onClick={handleSend}
                  >
                    <img src={sendImage} className=" scale-[5]" alt="" />
                </button>
            </div>
        </div>
    </div>
  );
};

export default Calendar;
