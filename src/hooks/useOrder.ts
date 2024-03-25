import { useState } from "react"
import { OrderItem } from "../types";

export default function useOrder() {

    const [order, setOrder] = useState([]);
    
    const addItem = () => {
        console.log("Agregando item")
    }


    return {
        addItem
    }
}