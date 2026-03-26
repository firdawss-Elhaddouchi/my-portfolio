/* eslint-disable */
import { BiPencil } from "react-icons/bi";
import { BsCodeSlash, BsClipboardData, BsGraphUp } from "react-icons/bs";
import { AiOutlineMail, AiOutlineDatabase } from "react-icons/ai";
import { FaServer, FaChartBar, FaCode } from "react-icons/fa";

export const servicesData = [
    {
        id: 1,
        title: 'Data Engineering',
        icon: <AiOutlineDatabase /> 
    },
    {
        id: 2,
        title: 'ETL Pipelines',
        icon: <FaServer /> 
    },
    {
        id: 3,
        title: 'Business Intelligence',
        icon: <FaChartBar /> 
    },
    {
        id: 4,
        title: 'Full-stack Development',
        icon: <FaCode /> 
    },
    {
        id: 5,
        title: 'Data Analysis',
        icon: <BsClipboardData />
    },
    {
        id: 6,
        title: 'Machine Learning',
        icon: <BsGraphUp />
    },
]