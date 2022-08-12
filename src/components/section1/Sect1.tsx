import { useState } from 'react';

import './sect1.scss';
import document from '../../assets/document.pdf';
import text from '../text'

export default function Sect1(){
    const [language, setLanguage] = useState('PT');

    const newText = text[language];

    return(
        <div className="sect1">
            <header>
                <nav>
                    <ul>
                        <li>
                            <button>{newText['header'][1]}</button>
                        </li>
                        <li>
                            <button>{newText['header'][2]}</button>
                        </li>
                        <li>
                            <button>{newText['header'][3]}</button>
                        </li>
                        <li>
                            <button>{newText['header'][4]}</button>
                        </li>
                    </ul>
                </nav>
                <div>
                    <ul>
                        <li>
                            <a href='https://github.com/rafael-oliveirac' target="_blank">
                                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8162 0C5.73524 0 0 5.73524 0 12.8162C0 18.4873 3.66863 23.2774 8.76306 24.9755C9.40387 25.0877 9.64417 24.7032 9.64417 24.3667C9.64417 24.0624 9.62815 23.0531 9.62815 21.9797C6.40809 22.5725 5.57504 21.1947 5.31871 20.4738C5.17453 20.1054 4.54974 18.9679 4.00505 18.6636C3.55649 18.4232 2.91568 17.8305 3.98903 17.8145C4.99831 17.7985 5.71922 18.7437 5.95952 19.1281C7.11298 21.0666 8.9553 20.5219 9.69223 20.1855C9.80437 19.3524 10.1408 18.7917 10.5093 18.4713C7.65766 18.1509 4.6779 17.0455 4.6779 12.1433C4.6779 10.7496 5.17453 9.59611 5.99156 8.69898C5.8634 8.37857 5.41483 7.06492 6.11972 5.30269C6.11972 5.30269 7.19308 4.96627 9.64417 6.61635C10.6695 6.32799 11.7588 6.1838 12.8482 6.1838C13.9376 6.1838 15.027 6.32799 16.0523 6.61635C18.5034 4.95025 19.5767 5.30269 19.5767 5.30269C20.2816 7.06492 19.833 8.37857 19.7049 8.69898C20.5219 9.59611 21.0185 10.7335 21.0185 12.1433C21.0185 17.0615 18.0227 18.1509 15.1711 18.4713C15.6357 18.8718 16.0362 19.6408 16.0362 20.8423C16.0362 22.5565 16.0202 23.9342 16.0202 24.3667C16.0202 24.7032 16.2605 25.1037 16.9013 24.9755C19.4455 24.1165 21.6563 22.4814 23.2225 20.3001C24.7888 18.1189 25.6316 15.5015 25.6323 12.8162C25.6323 5.73524 19.8971 0 12.8162 0Z" fill="white"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/rafael-oliveirac/' target="_blank">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.28625 8.71125H13.9288V11.0238C14.5975 9.69375 16.3125 8.49875 18.8888 8.49875C23.8275 8.49875 25 11.1462 25 16.0037V25H20V17.11C20 14.3438 19.3313 12.7838 17.6288 12.7838C15.2675 12.7838 14.2863 14.465 14.2863 17.1088V25H9.28625V8.71125ZM0.7125 24.7875H5.7125V8.49875H0.7125V24.7875ZM6.42875 3.1875C6.42894 3.60659 6.34582 4.02154 6.18423 4.40823C6.02265 4.79492 5.78582 5.14564 5.4875 5.44C4.883 6.04078 4.06476 6.37707 3.2125 6.375C2.36174 6.37443 1.54539 6.039 0.94 5.44125C0.642764 5.14589 0.406732 4.79478 0.24543 4.40804C0.0841268 4.0213 0.000723915 3.60653 0 3.1875C0 2.34125 0.3375 1.53125 0.94125 0.93375C1.54611 0.335198 2.3628 -0.000374013 3.21375 3.12831e-07C4.06625 3.12831e-07 4.88375 0.33625 5.4875 0.93375C6.09 1.53125 6.42875 2.34125 6.42875 3.1875Z" fill="white"/>
                                </svg>
                            </a>
                        </li>
                        <li className='btnLanguage'>
                            <button onClick={() => setLanguage('PT')}>PT</button>
                            <button onClick={() => setLanguage('EN')}>EN</button>
                        </li>
                    </ul>
                </div>
                
            </header>
            <main>
                <section>
                    <h1>
                        {newText['title'][1]}<br/>{newText['title'][2]} <span>Rafael Colombo</span>
                    </h1>
                    <p>
                        {newText['subtitle'][1]}<br />{newText['subtitle'][2]}
                    </p>
                    <a href={document} download>
                        <button>
                            Download CV
                        </button>
                    </a>
                    
                </section>
                <section>
                    
                </section>
            </main>
        </div>
    )
}