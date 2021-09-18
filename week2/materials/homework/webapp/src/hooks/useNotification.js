import { useState } from "react";

function useNotifications() {
  const [notifications, setNotifications] = useState("");

  const createNotification = (text) => {
    setNotifications(text)
    
    // hint: use setTimeout
    setTimeout(()=>{
     setNotifications("")     
    },3000)
  };

  return { notifications, createNotification };
}

export default useNotifications;
