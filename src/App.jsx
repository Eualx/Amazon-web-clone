import { useContext, useEffect} from 'react'
import './App.css'
import Routing from './Router'
import { DataContext } from './components/DataProvider/DataProvider'
import { Type } from './Utility/ActionType'
import { auth } from './Utility/Firbase'
function App() {
  const [{user},disPatch]=useContext(DataContext)
  useEffect(()=>{
    
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        // console.log(authUser)
        disPatch(
          {
            type:Type.SET_USER,
            user:authUser,
          }
        )
      } else{
        disPatch(
          {
            type:Type.SET_USER,
            user: null,
          })
      }
    })
  },[])




  return (
    <> 
   <Routing/>
  
    </>
  )
}

export default App
