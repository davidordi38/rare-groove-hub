import { ArrowLeft, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const TopBar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gradient-background border-b border-border">
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full hover:bg-player-hover">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full hover:bg-player-hover">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 max-w-md mx-8">
        <Input
          placeholder="Rechercher des titres, artistes ou playlists..."
          className="bg-player-surface border-border hover:border-primary/50 focus:border-primary"
        />
      </div>

      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          Inscription
        </Button>
        <Button size="sm" className="bg-gradient-primary hover:opacity-90">
          Connexion
        </Button>
        <Avatar className="h-8 w-8">
          <AvatarImage src="" />
          <AvatarFallback className="bg-player-surface">
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};