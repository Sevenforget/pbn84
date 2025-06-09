import PostList from "@/components/post-list"
import { getPosts } from "@/lib/data"

export default async function Home() {
  const posts = await getPosts()

  return (
    <div className="container mx-auto">
      <div className="mb-8 w-full max-w-none relative rounded-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/title-bg.png')" }}
        />
        <div className="relative p-10 md:p-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">여행의 발자국</h1>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl">세계 각지의 여행 경험과 팁을 공유하는 블로그</p>
        </div>
      </div>

      <PostList posts={posts} />
    </div>
  )
}
