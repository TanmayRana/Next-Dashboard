'use client';

import BreadCrumb from '@/components/breadcrumb';
import { UserClient } from '@/components/tables/user-tables/client';
import { users } from '@/constants/data';
import { useEffect } from 'react';

const breadcrumbItems = [{ title: 'User', link: '/dashboard/user' }];
export default function page() {
  // const featcher = async () => {
  //   // const res = await fetch('http://localhost:8000/api/user/all-users');
  //   const data = await res.json();
  //   console.log(data);
  // };
  // useEffect(() => {
  //   featcher();
  // }, []);

  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={users} />
      </div>
    </>
  );
}
