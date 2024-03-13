import React from 'react';
import prisma from '@/prisma/db';
import Link from 'next/link';

import DataTable from './DataTable';
import Pagination from '@/components/Pagination';
import { buttonVariants } from '@/components/ui/button';

const Tickets = async () => {
  const tickets = await prisma.ticket.findMany();

  return (
    <div>
      <Link
        href='/tickets/new'
        className={buttonVariants({ variant: 'default' })}>
        New Ticket
      </Link>
      <DataTable tickets={tickets} />
      <Pagination itemCount={26} pageSize={10} currentPage={3} />
    </div>
  );
};

export default Tickets;
