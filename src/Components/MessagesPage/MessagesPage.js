import React from 'react';
import {
    Card,
    CardHeader,
    Container,
    Row,
    Table
} from "reactstrap";
import Header from "components/Headers/Header.js";
import Message from "components/MessagesPage/Message"
import Chat from "./Chat" 

const rooms = [{
    id:1,
    chatID:435274667,
    groupID:1,
    replicID:7,
    lastMessage:14,
    messagesID:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
    chatRoom: "44ed696a-60e5-452b-b10f-89d465dc34ea",
    mute:0,
    status:1
  },
  {
    id:2,
    chatID:0,
    groupID:0,
    replicID:2,
    lastMessage:20,
    messagesID:[15,16,17,18,19,20],
    chatRoom: "6ff04349-19e7-4c02-b2e0-b0003ec15464",
    mute:0,
    status:0
  },
  {
    id:3,
    chatID:0,
    groupID:0,
    replicID:2,
    lastMessage:22,
    messagesID:[21,22],
    chatRoom: "4ce26753-0199-4a9a-b443-9c513c20448d",
    mute:0,
    status:1
  },
  {
    id:4,
    chatID:0,
    groupID:0,
    replicID:2,
    lastMessage:23,
    messagesID:[23],
    chatRoom: "1ae05aca-e784-4eb0-b58a-540868fd4384",
    mute:0,
    status:1
  },
  {
    id:5,
    chatID:0,
    groupID:0,
    replicID:2,
    lastMessage:25,
    messagesID:[24,25],
    chatRoom: "929b9cb6-9329-4942-b46d-66efa58ca72c",
    mute:0,
    status:1
  },
  {
    id:6,
    chatID:0,
    groupID:1,
    replicID:5,
    lastMessage:67,
    messagesID:[26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,53,54,55,56,58,64,65,66,67],
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    mute:0,
    status:0
  },
  {
    id:7,
    chatID:0,
    groupID:1,
    replicID:4,
    lastMessage:76,
    messagesID:[68,69,70,71,72,73,74,75,76],
    chatRoom: "5dcfc437-eb81-4ede-bda3-73748f45d434",
    mute:0,
    status:1
  },
  {
    id:8,
    chatID:0,
    groupID:1,
    replicID:6,
    lastMessage:103,
    messagesID:[77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103],
    chatRoom: "a666065f-bf61-40cb-b949-fc42c300cfaa",
    mute:0,
    status:0
  },
  {
    id:10,
    chatID:0,
    groupID:4,
    replicID:6,
    lastMessage:125,
    messagesID:[107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125],
    chatRoom: "2957a27b-75f4-4c8c-bc5a-7cf134345fe3",
    mute:0,
    status:0
  },
  {
    id:11,
    chatID:0,
    groupID:4,
    replicID:6,
    lastMessage:146,
    messagesID:[126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146],
    chatRoom: "9d3cd952-e187-4388-b647-e6a36ce09d4a",
    mute:0,
    status:1
  }
]

