import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function Home() {
  const user = await currentUser();
  const profileInfo = null; // Replace this with your actual logic to fetch profile info

  if (user && !profileInfo?._id) {
    redirect('/onboard');
  }

  return (
    <section>
      <div>Main Content</div>
    </section>
  );
}
