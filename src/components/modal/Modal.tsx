import './modal.scss'

type modalProps = {
    onOpen: boolean;
    img: string;
    onClose: () => void;
}

export default function Modal(props:modalProps){
    console.log(props.onOpen)
    if(!props.onOpen)return <></>;
    const body = (document.querySelector('body') as HTMLBodyElement);
    body.style.overflow = 'hidden';

    function handleClose(){
        body.style.overflow = 'auto';
        props.onClose();
    }

    return(
        <section id='modal' className={`${props.onOpen ? 'show' : ''}`} onClick={()=> handleClose()}>
            <span>X</span>
            <div>
                <img src={props.img}/>
            </div>
        </section>
    )
}