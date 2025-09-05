import { Search as SearchIcon, Filter, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppLayout } from "@/layouts/AppLayout";

const trendingSearches = [
  "Jazz Fusion",
  "Electro Chill",
  "Rock Classique",
  "Hip-Hop Français",
  "Musique du Monde"
];

const recentSearches = [
  "Daft Punk",
  "Playlist été 2024",
  "Ambient",
  "Lo-fi beats"
];

const Search = () => {
  return (
    <AppLayout>
      <div className="p-6 space-y-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Rechercher</h1>
        
        <div className="flex gap-2 max-w-md">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Que voulez-vous écouter ?"
              className="pl-9 bg-player-surface border-border hover:border-primary/50 focus:border-primary"
            />
          </div>
          <Button variant="outline" size="icon" className="border-border hover:bg-player-hover">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="bg-player-surface">
          <TabsTrigger value="all">Tout</TabsTrigger>
          <TabsTrigger value="tracks">Titres</TabsTrigger>
          <TabsTrigger value="artists">Artistes</TabsTrigger>
          <TabsTrigger value="playlists">Playlists</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Tendances du moment</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {trendingSearches.map((term, index) => (
                <Card key={index} className="bg-player-surface border-border hover:bg-player-hover cursor-pointer transition-colors">
                  <CardContent className="p-4">
                    <p className="text-sm font-medium">{term}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Recherches récentes</h2>
            <div className="space-y-2">
              {recentSearches.map((term, index) => (
                <div key={index} className="flex items-center gap-3 p-2 rounded-md hover:bg-player-hover cursor-pointer">
                  <SearchIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{term}</span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tracks">
          <div className="text-center py-12">
            <p className="text-muted-foreground">Commencez à taper pour rechercher des titres...</p>
          </div>
        </TabsContent>

        <TabsContent value="artists">
          <div className="text-center py-12">
            <p className="text-muted-foreground">Commencez à taper pour rechercher des artistes...</p>
          </div>
        </TabsContent>

        <TabsContent value="playlists">
          <div className="text-center py-12">
            <p className="text-muted-foreground">Commencez à taper pour rechercher des playlists...</p>
          </div>
        </TabsContent>
      </Tabs>
      </div>
    </AppLayout>
  );
};

export default Search;