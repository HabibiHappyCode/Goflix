import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

export function useFetch(fetchedFunc, initialValue) {

    // const [fetchedData, setFetchedData] = useState([]);
    // const [isLoading, setIsloading] = useState(false);
    // const [error, setError] = useState('')

    // useEffect(() => {
    //     setIsloading(true)
    //     async function fetchFunc() {
    //         try {
    //             const resData = await fetchedFunc()

    //             setIsloading(false)
    //             return setFetchedData(resData.results);
    //         } catch (error) {
    //             console.log(error.message || "there is an error in the code")
    //         };
    //     };
    //     fetchFunc();
    // }, []);

    const {data: fetchedData = initialValue, error, isLoading} = useQuery({
        queryKey: [''],
         queryFn: fetchedFunc 
        
        })

    return {
        fetchedData,
        isLoading
    }

}