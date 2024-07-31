import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom';
import HomePage from "./Pages/HomePage.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";
import JobsPage from "./Pages/JobsPage.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import JobPage, {jobLoader} from "./Pages/JobPage.jsx";
import AddJobPage from "./Pages/AddJobPage.jsx";
import EditJobPage from "./Pages/EditJobPage.jsx";

const App = () => {

    // This is the Add new job thingy
    const addJob = async (newJob) => {
        const response = await fetch('/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJob)
        });
};

    // delete job
    const deleteJob = async (id) => {
        const response = await fetch(`/api/jobs/${id}`, {
            method: 'DELETE'
        });
    }

    const updateJob = async (job) => {
        const response = await fetch(`/api/jobs/${job.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(job)
        });

    }

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route Path='/' element={<MainLayout/>}>, // Error: 'Path' is not defined  react/jsx-no-undef
            <Route index element={<HomePage/>}/>
            <Route path='/jobs' element={<JobsPage/>}/>
            <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
            <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
            <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader}/>
            <Route path='/*' element={<NotFoundPage/>}/>
        </Route>
    )
);

    return <RouterProvider router={router}/>;
}
export default App

