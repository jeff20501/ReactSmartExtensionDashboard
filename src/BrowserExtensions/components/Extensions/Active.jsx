import './Extensions.css'
export function Active(props){
    //console.log(props.active.isActive)
    return(
        <section className="extensionList">
            <div className="extensionsTabs">
                <img src={props.active.logo}/>
                <div>
                    <p className='names'>{props.active.name}</p>
                    <p>{props.active.description}</p>
                </div>                
            </div>
            <div className='removeActive'>
                <button
                    onClick={props.removeExt}
                >Remove</button>
                <input 
                    id={props.active.name} //need unique id for individual label tags
                    type='checkbox'
                    onClick={props.toggle}
                    checked={props.active.isActive}
                />
                <label className='toggleBtn' htmlFor={props.active.name}></label>
            </div>
        </section>
    )
}