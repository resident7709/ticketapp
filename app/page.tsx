import React from 'react';
import prisma from '@/prisma/db';

import DashChart from '@/components/DashChart';
import DashRecentTickets from '@/components/DashRecentTickets';

const Dashboard = async () => {
  const tickets = await prisma.ticket.findMany({
    where: {
      NOT: [{ status: 'CLOSED' }],
    },
    orderBy: {
      updatedAt: 'desc',
    },
    skip: 0,
    take: 5,
    include: {
      assignedToUser: true,
    },
  });

  const groupTicket = await prisma.ticket.groupBy({
    by: ['status'],
    _count: {
      id: true,
    },
  });

  console.log(groupTicket);

  return (
    <div>
      <div className='grid gap-4 md:grid-cols-2 px-2'>
        <div>
          <DashRecentTickets />
        </div>
        <div>
          <DashChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
