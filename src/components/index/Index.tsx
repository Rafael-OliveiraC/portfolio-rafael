import { useState } from 'react';
import './index.scss';
import text from '../multiLanguage'

import Header from '../header/Header';
import Modal from '../modal/Modal';
import Introdution from '../introdution/Introdution';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';



export default function Index(){
    const [language, setLanguage] = useState('PT');
    const [modal, setModal] = useState(false);
    const [img, setImg] = useState('');

    return(
        <div className="main">
            <Modal onOpen={modal} img={img} onClose={()=>{
                setModal(false);
            }}/>
            <Header text={text['header'][language]} language={(ln)=>{
                setLanguage(ln);
            }}/>
            <main>
                <Introdution text={text['introdution'][language]}/>
                <Skills text={text['skills'][language]}/>
                <Projects text={text['projects'][language]} modal={(img:string)=>{
                    setImg(img);
                    setModal(true);
                }}/>
                <Contact text={text['contact'][language]}/>
            </main>
        </div>
    )
}