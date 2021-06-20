import React from 'react';
import { useTranslation } from 'react-i18next';
import { Badge, Table, Button } from 'reactstrap';
import Panel from '../../../shared/components/Panel';

const header = [
  { id: 0, title: '#' },
  { id: 1, title: 'Profile' },
  { id: 2, title: 'Business' },
  { id: 3, title: 'Address' },
  { id: 4, title: 'Bank Details' },
  { id: 5, title: 'Shipping' },
];

const rows = [
  {
    id: 1,
    profile: 'Alex',
    business: 'Product Salesman',
    address: 'San Fransico',
    bankDetails: 16171838890108,
    shippingStatus: true,
  },
  {
    id: 2,
    profile: 'Franky',
    business: 'Product Salesman',
    address: 'San Fransico',
    bankDetails: 16171838890108,
    shippingStatus: false,
  },
  {
    id: 3,
    profile: 'Monty',
    business: 'Product Salesman',
    address: 'San Fransico',
    bankDetails: 16171838890108,
    shippingStatus: true,
  },
  {
    id: 4,
    profile: 'Alex',
    business: 'Product Salesman',
    address: 'San Fransico',
    bankDetails: 16171838890108,
    shippingStatus: true,
  },
  {
    id: 5,
    profile: 'Franky',
    business: 'Product Salesman',
    address: 'San Fransico',
    bankDetails: 16171838890108,
    shippingStatus: false,
  },
  {
    id: 6,
    profile: 'Monty',
    business: 'Product Salesman',
    address: 'San Fransico',
    bankDetails: 16171838890108,
    shippingStatus: false,
  },
  {
    id: 7,
    profile: 'Alex',
    business: 'Product Salesman',
    address: 'San Fransico',
    bankDetails: 16171838890108,
    shippingStatus: true,
  },
  {
    id: 8,
    profile: 'Franky',
    business: 'Product Salesman',
    address: 'San Fransico',
    bankDetails: 16171838890108,
    shippingStatus: true,
  },
  {
    id: 9,
    profile: 'Monty',
    business: 'Product Salesman',
    address: 'San Fransico',
    bankDetails: 16171838890108,
    shipped: true,
  },
];

const ProfileTable = () => {
  const { t } = useTranslation('common');

  return (
    <Panel lg={12} title={t('profile_dashboard.user_profile')}>
      <Button type="button" className="btn btn-primary "><b>EDIT</b></Button>
      <Table responsive className="table--bordered">
        <thead>
          <tr>
            {header.map(item => (
              <th key={item.id}>{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.profile}</td>
              <td>{item.business}</td>
              <td>{item.address}</td>
              <td>{item.bankDetails}</td>
              <td><Badge color={item.badge}>{item.shipped ? 'Shipped' : 'In Progress'}</Badge></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Panel>
  );
};

export default ProfileTable;
