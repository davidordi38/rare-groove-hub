import { Music, Heart, Clock, Plus, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppLayout } from "@/layouts/AppLayout";

const userPlaylists = [
  { name: "Ma playlist favorite", tracks: 24, image: null },
  { name: "Découvertes récentes", tracks: 12, image: null },
  { name: "Rock Classique", tracks: 45, image: null },
  { name: "Musique du monde", tracks: 18, image: null },
  { name: "Chill Vibes", tracks: 36, image: null }
];

const recentlyPlayed = [
  { title: "Bohemian Rhapsody", artist: "Queen", duration: "5:55" },
  { title: "Hotel California", artist: "Eagles", duration: "6:30" },
  { title: "Stairway to Heaven", artist: "Led Zeppelin", duration: "8:02" },
  { title: "Sweet Child O' Mine", artist: "Guns N' Roses", duration: "5:03" }
];

const Library = () => {
  return (
    <AppLayout>
      <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Ma Bibliothèque</h1>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="hover:bg-player-hover">
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-player-hover">
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="playlists" className="space-y-4">
        <TabsList className="bg-player-surface">
          <TabsTrigger value="playlists">Playlists</TabsTrigger>
          <TabsTrigger value="artists">Artistes</TabsTrigger>
          <TabsTrigger value="albums">Albums</TabsTrigger>
          <TabsTrigger value="recent">Récents</TabsTrigger>
        </TabsList>

        <TabsContent value="playlists" className="space-y-6">
          <div className="flex items-center gap-4">
            <Card className="bg-gradient-primary border-0 hover:opacity-90 cursor-pointer transition-opacity">
              <CardContent className="p-6 flex items-center gap-3">
                <Heart className="h-6 w-6 text-white" />
                <div>
                  <h3 className="font-semibold text-white">Titres likés</h3>
                  <p className="text-sm text-white/80">Vos coups de cœur</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Créées par vous</h2>
              <Button className="bg-gradient-primary hover:opacity-90">
                <Plus className="h-4 w-4 mr-2" />
                Nouvelle playlist
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {userPlaylists.map((playlist, index) => (
                <Card key={index} className="bg-player-surface border-border hover:bg-player-hover cursor-pointer transition-colors group">
                  <CardContent className="p-4">
                    <div className="aspect-square bg-player-background rounded-md mb-3 flex items-center justify-center">
                      <Music className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="font-medium group-hover:text-primary transition-colors">{playlist.name}</h3>
                    <p className="text-sm text-muted-foreground">{playlist.tracks} titres</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="artists">
          <div className="text-center py-12">
            <Music className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Aucun artiste dans votre bibliothèque</p>
            <p className="text-sm text-muted-foreground mt-2">Ajoutez de la musique pour voir vos artistes ici</p>
          </div>
        </TabsContent>

        <TabsContent value="albums">
          <div className="text-center py-12">
            <Music className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Aucun album dans votre bibliothèque</p>
            <p className="text-sm text-muted-foreground mt-2">Ajoutez de la musique pour voir vos albums ici</p>
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          <h2 className="text-lg font-semibold">Écoutés récemment</h2>
          <div className="space-y-2">
            {recentlyPlayed.map((track, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-md hover:bg-player-hover cursor-pointer">
                <div className="w-10 h-10 bg-player-background rounded flex items-center justify-center">
                  <Music className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{track.title}</p>
                  <p className="text-sm text-muted-foreground">{track.artist}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{track.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      </div>
    </AppLayout>
  );
};

export default Library;