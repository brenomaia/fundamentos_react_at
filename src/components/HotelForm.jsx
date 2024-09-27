import { useState } from "react";
import ReactModal from "react-modal";
import { v4 } from "uuid";

const HotelForm = ({ isEditModalOpen,  closeEditModal, onConfirm, title, hotel}) => {

    // const [hotel, setHotel]

    const [name, setName] = useState(hotel ? hotel.name : "")
    const [general, setGeneral] = useState(hotel ? hotel.general : "")
    const [city, setCity] = useState(hotel ? hotel.city : "")
    const [state, setState] = useState(hotel ? hotel.state : "")
    const [price, setPrice] = useState(hotel ? hotel.price : "")
    const [rating, setRating] = useState(hotel ? hotel.rating : "")
    const [imgPath, setImgPath] = useState(hotel ? hotel.imgPath : "")

    const gatherInfo = () => {
        return {
            name: name,
            general: general,
            city: city,
            state: state,
            price: price,
            rating: rating,
            id: hotel ? hotel.id : v4(),
            imgPath: imgPath
        }
    }

    return (
        < ReactModal isOpen={isEditModalOpen} onRequestClose={closeEditModal} className="edit-modal" ariaHideApp={false}>
            <h3>{title}</h3>
            <form>
                <input id="input-name" placeholder="Nome do Hotel" required value={name} onChange={(event) => setName(event.target.value)}></input>
                <input id="input-general" placeholder="Informações gerais" required value={general} onChange={(event) => setGeneral(event.target.value)}></input>
                <input id="input-city" placeholder="Cidade" required value={city} onChange={(event) => setCity(event.target.value)}></input>
                <input id="input-state" placeholder="Estado" required value={state} onChange={(event) => setState(event.target.value)}></input>
                <input id="input-price" placeholder="Preço da diária" required min={1} type="number" value={price} onChange={(event) => setPrice(event.target.value)}></input>
                <input id="input-rating" placeholder="Avaliações (1 a 5)" required min={1} max={5} type="number" value={rating} onChange={(event) => setRating(event.target.value)}></input><br />
                <select onChange={(event) => setImgPath(event.target.value)}>
                    <option value="./src/assets/copacabanapalace.jpg">Imagem 1</option>
                    <option value="./src/assets/fasanobh.jpg">Imagem 2</option>
                    <option value="./src/assets/rosewood.jpg">Imagem 3</option>
                </select>
                <button onClick={() => onConfirm(gatherInfo())}>Confirmar</button>
                <button onClick={closeEditModal}>Cancelar</button>
            </form>
        </ReactModal>
    )
}

export default HotelForm;