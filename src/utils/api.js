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
        console.log(res);
        return res;
      } catch (err) {
        console.log(err);
      }
    }
  
    async addNewCardFromApi(name, link) {
      try {
        const newCard = await this._useFetch("https://around.nomoreparties.co/v1/web_es_05/cards", "POST", {
          name: name,
          link: link,
        }, 
        {
          'Content-Type': 'application/json'
        });
        console.log(newCard); // Agregado console.log para validar la respuesta
        return newCard;
      } catch (err) {
        console.log(err);
      }
    }
  
    async removeCardFromApi(cardId) {
      try {
        return await this._useFetch(`https://around.nomoreparties.co/v1/web_es_05/cards/${cardId}`, "DELETE");
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
          console.log(removeLike);
          return removeLike;
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  
    async getUserProfile() {
      try {
        const res = await this._useFetch("https://around.nomoreparties.co/v1/web_es_05/users/me", "GET");
        console.log("🚀 ~ file: Api.js:74 ~ Api ~ getUserProfile ~ res:", res)
        return res;
      } catch (err) {
        console.log(err);
      }
    }
  
    async patchUserProfile(name, about, avatar) {
      try {
        const res = await this._useFetch("https://around.nomoreparties.co/v1/web_es_05/users/me", "PATCH", {
          name,
          about,
          avatar
        }, {
          "Content-Type": "application/json"
        });
        console.log(res);
        return res;
      } catch (err) {
        console.log(err);
      }
    }
      async changeAvatarProfile(avatar) {
        try {
          const res = await this._useFetch("https://around.nomoreparties.co/v1/web_es_05/users/me/avatar", "PATCH", {
            avatar
          });
          console.log(res);
          return res;
        } catch (err) {
          console.log(err);
          throw err;
        }
    }
  }


  const api = new Api();
  export default api