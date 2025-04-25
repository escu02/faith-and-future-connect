
import React from "react";
import MainLayout from "../components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, Heart, Share, BookmarkIcon } from "lucide-react";

const Feed = () => {
  // Sample feed data
  const feedPosts = [
    {
      id: 1,
      author: {
        name: "Cardinal Robert Sarah",
        role: "Prefect Emeritus of the Congregation for Divine Worship",
        avatar: "/placeholder.svg"
      },
      content:
        "True leadership comes from service. In the corporate world as in the Church, we are called to lead by example, to put others before ourselves. 'The greatest among you will be your servant.' (Matthew 23:11)",
      time: "2 hours ago",
      likes: 245,
      comments: 32,
      shares: 18
    },
    {
      id: 2,
      author: {
        name: "Maria Rodriguez",
        role: "Project Manager at Catholic Relief Services",
        avatar: "/placeholder.svg"
      },
      content:
        "Just completed a successful mission project in Honduras! Looking for young professionals with experience in community organizing and a heart for service. The skills you've developed in parish youth groups are exactly what we need. #CatholicProfessionals #MissionWork",
      time: "5 hours ago",
      likes: 189,
      comments: 24,
      shares: 37
    },
    {
      id: 3,
      author: {
        name: "Fr. Thomas Roberts",
        role: "Business Ethics Professor at Georgetown University",
        avatar: "/placeholder.svg"
      },
      content:
        "Catholic social teaching provides an excellent framework for ethical business practices. Our next webinar will focus on how to integrate principles of human dignity and the common good into corporate strategy. Sign up in the link below!",
      time: "Yesterday",
      likes: 312,
      comments: 47,
      shares: 64
    }
  ];

  return (
    <MainLayout activeTab="feed">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Your Feed</h2>
          <Button variant="outline" className="border-brand text-brand hover:bg-brand/10">
            Create Post
          </Button>
        </div>
        
        <Card className="mb-4">
          <CardContent className="pt-4">
            <div className="flex gap-3">
              <Avatar className="h-10 w-10">
                <div className="h-full w-full rounded-full bg-brand/20 flex items-center justify-center">
                  <span className="font-medium text-brand">Y</span>
                </div>
              </Avatar>
              <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-gray-500 cursor-pointer hover:bg-gray-200 transition-colors">
                Share your thoughts or experiences...
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feed posts */}
        {feedPosts.map((post) => (
          <Card key={post.id} className="mb-4">
            <CardHeader className="pb-2">
              <div className="flex gap-3">
                <Avatar>
                  <div className="h-full w-full rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="font-medium">{post.author.name.charAt(0)}</span>
                  </div>
                </Avatar>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-xs text-gray-500">{post.author.role}</p>
                  <p className="text-xs text-gray-400 mt-1">{post.time}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{post.content}</p>
            </CardContent>
            <CardFooter className="flex justify-between pt-0">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-brand">
                  <Heart size={16} />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-brand">
                  <MessageSquare size={16} />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-brand">
                  <Share size={16} />
                  <span>{post.shares}</span>
                </button>
              </div>
              <button className="text-gray-500 hover:text-brand">
                <BookmarkIcon size={16} />
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </MainLayout>
  );
};

export default Feed;
