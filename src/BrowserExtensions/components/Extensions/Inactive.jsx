export function Inactive(props){
    return(
        <section className="extensionList">
            <div className="extensionsTabs">
                <img src={props.inactive.logo}/>
                <div>
                    <p className='names'>{props.inactive.name}</p>
                    <p>{props.inactive.description}</p>
                </div>                
            </div>
            <div className='removeActive'>
                <button
                    onClick={props.removeExt}
                >Remove</button>
                <input 
                    id={props.inactive.name} //need unique id for individual label tags
                    type='checkbox'
                    onClick={props.toggle}
                    checked={props.inactive.isActive}
                />
                <label className='toggleBtn' htmlFor={props.inactive.name}></label>
            </div>
        </section>
    )
}