import { useState } from 'react';
import data from '../projects';
import text from '../text';
import './sect3.scss';

export default function Sect3(props:any){
    const newText = props.newText;

    const [activeTab, setActiveTab] = useState(0);
    return(
        <section id='projects' className="sect3">
            <h2>{newText['header'][2]}</h2>
            <p>{newText['projects']}</p>
            <Tab newText={newText} table={(tab:number) => {
                setActiveTab(tab)
            }}/>
            <TableList activeTab={activeTab} modal={(img:string)=>{
                props.modal(img)
            }}/>

        </section>
    )
}

function Tab(props:any){
    const [activeTab, setActiveTab] = useState(0);
    const newText = props.newText;

    function handleClick(e:any){
        const tabNumber = e.target.dataset.tab;
        setActiveTab(tabNumber);
        props.table(tabNumber);
    }

    return(
        <article className='tab'>
            <div data-tab={0} className={activeTab == 0 ? 'active' : ''} onClick={(e)=>handleClick(e)}>{newText['projects_tab'][1]}</div>
            <div data-tab={1} className={activeTab == 1 ? 'active' : ''} onClick={(e)=>handleClick(e)}>{newText['projects_tab'][2]}</div>
            <div data-tab={2} className={activeTab == 2 ? 'active' : ''} onClick={(e)=>handleClick(e)}>{newText['projects_tab'][3]}</div>
        </article>
    )
}

function TableList(props:any){
    const tab = props.activeTab;

    function showModal(img:string){
        props.modal(img)
    }

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