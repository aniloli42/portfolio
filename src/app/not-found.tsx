'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NotFound() {
  const location = usePathname()

  return (
    <div className="flex flex-col items-center justify-center min-h-dvh p-2 bg-gray-900">
      {/* Error Text */}
      <h2 className="text-9xl font-bold text-blue-500">404</h2>
      {/* Error Message Title */}
      <h3 className="text-white text-3xl font-bold">Page Not Found</h3>
      {/* Error Description */}
      <p className="text-gray-400 text-lg mt-8 max-w-2xl text-center">
        Oops! The page you&apos;re looking for doesn&apos;t exist. It might have
        been moved, deleted, or you entered the wrong URL.
      </p>
      {/* Error Action */}
      <Link 
        href="/" 
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
      >
        Go back to Home
      </Link>
      {/* Optional: Display the current path */}
      <p className="text-gray-500 text-sm mt-8 max-w-2xl text-center">
        Error path:{' '}
        <span className="text-gray-300 bg-gray-800 py-1 px-2 rounded border border-gray-700">
          {location}
        </span>
      </p>
    </div>
  )
}
