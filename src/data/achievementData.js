import dockerCert from '../assets/certificates/certificate Introduction to Docker.png'
import scikitCert from '../assets/certificates/Certificate Supervised Learning with scikit-learn.png'
import aiCert from '../assets/certificates/Certificate Understanding Artificial Intelligence .png'
export const achievementData = {
    bio : "My journey in Data Engineering is driven by a commitment to continuous learning and technical excellence. I have earned several certifications that validate my expertise in containerization, machine learning, and advanced data visualization, ensuring I stay at the forefront of modern data technologies.",
    achievements : [
        {
            id : 1,
            title : 'Introduction to Docker',
            details : 'Gained hands-on experience in containerizing applications and managing images/containers for scalable deployments through DataCamp.',
            date : '2026',
            field : 'DevOps',
            image : dockerCert
        },
        {
            id : 2,
            title : 'Supervised Learning with Scikit-Learn',
            details : 'Built and evaluated predictive models using regression and classification algorithms for data-driven insights on DataCamp.',
            date : '2025',
            field : 'Machine Learning',
            image : scikitCert
        },
        {
            id : 3,
            title : 'Understanding Artificial Intelligence',
            details : 'Mastered foundational AI concepts, ethics, and their practical applications in business and technology via DataCamp.',
            date : '2025',
            field : 'Artificial Intelligence',
            image : aiCert
        },
        {
            id : 4,
            title : 'Power BI Online Course',
            details : 'Developed advanced data visualization skills, creating interactive dashboards with complex DAX measures through Udemy.',
            date : '2024',
            field : 'Data Visualization',
            image : 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000'
        }
    ]
}