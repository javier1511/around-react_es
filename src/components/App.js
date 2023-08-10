import '../index.css';
import Main from "./Main.jsx";
import Header from './Header.jsx';

import React, { useState } from "react";
import api from '../utils/api.js';





function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] =useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState("")

  function handleImageOpenClick (card) {
    setIsImageOpen(true);
    setSelectedCard(card)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
    
  }

  function handleAddNewPlace() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarPopupOpen(){
    
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsImageOpen(false)
  }


  return (
    <div className="App">
    <Header/>
      <Main
          isEditAvatarPopupOpen={isEditAvatarPopupOpen}
          isAddPlacePopupOpen={isAddPlacePopupOpen}
          isEditProfilePopupOpen={isEditProfilePopupOpen}
      oneEditProfileClick={handleEditProfileClick}
      oneAddPlaceClick={handleAddNewPlace}
      oneEditAvatarClick={handleEditAvatarPopupOpen}
      closeAllPopups={closeAllPopups}
      isImageOpen={isImageOpen}
      onOpenImage={handleImageOpenClick}
      selectedCard={selectedCard}
      
      
      />
  
      
        
    
        <footer className="footer">
          <p className="footer__copyright">© 2021 Alrededor de los EEUU</p>
        </footer>
 
    </div>
  );
}

export default App;
