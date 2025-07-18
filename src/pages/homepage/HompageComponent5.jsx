import "../../styles/Component5.css"
import logo1 from '../../assets/logo2.svg'

const HompageComponent5 = () => {

    return(
        <>
        <div className="contain0">
            <div className="logo0">
                <img src={logo1} alt="logo" className="img0"/>
            </div>
            <div className="aside0">
                <div className="proces0">WHATEVER YOU NEED</div>
                <p className="big0 big01">SERVICES</p>
                <p className="small0 small01">We want to make your company stand out, because first impressions count.</p>
                <div className="child0">
                    <div className="baby0">
                        <p className="big0">WEB DESIGN</p>
                        <p className="small0">Always look fresh with sharp designs and stunning layouts.</p>
                    </div>
                    <div className="baby0">
                        <p className="big0">WEB DEVELOPMENT</p>
                        <p className="small0">Flexible, secure and innovative back end development that makes your site tick.</p>
                    </div>
                    <div className="baby0">
                        <p className="big0">DOMAIN REGISTRATION</p>
                        <p className="small0">Find the right domain to fit your company</p>
                    </div>
                    <div className="baby0">
                        <p className="big0">HOSTING</p>
                        <p className="small0">We’ll set up a hosting solution for you to give you peace of mind.</p>
                    </div>
                </div>

            </div>
        </div>

        </>
    )
}

export default HompageComponent5