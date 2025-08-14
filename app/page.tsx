import AddNewRecord from '@/components/AddNewRecord';
import AIInsights from '@/components/AIInsights';
import ExpenseStats from '@/components/ExpenseStats';
import Guest from '@/components/Guest';
import RecordChart from '@/components/RecordChart';
import RecordHistory from '@/components/RecordHistory';
import { currentUser } from '@clerk/nextjs/server';

export default async function HomePage() {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }
  return (
    <main className='bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans min-h-screen transition-colors duration-300'>
      {/* Mobile-optimized container with responsive padding */}
      <div className='max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8'>
        {/* Mobile-first responsive grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6'>
          {/* Left Column - Stacked on mobile */}
          <div className='space-y-4 sm:space-y-6'>
            {/* Welcome section with improved mobile layout */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-5 sm:p-8 lg:p-10 rounded-3xl shadow-xl border border-gray-100/60 dark:border-gray-700/60
  hover:shadow-2xl transition-shadow duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10">

  {/* Profile Image */}
  <div className="relative flex-shrink-0">
    <img
      src={user.imageUrl}
      alt={`${user.firstName}'s profile`}
      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-4 border-white dark:border-gray-700 shadow-lg"
    />
    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center shadow-lg animate-none">
      <span className="text-white text-base font-bold">✓</span>
    </div>
  </div>

  {/* User Details */}
  <div className="flex-1 text-center sm:text-left">
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-4">
      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 via-green-400 to-teal-400 rounded-xl flex items-center justify-center shadow-lg transform transition-transform duration-300">
        <span className="text-white text-xl font-semibold">👋</span>
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
        Welcome Back, <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">{user.firstName}</span>!
      </h2>
    </div>
    <p className="text-base text-gray-600 dark:text-gray-400 mb-5 max-w-lg mx-auto sm:mx-0">
      Here’s a quick overview of your <span className="font-semibold text-emerald-500">recent expense activity</span>.
      Track your spending, analyze patterns, and manage your budget efficiently!
    </p>

    {/* Badges */}
    <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/40 dark:to-green-900/40 border border-emerald-200 dark:border-emerald-800 px-4 py-3 rounded-xl flex items-center gap-2 shadow  transition-all duration-300 cursor-pointer">
        <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
          <span className="text-white text-base">📅</span>
        </div>
        <div>
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 block">Joined</span>
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{new Date(user.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/40 dark:to-emerald-900/40 border border-green-200 dark:border-green-800 px-4 py-3 rounded-xl flex items-center gap-2 shadow transition-all duration-300 cursor-pointer">
        <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
          <span className="text-white text-base">⚡</span>
        </div>
        <div>
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 block">Last Active</span>
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            {user.lastActiveAt
              ? new Date(user.lastActiveAt).toLocaleDateString()
              : 'Today'}
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
            {/* Add New Expense */}
            <AddNewRecord />
          </div>

          {/* Right Column - Stacked below on mobile */}
          <div className='space-y-4 sm:space-y-6'>
            {/* Expense Analytics */}
            <RecordChart />
            <ExpenseStats />
          </div>
        </div>

        {/* Full-width sections below - mobile-friendly spacing */}
        <div className='mt-6 sm:mt-8 space-y-4 sm:space-y-6'>
          <AIInsights />
          <RecordHistory />
        </div>
      </div>
    </main>
  );
}
