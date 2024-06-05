import MessagesContainer from "../../components/messages/MessagesContainer";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="grid grid-rows-[29%,71%] md:flex md:flex-row w-[80vw] md:w-auto h-[90vh] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessagesContainer />
    </div>
  );
}
