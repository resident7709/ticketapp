import React from 'react';
import Link from 'next/link';
import ReactMarkDown from 'react-markdown';
import { Ticket, User } from '@prisma/client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import DeleteButton from './DeleteButton';
import TicketStatusBadge from '@/components/TicketStatusBadge';
import TicketPriority from '@/components/TicketPriority';
import AssignTicket from '@/components/AssignTicket';
import { buttonVariants } from '@/components/ui/button';
import { formatDate } from '@/lib/formatDate';

interface Props {
  ticket: Ticket;
  users: User[];
}

const TicketDetail = ({ ticket, users }: Props) => {
  return (
    <div className='lg:grid lg:grid-cols-4'>
      <Card className='mx-4 mb-4 lg:col-span-3 lg:mr-4'>
        <CardHeader>
          <div className='flex justify-between mb-3'>
            <TicketStatusBadge status={ticket.status} />
            <TicketPriority priority={ticket.priority} />
          </div>
          <CardTitle>{ticket.title}</CardTitle>
          <CardDescription>
            Created: {formatDate(ticket.createdAt)}
          </CardDescription>
        </CardHeader>
        <CardContent className='prose dark:prose-invert'>
          <ReactMarkDown>{ticket.description}</ReactMarkDown>
        </CardContent>
        <CardFooter>Updated: {formatDate(ticket.createdAt)}</CardFooter>
      </Card>
      <div className='flex mx-4 lg:flex-col lg:mx-0 gap-2'>
        <AssignTicket ticket={ticket} users={users} />
        <Link
          href={`/tickets/edit/${ticket.id}`}
          className={`${buttonVariants({ variant: 'default' })}`}>
          Edit Ticket
        </Link>
        <DeleteButton ticketId={ticket.id} />
      </div>
    </div>
  );
};

export default TicketDetail;
