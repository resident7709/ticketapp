import React from 'react';
import { Ticket } from '@prisma/client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Props {
  tickets: Ticket[];
  //   searchParams: SearchParams;
}

const DataTable = ({ tickets }: Props) => {
  console.log('Hi there!');

  return (
    <div className='w-full mt-5'>
      <div className='rounded-md sm:border'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets
              ? tickets.map(ticket => (
                  <TableRow key={ticket.id} data-href='/'>
                    <TableCell>{ticket.title}</TableCell>
                    <TableCell>{ticket.status}</TableCell>
                    <TableCell>{ticket.priority}</TableCell>
                    <TableCell>
                      {ticket.createdAt.toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
