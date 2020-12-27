import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Loadable from '@loadable/component';

import './skills-iq.css';
import jsLogo from '../../pages/images/js-logo.svg';
import reactLogo from '../../pages/images/react-logo.svg';

const PluralsightScore = Loadable(() => import('pluralsight-score'));

const skills = [
  {
    name: 'Javascript',
    logoSrc: jsLogo,
    score: {
      percentile: 95,
      srcName: 'Pluralsight',
      srcUrl: 'https://app.pluralsight.com/profile/leonardo-reyes',
    },
  },
  {
    name: 'React',
    logoSrc: reactLogo,
    score: {
      percentile: 87,
      srcName: 'Pluralsight',
      srcUrl: 'https://app.pluralsight.com/profile/leonardo-reyes',
    },
  },
];

const SkillsIq = () => {
  const [isDisplayingSkillDetail, setIsDisplayingSkillDetail] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState({
    name: '',
    score: {
      percentile: 0,
      srcName: '',
      srcUrl: '',
    },
  });
  const skillsList = skills.map((skill, index) => (
    <img
      alt=""
      role="presentation"
      key={skill.name}
      src={skill.logoSrc}
      className={`skills-icon ${skill.name === selectedSkill.name && isDisplayingSkillDetail ? 'active' : ''}`}
      onClick={() => onSkillClick(index)}
    />
  ));

  const onSkillClick = (skillIndex) => {
    const clickedSkill = skills[skillIndex];
    setSelectedSkill(clickedSkill);

    const sameSkillSelected = clickedSkill.name === selectedSkill.name;
    const hideScore = isDisplayingSkillDetail ? sameSkillSelected : false;
    setIsDisplayingSkillDetail(!hideScore);
  };

  return (
    <div>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        {skillsList}
      </Grid>
      <div className={`skills-iq-graph ${isDisplayingSkillDetail ? 'expanded' : ''}`}>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <h3>{selectedSkill.name}</h3>
          <PluralsightScore hidden={false} percentile={selectedSkill.score.percentile} />
          <span>
            Source:
            <a target="_blank" rel="noopener noreferrer" href={selectedSkill.score.srcUrl}>
              {selectedSkill.score.srcName}
            </a>
          </span>
        </Grid>
      </div>
    </div>
  );
};

export default SkillsIq;
