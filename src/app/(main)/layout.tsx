import type { Metadata } from 'next'
import { AuthGuard } from '@/components/AuthGuard'

export const metadata: Metadata = {
  title: 'Dashboard | Rwanda Drive',
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AuthGuard>{children}</AuthGuard>
}
