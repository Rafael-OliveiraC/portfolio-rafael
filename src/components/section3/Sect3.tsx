import { useState } from 'react';
import './sect3.scss';

export default function Sect3({newText}:any){
    const [activeTab, setActiveTab] = useState(0);
    return(
        <section id='projects' className="sect3">
            <h2>{newText['header'][2]}</h2>
            <p>{newText['projects']}</p>
            <Tab newText={newText} table={(tab:number) => {
                setActiveTab(tab)
            }}/>
            <TableList activeTab={activeTab} newText={newText}/>

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
        <div className='tab'>
            <div data-tab={0} className={activeTab == 0 ? 'active' : ''} onClick={(e)=>handleClick(e)}>{newText['projects_tab'][1]}</div>
            <div data-tab={1} className={activeTab == 1 ? 'active' : ''} onClick={(e)=>handleClick(e)}>{newText['projects_tab'][2]}</div>
            <div data-tab={2} className={activeTab == 2 ? 'active' : ''} onClick={(e)=>handleClick(e)}>{newText['projects_tab'][3]}</div>
        </div>
    )
}

function TableList(props:any){
    const tab = props.activeTab;
    const newText = props.newText;

    return(
        <div>
        </div>
    )
}