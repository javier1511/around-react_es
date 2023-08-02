import trashButton from "../images/Trash.svg";
import heartImage from "../images/heart-min.svg";
function Card ({imgUrl, title, likes}){
    return(

        <>
    <div class="cards__container">
      <div class="sites__picture-container">
        <img src= {trashButton} alt="yosemite-imagen-vista" class="sites__trash-icon"/>
        <img src= {imgUrl} alt="" class="sites__picture"/>
      </div>
        <div class="sites__description-container">
          <p class="sites__description-text">{title}</p>
          <div class="like__container">
            <img src={heartImage}  alt="me-gusta-imagen" class="sites__description-icon"/>
            <span class="sites__description-counter"> {likes} </span>
          </div>
        
        </div>
    </div>
        </>
    )
}

export default Card;