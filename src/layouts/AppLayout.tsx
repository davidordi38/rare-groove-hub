import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { MusicPlayer } from "@/components/MusicPlayer";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="h-screen flex flex-col bg-gradient-background">
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <TopBar />
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
      <MusicPlayer />
    </div>
  );
};