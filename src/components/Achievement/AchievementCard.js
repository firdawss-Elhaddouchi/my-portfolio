import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import { AiOutlineFolder } from "react-icons/ai";

import CertificatePreview from '../CertificatePreview/CertificatePreview';
import './Achievement.css'

function AchievementCard({id, title, details, date, field, image, certificate}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        achievementCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();
    return (
        <Fade bottom>
           <div key={id} className={`achievement-card ${classes.achievementCard}`}>
               <div className="achievecard-content">
                    <div className="achievecard-details1">
                        <h2 style={{color: theme.tertiary}}>{title}</h2>
                        <p style={{color: theme.tertiary80}}>{details}</p>
                    </div>
                    <div className="achievecard-details2" style={{color: theme.primary}}>
                        <h5>{date}</h5>
                        <div className="achievecard-field">
                            <AiOutlineFolder />
                            <h5>{field}</h5>
                        </div>   
                    </div>
                </div> 
                <div className="achievecard-imgcontainer">
                    {certificate ? (
                        <CertificatePreview image={image} title={title}
                            label={`Enlarge certificate: ${title}`}
                            className="achievement-certificate">
                            <img src={image} alt="" loading="lazy" />
                        </CertificatePreview>
                    ) : <img src={image} alt="" loading="lazy" />}
                </div>
           </div>
        </Fade>
        
    )
}

export default AchievementCard
