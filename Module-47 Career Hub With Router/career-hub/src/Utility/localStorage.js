const getStoredJobApplication = ()=>{
    const storedJobApplication = localStorage.getItem('job-applications');
    if(storedJobApplication){
    return JSON.parse(storedJobApplication)

    }

    return [];

}
//  jokhon save krte jabo
const saveJobApplication = id =>{
   const storedJobApplication = getStoredJobApplication(); 

   const exists = storedJobApplication.find(jobId => jobId === id); //jodi thake ekta jobid show krbe

   if(!exists){
    storedJobApplication.push(id);
    localStorage.setItem('job-applications', JSON.stringify(storedJobApplication));

}
}



export {getStoredJobApplication, saveJobApplication}