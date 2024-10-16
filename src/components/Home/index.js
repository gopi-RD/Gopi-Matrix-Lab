
import Header from "../Header"
import "./index.css"

const Home=()=>{

    return (
        <div className="bg-home-container">
            <div className="home-container">
                 <Header/>
                    <div className="banner-container">
                        <div>
                            <div className="banner-section-container">
                                

                                <span className="banner-heading">
                                        When
                                        Innovation <br/>
                                        Meets
                                </span>
                                <span className=" invest-btn">
                                    Investment
                                </span>
                               
                                <button className="innovation-button">
                                Innovation
                                </button>
                               
                                <p className="banner-text">
                                Empowering Trading Through Advanced Technology 
                                </p>
                                <button className="open-dapp-button"> 
                                Open dApp
                                </button>
                            </div>
                        </div>           
                     </div>
                </div> 
            <div className="our-feature-top-container">
                            <div className="our-features-container">
                                <h1 className="our-feature-title">Our Features</h1>
                                <div className="feature-card-container">
                                            <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729047070/new/k7qpjpvfzipijae2szqf.png" className="trade-optimizer-img" alt="trade optimizer" />
                                            <div className="trade-optimizer-container">
                                                <h1 className="trade-optimizer-title">
                                                Trade Optimizer 
                                                </h1>
                                                <p className="trade-optimizer-text">
                                                Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity. 
                                                </p>
                                            </div>
                                </div>
                            </div>  
                            <div className="markrt-and-empty-container">
                            <div className="markrt-insights-container">
                                    <div className="markrt-insights-card-container">
                                        <h1 className="markrt-insights-title">
                                         Market Insight
                                        </h1>
                                        <p className="markrt-insights-text">
                                        Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.
                                        </p>
                                    </div>
                                    <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729047066/new/k1juq7vu32iu09rmhf0u.png" className="markrt-insights-img" alt="markrt insights"/>
                                    <img src="" className="" alt="" />
                            </div>
                            <div className="empty-container-lg">
                                {/* empty container */}
                            </div>
                            </div>
                            <div className="risk-guard-container">
                                <div className="risk-card-container">
                                <h1 className="risk-guard-title">
                                Risk Guard 
                                </h1>
                                <p className="risk-guard-text">
                                Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.
                                </p>
                                </div>
                                <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729047068/new/lyooe88mw6f3b7zmdetj.png" className="risk-guard-img" alt="risk guard" />
                            </div>
                            <div className="portfolio-and-opportunity-container"> 
                                <div className="portfolio-container">
                                    <div className="portfolio-card-container">
                                            <h1 className="risk-guard-title">
                                            Portfolio Sync 
                                            </h1>
                                            <p className="markrt-insights-text">
                                            Easily manage your portfolio. You'll always know what you own, how it's performing, and where it’s headed.
                                            </p>
                                    </div>
                                    <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729064575/new/t2p5829aohqnu8e5dzxt.png" className="portfolio-img" alt="Portfolio" />

                                </div>

                                <div className="opportunity-scout-container">
                                    <div className="opportunity-description-container">
                                            <h1 className="risk-guard-title">
                                            Opportunity Scout 
                                            </h1>
                                            <p className="markrt-insights-text">
                                            Find exciting new projects, events and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing.
                                            </p>
                                    </div>
                                    <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729047067/new/ouh4vpvbdapjpyv1kmhb.png" className="opportunity-scout-img" alt="Portfolio" />

                                </div>
                                

                            </div>
                
            </div>    
        </div>
    )
}

export default Home;