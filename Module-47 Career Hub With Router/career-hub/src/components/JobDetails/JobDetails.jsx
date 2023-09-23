import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";


const JobDetails = () => {
    
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job); 
    // console.log(jobs,id);


    const handleApplyJob = () =>{
        saveJobApplication(idInt);
        toast('You have applied successfully');
    }



    return (
        <div>

            <div className="grid md:grid-cols-4 gap-8">
                <div className=" md:col-span-3">
                    <h2>
                     <span>Job Description:</span>A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.

                    </h2>
                    <h2>
                     <span>Job Responsibility:</span> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.

                    </h2>
                    <h2>
                     <span>Educational Requirements:</span> <br />
                     Bachelor degree to complete any reputational university.
                    </h2>
                    <h2>
                     <span>Experiences:</span> <br />
                     2-3 Years in this field.
                    </h2>

                </div>


                <div className=" col-span-1">
                    <div className="p-4 bg-[#7e90fe1a] ">
                        <h1 className="text-base font-extrabold mb-3 text-[#1A1919]">Job Details</h1>
                        <hr />
                        <p className="text-base font-bold mb-3 text-[#474747]">Salary:</p>
                        <p className="text-base font-bold mb-3 text-[#474747]">Job Totle:</p>
                        
                        <h2 className="text-base font-extrabold mb-3 text-[#1A1919]">Contact Information</h2>
                        <hr />
                        <p className="text-base font-bold mb-3 text-[#474747]">Phone:</p>
                        <p className="text-base font-bold mb-3 text-[#474747]">Email:</p>
                        <p className="text-base font-bold mb-3 text-[#474747]">Address:</p>
                    </div>
                    <div className=" flex justify-center mx-auto">
                    <button onClick={handleApplyJob} className="btn btn-primary my-6 px-24 ">Apply Now</button>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default JobDetails;