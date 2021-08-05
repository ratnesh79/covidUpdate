import React, { useEffect, useState } from 'react'

function Covid(){
const [ndata,setdata]=useState([]);

    const getCovidData= async ()=>{
 const res = await fetch('https://api.covid19india.org/data.json')
 const actualData=await res.json();
 console.log(actualData.statewise)  
   
 setdata(actualData.statewise)  
}
    useEffect(()=>{
        getCovidData();
    },[]);
return <>
<div className="container-fluid mt-5">
   <div className="main-heading">
    <h1 className="mb-5"><span className="font-weight-bold">INDIA</span>  COVID-19 Dashboard</h1>

   </div>
   <div className="table-responsive">
       <table className="table table-hover ">
      <thead className="thead-dark">
       <tr>
           <th>State</th>
           <th>Confirmed</th>

           <th>Recovered</th>
           <th>Deaths</th>
           <th>Actice</th>
           <th>Updated</th>
       </tr>
       </thead>
       <tbody>
       {
           ndata.map((val,ind)=>{
         return(

       <tr key={ind}>
           <td>{val.state}</td>
           <td>{val.confirmed}</td>
           <td>{val.deltaconfirmed}</td>
           <td>{val.recovered}</td>
           <td>{val.deaths}</td>
           <td>{val.active}</td>
           <td>{val.lastupdatedtime}</td>
       </tr>
         )

       })
       }
         
       </tbody>
       </table>
   </div>
</div>
</>

}
export default Covid;
