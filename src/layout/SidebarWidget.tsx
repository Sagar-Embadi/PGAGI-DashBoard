import React from "react";

export default function SidebarWidget() {
  return (
    <div
      className={`
        mx-auto mb-10 w-full max-w-60 rounded-2xl bg-gray-50 px-4 py-5 text-center dark:bg-white/[0.03]`}
    >
      <h3 className="mb-2 font-semibold text-gray-900 dark:text-white border-b border-gray-200 pb-2 text-title text-bold">
        PG-AGI Dashboard
      </h3>
      <p className="mb-4 text-gray-500 text-theme-sm dark:text-gray-400">
        Credits: Developed by <b>Sagar Embadi</b> as part of the PG-AGI company assignment. 
      </p>
      <div className="flex items-center justify-center gap-3 text-gray-500 dark:text-gray-100">
        <a href="https://www.linkedin.com/in/sagar-embadi">LinkedIn</a>
        <a href="https://github.com/Sagar-Embadi">GitHub</a>
        <a href="mailto:sagarembadi7@gmail.com">Mail</a>
      </div>
    </div>
  );
}
