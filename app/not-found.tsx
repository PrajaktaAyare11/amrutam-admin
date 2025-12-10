export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
      
      <h1 className="text-7xl font-bold text-[#3A643B]">404</h1>
      
      <p className="mt-4 text-xl font-semibold text-gray-800">
        This page is not part of my project
      </p>

      <p className="mt-2 text-sm text-gray-500 max-w-md">
        You tried accessing a route that I didn’t implement.  
        This dashboard only contains the features required for my project.
      </p>

      <a
        href="/dashboard"
        className="mt-6 inline-block bg-[#3A643B] text-white px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition"
      >
        Go Back to Dashboard
      </a>

    </div>
  );
}
