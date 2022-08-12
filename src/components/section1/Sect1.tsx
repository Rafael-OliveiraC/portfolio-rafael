import './sect1.scss';
import document from '../../assets/document.pdf';

export default function Sect1({newText}:any){
    return(
        <section className="sect1">
            <article>
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
                    
            </article>
            <article>
                    
            </article>
        </section>
    )
}