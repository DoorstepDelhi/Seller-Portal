import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Card,
  CardBody,
  Col,
  Row, 
} from 'reactstrap';

const ProfileCard = () => (
  <Row xs={2} className="profileCard xs-2 bg-white p-4">
    <div className="profileCard__pic mx-auto p-1">
      <img
        src="https://markmywords.pl/wp-content/uploads/2019/10/dummy-man-570x570.png"
        className="rounded-circle px-2"
        alt=""
      />
      <p className="text-center">https://website.com</p>
    </div>
    <div className="profileCard__bio px-2 pt-4">
      <h4 className="profileCard__bio-name px-2">
        John Doe
      </h4>
      <p className="profileCard__bio-contact px-2">
        +1119230182
      </p>
      <p className="profileCard__bio-email px-2">
        johndoe@gmail.com
      </p>
      <p className="profileCard__bio-gstNo px-2">
        100200239928
      </p>
    </div>
  </Row>
);

export default ProfileCard;
