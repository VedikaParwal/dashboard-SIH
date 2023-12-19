import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React from 'react'
import { useState } from 'react'
import axios from 'axios';

import sendImage from '../../assets/send.png'
import adminImage from '../../assets/admin.png'
import logoImage from '../../assets/logo.png'

import { runImage } from "../../prompts/prompt";

const Form = () => {
  // const isNonMobile = useMediaQuery("(min-width:600px)");

  // const handleFormSubmit = (values) => {
  //   console.log(values);
  // };

  const msgEnd = React.useRef(null);
  const [chat, setChat] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [messages, setMessages] = useState([
      {
          text : "Hello, I am Vedika, please input reports for analysis?",  
          isBot : true,
      }
  ])

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  React.useEffect(() => {
    msgEnd.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // call the image api using axios and pass the chat in the body of the request
  const handleSend = async () => {
    const response = await axios.get('http://localhost:4000/api/runImage', {
      text: chat
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
    // const handleSend = async () => {
    //   const response = await runImage(chat, selectedImage);
    //   setMessages([
    //       ...messages,
    //       {
    //           text : chat,
    //           isBot : false,
    //       },
    //       {
    //           text : response,
    //           isBot : true,
    //       }
    //   ])
    // }

  const handleEnterKey = async (e) => {
      if (e.key === 'Enter') {
          await handleSend();
      }
  }

  return (
    // <Box m="20px">
    //   <Header title="CREATE USER" subtitle="Create a New User Profile" />

    //   <Formik
    //     onSubmit={handleFormSubmit}
    //     initialValues={initialValues}
    //     validationSchema={checkoutSchema}
    //   >
    //     {({
    //       values,
    //       errors,
    //       touched,
    //       handleBlur,
    //       handleChange,
    //       handleSubmit,
    //     }) => (
    //       <form onSubmit={handleSubmit}>
    //         <Box
    //           display="grid"
    //           gap="30px"
    //           gridTemplateColumns="repeat(4, minmax(0, 1fr))"
    //           sx={{
    //             "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
    //           }}
    //         >
    //           <TextField
    //             fullWidth
    //             variant="filled"
    //             type="text"
    //             label="First Name"
    //             onBlur={handleBlur}
    //             onChange={handleChange}
    //             value={values.firstName}
    //             name="firstName"
    //             error={!!touched.firstName && !!errors.firstName}
    //             helperText={touched.firstName && errors.firstName}
    //             sx={{ gridColumn: "span 2" }}
    //           />
    //           <TextField
    //             fullWidth
    //             variant="filled"
    //             type="text"
    //             label="Last Name"
    //             onBlur={handleBlur}
    //             onChange={handleChange}
    //             value={values.lastName}
    //             name="lastName"
    //             error={!!touched.lastName && !!errors.lastName}
    //             helperText={touched.lastName && errors.lastName}
    //             sx={{ gridColumn: "span 2" }}
    //           />
    //           <TextField
    //             fullWidth
    //             variant="filled"
    //             type="text"
    //             label="Email"
    //             onBlur={handleBlur}
    //             onChange={handleChange}
    //             value={values.email}
    //             name="email"
    //             error={!!touched.email && !!errors.email}
    //             helperText={touched.email && errors.email}
    //             sx={{ gridColumn: "span 4" }}
    //           />
    //           <TextField
    //             fullWidth
    //             variant="filled"
    //             type="text"
    //             label="Contact Number"
    //             onBlur={handleBlur}
    //             onChange={handleChange}
    //             value={values.contact}
    //             name="contact"
    //             error={!!touched.contact && !!errors.contact}
    //             helperText={touched.contact && errors.contact}
    //             sx={{ gridColumn: "span 4" }}
    //           />
    //           <TextField
    //             fullWidth
    //             variant="filled"
    //             type="text"
    //             label="Address 1"
    //             onBlur={handleBlur}
    //             onChange={handleChange}
    //             value={values.address1}
    //             name="address1"
    //             error={!!touched.address1 && !!errors.address1}
    //             helperText={touched.address1 && errors.address1}
    //             sx={{ gridColumn: "span 4" }}
    //           />
    //           <TextField
    //             fullWidth
    //             variant="filled"
    //             type="text"
    //             label="Address 2"
    //             onBlur={handleBlur}
    //             onChange={handleChange}
    //             value={values.address2}
    //             name="address2"
    //             error={!!touched.address2 && !!errors.address2}
    //             helperText={touched.address2 && errors.address2}
    //             sx={{ gridColumn: "span 4" }}
    //           />
    //         </Box>
    //         <Box display="flex" justifyContent="end" mt="20px">
    //           <Button type="submit" color="secondary" variant="contained">
    //             Create New User
    //           </Button>
    //         </Box>
    //       </form>
    //     )}
    //   </Formik>
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

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Form;
