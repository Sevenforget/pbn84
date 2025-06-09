import { fetchPostFromApi } from "@/lib/api-service";
import { getCurrentProjectDomain } from "@/lib/domain-mapper";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const postId = Number.parseInt(params.id);

  if (isNaN(postId) || postId < 0) {
    notFound();
  }

  try {
    // 현재 프로젝트의 도메인 자동 감지
    const communityUrl = "https://ngaahead.org"; // 하드코딩된 도메인 (pbn-domains.json 기반)

    // API에서 게시물 데이터 가져오기
    const post = await fetchPostFromApi(communityUrl, postId);

    return (
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          모든 글 보기
        </Link>

        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center">
              <User className="mr-1 h-4 w-4" />
              <span>{post.author || "관리자"}</span>
            </div>

            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              <span>
                {formatDate(post.date ? new Date(post.date) : new Date())}
              </span>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center flex-wrap gap-1">
                <Tag className="mr-1 h-4 w-4" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div
            className="leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </article>
      </div>
    );
  } catch (error) {
    console.error("게시물 로드 실패:", error);
    notFound();
  }
}
