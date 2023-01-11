import { createBrowserRouter } from 'react-router-dom';
import Contact from '../Component/Contact/Contact';
import Error from '../Component/Error';
import FindJob from '../Component/FindJob/FindJob';
import Home from '../Component/Home';
import Login from '../Component/Login/Login';
import Register from '../Component/Login/Register';
import ChangePassword from '../DashBoard/ChangePassword';
import AllCandidates from '../DashBoard/AdminPage/AllCandidates';
import AllJobs from '../DashBoard/AdminPage/AllJobs';
import DashBoard from '../DashBoard/DashBoard';
import DashBoardLayout from '../Layout/DashBoardLayout/DashBoardLayout';
import Main from '../Layout/Main';
import PrivateRoute from './PrivetRoutes/PrivetRoute';
import Recruiters from '../DashBoard/AdminPage/AllRecruiters';
import ReportedCandidate from '../DashBoard/AdminPage/Reported/ReportedCandidate';
import ReportedRecruiters from '../DashBoard/AdminPage/Reported/ReportedRecruiters';
import ReportedJobs from '../DashBoard/AdminPage/Reported/ReportedJobs';
import NewsLetter from '../DashBoard/AdminPage/NewsLetter';
import MailingLayout from '../Layout/MailingLayout/MailingLayout';
import InboxContainer from '../DashBoard/Message/InboxContainer';
import SendBoxContainer from '../DashBoard/Message/SendBoxContainer';
import CheckOut from '../Component/Payment/CheckOut';
import Verification from '../Component/Login/Verification';
import AddAJobs from '../DashBoard/RecruiterPage/AddAJobs/AddAJobs';
import JobsDetails from '../Component/FindJob/JobsDetails';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/findJob',
                element: <FindJob />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/payment',
                element: <CheckOut />
            },
            {
                path: '/verification',
                element: <Verification />
            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/jobDetails/${params.id}`),
                element: <JobsDetails />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout /></PrivateRoute>,
        errorElement: <Error />,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><DashBoard /></PrivateRoute>
            },
            {
                path: '/dashboard/newsLetter',
                element: <NewsLetter />
            },
            {
                path: '/dashboard/changePass',
                element: <ChangePassword />
            },
            {
                path: '/dashboard/recruiters',
                element: <Recruiters />
            },
            {
                path: '/dashboard/candidates',
                element: <AllCandidates />
            },
            {
                path: '/dashboard/allJobs',
                element: <AllJobs />
            },
            {
                path: '/dashboard/reportedJobs',
                element: <ReportedJobs />
            },
            {
                path: '/dashboard/reportedCandidate',
                element: <ReportedCandidate />
            },
            {
                path: '/dashboard/reportedRecruiters',
                element: <ReportedRecruiters />
            },
            {
                path: '/dashboard/addAJobs',
                element: <AddAJobs />
            }
        ]
    },
    {
        path: '/message',
        element: <MailingLayout />,
        children: [
            {
                path: '/message',
                element: <InboxContainer />
            },
            {
                path: '/message/inbox',
                element: <InboxContainer />
            },
            {
                path: '/message/sendbox',
                element: <SendBoxContainer />
            }
        ]
    }
])

export default router;