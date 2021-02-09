import { useState } from "react";
import {URL } from '../constants';
const useTodos = (url=URL, config = {}, load=false) => {
    // const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    const handler = async (cb) => {
        try {
            await cb();
        } catch (err) {
            console.log(err);
            setErrors(err);
        } finally {
            setIsLoading(false);
        }
    };
   
    return {
        isLoading,
        errors,
        handler
    };
};

export default useTodos;
