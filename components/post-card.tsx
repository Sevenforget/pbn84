import type { Post } from "@/lib/types"
import { formatDate } from "@/lib/utils"
import { Calendar, Tag, User } from "lucide-react"
import Link from "next/link"

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div
        className="group h-full overflow-hidden rounded-lg border bg-background/50 p-4 backdrop-blur-sm transition-all hover:bg-background/80 hover:shadow-md dark:border-muted dark:bg-muted/20 dark:hover:bg-muted/30"
        style={{ boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="line-clamp-2 text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
              {post.title}
            </h2>

            <div className="mt-2 line-clamp-3 text-muted-foreground">{post.content}</div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <div className="flex items-center">
              <User className="mr-1 h-3 w-3" />
              <span>{post.author || "관리자"}</span>
            </div>

            {post.date && (
              <div className="flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                <span>{formatDate(post.date)}</span>
              </div>
            )}

            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center flex-wrap gap-1">
                <Tag className="mr-1 h-3 w-3" />
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    {tag}
                  </span>
                ))}
                {post.tags.length > 2 && <span className="text-xs">+{post.tags.length - 2}</span>}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
