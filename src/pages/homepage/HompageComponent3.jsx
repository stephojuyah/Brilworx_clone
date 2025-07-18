import "../../styles/Component3.css"
import logo1 from '../../assets/logo2.svg'

const HompageComponent3 = () => {

    return(
        <>
        <div className="contain201">
            <div className="logo201">
                <img src={logo1} alt="logo" className="img201"/>
            </div>
            <div className="aside201">
                <div className="process nay">OUR PROCESS</div>
                <p className="big201 freda">THE WAY</p>
                <p className="small201">Make the web beautiful.</p>
                <div className="child201">
                    <div className="baby201">
                        <p className="big202">DISCUSS</p>
                        <p className="small202">Collaboration is key. We want to understand your business and your customers.</p>
                    </div>
                    <div className="baby201">
                        <p className="big202">DESIGN</p>
                        <p className="small202">We’ll create carefully crafted designs.</p>
                    </div>
                    <div className="baby201">
                        <p className="big202">DELIVER</p>
                        <p className="small202">Produce a stunning end product.</p>
                    </div>
                </div>

            </div>
        </div>

        </>
    )
}

export default HompageComponent3