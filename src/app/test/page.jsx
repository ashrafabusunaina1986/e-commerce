'use client'
import c, { useCountries } from "react-countries";
import {getDataCountrys} from 'country-state-city-nextjs'
import { useEffect } from "react";
function Test() {
  const { countries } = useCountries();
  // console.log(countries);
  // useEffect(()=>{
  //   const fetchCountries=async()=>{
  //     const t=await getDataCountrys()
  //     console.log(await t)
  //     return await t
  //   }
  //   fetchCountries()
  // },[])
  
  return (
    <div className="w-11/12">
      <ul>
        {countries.map(({ name, dial_code, code, flag }) => (
          <li key={name}>
            {flag + " " + name + " | " + code + " (" + dial_code + ")"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
