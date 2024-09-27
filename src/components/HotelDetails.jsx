import { useState } from "react";
import "./hotel_details.css"
import Menu from "./Menu";
import HotelForm from "./HotelForm";

import { useLocation, useNavigate, useParams } from "react-router-dom";

const HotelDetails = () => {
    // const location = useLocation();
    const navigate = useNavigate();

    const [isEditModalOpen, setEditModel] = useState(false);

    
    const allHotels = () => {
        let hotels = JSON.parse(localStorage.getItem("hotels") || "[]");
        
        return hotels
    }
    
    const getHotel = (id) => {
        return allHotels().filter((hotel) => hotel.id == id)[0]
    }
    
    let { hotelId } = useParams();
    const [hotel, setHotel] = useState(getHotel(hotelId));

    const openEditModal = () => {
        setEditModel(true);
    }

    const closeEditModal = () => {
        setEditModel(false);
    }

    const deleteHotel = (id) => {
        const hotels = allHotels().filter((hotel) => hotel.id != id);

        console.log(hotels);

        localStorage.setItem("hotels", JSON.stringify(hotels))

        navigate("/");
    }

    const editHotel = (hotel) => {
        const id = hotel.id;
        const hotels = allHotels().filter((hotel) => hotel.id != id);

        const updated = [...hotels, hotel]

        localStorage.setItem("hotels", JSON.stringify(updated))

        navigate("/details/" + hotel.id);
        setHotel(hotel);
    }
    return (
        <>
        < Menu />
        <div className="hotel-details">
            <img src={"../" + hotel.imgPath} alt="hotel picture" />
            <div className="hotel-info">
                <h2>{hotel.name}</h2>
                <p>{hotel.general}</p>
                <h3>{hotel.city} - {hotel.state}</h3>
                <h3>Avaliação: {hotel.rating} / 5</h3>
                <h3 className="price">Diária: R$ {hotel.price},00</h3>
            </div>
        </div>
        <div className="hotel-actions">
            <button onClick={() => navigate("/fundamentos_react_at")}>Voltar</button>
            <button onClick={openEditModal}>Editar</button>
            <button onClick={() => deleteHotel(hotel.id)}>Remover</button>
        </div>
        < HotelForm isEditModalOpen={isEditModalOpen} closeEditModal={closeEditModal} hotel={hotel} onConfirm={editHotel}/>
        </>
    )
}

export default HotelDetails;