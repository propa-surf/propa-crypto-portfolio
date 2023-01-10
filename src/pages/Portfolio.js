import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../stylesheets/Portfolio.css'
import PortfolioAddCoinContainer from '../components/PortfolioAddCoinContainer'
import PortfolioRemoveCoinContainer from '../components/PortfolioRemoveCoinContainer'
import {db, auth} from '../config/FirebaseConfig'
import { getDocs, collection } from 'firebase/firestore'
import { useAuthState } from "react-firebase-hooks/auth"

function Portfolio({baseUrl}) {

    const[allCoins, setAllCoins]=useState([])
    const[userCoins, setUserCoins] = useState([])
    const[portfolioUpdated, setPortfolioUpdated] = useState(false)

    const [user] = useAuthState(auth)

    useEffect(() => {
      axios.get(`${baseUrl}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`)
      .then(res=>{
        setAllCoins(res.data)
      }
      )
      .catch(err=>console.log(err))
    }, [])

    useEffect(() => {
        const coinsRef=collection(db,'portfolios',`${user?.uid}`, 'coins')
        getDocs(coinsRef)
        .then(res=>{
            const list = (res.docs.map(item=>({
                id: item?.id,
                ...item?.data()
            }
                )))
            setUserCoins(list)
        })
        .catch(err=>console.log(err))
    }, [user, portfolioUpdated])

  return (
    <div className='portfolio-container'>
        <div className='portfolio-container-background'>
            <div className='overlay'></div>
            <PortfolioAddCoinContainer portfolioUpdated={portfolioUpdated} setPortfolioUpdated={setPortfolioUpdated} allCoins={allCoins} userCoins={userCoins} userID={user?.uid} userName={user?.displayName}/>
            <PortfolioRemoveCoinContainer portfolioUpdated={portfolioUpdated} setPortfolioUpdated={setPortfolioUpdated} allCoins={allCoins} userCoins={userCoins} userID={user?.uid}/>
        </div>
    </div>
  )
}

export default Portfolio