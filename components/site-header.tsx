'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'
import { cn } from '@/lib/utils'

export const SiteHeader = () => {
    const pathname = usePathname()

    const isActive = (path: string) => {
        return pathname === path || pathname.startsWith(`${path}/`)
    }

    return (
        <header className="border-b dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]">
            <div className="mx-auto flex max-w-7xl justify-between px-6 py-4 lg:px-4">
                <div className="flex gap-6">
                    <Link href="/" className="flex w-fit items-center gap-2">
                        <Logo />
                        <span className="sr-only font-bold">ns UI</span>
                    </Link>

                    <div className="flex gap-1">
                        <Button asChild size="sm" variant="ghost" className={cn('rounded-full opacity-75', isActive('/hero-section') && 'opacity-100')}>
                            <Link href="/hero-section" className="!text-sm">
                                Blocks
                            </Link>
                        </Button>
                        <Button asChild size="sm" variant="ghost" className={cn('rounded-full opacity-75', isActive('/snippets/button') && 'opacity-100')}>
                            <Link href="/snippets/button" className="!text-sm">
                                Snippets
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="-mr-2 flex items-center">
                    <Button asChild variant="link" className="gap-1">
                        <Link href="https://github.com/Meschacirung/cnblocks/" target="_blank" className="text-sm">
                            GitHub
                            <ArrowUpRight className="!size-3.5 opacity-50" />
                        </Link>
                    </Button>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}