const messages = [
  {
    id: 26,
    chatID: -1,
    groupID: 0,
    replicID: 1,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "Добый день. Я могу Вам чем нибудь помочь?",
    date: "2020-08-21 09:07:10",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 27,
    chatID: 0,
    groupID: 0,
    replicID: 2,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "sdfghjkl;",
    date: "2020-08-21 09:07:27",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 28,
    chatID: -1,
    groupID: 0,
    replicID: 2,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "Выберите Ваш город",
    date: "2020-08-21 09:07:32",
    status: 1,
    type: "select",
    dataType: "	Алматы,Кустанай"
  },
  {
    id: 29,
    chatID: 0,
    groupID: 1,
    replicID: 3,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "Алматы",
    date: "2020-08-21 09:08:14",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 30,
    chatID: 0,
    groupID: 1,
    replicID: 3,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "sdfgh",
    date: "2020-08-21 09:08:17",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 31,
    chatID: 0,
    groupID: 1,
    replicID: 3,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "sdfgh",
    date: "2020-08-21 09:08:19",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 32,
    chatID: 0,
    groupID: 1,
    replicID: 3,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "sdfgh",
    date: "2020-08-21 09:08:21",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 33,
    chatID: 0,
    groupID: 1,
    replicID: 3,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "sdfghjkl",
    date: "2020-08-21 09:10:14",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 34,
    chatID: 0,
    groupID: 1,
    replicID: 3,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "Алматы",
    date: "2020-08-21 09:15:01",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 35,
    chatID: -1,
    groupID: 1,
    replicID: 3,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "Что желаете перевести?",
    date: "2020-08-21 09:15:06",
    status: 1,
    type: "button",
    dataType: "	Текст,Личные документы"
  },
  {
    id: 36,
    chatID: 0,
    groupID: 1,
    replicID: 4,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "Текст",
    date: "2020-08-21 10:00:02",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 37,
    chatID: 0,
    groupID: 1,
    replicID: 4,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "ghjghjg",
    date: "2020-08-21 10:05:24",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 38,
    chatID: 0,
    groupID: 1,
    replicID: 4,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "jsgdakkjasdf",
    date: "2020-08-21 10:05:37",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 39,
    chatID: 0,
    groupID: 1,
    replicID: 4,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "sdfgsdfgsdfg",
    date: "2020-08-21 10:07:17",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 40,
    chatID: 0,
    groupID: 1,
    replicID: 4,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "dgshjhkjsdfg",
    date: "2020-08-21 10:09:36",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 41,
    chatID: 0,
    groupID: 1,
    replicID: 4,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "sdfgsdfgsdfg",
    date: "2020-08-21 10:09:42",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 42,
    chatID: 0,
    groupID: 1,
    replicID: 4,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "sdfgdsf",
    date: "2020-08-21 10:10:04",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 43,
    chatID: 0,
    groupID: 1,
    replicID: 4,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "Kritin",
    date: "2020-08-21 10:10:26",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 44,
    chatID: 0,
    groupID: 1,
    replicID: 4,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "Tratata",
    date: "2020-08-21 10:45:54",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 45,
    chatID: 0,
    groupID: 1,
    replicID: 4,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "nice",
    date: "2020-08-21 10:47:43",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 46,
    chatID: 0,
    groupID: 1,
    replicID: 4,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "nice",
    date: "2020-08-21 11:01:53",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 47,
    chatID: 0,
    groupID: 1,
    replicID: 4,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "nice",
    date: "2020-08-21 11:06:38",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 48,
    chatID: 0,
    groupID: 1,
    replicID: 4,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "nice answer",
    date: "2020-08-21 11:20:06",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 49,
    chatID: -1,
    groupID: 1,
    replicID: 4,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "Заверить перевод у нотариуса?",
    date: "2020-08-21 11:20:11",
    status: 1,
    type: "button",
    dataType: "	Да,Нет"
  },
  {
    id: 50,
    chatID: 0,
    groupID: 1,
    replicID: 4,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "Да ну нафиг",
    date: "2020-08-21 11:22:17",
    status: 1,
    type: "text",
    dataType: "	 "
  },
  {
    id: 53,
    chatID: 0,
    groupID: 1,
    replicID: 4,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "sdfghjkl",
    date: "2020-08-21 11:29:54",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 54,
    chatID: -1,
    groupID: 1,
    replicID: 4,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "Заверить перевод у нотариуса?",
    date: "2020-08-21 11:29:59",
    status: 1,
    type: "button",
    dataType: "	Да,Нет"
  },
  {
    id: 55,
    chatID: 0,
    groupID: 1,
    replicID: 4,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "sdfghjkl",
    date: "2020-08-21 11:29:54",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 56,
    chatID: 0,
    groupID: 1,
    replicID: 4,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "4561264",
    date: "2020-08-21 11:37:35",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 58,
    chatID: 0,
    groupID: 1,
    replicID: 4,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "75zdfg46",
    date: "2020-08-21 11:41:47",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 64,
    chatID: 0,
    groupID: 1,
    replicID: 4,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "fghjfghj",
    date: "2020-08-21 11:58:53",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 65,
    chatID: -1,
    groupID: 1,
    replicID: 4,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "Заверить перевод у нотариуса?",
    date: "2020-08-21 11:59:00",
    status: 1,
    type: "button",
    dataType: "	Да,Нет"
  },
  {
    id: 66,
    chatID: 0,
    groupID: 1,
    replicID: 4,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "Нет",
    date: "2020-08-21 11:59:03",
    status: 1,
    type: "text",
    dataType: "	"
  },
  {
    id: 67,
    chatID: -1,
    groupID: 1,
    replicID: 4,
    chatRoom: "fe282115-86c8-4e1c-b269-88d13d11662e",
    message: "Заверить перевод у нотариуса?",
    date: "2020-08-21 11:59:09",
    status: 1,
    type: "button",
    dataType: "	Да,Нет"
    }
  ]
class MessagesPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rooms : rooms,
            showModal : false,
            modalChat : null
        }

        this.deleteRoom = this.deleteRoom.bind(this)
        this.showModal = this.showModal.bind(this)
    }

    deleteRoom(e) {
        let { rooms } = this.state
        rooms.splice(parseInt(e.target.dataset.index, 10), 1)
        this.setState({ rooms })
    }

    showModal(e) {
        this.setState({
            showModal : !this.state.showModal,
            modalChat : {
                messages : messages,
                title : "Чат №" + e.target.dataset.id
            }
        })
    }

    render() {
        return (
            <>
                <Header />
                {/* Page content */}
                <Container className="mt--7" fluid>
                <Row>
                    <div className="col">
                    <Card className="shadow">
                        <CardHeader className="border-0">
                        { this.state.showModal && <Chat title={ this.state.modalChat.title } back={ this.showModal } messages={ this.state.modalChat.messages }/> }
                        <Table className="align-items-center table-flush" responsive>
                            <thead>
                                <tr className="mt-row">
                                    <th>Номер чата</th>
                                    <th>Группа</th>
                                    <th>Токен чата</th>
                                    <th>Статус</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.state.rooms.map(
                                    (room, index) => {
                                        return (
                                            <Message index={ index } key={ index } 
                                                id={ room.id } group={ room.groupID } 
                                                status={ room.status } token={ room.chatRoom }
                                                checkChat={ this.showModal }
                                                deleteRoom={ this.deleteRoom }    
                                            />
                                        )
                                    }
                                ) }
                            </tbody>
                        </Table>
                        </CardHeader>
                    </Card>
                    </div>
                </Row>
                </Container>
            </>
        )
    }
}

export default MessagesPage;