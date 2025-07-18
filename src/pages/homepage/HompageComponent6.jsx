import "../../styles/Component6.css"
import about from '../../assets/about.svg'


const HompageComponent6 = () => {

    return(
        <>
        <div className="part6">
            <img src={about} alt="" className="img501"/>
            <p className="big501">ABOUT US</p>
            <p className="small501">We work with everyone, big or small, and we want to find the best solution for you.</p>
            <button className="btn501">GET TO KNOW US</button>
        </div>

        </>
    )
}

export default HompageComponent6