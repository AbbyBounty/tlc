// import
import Video from '../assets/Video.mp4'
import Ani from '../assets/ani.gif'
const Main = () => {

    return (
        < div  >

            {/* <video classNameName="home-video" autoplay="" muted="" id="myvideo" poster="assets/new_assets/images/xdeskvideoposter.jpg.pagespeed.ic.vnMWPAzEPf.webp">
                <source type="video/mp4" data-video={Video} src={Video} />
                Your browser does not support the video tag.
            </video> */}
            {/* 
            <video src={Video} width="full" height="300" controls="controls" autoplay="" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sequi, reiciendis assumenda fugit, hic doloribus, culpa tempore aut aliquam aspernatur magnam. Dignissimos, saepe earum ducimus odio, eveniet velit iste dolore voluptatibus fugit quaerat debitis excepturi deserunt dolorem delectus quibusdam maxime blanditiis magni! Ea blanditiis corrupti earum consectetur harum recusandae itaque culpa vel iusto iste velit labore, quas dolor eaque soluta at rerum quae repellendus. Quas repudiandae enim, aliquam minima atque porro eos natus ducimus repellendus minus sed vero sequi quaerat ipsam ea illum eius voluptatibus totam incidunt adipisci laborum illo. Exercitationem ad eligendi nostrum accusamus voluptas expedita culpa, quis cum!
 */}


            <section className="main-slider-wrapper">
                <div className="main-slider1">
                    <div className="slider-item video-item">
                        <div className="slider-media in-desktop">
                            {/* <video className="home-video" autoPlay muted="" id="myvideo"  >

                                <source type="video/mp4" src={Video} />
                                Your browser does not support the video tag.
                            </video> */}

                            <img src={Ani} className="home-video" />
                        </div>
                        <div className="slider-copy text-center">
                            <h1 className="slider-heading">Leading Engineering Company in India</h1>
                            <p>We provide simple and innovative solutions to deliver complex projects on time</p>
                        </div>
                    </div>
                </div>


            </section>



            <section className="investor-relations-wrapper text-center">
                <div className="container-custom">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="wrapper-heading text-center">Investor Relations</h2>
                            <p className="investor-copy"> At TLC Ltd, it is our constant endeavour to ensure accurate and
                                timely <br /> disclosure of corporate information to our investors.</p>
                            <div className="investor-slider slick-initialized slick-slider">
                                <div className="slick-list draggable">
                                    <div className="slick-track"
                                        style={{ "opacity": "1" }, { "width": "1296px" }, { "transform": "translate3d(0px, 0px, 0px)" }}>
                                        <div className="slick-slide slick-current slick-active" data-slick-index="0"
                                            aria-hidden="false" style={{ "width": "274px" }}>
                                            <div>
                                                <div className="investor-item" style={{ "width": "100%" }, { "display": "inline-block" }}>
                                                    <p className="investor-year">Annual Report - FY 2020-21</p>
                                                    <a href="https://www.tataprojects.com/images/download-files/Tata-Projects-Ltd-AR-20-21.pdf"
                                                        className="btn-tata btn-small" download="Annual_Report" tabindex="0">
                                                        <span>Download</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slick-slide slick-active" data-slick-index="1" aria-hidden="false"
                                            style={{ "width": "274px" }}>
                                            <div>
                                                <div className="investor-item" style={{ "width": "100%" }, { "display": "inline-block" }}>
                                                    <p className="investor-year">Annual Report - FY 2019-20</p>
                                                    <a href="https://www.tataprojects.com/images/download-files/TPL_AR_2019-2020_NEW.pdf"
                                                        className="btn-tata btn-small" download="Annual_Report" tabindex="0">
                                                        <span>Download</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slick-slide slick-active" data-slick-index="2" aria-hidden="false"
                                            style={{ "width": "274px" }}>
                                            <div>
                                                <div className="investor-item" style={{ "width": "100%" }, { "display": "inline-block" }}>
                                                    <p className="investor-year">Annual Report - FY 2018-19</p>
                                                    <a href="https://www.tataprojects.com/images/download-files/TPL_40_AR_2018_19.pdf"
                                                        className="btn-tata btn-small" download="Annual_Report" tabindex="0">
                                                        <span>Download</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slick-slide slick-active" data-slick-index="3" aria-hidden="false"
                                            style={{ "width": "274px" }}>
                                            <div>
                                                <div className="investor-item" style={{ "width": "100%" }, { "display": "inline-block" }}>
                                                    <p className="investor-year">Annual Report - FY 2017-18</p>
                                                    <a href="https://www.tataprojects.com/images/download-files/TPL_39_AR_2017_18.pdf"
                                                        className="btn-tata btn-small" download="Annual_Report" tabindex="0">
                                                        <span>Download</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="view-more-btn news-btn investor-button col-sm-12 ">
                                <a href="https://www.tataprojects.com/investor" className="btn-tata btn-fill">
                                    <span>view all</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Main