import { GrLocation } from 'react-icons/Gr';
import { AiOutlineDollar } from 'react-icons/Ai';
import { Link } from 'react-router-dom';


const Job = ({job}) => {
    const {id, salary, job_title, location, logo, company_name, availability, job_type, remote_or_onsite}= job;
    return (
        <div>
            <div className="card bg-base-100 pt-6 drop-shadow-xl">
                <figure className="">
                    <img  src={logo} alt="Shoes" />
                </figure>
                <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <h3>{company_name}</h3>
                <div className="flex text-[#9873FF]">
                    <button className=" me-4 px-5 py-2 font-extrabold border rounded border-[#7E90FE]">{remote_or_onsite}
                    </button>
                    <button className=" px-5 py-2 font-extrabold border rounded border-[#7E90FE]">{job_type}</button>
                </div>

                <div className="flex text-[#757575] text-xl font-semibold">
                     <h2 className='mt-1  w-6 h-6 '><GrLocation className='text-[#757575]'/> </h2>
                    <div className="mr-6"> {location}</div>
                    <h2 className='mt-1  w-6 h-6 '><AiOutlineDollar className='text-[#757575]'/> </h2>

                    <div className="">{salary}</div>
                </div>

                <div className="card-actions text-[#FFF]">
               <Link to={`/jobs/${id}`}> <button className="btn btn-primary bg-[#9873FF]">View Details</button></Link>
                </div>

                </div>
            </div>  
        </div>
    );
};

export default Job;