'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NotFound() {
  const location = usePathname()

  return (
    <div className="flex flex-col items-center justify-center min-h-dvh p-2">
      {/* Error Text */}
      <h2 className="text-9xl font-bold text-blue-800">404</h2>
      {/* Error Message Title */}
      <h3 className="text-white text-3xl font-bold">Page Not Found</h3>
      {/* Error Description */}
      <p className="text-gray-400 text-lg mt-8 max-w-2xl text-center">
        Oops! The page you&apos;re looking for doesn&apos;t exist. It might have
        been moved, deleted, or you entered the wrong URL.
      </p>
      {/* Error Action */}
      <Link href="/" className="text-blue-500 hover:underline mt-4">
        Go back to Home
      </Link>
      {/* Optional: Display the current path */}
      <p className="text-gray-300 text-sm mt-4 max-w-2xl text-center">
        Error path:{' '}
        <span className="text-gray-300 bg-gray-700 py-1 px-2 rounded-sm">
          {location}
        </span>
      </p>
    </div>
  )
}
