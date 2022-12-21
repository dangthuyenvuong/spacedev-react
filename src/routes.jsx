import { lazy } from "react";
import { AuthRoute } from "./components/AuthRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import { PATH } from "./config/path";
import { DemoReact } from "./pages/demo-react";


const MainLayout = lazy(() => import ("./layouts/MainLayout"));
const ProfileLayout = lazy(() => import ("./layouts/ProfileLayout"));
const Home = lazy(() => import ("./pages"));
const Coin = lazy(() => import ("./pages/coin"));
const Contact = lazy(() => import ("./pages/contact"));
const Course = lazy(() => import ("./pages/course"));
const CourseDetail = lazy(() => import ("./pages/course/[slug]-id[id]"));
const FAQ = lazy(() => import ("./pages/faq"));
const Payment = lazy(() => import ("./pages/payment"));
const MyCoin = lazy(() => import ("./pages/profile/coin"));
const MyCourse = lazy(() => import ("./pages/profile/course"));
const MyPayment = lazy(() => import ("./pages/profile/payment"));
const Profile = lazy(() => import ("./pages/profile"));
const MyProject = lazy(() => import ("./pages/profile/project"));
const Project = lazy(() => import ("./pages/project"));
const Register = lazy(() => import ("./pages/register/[slug]-id[id]"));
const ResetPassword = lazy(() => import ("./pages/reset-password"));
const Signin = lazy(() => import ("./pages/signin"));
const Signup = lazy(() => import ("./pages/signup"));
const Team = lazy(() => import ("./pages/team"));
const Page404 = lazy(() => import ("./pages/404"));
const Demo = lazy(() => import ("./pages/demo"));






export const routes = [
    {
        element: <MainLayout />,
        children: [
            {
                element: <Home />,
                index: true
            },
            {
                element: <Demo />,
                path: '/demo'
            },
            {
                element: <DemoReact />,
                path: '/demo-react'
            },
            {
                element: <Contact />,
                path: PATH.contact
            },
            {
                path: PATH.course,
                children: [
                    {
                        element: <Course />,
                        index: true
                    },
                    {
                        element: <CourseDetail />,
                        path: PATH.courseDetail
                    }
                ]
            },
            {
                element: <Team />,
                path: PATH.team
            },
            {
                element: <Register />,
                path: PATH.courseRegister
            },
            {
                element: <Project />,
                path: PATH.project
            },
            {
                element: <FAQ />,
                path: PATH.faq
            },
            {
                element: <Payment />,
                path: PATH.payment
            },
            {
                element: <Coin />,
                path: PATH.coin
            },
            {
                element: <AuthRoute redirect={PATH.profile.index} />,
                children: [
                    {
                        element: <Signin />,
                        path: PATH.signin
                    },
                    {
                        element: <Signup />,
                        path: PATH.signup
                    },
                    {
                        element: <ResetPassword />,
                        path: PATH.resetPassword
                    }
                ]
            },
            {
                element: <PrivateRoute redirect={PATH.signin} />,
                children: [
                    {
                        element: <ProfileLayout />,
                        path: PATH.profile.index,
                        children: [
                            {
                                element: <Profile />,
                                index: true
                            },
                            {
                                element: <MyCourse />,
                                path: PATH.profile.course
                            },
                            {
                                element: <MyCoin />,
                                path: PATH.profile.coin
                            },
                            {
                                element: <MyProject />,
                                path: PATH.profile.project
                            },
                            {
                                element: <MyPayment />,
                                path: PATH.profile.payment
                            }
                        ]
                    }
                ]
            },
            {
                element: <Page404 />,
                path: '*'
            }
        ]
    }
]