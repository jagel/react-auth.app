import React from "react"
import { Products } from '../../catalogs/products';

export function getInternalNavegation(){
    return [
        {path:'/products', name:'Products', component:Products }
    ]
}