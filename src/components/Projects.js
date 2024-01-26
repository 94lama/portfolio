import { useState } from 'react';
import star from '../assets/icons/const/star.svg';
import venice from '../assets/icons/const/venice.svg';
import campus from '../assets/icons/const/Campus.svg';
import box from '../assets/icons/const/Box.svg';
import milazzo from '../assets/icons/const/Milazzo.svg';
import courma from '../assets/icons/const/Courmayeur.svg';
import piedmont from '../assets/icons/const/Piedmont.svg';
import piscina from '../assets/icons/const/Piscina.svg';
import porta from '../assets/icons/const/Porta.svg';
import res from '../assets/icons/const/Residential.svg';
//import constellations from '../data/stars.json';

const stars = [];
const array = [];

export default function Stars() {

    //set to 'none'
    const [image1, setImage1] = useState('none');
    const Appear1 = () => { setImage1(x => !x) };
    const [image2, setImage2] = useState('none');
    const Appear2 = () => { setImage2(x => !x) };
    const [image3, setImage3] = useState('none');
    const Appear3 = () => { setImage3(x => !x) };
    const [image4, setImage4] = useState('none');
    const Appear4 = () => { setImage4(x => !x) };
    const [image5, setImage5] = useState('none');
    const Appear5 = () => { setImage5(x => !x) };
    const [image6, setImage6] = useState('none');
    const Appear6 = () => { setImage6(x => !x) };
    const [image7, setImage7] = useState('none');
    const Appear7 = () => { setImage7(x => !x) };
    const [image8, setImage8] = useState('none');
    const Appear8 = () => { setImage8(x => !x) };
    const [image9, setImage9] = useState('none');
    const Appear9 = () => { setImage9(x => !x) };

// Unify all functions if possible!!
    /*  function Appear(e){
        const element = e.target.parentElement
        element => !element
    } */


    return (
        <div className='sky'>
            <div style={{ rotate: '-20deg',  top: '0vh', zIndex: '2'}}>
                <section className='constellation'
                    style={{ background: image1 ? 'none' : `url(${venice})`, backgroundSize: image1 ? 'null' : 'contain', backgroundRepeat: image1 ? 'null' : 'no-repeat' }}>
                    <img src={star} alt='star' className='star' style={{ top: '2%', left: '6%' }} onMouseEnter={Appear1} onMouseLeave={Appear1} />
                    <img src={star} alt='star' className='star' style={{ top: '62%', left: '0%' }} onMouseEnter={Appear1} onMouseLeave={Appear1} />
                    <img src={star} alt='star' className='star' style={{ top: '0%', left: '78%' }} onMouseEnter={Appear1} onMouseLeave={Appear1} />
                    <img src={star} alt='star' className='star' style={{ top: '62%', left: '73%' }} onMouseEnter={Appear1} onMouseLeave={Appear1} />
                    <img src={star} alt='star' className='star' style={{ top: '90%', left: '-22%' }} onMouseEnter={Appear1} onMouseLeave={Appear1} />
                    <img src={star} alt='star' className='star' style={{ top: '90%', left: '70%' }} onMouseEnter={Appear1} onMouseLeave={Appear1} />
                </section>
            </div>
            <div style={{ rotate: '180deg', left:'-30vw'}}>
                <section className='constellation'
                    style={{ background: image2 ? 'none' : `url(${campus})`, backgroundSize: image2 ? 'null' : 'contain', backgroundRepeat: image2 ? 'null' : 'no-repeat' }}>
                    <img src={star} alt='star' className='star' style={{ top: '65%', left: '0%' }} onMouseEnter={Appear2} onMouseLeave={Appear2} />
                    <img src={star} alt='star' className='star' style={{ top: '85%', left: '20%' }} onMouseEnter={Appear2} onMouseLeave={Appear2} />
                    <img src={star} alt='star' className='star' style={{ top: '50%', left: '50%' }} onMouseEnter={Appear2} onMouseLeave={Appear2} />
                    <img src={star} alt='star' className='star' style={{ top: '-2%', left: '55%' }} onMouseEnter={Appear2} onMouseLeave={Appear2} />
                    <img src={star} alt='star' className='star' style={{ top: '93%', left: '80%' }} onMouseEnter={Appear2} onMouseLeave={Appear2} />
                </section>
            </div>
            <div style={{ rotate: '0deg' }}>
                <section className='constellation'
                    style={{ background: image3 ? 'none' : `url(${box})`, backgroundSize: image3 ? 'null' : 'contain', backgroundRepeat: image3 ? 'null' : 'no-repeat' }}>
                    <img src={star} alt='star' className='star' style={{ top: '15%', left: '0%' }} onMouseEnter={Appear3} onMouseLeave={Appear3} />
                    <img src={star} alt='star' className='star' style={{ top: '70%', left: '-6%' }} onMouseEnter={Appear3} onMouseLeave={Appear3} />
                    <img src={star} alt='star' className='star' style={{ top: '-2%', left: '10%' }} onMouseEnter={Appear3} onMouseLeave={Appear3} />
                    <img src={star} alt='star' className='star' style={{ top: '38%', left: '5%' }} onMouseEnter={Appear3} onMouseLeave={Appear3} />
                    <img src={star} alt='star' className='star' style={{ top: '90%', left: '-1%' }} onMouseEnter={Appear3} onMouseLeave={Appear3} />
                    <img src={star} alt='star' className='star' style={{ top: '20%', left: '15%' }} onMouseEnter={Appear3} onMouseLeave={Appear3} />
                    <img src={star} alt='star' className='star' style={{ top: '75%', left: '9%' }} onMouseEnter={Appear3} onMouseLeave={Appear3} />
                </section>
            </div>
            <div style={{  rotate: '0deg', top: '5vh', left:'0vw'}}>
                <section className='constellation'
                    style={{ background: image4 ? 'none' : `url(${courma})`, backgroundSize: image4 ? 'null' : 'contain', backgroundRepeat: image4 ? 'null' : 'no-repeat' }}>
                    <img src={star} alt='star' className='star' style={{ top: '88%', left: '-1%' }} onMouseEnter={Appear4} onMouseLeave={Appear4} />
                    <img src={star} alt='star' className='star' style={{ top: '35%', left: '7%' }} onMouseEnter={Appear4} onMouseLeave={Appear4} />
                    <img src={star} alt='star' className='star' style={{ top: '68%', left: '22%' }} onMouseEnter={Appear4} onMouseLeave={Appear4} />
                    <img src={star} alt='star' className='star' style={{ top: '0%', left: '36%' }} onMouseEnter={Appear4} onMouseLeave={Appear4} />
                    <img src={star} alt='star' className='star' style={{ top: '52%', left: '49%' }} onMouseEnter={Appear4} onMouseLeave={Appear4} />
                    <img src={star} alt='star' className='star' style={{ top: '40%', left: '51%' }} onMouseEnter={Appear4} onMouseLeave={Appear4} />
                    <img src={star} alt='star' className='star' style={{ top: '84%', left: '57%' }} onMouseEnter={Appear4} onMouseLeave={Appear4} />
                </section>
            </div>
            <div style={{ rotate: '60deg', top:'18vh', left:'10vw' }}>
                <section className='constellation'
                    style={{ background: image5 ? 'none' : `url(${milazzo})`, backgroundSize: image5 ? 'null' : 'contain', backgroundRepeat: image5 ? 'null' : 'no-repeat' , height:'40vh'}}>
                    <img src={star} alt='star' className='star' style={{ top: '85%', left: '-1%' }} onMouseEnter={Appear5} onMouseLeave={Appear5} />
                    <img src={star} alt='star' className='star' style={{ top: '-4%', left: '6%' }} onMouseEnter={Appear5} onMouseLeave={Appear5} />
                    <img src={star} alt='star' className='star' style={{ top: '7%', left: '7%' }} onMouseEnter={Appear5} onMouseLeave={Appear5} />
                    <img src={star} alt='star' className='star' style={{ top: '59%', left: '4%' }} onMouseEnter={Appear5} onMouseLeave={Appear5} />
                    <img src={star} alt='star' className='star' style={{ top: '96%', left: '-2%' }} onMouseEnter={Appear5} onMouseLeave={Appear5} />
                    <img src={star} alt='star' className='star' style={{ top: '71%', left: '-1%' }} onMouseEnter={Appear5} onMouseLeave={Appear5} />
                    <img src={star} alt='star' className='star' style={{ top: '82%', left: '0%' }} onMouseEnter={Appear5} onMouseLeave={Appear5} />
                    <img src={star} alt='star' className='star' style={{ top: '70%', left: '3%' }} onMouseEnter={Appear5} onMouseLeave={Appear5} />
                    <img src={star} alt='star' className='star' style={{ top: '74%', left: '9%' }} onMouseEnter={Appear5} onMouseLeave={Appear5} />
                    <img src={star} alt='star' className='star' style={{ top: '91%', left: '13%' }} onMouseEnter={Appear5} onMouseLeave={Appear5} />
                </section>
            </div>
            <div style={{ rotate:'70deg', top:'20vh', left:'-5vw' }}>
                <section className='constellation'
                    style={{ background: image6 ? 'none' : `url(${piedmont})`, backgroundSize: image6 ? 'null' : 'contain', backgroundRepeat: image6 ? 'null' : 'no-repeat' , height:'50vh'}}>
                    <img src={star} alt='star' className='star' style={{ top: '49%', left: '0%' }} onMouseEnter={Appear6} onMouseLeave={Appear6} />
                    <img src={star} alt='star' className='star' style={{ top: '80%', left: '-1%' }} onMouseEnter={Appear6} onMouseLeave={Appear6} />
                    <img src={star} alt='star' className='star' style={{ top: '23%', left: '8%' }} onMouseEnter={Appear6} onMouseLeave={Appear6} />
                    <img src={star} alt='star' className='star' style={{ top: '66%', left: '5%' }} onMouseEnter={Appear6} onMouseLeave={Appear6} />
                    <img src={star} alt='star' className='star' style={{ top: '95%', left: '4%' }} onMouseEnter={Appear6} onMouseLeave={Appear6} />
                    <img src={star} alt='star' className='star' style={{ top: '0%', left: '13%' }} onMouseEnter={Appear6} onMouseLeave={Appear6} />
                    <img src={star} alt='star' className='star' style={{ top: '90%', left: '14%' }} onMouseEnter={Appear6} onMouseLeave={Appear6} />
                    <img src={star} alt='star' className='star' style={{ top: '35%', left: '17%' }} onMouseEnter={Appear6} onMouseLeave={Appear6} />
                    <img src={star} alt='star' className='star' style={{ top: '27%', left: '22%' }} onMouseEnter={Appear6} onMouseLeave={Appear6} />
                    <img src={star} alt='star' className='star' style={{ top: '47%', left: '19%' }} onMouseEnter={Appear6} onMouseLeave={Appear6} />
                </section>
            </div>
            <div style={{ rotate: '0deg', top: '5vh' }}>
                <section className='constellation'
                    style={{ background: image7 ? 'none' : `url(${piscina})`, backgroundSize: image7 ? 'null' : 'contain', backgroundRepeat: image7 ? 'null' : 'no-repeat' }}>
                    <img src={star} alt='star' className='star' style={{ top: '50%', left: '30%' }} onMouseEnter={Appear7} onMouseLeave={Appear7} />
                    <img src={star} alt='star' className='star' style={{ top: '93%', left: '30%' }} onMouseEnter={Appear7} onMouseLeave={Appear7} />
                    <img src={star} alt='star' className='star' style={{ top: '18%', left: '40%' }} onMouseEnter={Appear7} onMouseLeave={Appear7} />
                    <img src={star} alt='star' className='star' style={{ top: '36%', left: '-14%' }} onMouseEnter={Appear7} onMouseLeave={Appear7} />
                </section>
            </div>
            <div style={{ rotate: '0deg', top: '5vh' }}>
                <section className='constellation'
                    style={{ background: image8 ? 'none' : `url(${porta})`, backgroundSize: image8 ? 'null' : 'contain', backgroundRepeat: image8 ? 'null' : 'no-repeat' }}>
                    <img src={star} alt='star' className='star' style={{ top: '-2%', left: '0%' }} onMouseEnter={Appear8} onMouseLeave={Appear8} />
                    <img src={star} alt='star' className='star' style={{ top: '90%', left: '-6%' }} onMouseEnter={Appear8} onMouseLeave={Appear8} />
                    <img src={star} alt='star' className='star' style={{ top: '-4%', left: '56%' }} onMouseEnter={Appear8} onMouseLeave={Appear8} />
                    <img src={star} alt='star' className='star' style={{ top: '90%', left: '52%' }} onMouseEnter={Appear8} onMouseLeave={Appear8} />
                    <img src={star} alt='star' className='star' style={{ top: '90%', left: '15%' }} onMouseEnter={Appear8} onMouseLeave={Appear8} />
                    <img src={star} alt='star' className='star' style={{ top: '17%', left: '-5%' }} onMouseEnter={Appear8} onMouseLeave={Appear8} />
                    <img src={star} alt='star' className='star' style={{ top: '17%', left: '20%' }} onMouseEnter={Appear8} onMouseLeave={Appear8} />
                </section>
            </div>
            <div style={{ rotate: '-45deg', top: '-5vh' }}>
                <section className='constellation'
                    style={{ background: image9 ? 'none' : `url(${res})`, backgroundSize: image9 ? 'null' : 'contain', backgroundRepeat: image9 ? 'null' : 'no-repeat' }}>
                    <img src={star} alt='star' className='star' style={{ top: '15%', left: '0%' }} onMouseEnter={Appear9} onMouseLeave={Appear9} />
                    <img src={star} alt='star' className='star' style={{ top: '70%', left: '-6%' }} onMouseEnter={Appear9} onMouseLeave={Appear9} />
                    <img src={star} alt='star' className='star' style={{ top: '-2%', left: '10%' }} onMouseEnter={Appear9} onMouseLeave={Appear9} />
                    <img src={star} alt='star' className='star' style={{ top: '38%', left: '5%' }} onMouseEnter={Appear9} onMouseLeave={Appear9} />
                    <img src={star} alt='star' className='star' style={{ top: '90%', left: '-1%' }} onMouseEnter={Appear9} onMouseLeave={Appear9} />
                    <img src={star} alt='star' className='star' style={{ top: '20%', left: '15%' }} onMouseEnter={Appear9} onMouseLeave={Appear9} />
                    <img src={star} alt='star' className='star' style={{ top: '75%', left: '9%' }} onMouseEnter={Appear9} onMouseLeave={Appear9} />
                </section>
            </div>
        </div>
    )
}

/* `../assets/icons/venice.svg` */
/* function Const(x) {
    x.forEach(element => {
        array.push(<img src='./projects/star.svg' alt='star' className='star' style={{ position: 'relative', top: element[0]+'%', left: element[1]+'%', width:'1rem' }} />)
    });
}

constellations.forEach(element => {
    stars.push(
        <div className='constellation' style={{ background: `url(./projects/${element.img})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
            {Const(element.star)}
        </div>
    )
}); */