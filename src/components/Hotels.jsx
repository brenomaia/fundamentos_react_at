import { useNavigate } from "react-router-dom";
import "./hotels.css"
import HotelForm from "./HotelForm";
import { useState } from "react";

import star from "../assets/empty-star-.png"
import rosewood from "../assets/rosewood.jpg"
import copacabanapalace from "../assets/copacabanapalace.jpg"
import fasanobh from "../assets/fasanobh.jpg"

const Hotels = ({ hotels, onEditSearch, onSelectSort, createHotel, onSetFavorite, onFilterByFavorites}) => {
    const navigate = useNavigate();

    const [isEditModalOpen, setEditModel] = useState(false);

    const openEditModal = () => {
        setEditModel(true);
    }

    const closeEditModal = () => {
        setEditModel(false);
    }

    const imgSource = (name) => {
        if (name.includes("rosewood")) { 
            return rosewood
        } else if (name.includes("copacabanapalace")) {
            return copacabanapalace
        } else {
            return fasanobh
        }
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
                    <div className="hotel" key={idx} onClick={() => navigate("/fundamentos_react_at/details/" + hotel.id)}>
                        <img src={imgSource(hotel.imgPath)} alt="hotel picture" />
                        <h3>{hotel.name}</h3>
                        <h4>{hotel.city} - {hotel.state}</h4>
                        <h4>Avaliação: {hotel.rating} / 5</h4>
                        <h4 className="price">Diária: R$ {hotel.price},00</h4>
                        <img onClick={() => onSetFavorite(hotel.id, !hotel.isFavorite)} className={hotel.isFavorite ? "fav-img favorited" : "fav-img"} src={star}></img>
                    </div>
                ))}
            </div>
            < HotelForm isEditModalOpen={isEditModalOpen} closeEditModal={closeEditModal} onConfirm={createHotel} title="Adicionar Hotel"/>
        </div>
    )
}

export default Hotels;