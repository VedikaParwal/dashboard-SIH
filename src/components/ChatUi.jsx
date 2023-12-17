import React from 'react'

import sendImage from '../assets/send.png'
import adminImage from '../assets/admin.png'
import logoImage from '../assets/logo.png'

import { runChat } from '../prompts/dashboard'
import { useState } from 'react'

const ChatUi = () => {

    const msgEnd = React.useRef(null);
    const [chat, setChat] = useState('');
    const [messages, setMessages] = useState([
        {
            text : "Hello, I am Gemini. How can I help you today?",  
            isBot : true,
        }
    ])

    React.useEffect(() => {
        msgEnd.current.scrollIntoView({ behavior: "smooth" });
    }, [messages]);



    const handleSend = async () => {
        const response = await runChat(chat);
        setMessages([
            ...messages,
            {
                text : chat,
                isBot : false,
            },
            {
                text : response,
                isBot : true,
            }
        ])
    }

    const handleEnterKey = async (e) => {
        if (e.key === 'Enter') {
            await handleSend();
        }
    }

  return (
    <div className='main'>
        <div className="chats">
            {/* <div className="chat">
                <img src={adminImage} className='chatimg' alt="" />
                <p className='txt'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, voluptatum! Eveniet harum natus ut nisi. Ducimus doloremque suscipit dolores ut?
                
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero excepturi accusamus dicta voluptatum voluptatibus eius delectus quod aliquid itaque culpa! Perspiciatis quo dicta vitae accusantium id eligendi neque placeat dolorem, doloribus officiis quae corporis sed saepe! Voluptate nihil nostrum corporis debitis deleniti eligendi tempore quam eos? Officiis non amet magni dolorum, perspiciatis et illo velit voluptatibus cupiditate saepe aut, possimus ullam voluptas enim consectetur reprehenderit ut dolor doloribus beatae quia voluptate. Vel debitis veritatis quas cupiditate iste eligendi tempore libero, delectus eaque. Corrupti odio repellat aperiam, natus inventore ratione delectus et reiciendis cupiditate? Reiciendis laudantium eveniet impedit tenetur reprehenderit saepe.
                </p>
            </div>

            <div className="chat bot">
                <img src={logoImage} className='chatimg' alt="" />
                <p className='txt'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, voluptatum! Eveniet harum natus ut nisi. Ducimus doloremque suscipit dolores ut?
                
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia provident quae doloribus! Necessitatibus, impedit ab, dignissimos dolores laboriosam, similique consectetur minus dolor iure exercitationem qui incidunt ex porro. Fugiat ipsum eligendi esse cumque voluptatibus distinctio magnam vitae laborum accusantium. Inventore dolor facilis dignissimos, sint cum maxime magnam ipsam dolorem, tempore itaque aut repellat illum blanditiis voluptatibus laudantium dolorum eligendi quasi obcaecati atque neque reprehenderit esse tempora. Magni quod deserunt modi, reprehenderit eius pariatur excepturi maiores impedit esse cumque. Fugit voluptatum unde iste nam! Eum ad veritatis ipsa id, iste, ipsum esse dolor placeat nam modi, numquam culpa molestiae iusto facere!
                </p>
            </div> */}

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
                <button className='send'
                    onClick={handleSend}
                >
                    <img src={sendImage} alt="" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default ChatUi