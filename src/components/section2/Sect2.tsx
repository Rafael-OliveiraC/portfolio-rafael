import './sect2.scss';

export default function Sect2({newText}:any){
    return(
        <section id='skills' className="sect2">
            <article>
                <h2>{newText['header'][1]}</h2>
                <p>{newText['skills']}</p>
            </article>
            <article>
                <Skill percent={98} name="Web Development" color="#2C9FA3"/>
                <Skill percent={83} name="Brand Identity" color="#CB419A"/>
                <Skill percent={95} name="Logo Design" color="#9A42CF"/>
            </article>
            
            
        </section>
    )
}

type skillsProps = {
    percent: number,
    name: string,
    color: string
}

function Skill({percent, name, color}:skillsProps){
    const style = {
        backgroundColor: color
    }

    return(
        <div className='skill'>
            <span className='blur' style={style}></span>
            <div>
                <span>{percent}%</span>
                <svg viewBox="0 0 36 36">
                    <path
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke={color}
                        strokeWidth="3"
                        strokeDasharray={`${percent - 2} 100`}
                        strokeLinecap="round"
                    />
                </svg>
                <p>{name}</p>
            </div>
        </div>
    )
}
