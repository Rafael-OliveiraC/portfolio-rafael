import './sect3.scss';

export default function Sect3({newText}:any){
    return(
        <section id='projects' className="sect3">
            <h2>{newText['header'][2]}</h2>
            <p>{newText['projects']}</p>
            <Tab newText={newText}/>
        </section>
    )
}

function Tab({newText}:any){
    const active = true
    return(
        <div className='tab'>
            <div className={active? 'active' : ''}>{newText['projects_tab'][1]}</div>
            <div>{newText['projects_tab'][2]}</div>
            <div>{newText['projects_tab'][3]}</div>
        </div>
    )
}