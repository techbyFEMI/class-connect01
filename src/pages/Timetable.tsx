import { BottomNav } from "@/components/BottomNav";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";

const Timetable = () => {
  const schedule = [
    {
      day: "Monday",
      classes: [
        { subject: "Mathematics", time: "9:00 AM - 10:30 AM", room: "Room 101", color: "bg-primary" },
        { subject: "Physics", time: "11:00 AM - 12:30 PM", room: "Lab A", color: "bg-accent" },
      ],
    },
    {
      day: "Tuesday",
      classes: [
        { subject: "Chemistry", time: "9:00 AM - 10:30 AM", room: "Lab B", color: "bg-primary" },
        { subject: "English", time: "2:00 PM - 3:30 PM", room: "Room 205", color: "bg-accent" },
      ],
    },
    {
      day: "Wednesday",
      classes: [
        { subject: "Computer Science", time: "10:00 AM - 11:30 AM", room: "Computer Lab", color: "bg-primary" },
        { subject: "History", time: "1:00 PM - 2:30 PM", room: "Room 302", color: "bg-accent" },
      ],
    },
    {
      day: "Thursday",
      classes: [
        { subject: "Biology", time: "9:00 AM - 10:30 AM", room: "Lab C", color: "bg-primary" },
        { subject: "Mathematics", time: "11:00 AM - 12:30 PM", room: "Room 101", color: "bg-accent" },
      ],
    },
    {
      day: "Friday",
      classes: [
        { subject: "Physical Education", time: "9:00 AM - 10:30 AM", room: "Gym", color: "bg-primary" },
        { subject: "Art", time: "2:00 PM - 3:30 PM", room: "Art Room", color: "bg-accent" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-bg pb-20">
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Class Timetable
          </h1>
          <p className="text-muted-foreground">Your weekly class schedule</p>
        </div>

        {/* Timetable */}
        <div className="space-y-4">
          {schedule.map((day) => (
            <Card key={day.day} className="p-5 bg-card/80 backdrop-blur-sm border border-border shadow-soft">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-primary rounded-full" />
                {day.day}
              </h3>
              <div className="space-y-3">
                {day.classes.map((classItem, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-lg ${classItem.color} flex items-center justify-center text-white font-bold shrink-0`}>
                      {classItem.subject.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{classItem.subject}</h4>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {classItem.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {classItem.room}
                        </span>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Active
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Timetable;
