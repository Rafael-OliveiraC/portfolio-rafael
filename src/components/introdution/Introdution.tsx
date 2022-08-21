import './introdution.scss';
import document from '../../assets/document.pdf';

type Props = {
    text: {
        title: string;
        subtitle: string;
    };
}

export default function Introdution({text}:Props){
    return(
        <section id='introdution'>
            <article>
                    <h1>
                        {text['title'][1]}<br/>{text['title'][2]} <span>Rafael Colombo</span>
                    </h1>
                    <p>
                        {text['subtitle'][1]}<br />{text['subtitle'][2]}
                    </p>
                    <a href={document} download>
                            Download CV
                    </a>
                    
            </article>
            <article>
                    
            </article>
        </section>
    )
}