import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProfileTable from './components/ProfileTable';

const Profile = () => (
  <Container className="profile">
    <Col md={20}>
      <Row><ProfileTable /></Row>
    </Col>
  </Container>
);

export default Profile;
