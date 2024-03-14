import React from 'react';
import prisma from '@/prisma/db';

import UserForm from '@/components/UserForm';
import DataTableSimple from './data-table-simple';

const Users = async () => {
  const users = await prisma.user.findMany();

  return (
    <div>
      <UserForm />
      <DataTableSimple users={users} />
    </div>
  );
};

export default Users;
