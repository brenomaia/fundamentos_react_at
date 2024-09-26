import { useNavigate } from "react-router-dom";
import "./hotels.css"
import HotelForm from "./HotelForm";
import { useState } from "react";

const Hotels = ({ hotels, onEditSearch, onSelectSort, createHotel, onSetFavorite, onFilterByFavorites}) => {
    const navigate = useNavigate();

    const [isEditModalOpen, setEditModel] = useState(false);

    const openEditModal = () => {
        setEditModel(true);
    }

    const closeEditModal = () => {
        setEditModel(false);
    }

    return (
        <div>
            <input className="search-bar" placeholder="Busque um hotel" onChange={(event) => onEditSearch(event.target.value)}></input>
            <select onChange={(event) => onSelectSort(event.target.value)}>
                <option value="price">Ordenar por mais barato</option>
                <option value="rating">Ordenar por avaliação</option>
            </select>
            <br></br>
            <input type="checkbox" id="filterFavorites" onChange={(event) => onFilterByFavorites(event.target.checked)}/>
            <label htmlFor="filterFavorites"> Filtrar favoritados</label>

            <br></br>
            <button className="add-new-button" onClick={openEditModal}>Adicionar novo hotel</button>
            <div className="hotels-listing">
                {hotels.map((hotel, idx) => (
                    <div className="hotel" key={idx} onClick={() => navigate("/details/" + hotel.id)}>
                        <img src={hotel.imgPath} alt="hotel picture" />
                        <h3>{hotel.name}</h3>
                        <h4>{hotel.city} - {hotel.state}</h4>
                        <h4>Avaliação: {hotel.rating} / 5</h4>
                        <h4 className="price">Diária: R$ {hotel.price},00</h4>
                        <img onClick={() => onSetFavorite(hotel.id, !hotel.isFavorite)} className={hotel.isFavorite ? "fav-img favorited" : "fav-img"} src="./src/assets/empty-star-.png"></img>
                    </div>
                ))}
            </div>
            < HotelForm isEditModalOpen={isEditModalOpen} closeEditModal={closeEditModal} onConfirm={createHotel} title="Adicionar Hotel"/>
        </div>
    )
}

export default Hotels;