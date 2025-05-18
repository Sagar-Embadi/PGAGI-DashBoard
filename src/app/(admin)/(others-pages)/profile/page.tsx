'use client';

import { useUser } from '@clerk/nextjs';

export default function UserInfo() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <p className="text-gray-500 dark:text-gray-400">Loading...</p>;

  return (
    <div className="max-w-2xl w-full mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 relative">
      {/* Header */}
      <div className="flex items-center gap-6 mb-6">
        <img
          src={user?.imageUrl}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover shadow"
        />
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">My Profile</h2>
          <p className="text-2xl text-gray-500 dark:text-gray-400">
            @{user?.username ||user?.fullName }
          </p>
        </div>
      </div>

      {/* Form fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div>
          <label className="block text-gray-600 dark:text-gray-300">First Name</label>
          <input
            value={user?.firstName || ''}
            readOnly
            className="w-full mt-1 px-3 py-2 rounded border bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-300">Last Name</label>
          <input
            value={user?.lastName || ''}
            readOnly
            className="w-full mt-1 px-3 py-2 rounded border bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-300">Email</label>
          <input
            value={user?.primaryEmailAddress?.emailAddress || ''}
            readOnly
            className="w-full mt-1 px-3 py-2 rounded border bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-300">Username</label>
          <input
            value={user?.username || 'Not set'}
            readOnly
            className="w-full mt-1 px-3 py-2 rounded border bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-300">User ID</label>
          <input
            value={user?.id}
            readOnly
            className="w-full mt-1 px-3 py-2 rounded border bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-300">Last Sign-In</label>
          <input
            value={new Date(user?.lastSignInAt || '').toLocaleString()}
            readOnly
            className="w-full mt-1 px-3 py-2 rounded border bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-white"
          />
        </div>
      </div>
    </div>
  );
}
