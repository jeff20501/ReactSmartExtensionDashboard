import './Extensions.css'
export function NavBar(props){
    return(
        <section className="head">
            <h1>Extensions List</h1>
            <div className="toggle">
                <button onClick={()=>props.changeTab('all')}>All</button>
                <button 
                    onClick={()=>{
                        props.changeTab('active')
                        props.toggle()
                    }}
                >Active</button>
                <button 
                    onClick={()=>{
                        props.changeTab('inactive')
                        props.toggle()
                    }}
                >Inactive</button>
            </div>
        </section>
    )
}

export function Extensions(props){
    return(
        <>
            <section className="extensionList">
                <div className="extensionsTabs">
                    <img src={props.data.logo}/>
                    <div>
                        <p className='names'>{props.data.name}</p>
                        <p>{props.data.description}</p>
                    </div>                
                </div>
                <div className='removeActive'>
                    <button
                        onClick={props.removeExt}
                    >Remove</button>
                    <input 
                        id={props.data.name} //need unique id for individual label tags
                        type='checkbox'
                        onClick={props.toggle}
                        checked={props.data.isActive} //if true then will be checked otherwise null will help to style the slider per their data.isActive values
                    />
                    <label className="toggleBtn" htmlFor={props.data.name}></label>
                </div>
            </section>
        </>
    )
}