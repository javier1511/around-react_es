class Api {
    constructor() {
      this.authorization = 'a35633fc-57a4-481b-b1c4-bb7e5e2ce1c9';
    }
  
    async _useFetch(url, method, body) {
      const res = await fetch(url, {
        headers: {
          authorization: this.authorization,
          'Content-Type': 'application/json'
        },
        method,
        body: JSON.stringify(body),
      });
  
      if (res.ok) {
        return res.json();
      }
  
      return Promise.reject(`Error: ${res.status}`);
    }
  
    async getCards() {
      try {
        const res = await this._useFetch("https://around.nomoreparties.co/v1/web_es_05/cards", "GET");
        return res;
      } catch (err) {
        console.log(err);
      }
    }
  
    async addNewCardFromApi(cardData, onAddPlaceSubmit) {
      try {
        const newCard = await this._useFetch(
          "https://around.nomoreparties.co/v1/web_es_05/cards",
          "POST",
          cardData, // Pass the whole cardData object
          {
            'Content-Type': 'application/json'
          }
        );
        if (typeof onAddPlaceSubmit === 'function') {
          onAddPlaceSubmit(newCard);
        }
    
        return newCard;
      } catch (err) {
        console.log(err);
      }
    }
    
    
    async removeCardFromApi(cardId, onDeleteCard) {
      try {
        const deletedCard = await this._useFetch(`https://around.nomoreparties.co/v1/web_es_05/cards/${cardId}`, "DELETE");
        onDeleteCard(cardId); // Call the provided callback function with the deleted card's ID
        return deletedCard; // You might choose to return deletedCard or any other relevant information
      } catch (err) {
        throw new Error(err);
      }
    }
    
    
    
  
    async addLike(cardId) {
      try {
        const like = await this._useFetch(`https://around.nomoreparties.co/v1/web_es_05/cards/likes/${cardId}`, "PUT"); 
        return like;
      } catch (err) {
        throw new Error(err);
      }
    }
  
    async removeLike(cardId) {
      try {
        const removeLike = await this._useFetch(`https://around.nomoreparties.co/v1/web_es_05/cards/likes/${cardId}`, "DELETE"); {
          return removeLike;
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  
  
    async getUserProfile() {
      try {
        const res = await this._useFetch("https://around.nomoreparties.co/v1/web_es_05/users/me", "GET");
        return res;
      } catch (err) {
        console.log(err);
      }
    }
  
  async patchUserProfile(name, about, avatar, onUpdateUser) {
  try {
    const res = await this._useFetch("https://around.nomoreparties.co/v1/web_es_05/users/me", "PATCH", {
      name,
      about,
      avatar
    }, {
      "Content-Type": "application/json"
    });

    // After updating the user profile, call the provided onUpdateUser callback
    onUpdateUser(res);

    return res;
  } catch (err) {
    console.log(err);
  }
}

      async changeAvatarProfile(link) {
        try {
          const res = await this._useFetch("https://around.nomoreparties.co/v1/web_es_05/users/me/avatar", "PATCH", {
            avatar:link
          });
          
          return res;
        } catch (err) {
          console.log(err);
          throw err;
        }
    }
  }


  const api = new Api();
  export default api