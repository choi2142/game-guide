import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
