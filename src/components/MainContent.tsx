import { Play, Heart, MoreHorizontal, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";

const recentTracks = [
  { title: "Song Title 1", artist: "Artist Name", album: "Album", duration: "3:45" },
  { title: "Song Title 2", artist: "Artist Name", album: "Album", duration: "4:12" },
  { title: "Song Title 3", artist: "Artist Name", album: "Album", duration: "3:28" },
  { title: "Song Title 4", artist: "Artist Name", album: "Album", duration: "5:03" },
  { title: "Song Title 5", artist: "Artist Name", album: "Album", duration: "2:55" },
];

export const MainContent = () => {
  return (
    <ScrollArea className="flex-1 bg-gradient-background">
      <div className="p-8 space-y-8">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Bienvenue sur MyMusicHub
          </h1>
          <p className="text-lg text-muted-foreground">
            Découvrez, partagez et écoutez vos musiques préférées
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-4">
          <Button className="bg-gradient-primary hover:opacity-90">
            <Play className="mr-2 h-4 w-4" />
            Lecture aléatoire
          </Button>
        </div>

        {/* Add Music Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Ajouter des musiques</h2>
          <Card className="bg-gradient-card border-border shadow-card">
            <CardContent className="p-6">
              <div className="flex flex-col items-center justify-center space-y-4 py-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Upload className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-semibold">Uploadez vos fichiers audio</h3>
                  <p className="text-muted-foreground">Formats supportés: MP3, WAV, FLAC</p>
                </div>
                <div className="w-full max-w-md">
                  <Input
                    type="file"
                    accept=".mp3,.wav,.flac"
                    multiple
                    className="file:bg-gradient-primary file:text-primary-foreground file:border-0 file:rounded-md file:px-4 file:py-2 hover:file:opacity-90"
                  />
                </div>
                <Button className="bg-gradient-primary hover:opacity-90">
                  <Upload className="mr-2 h-4 w-4" />
                  Uploader les fichiers
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Recent Tracks */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Écoutés récemment</h2>
          <Card className="bg-gradient-card border-border shadow-card">
            <CardContent className="p-0">
              <div className="space-y-1">
                {recentTracks.map((track, index) => (
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
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
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
        </section>
      </div>
    </ScrollArea>
  );
};