import { ChatBoxContext } from "@/context/ChatBoxContext";
import { useContext } from "react";


export const useChatBox = () => {
    const chatBox = useContext(ChatBoxContext);
    
    return chatBox;
}