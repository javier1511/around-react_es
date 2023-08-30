import '../index.css';
import Main from "./Main.jsx";
import Header from './Header.jsx';

import React, { useState } from "react";
import api from '../utils/api.js';
import CurrentUserContext from '../contexts/CurrentUserContext';
import DeleteCardPopup from './DeleteCardPopup';





function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] =useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState("")
  const [currentUser, setCurrentUser] =useState("")
  const [cards, setCards] = useState([]);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen]= useState(false);
  

  function handleImageOpenClick (card) {
    setSelectedCard(card)
    setIsImageOpen(true);
  
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
    
  }

  function handleDeleteCardPopup (card){
    setSelectedCard(card)
    setIsDeleteCardPopupOpen(true);
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
    setIsDeleteCardPopupOpen(false)
    
  }
  React.useEffect(() => {
    api.getUserProfile().then((data) => {
      setCurrentUser(data);
    });
  }, []);
  React.useEffect(() => {
    api.getCards().then((data) => {
      setCards(data);
    });
  }, []);

  const handleRemoveCard = (cardId) => {
    api.removeCardFromApi(cardId, () => 
      setCards((state) => state.filter((card) => card._id !== cardId))
    );
  };
  
  
  return (

    
   
<CurrentUserContext.Provider value={currentUser}>
  <div className='page'>

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
      cards={cards}
      onDeleteCardClick={handleDeleteCardPopup}
      
    
      />

      <DeleteCardPopup 
      isOpen={isDeleteCardPopupOpen}
      onClose={closeAllPopups}
      selectedCard={selectedCard}
      onDeleteCard={handleRemoveCard}
      
      
      
      />

 
      
           

    
  
      
        
    
        <footer className="footer">
          <p className="footer__copyright">© 2021 Alrededor de los EEUU</p>
        </footer>


  </div>

  



      


</CurrentUserContext.Provider>
  
 
   
  );
}

export default App;
