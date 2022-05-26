import TimerIcon from '@mui/icons-material/Timer';
import PersonIcon from '@mui/icons-material/Person';
import InsightsIcon from '@mui/icons-material/Insights';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import MessageIcon from '@mui/icons-material/Message';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';


 const LeftBarData = [
{
    id: 1,
    title: 'Dashboard',
    path: 'dashboard/*',
    icon: <TimerIcon/>
},
{
    id: 2,
    title: 'Profile',
    path: '/profile',
    icon: <PersonIcon/>
},
{
    id: 3,
    title: 'Analysis',
    path: '/analysis',
    icon: <InsightsIcon/>
},
{
    id: 4,
    title: 'Accounting',
    path: '/Accounting',
    icon: <CardGiftcardIcon/>
},
{
    id: 5,
    title: 'Messages',
    path: '/Messages',
    icon: <MessageIcon/>
},
{
    id: 6,
    title: 'Project',
    path: '/Project',
    icon: <AppRegistrationIcon/>
},
]
export default LeftBarData
