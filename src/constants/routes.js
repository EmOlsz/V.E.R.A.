import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import DoneAllIcon from '@material-ui/icons/DoneAll';

import Quotes from 'pages/Quotes';
import Tasks from 'pages/Tasks';

const routes = [
    {
        value: "quotes",
        label: "Quotes",
        path: '/quotes',
        component: Quotes,
        icon: <FormatQuoteIcon />
    },
    {
        value: "tasks",
        label: "Tasks",
        path: '/tasks',
        component: Tasks,
        icon: <DoneAllIcon />
    },
];

export default routes;