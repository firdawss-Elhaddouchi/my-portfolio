/* eslint-disable */
import { BsClipboardData, BsGraphUp } from "react-icons/bs";
import { AiOutlineDatabase } from "react-icons/ai";
import { FaServer, FaChartBar, FaCode } from "react-icons/fa";

export const servicesData = [
    {
        id: 1,
        title: 'Data Engineering',
        icon: <AiOutlineDatabase />
    },
    {
        id: 2,
        title: 'Data Pipelines & ETL',
        icon: <FaServer />
    },
    {
        id: 3,
        title: 'Big Data',
        icon: <FaChartBar />
    },
    {
        id: 4,
        title: 'AI & Machine Learning',
        icon: <FaCode />
    },
    {
        id: 5,
        title: 'NLP & RAG',
        icon: <BsClipboardData />
    },
    {
        id: 6,
        title: 'Data Analysis & BI',
        icon: <BsGraphUp />
    },
]