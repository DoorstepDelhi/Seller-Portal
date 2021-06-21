import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'reactstrap';

const ProfileAchievement = () => {
  const { t } = useTranslation('common');
  return (
    <Row className="profileAchievement bg-white p-4 mt-3">
      <h4 className="pb-3">Achievements</h4>
      <Row className="profileAchievement__items border-top p-3 d-flex align-items-center">
        <Col xs={3}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Emoji_u263a.svg/1200px-Emoji_u263a.svg.png" 
            className="rounded-circle py-1"
            alt=""
          />
        </Col>
        <Col xs={9}>
          <h4 className="p-0">100 orders in months</h4>
          <p className="p-0">some dummy text</p>
        </Col>
      </Row>
    </Row>
  );
};

export default ProfileAchievement;
