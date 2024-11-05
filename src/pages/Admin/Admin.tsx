import Modal from "@mui/material/Modal";
import { UserDataForm } from "../../shared/components/UserDataForm/userDataForm"
import { useState } from "react";



const addUserByAdmin = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

 TODO:// в addUserSuccess добавить вывод сообщения о создании записи с полями (с возможностью редактирования)   
  return(
    
    
    
    <>
      <div>
        <Modal open={isModalVisible}>
          <UserDataForm onSuccess={addUserSuccess} /> 
        </Modal>  
      </div>
    </>  
  )
}


export default addUserByAdmin;