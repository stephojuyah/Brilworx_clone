import "../../styles/Component4.css"
import mobile from '../../assets/mobile.svg'
import tab from '../../assets/tab.svg'
import pc from '../../assets/pc.svg'
import desktop from '../../assets/desktop.svg'

const HompageComponent4 = () => {

    return(
        <>
        <div className="contain301">
            <div className="rd">RESPONSIVE DESIGN</div>
            <p className="big301">FEATURES</p>
            <p className="small301">Increasingly, people are viewing the web on a variety of devices – tablets, smartphones, and other mobile devices.
                If your website doesn’t support them then you could be missing out.
            </p>
            <div className="aside301">
                <div className="baby301">
                    <img src={mobile} alt="" className="img301"/>
                    <p className="text301">MOBILE READY</p>
                </div>
                <div className="baby301">
                    <img src={tab} alt="" className="img301"/>
                    <p className="text301">100% RESPONSIVE</p>
                </div>
                <div className="baby301">
                    <img src={pc} alt="" className="img301"/>
                    <p className="text301">RETINA READY</p>
                </div>
                <div className="baby301">
                    <img src={desktop} alt="" className="img301"/>
                    <p className="text301">FLEXIBLE DESIGN</p>
                </div>
            </div>
        </div>

        </>
    )
}

export default HompageComponent4