
import "./index.css"
const Header=()=>{
    const displayNavbarList=()=>{

        return (
            <ul className="navbar-list-items">
                        <li className="nav-item"><a className="nav-link" >Features</a></li>
                        <li className="nav-item"><a  className="nav-link" >Why Us</a></li>
                        <li className="nav-item"><a  className="nav-link">Tokenomics</a></li>
                        <li><a  className="nav-link" >Roadmap</a></li>
                    </ul>
        )

    }
    return (
        <div className="bg-header-container">
            <header className="header-container">
                <div className="website-logo-container">
                    <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729047292/new/y3xsgiizzgxllcoavphd.png" className="website-logo" alt="logo" />
                    <h2 className="company-name">EthAi</h2>
                </div>
                <nav className="navbar-items">
                    {displayNavbarList()}
                </nav>
                <div className="buttons-container">
                    <button className="btn-login">Log In</button>
                    <button className="btn-whitepaper">Whitepaper</button>
                </div>
                <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729047714/new/buzrpxbavxehhp5ithpn.png" className="" alt="" />
               
            </header>

        </div>
       
    )
}

export default Header