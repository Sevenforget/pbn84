"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Compass, Home, Search, Tag } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="relative hidden md:block">
      <div className="fixed inset-y-0 left-0 z-10 w-64 border-r bg-background">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/travel-bg.png')" }}
        />

        <div className="relative flex h-full flex-col">
          <div className="border-b px-6 py-8">
            <Link href="/" className="flex items-center gap-2">
              <Compass className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">여행의 발자국</span>
            </Link>

            <div className="mt-6">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="검색..." className="pl-8" />
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-auto py-4">
            <nav className="grid gap-1 px-4">
              <Button asChild variant={pathname === "/" ? "secondary" : "ghost"} className="justify-start">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />홈
                </Link>
              </Button>

              <div className="mt-6">
                <h4 className="mb-2 px-2 text-sm font-semibold">인기 태그</h4>
                <div className="grid gap-1">
                  {["유럽", "아시아", "배낭여행", "맛집", "호텔리뷰"].map((tag) => (
                    <Button key={tag} variant="ghost" className="justify-start" asChild>
                      <Link href={`/tags/${tag}`}>
                        <Tag className="mr-2 h-4 w-4" />
                        {tag}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </nav>
          </div>

          <div className="border-t p-6">
            <p className="text-sm text-muted-foreground">© 2023 여행의 발자국</p>
          </div>
        </div>
      </div>
    </div>
  )
}
