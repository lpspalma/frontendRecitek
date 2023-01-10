import React from 'react';
import { Outlet } from 'react-router-dom';

type Props = {};

const ManagementPageLayout = (props: Props) => {
  return (
    <><Outlet /></>
  );
};

export default ManagementPageLayout;