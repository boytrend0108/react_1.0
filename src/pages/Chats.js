import TextMsg from "../components/TextMsg"
import InputFild from "../components/InputFild"
import ChatsComp from "../components/ChatsComp"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"


const Chats = () => {
  const { id } = useParams(); // получае id из роута
  const messages = useSelector((state) => state.messages.messagesList[id] || []);
  const chats = useSelector(state => state.chats.chatList)

  return (
    <div className="chatsComp">
      <h2>Chats</h2>
      <main className="Main">
        <ChatsComp />
        <div className="messagesBox">
          {!chats.length && <h3>There is no chats</h3>}
          {chats.length > 0 &&
            messages.map((el, i) => (
              <TextMsg msg={el} key={i} />
            ))}
        </div>
      </main>

      <InputFild />
    </div>
  );
};

export default Chats