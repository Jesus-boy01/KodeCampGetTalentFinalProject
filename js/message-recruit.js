if(window.matchMedia("(max-width: 425px)").matches){
    let inbox = document.getElementById('temi').addEventListener('click', function(e){
      e.preventDefault
      let chats = document.getElementById("chats");
      chats.style.display = "block";
      let inboxes = document.getElementById("inboxes");
      inboxes.style.display = "none";
      let headerText = document.getElementById("header-text");
      headerText.innerHTML = "Chat"; 
    })
  } else {
    //  inbox.removeEventListener('click');
  }
  
  const messageForm = document.getElementById("message-form");
  const sendIcon = document.getElementById("send");
  const newMessage = document.querySelector(".new-message");
  const message = document.getElementById("message");
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  
  sendIcon.addEventListener('click', newMessageFeature);
  
  function newMessageFeature() {
  newMessage.innerHTML = `<div class="d-flex justify-content-between message-wrapper align-items-start mt-3 ms-auto me-4 px-3 pt-2 w-75 rounded"  style= "background-color: #fff">
                              
                                <div class="sender" style="width: 85%;">
                                    <h6 class="fw-bolder text-end pe-4">Odunlami Oluwafemi</h6>
                                    <p class="fs-7 pe-4 lh-1">${message.value}</p>
                                    <p class="fs-7 ps-3 time mb-2">${currentHour}:${currentMinute}</p>
                                </div>
                                <div class="avatar d-sm-none d-md-none d-lg-block ms-4">
                                    <img class="display-img" src="./img/odunlami.png">
                                </div>
                                </div>`;
  
  resetForm();
  }
  
  function resetForm() {
  messageForm.reset();
  }
  
  
  
  
  
  
    
  
  
  
  
  
   