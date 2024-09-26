import Menu from "../../components/Menu"
import Hotels from "../../components/Hotels"
import { useState } from "react"

export default function Home() {
    const allHotels = () => {
        let hotels = JSON.parse(localStorage.getItem("hotels") || "[]");

        return hotels
    }

    const getInitialTheme = () => {
        const currentTheme = localStorage.getItem("theme") || "light"
        localStorage.setItem("theme", currentTheme);
        // changeTheme();
        
        return currentTheme
    }

    const [hotels, setHotels] = useState(allHotels());
    const [theme, setStateTheme] = useState(getInitialTheme());

    const changeTheme = () => {
        const newTheme = theme == "light" ? "dark" : "light"


        localStorage.setItem("theme", newTheme)
        setStateTheme(newTheme);
        document.body.className = newTheme;
    };

    const filterHotelsByName = (name) => {
        const searched = allHotels().filter((hotel) => {
            const hotelName = hotel.name.toUpperCase()
            const searchedName = name.toUpperCase()

            return hotelName.startsWith(searchedName)
        })

        setHotels(searched)
    };

    const filterHotelsByFavorite = (isFavorite) => {
        if (isFavorite) {
            console.log(isFavorite);
            const favorites = allHotels().filter((hotel) => hotel.isFavorite);

            setHotels(favorites);
        } else {
            setHotels(allHotels());
        }
    }

    const sortBy = (sortValue) => {
        if (sortValue == "price") {
            let sorted = hotels.toSorted((hotelA, hotelB) => hotelA.price - hotelB.price);
            setHotels(sorted);
        } else if (sortValue == "rating") {
            let sorted = hotels.toSorted((hotelA, hotelB) => hotelA.rating - hotelB.rating);
            setHotels(sorted);
        }
    };

    const createHotel = (hotel) => {
        const hotels = [...allHotels(), hotel]
        const toSave = JSON.stringify(hotels);

        localStorage.setItem("hotels", toSave);

        setHotels(allHotels);
    }

    const onSetFavorite = (id, set) => {
        const idx = allHotels().findIndex((hotel) => hotel.id == id);

        let hotels = [...allHotels()];
        hotels[idx].isFavorite = set;

        localStorage.setItem("hotels", JSON.stringify(hotels));

        setHotels(allHotels());
    };

    return (
        <>
            < Menu onChangeTheme={changeTheme}/>
 
            < Hotels 
            hotels={hotels}
            onEditSearch={filterHotelsByName}
            onSelectSort={sortBy}
            createHotel={createHotel}
            onSetFavorite={onSetFavorite}
            onFilterByFavorites={filterHotelsByFavorite}
            />
        </>
    )
}