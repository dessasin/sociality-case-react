import Feeds from "./pages/feeds/Feeds";
const routes = [
    {
        path:'/',
        element:<>Welcome to Home</>
    },
    {
        path:'/feeds',
        element:<Feeds/>
    },
]
export default routes;