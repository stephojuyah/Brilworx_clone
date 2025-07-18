import "../../styles/Component2.css"
import smilingman from '../../assets/smilingman.png'
import colab from '../../assets/colab.svg'
import blog from '../../assets/blog.svg'
import contact from '../../assets/contact.svg'

const HompageComponent2 = () => {

    return(
        <>
        <div className="part1">
            <div className="container1">
                <div className="child1">
                    <div className="welcome">WELCOME TO BRILWORX</div>
                    <p className="big">WE BUILD JAW-DROPPING WEBSITES</p>
                </div>
                <div className="child2">
                    <img src={smilingman} alt="smiling-man" className="smile"/>
                </div>
            </div>
            <p className="small">Creative website design for start-ups, sole traders & settled businesses.</p>
            <div className="container2">
                <div className="baby">
                    <img src={colab} alt="" className="down"/>
                    <p className="top">COLLABORATE</p>
                    <p className="middle">Work collaboratively with supportive designers and create your perfect website.</p>
                    <button className="bottom">CHECK OUR WORK</button>
                </div>
                <div className="baby">
                    <img src={blog} alt="" className="down"/>
                    <p className="top">BLOG</p>
                    <p className="middle">Explore our blogs to educate and accentuate your online presence.</p>
                    <button className="bottom">READ OUR POST</button>
                </div>
                <div className="baby">
                    <img src={contact} alt="" className="down"/>
                    <p className="top">CONTACT US</p>
                    <p className="middle">Build customizable packages and get your free quote now.</p>
                    <button className="bottom">ASK FOR A QUOTE</button>
                </div>
            </div>

        </div>

        </>
    )
}

export default HompageComponent2