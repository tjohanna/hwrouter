import React from "react"
import { useEffect, useState } from "react"

function Stock(props){

    const [stocks, setStocks] = useState(null)

    const getData = async() =>{
        const symbol = props.match.params.symbol
        const response = await fetch (`https://financialmodelingprep.com/api/v3/quote-short/${symbol}?apikey=8c255df3111b0edc4959e72ef13de9e4`)
        const data = await response.json()
        setStocks(data)
    }
  
    useEffect(() => {
      getData()
    }, [])

    const loaded = () => {
        return (
            <div>
                <h2>{stocks[0].symbol}</h2>
                <h2>Price: ${stocks[0].price}</h2>
            </div>
        )
    }
    const loading = () => {
        return <h2>Loading</h2>
    }
    return stocks? loaded() : loading()
}

export default Stock
