import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { MainContent } from "@/components/MainContent";
import { MusicPlayer } from "@/components/MusicPlayer";

const Index = () => {
  return (
    <div className="h-screen flex flex-col bg-gradient-background">
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <TopBar />
          <MainContent />
        </div>
      </div>
      <MusicPlayer />
    </div>
  );
};

export default Index;
