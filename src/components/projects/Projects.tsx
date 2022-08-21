import { useState } from 'react';
import data from '../projects';
import './projects.scss';

export default function Projects(props:any){
    const text = props.text;

    const [activeTab, setActiveTab] = useState(0);
    return(
        <section id='projects'>
            <h2>{text[1]}</h2>
            <p>{text[2]}</p>
            <Tab text={text['projects_tab']} table={(tab:number) => {
                setActiveTab(tab)
            }}/>
            <TableList activeTab={activeTab} modal={(img:string)=>{
                props.modal(img)
            }}/>
        </section>
    )
}

type tabProps = {
    text: string,
    table: (tab:number) => void
}

function Tab(props:tabProps){
    const [activeTab, setActiveTab] = useState(0);
    const text = props.text;

    function handleClick(e:any){
        const tabNumber = e.target.dataset.tab;
        setActiveTab(tabNumber);
        props.table(tabNumber);
    }

    return(
        <article className='tab'>
            <div data-tab={0} className={activeTab == 0 ? 'active' : ''} onClick={(e)=>handleClick(e)}>{text[1]}</div>
            <div data-tab={1} className={activeTab == 1 ? 'active' : ''} onClick={(e)=>handleClick(e)}>{text[2]}</div>
            <div data-tab={2} className={activeTab == 2 ? 'active' : ''} onClick={(e)=>handleClick(e)}>{text[3]}</div>
        </article>
    )
}

type tableProps = {
    activeTab: number,
    modal: (img:string) => void
}

function TableList(props:tableProps){
    const tab = props.activeTab;

    return(
        <article className='project'>
            {data[tab].map((item:any, index:number) => {
                const style = {
                    height: (item.percent ? item.percent : 100) + '%',
                }

                if(item.link){
                    
                    return(
                        <div key={index}>
                            <a href={item.link} target="_blank">
                                <img src={item.img} style={style} alt={item.text}/>
                                <p>{item.text}</p>
                            </a>
                        </div>
                    )
                }

                return(
                        <div key={index}>
                            <div onClick={()=>props.modal(item.img)}>
                                <img src={item.img} style={style} alt={item.text}/>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    )
            })}
        </article>
    )
}