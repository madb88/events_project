import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { getEventsByUser } from "@/lib/actions/event.actionts";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

async function ProfilePage() {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  const organizedEvents = await getEventsByUser({ userId, page: 1 });
  return (
    <>
      {/* My tickets */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My tickets</h3>
          <Button size="lg" asChild className="button hiddem sm:flex">
            <Link href="/#events">Explore more events</Link>
          </Button>
        </div>
      </section>
      {/* <section className="wrapper my-8">
        <Collection
          data={events?.data}
          emptyTitle="No Event ticket purchased yet"
          emptyStateSubtext="No worries"
          collectionType="My_Tickets"
          limit={3}
          page={1}
          urlParamName="ordersPage"
          totalPages={2}
        />
      </section> */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Events organized</h3>
          <Button size="lg" asChild className="button hiddem sm:flex">
            <Link href="/events/create">Create new event</Link>
          </Button>
        </div>
      </section>
      <section className="wrapper my-8">
        <Collection
          data={organizedEvents?.data}
          emptyTitle="No Events have been created yet"
          emptyStateSubtext="No worries"
          collectionType="Events_Organized"
          limit={3}
          page={1}
          urlParamName="eventsPage"
          totalPages={2}
        />
      </section>
    </>
  );
}

export default ProfilePage;
