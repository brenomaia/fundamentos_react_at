import "./menu.css"

const Menu = ({ onChangeTheme }) => {

    const changeThemeValue = () => {
        if ((localStorage.getItem("theme") || "light") == 'light') {
            return "Tema Escuro"
        } else {
            return "Tema Claro"
        }
    }

    return (
        <div className="header-menu">
            <p>Online Hoteis</p>
            <button onClick={() => onChangeTheme()}>{changeThemeValue()}</button>
        </div>
    )
}

export default Menu;