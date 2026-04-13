import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
export const projectsData = [
    {
        id: 1,
        projectName: 'TaaSim: Smart Urban Mobility',
        projectDesc: 'A real-time data platform for Casablanca urban mobility, utilizing Kafka and Flink for stream processing of GPS flows and trip requests.',
        tags: ['Kafka', 'Flink', 'Spark', 'Docker'],
        code: 'https://github.com/firdawss-Elhaddouchi/', 
        demo: 'https://github.com/firdawss-Elhaddouchi/',
        image: six 
    },
    {
        id: 2,
        projectName: 'Batch Procurement Data Pipeline',
        projectDesc: 'Automated supply chain flows using a hybrid architecture of Hadoop HDFS and PostgreSQL, with Trino as a unified query engine for distributed data.',
        tags: ['HDFS', 'Trino', 'PostgreSQL', 'Docker'],
        code: 'https://github.com/amina-dourdi/batch-procurement-data-pipeline',
        demo: 'https://github.com/amina-dourdi/batch-procurement-data-pipeline',
        image: one
    },
    {
        id: 3,
        projectName: 'SQL DWH & Medallion Architecture',
        projectDesc: 'Developed a structured warehousing solution (Bronze, Silver, Gold) transforming raw ERP/CRM data into an optimized Star Schema for business analytics.',
        tags: ['ETL', 'SQL', 'Data Warehousing', 'Medallion'],
        code: 'https://github.com/firdawss-Elhaddouchi/sql-data-warehouse-project',
        demo: 'https://github.com/firdawss-Elhaddouchi/sql-data-warehouse-project',
        image: two
    },
    {
        id: 4,
        projectName: 'Database Performance Optimization',
        projectDesc: 'Performance analysis in large-scale Oracle environments using PL/SQL and DBMS_XPLAN to optimize execution plans for complex queries.',
        tags: ['Oracle SQL', 'PL/SQL', 'Performance Tuning'],
        code: 'https://github.com/firdawss-Elhaddouchi/Views_Optimization_Project',
        demo: 'https://github.com/firdawss-Elhaddouchi/Views_Optimization_Project',
        image: three
    },
    {
        id: 5,
        projectName: 'End-to-End ML House Prices',
        projectDesc: 'A complete machine learning pipeline to predict house prices, covering data cleaning, feature engineering, and model evaluation.',
        tags: ['Machine Learning', 'Python', 'Scikit-Learn', 'Regression'],
        code: 'https://github.com/firdawss-Elhaddouchi/End-to-End-ML-House-Prices',
        demo: 'https://github.com/firdawss-Elhaddouchi/End-to-End-ML-House-Prices',
        image: four
    },
    {
        id: 6,
        projectName: 'Medicare Analytics System',
        projectDesc: 'A medical data management system integrating PHP for web interface and Python for data analytics, featuring patient tracking and statistical dashboards.',
        tags: ['PHP', 'Python', 'MySQL', 'Pandas'],
        code: 'https://github.com/firdawss-Elhaddouchi/medicare-analytics-system',
        demo: 'https://github.com/firdawss-Elhaddouchi/medicare-analytics-system',
        image: five
    }
]