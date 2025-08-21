import exIcon from './components/designFiles/images/logo.svg'
import { NavBar } from './components/Extensions/Extensions'
import { Extensions } from './components/Extensions/Extensions'
import { Active } from './components/Extensions/Active'
import { Inactive } from './components/Extensions/Inactive'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
export function Page(){
    //states
    const [data, setData ]= useState([])
    const [active, setActive]=useState([])
    const [inactive, setInactive]= useState([])
    const [theme, setTheme]=useState(()=>{
        return localStorage.getItem('darkmode')==='active'
    })
    const [tab, setTab]=useState('all')
 
    //useEffects
    //data fetch
    useEffect(()=>{
        const fetchData= async ()=>{
            try{
                const res = await fetch('/data.json')
                const extentData = await res.json()
                const withId=extentData.map(item=>({ //set unique id to each the item we have
                    ...item,
                    id:nanoid()
                }))
                setData(withId)
            }
            catch(error){
                console.error(error)
            }
        }
        fetchData()
    }, [])

    //theme change
    useEffect(()=>{
        if(theme){
            document.body.classList.add('darkmode')
            document.body.classList.remove('lightmode')
            localStorage.setItem('darkmode', 'active')
        }else{
            document.body.classList.remove('darkmode')
            document.body.classList.add('lightmode')
            localStorage.setItem('darkmode', null)
        }
    }, [theme])

    //Functions
    const themeChanger = ()=>{
        setTheme(prevTheme=>!prevTheme)
    }

    const toggle=(id)=>{
            setData(prevData=>{
                const updated = prevData.map(item=>
                    item.id===id
                    ?{...item, isActive:!item.isActive}
                    :item
                )
                //filter the updated data to set the active and inactive
                setActive(updated.filter(item=>item.isActive))
                setInactive(updated.filter(item=>!item.isActive))
                return updated
            })
        }

    const removeExt=(ext)=>{
        setData(prevData=>prevData.filter(item=>item.name!==ext.name))
        setActive(prevActive=>prevActive.filter(item=>item.name!==ext.name))
        setInactive(prevInactive=>prevInactive.filter(item=>item.name!==ext.name))

    }
    
    //Arrays
    const mappedData=data.map((data)=>{
        return(
            <Extensions
                key={data.id}
                id={data.id}
                data={data}
                removeExt={()=>removeExt(data)}
                toggle={()=>toggle(data.id)}

            />      
    )})

    const activeArray=active.map((active)=>{
        return(
        <Active
            key={active.id}
            id={active.id}
            active={active}
            removeExt={()=>removeExt(active)}
        />
    )})

    const inactiveArray=inactive.map((inactive)=>{
        return(
        <Inactive
            key={inactive.id}
            id={inactive.id}
            inactive={inactive}
            removeExt={()=>removeExt(inactive)}
        />
    )})    

    return(
        <>
            <main className="main">
                <article className='header'>
                    <img className='logo' src={exIcon}/>
                    <input 
                        id='themeToggle' 
                        type='checkbox'
                        onClick={themeChanger}
                        checked={Boolean(theme)}
                    />
                    <label htmlFor='themeToggle' className='moonSun'></label>
                </article>
                <NavBar 
                    changeTab={setTab}
                    toggle={()=>toggle(data.id)}
                />
                <article className='wrapper'>
                    {tab==='all'&&mappedData}
                    {tab==='active'&& activeArray}
                    {tab==='inactive'&&inactiveArray}
                </article>
            </main>
        </>
    )
}