import React, {useContext} from 'react';
import { CurrentUser } from './context';

function Company() {
    const {userData} = useContext(CurrentUser);
    return (
        <>
            {userData && 
                <>
                <h1>Company name: {userData.company.name}</h1>
                <h2>Catch frase: {userData.company.catchPhrase}</h2>
                <h2>Bussines: {userData.company.bs}</h2>
                </>
            }
        </> 
    );
}


export default Company;