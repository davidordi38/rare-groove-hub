import { Search as SearchIcon, Filter, Play, Heart, Plus, MoreHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppLayout } from "@/layouts/AppLayout";

const allTracks = [
  { title: "Bohemian Rhapsody", artist: "Queen", album: "A Night at the Opera", duration: "5:55" },
  { title: "Hotel California", artist: "Eagles", album: "Hotel California", duration: "6:30" },
  { title: "Stairway to Heaven", artist: "Led Zeppelin", album: "Led Zeppelin IV", duration: "8:02" },
  { title: "Sweet Child O' Mine", artist: "Guns N' Roses", album: "Appetite for Destruction", duration: "5:03" },
  { title: "Imagine", artist: "John Lennon", album: "Imagine", duration: "3:07" },
  { title: "Billie Jean", artist: "Michael Jackson", album: "Thriller", duration: "4:54" },
  { title: "Like a Rolling Stone", artist: "Bob Dylan", album: "Highway 61 Revisited", duration: "6:13" },
  { title: "Purple Haze", artist: "Jimi Hendrix", album: "Are You Experienced", duration: "2:50" }
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
            <h2 className="text-lg font-semibold">Toutes les musiques</h2>
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-0">
                <div className="space-y-1">
                  {allTracks.map((track, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 hover:bg-player-hover transition-colors group cursor-pointer"
                    >
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Play className="h-4 w-4" />
                      </Button>
                      <div className="w-12 h-12 bg-gradient-primary rounded-md"></div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">{track.title}</h4>
                        <p className="text-sm text-muted-foreground truncate">{track.artist}</p>
                      </div>
                      <div className="hidden md:block text-sm text-muted-foreground min-w-0 flex-1">
                        {track.album}
                      </div>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary"
                          title="Ajouter à une playlist"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary"
                          title="Ajouter aux favoris"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                        <span className="text-sm text-muted-foreground">{track.duration}</span>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tracks">
          <div className="space-y-4">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-0">
                <div className="space-y-1">
                  {allTracks.map((track, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 hover:bg-player-hover transition-colors group cursor-pointer"
                    >
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Play className="h-4 w-4" />
                      </Button>
                      <div className="w-12 h-12 bg-gradient-primary rounded-md"></div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">{track.title}</h4>
                        <p className="text-sm text-muted-foreground truncate">{track.artist}</p>
                      </div>
                      <div className="hidden md:block text-sm text-muted-foreground min-w-0 flex-1">
                        {track.album}
                      </div>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary"
                          title="Ajouter à une playlist"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary"
                          title="Ajouter aux favoris"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                        <span className="text-sm text-muted-foreground">{track.duration}</span>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
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