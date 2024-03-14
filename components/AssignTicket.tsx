'use client';

import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Ticket, User } from '@prisma/client';

const AssignTicket = ({ ticket, users }: { ticket: Ticket; users: User[] }) => {
  const [isAssigning, setIsAssigning] = useState(false);
  const [error, setError] = useState('');

  const assignTicket = async (userId: string) => {
    setError('');
    setIsAssigning(true);

    await axios
      .patch(`/api/tickets/${ticket.id}`, {
        assignedToUserId: userId === '0' ? null : userId,
      })
      .catch(() => {
        setError('Unable to Assign Ticket');
      });

    setIsAssigning(false);
  };

  return (
    <>
      <Select
        defaultValue={ticket.assignedToUserId?.toString() || undefined}
        onValueChange={assignTicket}
        disabled={isAssigning}>
        <SelectTrigger>
          <SelectValue
            placeholder='Select User..'
            defaultValue={
              ticket.assignedToUserId?.toString() || undefined
            }></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='0'>Unassign</SelectItem>
          {users?.map(user => (
            <SelectItem key={user.id} value={user.id.toString()}>
              {user.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className='text-destructive'>{error}</p>
    </>
  );
};

export default AssignTicket;
