import Header from "./components/Header";
import MainSidebar from "./components/MainSidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="h-full w-full min-w-0 flex-auto bg-white dark:bg-gray-800">
      <Header></Header>
      <div className="flex h-full items-start">
        <div className="hidden lg:block lg:w-64">
          <aside className="transition-width fixed top-0 left-0 z-20 flex h-full w-64 flex-shrink-0 flex-col border-r border-gray-200 pt-16 duration-75 lg:flex dark:border-gray-700">
            <MainSidebar></MainSidebar>
          </aside>
        </div>
        <main className="fixed h-full w-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
