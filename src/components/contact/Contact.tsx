import './contact.scss';

import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';

export default function contact({text}:any){
    const form = useRef<any>();
    
    function handleCopy(e:any){
        e.preventDefault();
        navigator.clipboard.writeText(e.target.value);
    }

    function sendEmail(e:any){
        e.preventDefault();

        emailjs.sendForm('service_44k4a2p', 'template_j30zl9s', form.current, 'VxWq9A6GBtw4X0zqn')
        .then((result) => {
            form.current[0].value = ''
            form.current[1].value = ''
            form.current[2].value = ''

            Swal.fire({
            icon: 'success',
            title: 'Email enviado!',
            text: 'Entrarei em contato o mais breve possivel!'
            })
            
        }, (error) => {
            Swal.fire({
                icon: 'error',
                title: 'Ocorreu algum erro!',
                text: 'Tente novamente, caso ocorra o mesmo erro, entre em contato comigo em: rcolombo06@hotmail.com'
            })
        });
        
    }

    return(
        <section id='contact'>
            <article>
                <h2>{text[1]}</h2>
                <p>{text[2]}</p>
            </article>
            <article>
                <div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div>
                            <input type='text' placeholder=' ' name="user_name" required/>
                            <label>{text['form'][1]}</label>
                        </div>
                        <div>
                            <input type='email' placeholder=' ' name="user_email" required/>
                            <label>{text['form'][2]}</label>
                        </div>
                        <div>
                            <textarea placeholder=' ' name="message" required/>
                            <label>{text['form'][3]}</label>
                        </div>
                        <button type='submit' value='send'>Enviar</button>
                    </form>
                </div>
                <div>
                    <button type='button' value='rcolombo06@hotmail.com' onClick={(e)=>handleCopy(e)}>Email: <span>rcolombo06@hotmail.com</span></button>
                    <button type='button' value='+5531988607330' onClick={(e)=>handleCopy(e)}>Telefone: (31) 98860-7330</button>
                </div>
            </article>
        </section>
    )
}
