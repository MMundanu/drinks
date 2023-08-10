import React, { createContext, useEffect, useState } from 'react'
import { getCategoriesService } from '../services/categories.service';

const categoriesContext = createContext()

 const CategoriesProvider = ({children}) => {

    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        try {
            const categoriesData = await getCategoriesService()

            setCategories(categoriesData)


        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getCategories()

    }, []);

    const contextValue = {
        categories
    }

  return (
    <categoriesContext.Provider value={contextValue} >
        {children}
    </categoriesContext.Provider>
  )
}


export {
    CategoriesProvider,
    categoriesContext
}