import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const Timeline = () => {
  // Mock messages data
  const messages = [
    {
      id: 1,
      text: "Welcome to the class! Please check the timetable for upcoming sessions.",
      timestamp: "2 hours ago",
      sender: "Admin",
    },
    {
      id: 2,
      text: "New resources have been added to the Resources section. Make sure to review them before the next class.",
      timestamp: "5 hours ago",
      sender: "Admin",
    },
    {
      id: 3,
      text: "Reminder: Assignment deadline is this Friday at 11:59 PM.",
      timestamp: "1 day ago",
      sender: "Admin",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-bg pb-20">
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Class Timeline
          </h1>
          <p className="text-muted-foreground">Stay updated with class announcements</p>
        </div>

        {/* Admin Post Section */}
        <Card className="p-4 mb-6 bg-card/80 backdrop-blur-sm border-2 border-primary/20 shadow-soft">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
              A
            </div>
            <span className="font-semibold text-foreground">Post as Admin</span>
          </div>
          <Textarea
            placeholder="Share an announcement with the class..."
            className="min-h-[100px] mb-3 border-border bg-background/50"
          />
          <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
            <Send className="w-4 h-4 mr-2" />
            Post Message
          </Button>
        </Card>

        {/* Messages Feed */}
        <div className="space-y-4">
          {messages.map((message) => (
            <Card
              key={message.id}
              className="p-5 bg-card/80 backdrop-blur-sm border border-border shadow-soft hover:shadow-medium transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold shrink-0">
                  {message.sender.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-foreground">{message.sender}</span>
                    <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                  </div>
                  <p className="text-foreground leading-relaxed">{message.text}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Timeline;
