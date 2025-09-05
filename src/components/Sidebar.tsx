import { Home, Search, Library, Plus, Heart, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { NavLink } from "react-router-dom";

const samplePlaylists = [
  "Ma playlist favorite",
  "Découvertes récentes",
  "Rock Classique",
  "Musique du monde",
  "Chill Vibes"
];

export const Sidebar = () => {
  return (
    <div className="w-64 bg-player-background border-r border-border h-full flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <Music className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            MyMusicHub
          </h1>
        </div>
        
        <nav className="space-y-2">
          <Button asChild variant="ghost" className="w-full justify-start gap-3 hover:bg-player-hover">
            <NavLink to="/" className={({ isActive }) => isActive ? "bg-player-hover text-primary" : ""}>
              <Home className="h-5 w-5" />
              Accueil
            </NavLink>
          </Button>
          <Button asChild variant="ghost" className="w-full justify-start gap-3 hover:bg-player-hover">
            <NavLink to="/search" className={({ isActive }) => isActive ? "bg-player-hover text-primary" : ""}>
              <Search className="h-5 w-5" />
              Rechercher
            </NavLink>
          </Button>
          <Button asChild variant="ghost" className="w-full justify-start gap-3 hover:bg-player-hover">
            <NavLink to="/library" className={({ isActive }) => isActive ? "bg-player-hover text-primary" : ""}>
              <Library className="h-5 w-5" />
              Ma Bibliothèque
            </NavLink>
          </Button>
        </nav>
      </div>

      <Separator className="bg-border" />

      <div className="p-6 flex-1">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Playlists
          </h2>
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-player-hover">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="mb-4">
          <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-player-hover text-primary">
            <Heart className="h-5 w-5" />
            Titres likés
          </Button>
        </div>

        <ScrollArea className="flex-1">
          <div className="space-y-1">
            {samplePlaylists.map((playlist, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start text-sm text-muted-foreground hover:text-foreground hover:bg-player-hover"
              >
                {playlist}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};