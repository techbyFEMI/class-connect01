import { BottomNav } from "@/components/BottomNav";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Link as LinkIcon, Video, Image as ImageIcon, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const resources = [
    {
      id: 1,
      title: "Mathematics Formula Sheet",
      type: "PDF",
      icon: FileText,
      color: "text-primary",
      bgColor: "bg-primary/10",
      date: "2 days ago",
      size: "2.4 MB",
    },
    {
      id: 2,
      title: "Physics Lecture Recording",
      type: "Video",
      icon: Video,
      color: "text-accent",
      bgColor: "bg-accent/10",
      date: "3 days ago",
      size: "45 MB",
    },
    {
      id: 3,
      title: "Chemistry Lab Guidelines",
      type: "Link",
      icon: LinkIcon,
      color: "text-primary",
      bgColor: "bg-primary/10",
      date: "5 days ago",
      size: "-",
    },
    {
      id: 4,
      title: "Biology Diagram Collection",
      type: "Images",
      icon: ImageIcon,
      color: "text-accent",
      bgColor: "bg-accent/10",
      date: "1 week ago",
      size: "8.3 MB",
    },
    {
      id: 5,
      title: "History Timeline PDF",
      type: "PDF",
      icon: FileText,
      color: "text-primary",
      bgColor: "bg-primary/10",
      date: "1 week ago",
      size: "1.8 MB",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-bg pb-20">
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Class Resources
          </h1>
          <p className="text-muted-foreground">Access shared materials and files</p>
        </div>

        {/* Resources Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {resources.map((resource) => (
            <Card
              key={resource.id}
              className="p-5 bg-card/80 backdrop-blur-sm border border-border shadow-soft hover:shadow-medium transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${resource.bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <resource.icon className={`w-6 h-6 ${resource.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground mb-1 truncate">{resource.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {resource.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{resource.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{resource.size}</span>
                    <Button size="sm" variant="ghost" className="gap-2 hover:bg-primary/10 hover:text-primary">
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Upload Section (Admin Only) */}
        <Card className="mt-6 p-6 bg-card/80 backdrop-blur-sm border-2 border-dashed border-primary/30 shadow-soft">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
              <FileText className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Add New Resource</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Upload PDFs, videos, images, or share links
            </p>
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Upload Resource
            </Button>
          </div>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
};

export default Resources;
