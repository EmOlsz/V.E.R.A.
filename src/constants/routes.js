import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import WarningIcon from '@material-ui/icons/Warning';

import Quotes from 'pages/Quotes';
import Tasks from 'pages/Tasks';
import Feeding from 'pages/Feeding';
import Excrement from 'pages/Excrement';

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
    {
        value: "feeding",
        label: "Feeding",
        path: '/feeding',
        component: Feeding,
        icon: <FastfoodIcon />
    },
    {
        value: "excrement",
        label: "Excrement",
        path: '/excrement',
        component: Excrement,
        icon: <WarningIcon />
    },
];

export default routes;