import React, { Suspense } from 'react';
import UserPosts from './components/UserPost';
import getUser from '@/lib/getUser';
import getUserPosts from '@/lib/getUserPosts';
import getAllUsers from '@/lib/getAllUsers';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';



type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
    const userData: Promise<User> = getUser(userId);
    const user: User = await userData;

    if (!user) {
      return {
        title: 'User Not Found',
      }
    }
    
    return {
        title: user.name,
        description: `This is ${user.name}'s page`
    }
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

//   const [user, userPosts] = Promise.all([userData, userPostsData]);
const user: User = await userData;

if (!user) notFound();

  return <>
  <h2>{user.name}</h2>
  <br />
  <Suspense fallback={<h2>Loading...</h2>}>
     <UserPosts promise={userPostsData} />
  </Suspense>
 
  </>;
}

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return users.map(user => ({
    userId: user.id.toString(),
  }))
}
