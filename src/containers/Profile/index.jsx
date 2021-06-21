import React from 'react';
import { 
  Container, 
  Row,
  Col,
} from 'reactstrap';
import ProfileAchievement from './components/ProfileAchievement';
import ProfileCard from './components/ProfileCard';
import ProfileTable from './components/ProfileTable';

const Profile = () => (
  <Container className="profile">
    <Row xs="2">
      <Col xl={4}>
        <ProfileCard />
        <ProfileAchievement />
      </Col>
      <Col xl={8}><ProfileTable /></Col>
    </Row>
  </Container>
);

export default Profile;
