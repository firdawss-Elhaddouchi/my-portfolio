import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import jobDashboard from '../assets/project-evidence/job-dashboard.webp'
import mobilityDashboard from '../assets/project-evidence/taasim-dashboard.webp'
import signArchitecture from '../assets/project-evidence/sign-architecture.webp'
import openstackCover from '../assets/project-evidence/openstack-private-cloud.webp'
import annotationCover from '../assets/project-evidence/nlp-annotation.webp'
import ragCover from '../assets/project-evidence/transformers-rag.webp'
import mongodbCover from '../assets/project-evidence/mongodb-trip-data.webp'
export const projectsData = [
    {
        id: 7,
        projectName: 'JobIntelligent Data Platform',
        projectDesc: 'Medallion data platform for job market analytics and CV-based recommendations. Team: Amina Dourdi, Oumaima El Ghalbouni, and Firdawss El Haddouchi.',
        tags: ['FastAPI', 'Airflow', 'NLP', 'Medallion', 'Docker'],
        code: 'https://github.com/firdawss-Elhaddouchi/JobIntelligent-Data-Platform',

        image: jobDashboard 
    },
    {
        id: 1,
        projectName: 'TaaSim: Smart Urban Mobility',
        projectDesc: 'Streaming platform for simulated Casablanca taxi trips. Team: Amina Dourdi, Oumaima El Ghalbouni, and Firdawss El Haddouchi.',
        tags: ['Kafka', 'Flink', 'Spark', 'Docker'],
        code: 'https://github.com/firdawss-Elhaddouchi/taasim-urban-mobility-platform',

        image: mobilityDashboard 
    },
    {
        id: 2,
        projectName: 'Batch Procurement Data Pipeline',
        projectDesc: 'Automated supply chain flows using a hybrid architecture of Hadoop HDFS and PostgreSQL, with Trino as a unified query engine for distributed data.',
        tags: ['HDFS', 'Trino', 'PostgreSQL', 'Docker'],
        code: 'https://github.com/firdawss-Elhaddouchi/batch-procurement-data-pipeline',
        image: one
    },
    {
        id: 3,
        projectName: 'SQL Data Warehouse',
        projectDesc: 'Developed a structured warehousing solution (Bronze, Silver, Gold) transforming raw ERP/CRM data into an optimized Star Schema for business analytics.',
        tags: ['ETL', 'SQL', 'Data Warehousing', 'Medallion'],
        code: 'https://github.com/firdawss-Elhaddouchi/sql-data-warehouse-project',
        image: two
    },
    {
        id: 4,
        projectName: 'Database Performance Optimization',
        projectDesc: 'Performance analysis in large-scale Oracle environments using PL/SQL and DBMS_XPLAN to optimize execution plans for complex queries.',
        tags: ['Oracle SQL', 'PL/SQL', 'Performance Tuning'],
        code: 'https://github.com/firdawss-Elhaddouchi/Views_Optimization_Project',
        image: three
    },
    {
        id: 5,
        projectName: 'House Price Prediction',
        projectDesc: 'A complete machine learning pipeline to predict house prices, covering data cleaning, feature engineering, and model evaluation.',
        tags: ['Machine Learning', 'Python', 'Scikit-Learn', 'Regression'],
        code: 'https://github.com/firdawss-Elhaddouchi/End-to-End-ML-House-Prices',
        image: four
    },
    {
        id: 11,
        projectName: 'Sign Language Translation',
        projectDesc: 'Deep learning prototype that recognizes sign language glosses from pose keypoints. Team: Amina Dourdi, Oumaima El Ghalbouni, and Firdawss El Haddouchi.',
        tags: ['Computer Vision', 'MSKA', 'CTC', 'mBART'],
        code: 'https://github.com/firdawss-Elhaddouchi/sign-language-translation',

        image: signArchitecture
    },
    {
        id: 13,
        projectName: 'OpenStack Private Cloud',
        projectDesc: 'DevStack lab with a controller and two compute nodes. Team: Yousra Khallou, Oumaima El Ghalbouni, and Firdawss El Haddouchi.',
        tags: ['OpenStack', 'DevStack', 'Horizon'],
        code: 'https://github.com/firdawss-Elhaddouchi/private-cloud-deployment-with-OpenStack',

        image: openstackCover
    },
    {
        id: 14,
        projectName: 'NLP Annotation Platform',
        projectDesc: 'Collaborative platform for labeling text for supervised classification, managing annotations, and evaluating agreement between annotators.',
        tags: ['NLP', 'Text Annotation', 'Text Classification'],
        code: 'https://github.com/firdawss-Elhaddouchi/nlp-annotation-platform',

        image: annotationCover
    },
    {
        id: 15,
        projectName: 'NLP Transformers & RAG',
        projectDesc: 'Academic Streamlit toolkit for sentiment analysis, question answering, and summarization, with a FAISS-backed chatbot for course documents.',
        tags: ['Transformers', 'FAISS', 'RAG', 'Streamlit'],
        code: 'https://github.com/firdawss-Elhaddouchi/nlp-transformers-rag',

        image: ragCover
    },
    {
        id: 16,
        projectName: 'NYC Trip Data Optimization',
        projectDesc: 'MongoDB project comparing indexing and sharding strategies for analytical queries over NYC for-hire vehicle trip records.',
        tags: ['MongoDB', 'PyMongo', 'Parquet', 'Dash'],
        code: 'https://github.com/firdawss-Elhaddouchi/fhv-tripdata-mongodb-optimization',

        image: mongodbCover
    }
]
