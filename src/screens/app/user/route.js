import AppLayout from "../../../components/layouts/app";
import { Outlet } from "react-router-dom";
import Home from "./home";
import Branch from "./branch";
import CoachResult from "./coachResult";
export const userRouteList = [
    {
        path: '/',
        element: (
            <AppLayout>
                <Outlet />
            </AppLayout>
        ),
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'hang-xe',
                element: <Branch />
            },
            {
                path: 'tim-kiem',
                element: <CoachResult />
            }
        ]
    }
]