
import { useInView } from "react-intersection-observer";
import Header from "../Header"
import "./index.css"

const Home=()=>{
    const { ref:myRef, inView:myElementIsView } = useInView();
    const { ref:bottomRef,inView:viewBottomToTop } = useInView();
    const { ref:tokenoRef, inView:tokenomview } = useInView();
    const { ref:tokenText, inView:tokenTextView } = useInView();
    const { ref:phase1Top, inView:phase1ViewFromTop } = useInView();
    const { ref:phase1Bottom, inView:phase1ViewBottom}=useInView();
    const {ref:phase3Left, inView:phase3ViewFromLeft}=useInView();
    const {ref:phase3Right, inView:phase3ViewFromRight}=useInView();

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
            <div  ref={myRef} className={`our-feature-top-container ${myElementIsView?"animationTopBottomText":""}`} id="featureId">
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
            <div  ref={bottomRef} className= {`about-top-container ${viewBottomToTop?"animationBottomToTopText":""}`} id="whyUsId">
                <div className="about-ethai-container">
                  
                    <h1 className="about-ethai-title">
                    About EthAi
                    </h1>
                    <p className="about-description">
                    At Eth Ai, we’re all about making crypto trading easier and more intuitive. We provide tools that help traders keep up with all new market trends, track top traders’ movements.
                    </p>
                    <button className="about-button">
                         Read more
                    </button>
                    

                </div> 
               
                
                    <ul className="about-list-items">
                        <li className="about-item">
                            <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729047070/new/xy91zygw4eqcvhgdlnfh.png" className="about-item-img" alt=""/>
                            <h3 className="about-item-title">
                            Stay Ahead
                            </h3>
                            <p className="about-item-text">
                            No more guesswork—get clear, trustable insights.
                            </p>

                        </li>
                        <li className="about-item">
                            <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729078092/new/yiaz2dqhrwv36le6zf4d.png" className="about-item-img" alt=""/>
                            <h3 className="about-item-title">
                            Know Your Assets
                            </h3>
                            <p className="about-item-text">
                            Always stay on top of how your investments are performing.
                            </p>

                        </li>
                        <li className="about-item">
                            <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729047072/new/tlbokrpjh8ngbbr31t2h.png" className="about-item-img" alt=""/>
                            <h3 className="about-item-title">
                            Simple, Not Overwhelming 
                            </h3>
                            <p className="about-item-text">
                            Our tools are designed to make complex market analysis easy to understand and act on.
                            
                            </p>

                        </li>
                        <li className="about-item">
                            <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729047069/new/ivvj1srrdtd1ynz52ehu.png" className="about-item-img" alt=""/>
                            <h3 className="about-item-title">
                            Future-Proof
                            </h3>
                            <p className="about-item-text">
                            We’re constantly improving, adding new features to help you make the most informed decisions possible.
                            </p>

                        </li>
                    </ul>
              
                    </div>   
                   
            <div className="about-top-container" id="tokenomicsId"> 
                    <h1 className="tokenomics-title">
                    Tokenomics
                    </h1>
                    <div className="tokenomics-card-container">
                        <img ref={tokenoRef}  src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729079019/new/zcmayvgveh6fehrpqxjt.png" className={` tokenomics-img ${tokenomview? "tokenomicsAnimation":""}`} alt="tokenomics" />
                        <div ref={tokenText} className={`${tokenTextView?"tokenomicsTextAnimation":""}`}>
                        <ul className="tokenomics-card-description">
                                    <li className="key-value-container">
                                        <span className="key">
                                        Name
                                        </span> 
                                        <span className="value-container">
                                            :
                                            <span  className="value">
                                            EthAi
                                            </span>
                                        </span>
                                    </li>
                                    <li className="key-value-container">
                                        <span className="key">
                                        Token Name
                                        </span> 
                                        <span className="value-container">
                                            :
                                            <span  className="value">
                                            $EthAi
                                            </span>
                                        </span>
                                    </li>
                                    <li className="key-value-container">
                                        <span className="key">
                                        Token standard
                                        </span> 
                                        <span className="value-container">
                                            :
                                            <span  className="value">
                                            ERC20
                                            </span>
                                        </span>
                                    </li>
                                    <li className="key-value-container">
                                        <span className="key">
                                        Total Supply
                                        </span> 
                                        <span className="value-container">
                                            :
                                            <span  className="value">
                                            100 Million
                                            </span>
                                        </span>
                                    </li>
                                    <li className="key-value-container">
                                        <span className="key">
                                       Tax
                                        </span> 
                                        <span className="value-container">
                                            :
                                            <span  className="value">
                                            5%/5%
                                            </span>
                                        </span>
                                    </li>
                                    
                                    
                        </ul>

                        <ul className="tokenomics-card-description">
                        <li className="key-value-container">
                                        <span className="key">
                                       Team
                                        </span> 
                                        <span className="value-container">
                                            :
                                            <span  className="value">
                                            35%
                                            </span>
                                        </span>
                                    </li>
                                    <li className="key-value-container">
                                        <span className="key">
                                        Marketing
                                        </span> 
                                        <span className="value-container">
                                            :
                                            <span  className="value">
                                            5%
                                            </span>
                                        </span>
                                    </li>
                                    <li className="key-value-container">
                                        <span className="key">
                                        Liquidity Pool
                                        </span> 
                                        <span className="value-container">
                                            :
                                            <span  className="value">
                                            90%
                                            </span>
                                        </span>
                                    </li>

                        </ul>
                        </div>
                        
                       
                                

                    </div>
            </div>

            <div className="about-top-container" id="roadmapId">

                <h1 className="about-ethai-title">Roadmap</h1>
                <div className="phase-1-container">
                    <div ref={phase1Top} className={`${phase1ViewFromTop?"animationTopBottomText":""}`}>
                    <div className="phase-1">
                    PHASE 1
                    </div>
                    <h1 className="kicking-off-heading">
                    Kicking Off
                    </h1>
                    <ul className="phase-list-items">
                        <li className="phase-item">
                            <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729094663/rhaw9jxksv0wztcv5orp.png" className="phase-img" alt="Checked"/>
                            <p className="phase-text">Launch of EthAi: Officially</p>
                        </li>
                        <li className="phase-item">
                            <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729094663/rhaw9jxksv0wztcv5orp.png" className="phase-img" alt="Checked"/>
                            <p className="phase-text">Development of Core AI Agents</p>
                        </li>
                        <li className="phase-item">
                            <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729094663/rhaw9jxksv0wztcv5orp.png" className="phase-img" alt="Checked"/>
                            <p className="phase-text">User Onboarding Campaign</p>
                        </li>
                        <li className="phase-item">
                            <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729094663/rhaw9jxksv0wztcv5orp.png" className="phase-img" alt="Checked"/>
                            <p className="phase-text">Community Engagement Initiatives</p>
                        </li>
                    </ul>
                    </div>
                    <img ref={phase1Bottom} src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729047075/new/eidvqmn0eolbyoftpbbz.png" className={`phase-bottom-img ${ phase1ViewBottom?"animationBottomToTopText":""}`} alt="img" />
                 
                </div>

                <div className="phase-1-container">
                    <div className="change-order">
                    <div className="phase-1">
                    PHASE 2
                    </div>
                    <h1 className="kicking-off-heading">
                    Bigger Insights
                    </h1>
                    <ul className="phase-list-items">
                        <li className="phase-item">
                            <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729094663/rhaw9jxksv0wztcv5orp.png" className="phase-img" alt="Checked"/>
                            <p className="phase-text">Introduction of Advanced AI Agents</p>
                        </li>
                        <li className="phase-item">
                            <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729094663/rhaw9jxksv0wztcv5orp.png" className="phase-img" alt="Checked"/>
                            <p className="phase-text">Strategic Partnerships</p>
                        </li>
                        <li className="phase-item">
                            <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729094663/rhaw9jxksv0wztcv5orp.png" className="phase-img" alt="Checked"/>
                            <p className="phase-text">User Interface Optimization</p>
                        </li>
                        <li className="phase-item">
                            <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729094663/rhaw9jxksv0wztcv5orp.png" className="phase-img" alt="Checked"/>
                            <p className="phase-text">Comprehensive Marketing Campaign</p>
                        </li>
                    </ul>
                    </div>
                    
                    <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729096771/new/edth9ye6o9dpobhnjqvd.png" className="phase-bottom-img change-order" alt="img" />
                   
                </div>

                
                <div className="phase-1-container">
                    <div ref={phase3Left} className={`${phase3ViewFromLeft?"tokenomicsAnimation":""}`}>
                    <div className="phase-1">
                    PHASE 3
                    </div>
                    <h1 className="kicking-off-heading">
                    Full Power
                    </h1>
                    <ul className="phase-list-items">
                        <li className="phase-item">
                            <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729094663/rhaw9jxksv0wztcv5orp.png" className="phase-img" alt="Checked"/>
                            <p className="phase-text">Introduction of Enhanced Features</p>
                        </li>
                        <li className="phase-item">
                            <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729094663/rhaw9jxksv0wztcv5orp.png" className="phase-img" alt="Checked"/>
                            <p className="phase-text">API Integration for Data Access</p>
                        </li>
                        <li className="phase-item">
                            <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729094663/rhaw9jxksv0wztcv5orp.png" className="phase-img" alt="Checked"/>
                            <p className="phase-text">Launch of Community-Driven Initiatives</p>
                        </li>
                        <li className="phase-item">
                            <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729094663/rhaw9jxksv0wztcv5orp.png" className="phase-img" alt="Checked"/>
                            <p className="phase-text">Continuous Improvement and Updates</p>
                        </li>
                    </ul>
                    </div>
                   
                    <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729047073/new/v9gqktdvxlfyzjuqig8c.png" ref={phase3Right} className={`phase-bottom-img ${phase3ViewFromRight?"tokenomicsTextAnimation":""}`} alt="img" />
                   
                </div>

            </div>
            <div className="frequently-asked-container">
            <div className="frequently-asked-question-container">
                <h1 className="frequently-asked-question-title">
                Frequently Asked 
                Questions
                </h1>
                <ul className="frequently-asked-questions-list ">
                    <li className="question-item">
                        <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729098076/new/uoj5wxjcgrdjiukm6uzb.png" className="question-icon" alt="question" />
                        <p className="question-text">What is EthAi?</p>
                    </li>
                    <li className="question-item">
                        <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729098076/new/uoj5wxjcgrdjiukm6uzb.png" className="question-icon" alt="question" />
                        <p className="question-text">How can EthAi can help me as a Trader?</p>
                    </li>
                    <li className="question-item">
                        <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729098076/new/uoj5wxjcgrdjiukm6uzb.png" className="question-icon" alt="question" />
                        <p className="question-text">Who can use EthAi?</p>
                    </li>
                    <li className="question-item">
                        <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729098076/new/uoj5wxjcgrdjiukm6uzb.png" className="question-icon" alt="question" />
                        <p className="question-text">How does EthAi track smart money flow?</p>
                    </li>
                    <li className="question-item">
                        <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729098076/new/uoj5wxjcgrdjiukm6uzb.png" className="question-icon" alt="question" />
                        <p className="question-text">How does ensure data security?</p>
                    </li>
                </ul>
            </div>
            </div>
            <div className="explore-our-dApp-container-top">
                <div className="explore-our-dApp-container">
                    <h1 className="explore-our-dApp-title">
                    Explore Our 
                    <span className="dapp-title">
                    dApp
                    </span>
                    
                    </h1>
                    <p className="explore-our-dApp-text">
                    EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. By tracking smart money flows, monitoring key wallets, and providing real-time market insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI Features for asset recommendations, market analysis, and personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.

                    </p>
                    <button className="open-dapp">
                        Open dApp
                    </button>
                </div>
            </div>
            <div className="footer-lg-container">
            <div className="footer-top-container">
                <div className="footer-container">
                    <div className="website-footer-container">
                    <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729047292/new/y3xsgiizzgxllcoavphd.png" className="website-logo-footer" alt="logo" />
                    <h2 className="company-name-footer">EthAi</h2>
                    </div>
                    <div className="social-media-container">
                            
                      <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729047074/new/h8sgxa4pzsamx2ukrfsb.png" className="social-media" alt="" />
                    <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729047070/new/my5i8yvzqsfpd6in9gny.png" className="social-media" alt="" />
                     <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729047074/new/h6kuozzwb4cdwfztlhxq.png" className="social-media" alt="" />
                    <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728809916/icons/lbs7a6rbagieepqifntn.png" className="social-media" alt="" />
                      <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1729047074/new/futx3klw3jhsxtezi4wz.png" className="social-media" alt="" />
                           
                    </div>
                </div>
                <div className="contact-container">
                    <h1 className="contact-title">
                    “Designed for traders of today, just like you."
                    </h1>
                    <div className="input-container">
                        <input className="custom-input" type="email" placeholder="What's your work email?" />
                        <button className="get-started-button">
                            Get Started
                        </button>
                    </div>

                </div>
            </div>
            </div>

        </div>
    ) 
}

export default Home