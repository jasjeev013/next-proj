import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query: string }>
}) {
  const query = (await searchParams).query;

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name: 'John Doe' },
    _id: 1,
    description: 'This is a description',
    image: 'https://www.neilsahota.com/wp-content/uploads/2024/05/AI-Humanoid-Robots.jpg',
    category: 'Tech',
    title: 'Startup 1',

  }]
  return (
    <>

      <section className="pink_container">
        <h1 className="heading">Pitch YOur Idea, <br /> Connect With Entreprenuers</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />

      </section>


      <section className="section_container">
        <p className="text-30-semibold">
          {query ? 'Search Results for ' + query : 'All Startups'}
        </p>

        <ul className="mt-7 card_grid ">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">Noo startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
