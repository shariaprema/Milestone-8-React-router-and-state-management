import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";

const AppliedJobs = () => {

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    const jobs = useLoaderData();


    const handleJobFilter = filter =>{
        if (filter === 'all'){
            setDisplayJobs(appliedJobs)
        }

        else if (filter === 'remote'){
            const remoteJob = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJob)

        }

        else if(filter === 'onsite'){
            const onsiteJob = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJob)


        }
    }

    useEffect(()=>{
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0){
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))

           const jobsApplied =[];
           for(const id of storedJobIds){
            const job = jobs.find(job=> job.id === id);
            if(job){
                jobsApplied.push(job);
            }


           }

           setAppliedJobs(jobsApplied);
           setDisplayJobs(jobsApplied);

        //    console.log('============>>>>',jobs ,storedJobIds , jobsApplied);

            
        }


    },[jobs]);




    return (
        <div>

            <h2 className="text-4xl">I applied this job: {appliedJobs.length}</h2>
            <details className="dropdown mb-32">
            <summary className="m-1 btn">open or close</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li onClick={()=>handleJobFilter('all')}><a>All</a></li>
                <li onClick={()=>handleJobFilter('remote')}><a>Remote</a></li>
                <li onClick={()=>handleJobFilter('onside')}><a>Onside</a></li>
            </ul>
            </details>

            <ul>

                {
                   displayJobs.map(job => <li key={job.id}>

                    {job.job_title} {job.company_name} {job.remote_or_onsite}
                   </li>) 
                }
            </ul>


            
        </div>
    );
};

export default AppliedJobs;