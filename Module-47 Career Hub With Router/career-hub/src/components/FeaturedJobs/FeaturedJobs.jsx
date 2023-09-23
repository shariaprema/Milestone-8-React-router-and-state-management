import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);


    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])



    return (
        <div>

            <div >

                <div className='text-center my-5'>
                <h2 className='text-5xl font-extrabold  mb-5'>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
            
              <div className="grid grid-cols-2 gap-6 justify-center mx-auto">
              {
                jobs.slice(0,dataLength).map((job,idx) => <Job key={idx} job={job}></Job>)
              }
              </div>


              <div className={ dataLength === jobs.length ? 'hidden' : ''}>
                <button onClick={()=>setDataLength(jobs.length)} className="btn btn-primary my-10 flex mx-auto justify-center bg-[#9873FF]">See All Jobs</button>
                </div>
            </div>
         
        </div>
    );
};

export default FeaturedJobs;