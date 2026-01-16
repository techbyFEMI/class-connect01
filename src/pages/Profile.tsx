import { BottomNav } from "@/components/BottomNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Mail, User as UserIcon, BookOpen, Calendar } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-bg pb-20">
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Profile
          </h1>
          <p className="text-muted-foreground">Manage your profile information</p>
        </div>

        {/* Profile Picture Section */}
        <Card className="p-6 mb-6 bg-card/80 backdrop-blur-sm border border-border shadow-soft">
          <div className="flex flex-col items-center">
            <div className="relative group">
              <Avatar className="w-32 h-32 border-4 border-primary/20">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground text-4xl font-bold">
                  JS
                </AvatarFallback>
              </Avatar>
              <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform">
                <Camera className="w-5 h-5 text-accent-foreground" />
              </button>
            </div>
            <h2 className="text-2xl font-bold text-foreground mt-4">John Smith</h2>
            <p className="text-muted-foreground">Student</p>
          </div>
        </Card>

        {/* Profile Information */}
        <Card className="p-6 mb-6 bg-card/80 backdrop-blur-sm border border-border shadow-soft">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <UserIcon className="w-5 h-5 text-primary" />
            Basic Information
          </h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-foreground">
                Full Name
              </Label>
              <Input
                id="name"
                defaultValue="John Smith"
                className="mt-1 bg-background/50 border-border"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-foreground flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                defaultValue="john.smith@school.edu"
                className="mt-1 bg-background/50 border-border"
              />
            </div>
            <div>
              <Label htmlFor="student-id" className="text-foreground flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Student ID
              </Label>
              <Input
                id="student-id"
                defaultValue="2024-CS-001"
                className="mt-1 bg-background/50 border-border"
              />
            </div>
            <div>
              <Label htmlFor="join-date" className="text-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Join Date
              </Label>
              <Input
                id="join-date"
                defaultValue="January 2024"
                className="mt-1 bg-background/50 border-border"
                disabled
              />
            </div>
          </div>
        </Card>

        {/* Stats Card */}
        <Card className="p-6 mb-6 bg-gradient-primary text-primary-foreground shadow-medium">
          <h3 className="text-lg font-semibold mb-4">Activity Stats</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">24</div>
              <div className="text-sm opacity-90">Classes</div>
            </div>
            <div className="text-center border-x border-primary-foreground/20">
              <div className="text-3xl font-bold mb-1">18</div>
              <div className="text-sm opacity-90">Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">95%</div>
              <div className="text-sm opacity-90">Attendance</div>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button className="flex-1 bg-gradient-primary hover:opacity-90 transition-opacity">
            Save Changes
          </Button>
          <Button variant="outline" className="flex-1 border-border">
            Cancel
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
