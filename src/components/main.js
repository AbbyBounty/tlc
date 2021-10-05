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
        </div >
            )
}

            export default Main