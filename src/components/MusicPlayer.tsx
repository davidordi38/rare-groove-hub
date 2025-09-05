import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [volume, setVolume] = useState([75]);
  const [progress, setProgress] = useState([30]);

  return (
    <div className="bg-player-background border-t border-border p-4 shadow-player">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Current track info */}
        <div className="flex items-center gap-4 min-w-0 w-1/4">
          <div className="w-14 h-14 bg-gradient-card rounded-lg flex items-center justify-center shadow-card">
            <div className="w-10 h-10 bg-primary/20 rounded-md"></div>
          </div>
          <div className="min-w-0">
            <h4 className="font-medium text-foreground truncate">Titre en cours</h4>
            <p className="text-sm text-muted-foreground truncate">Artiste</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-player-hover"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-primary text-primary' : ''}`} />
          </Button>
        </div>

        {/* Player controls */}
        <div className="flex flex-col items-center gap-2 w-1/2 max-w-md">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-player-hover">
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-player-hover">
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              className="h-10 w-10 rounded-full bg-primary hover:scale-105 transition-transform"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-player-hover">
              <SkipForward className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-player-hover">
              <Repeat className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 w-full">
            <span className="text-xs text-muted-foreground">1:23</span>
            <Slider
              value={progress}
              onValueChange={setProgress}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="text-xs text-muted-foreground">4:15</span>
          </div>
        </div>

        {/* Volume control */}
        <div className="flex items-center gap-2 w-1/4 justify-end">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-player-hover">
            <Volume2 className="h-4 w-4" />
          </Button>
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
};