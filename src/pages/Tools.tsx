import React from "react";
import MainLayout from "../components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, Video, Users, Calendar } from "lucide-react";
const Tools = () => {
  // Sample courses data
  const courses = [{
    id: 1,
    title: "Faith-Integrated Resume Building",
    category: "Career",
    description: "Learn how to effectively translate your parish leadership, mission trips, and spiritual formation into valuable professional skills on your resume.",
    instructor: "Michael Chen, HR Director & Catholic Speaker",
    duration: "3 hours",
    level: "Beginner"
  }, {
    id: 2,
    title: "Catholic Principles in Business Ethics",
    category: "Formation",
    description: "Explore how Catholic social teaching provides a framework for ethical business decisions and leadership practices.",
    instructor: "Dr. Maria Gonzalez, Professor of Business Ethics",
    duration: "8 hours",
    level: "Intermediate"
  }, {
    id: 3,
    title: "Interview Skills for Catholic Professionals",
    category: "Career",
    description: "Practical techniques for communicating your values and experience effectively during job interviews.",
    instructor: "James Wilson, Career Coach",
    duration: "4 hours",
    level: "Beginner"
  }];

  // Sample mentoring sessions
  const mentoringSessions = [{
    id: 1,
    title: "Balancing Faith and Corporate Culture",
    mentor: "Elizabeth Davis, CFO & Catholic Women's Group Leader",
    date: "May 10, 2025",
    time: "7:00 PM EST",
    spots: 15
  }, {
    id: 2,
    title: "Catholic Leadership in Tech Industries",
    mentor: "Thomas Rodriguez, Senior Engineering Director",
    date: "May 15, 2025",
    time: "6:30 PM EST",
    spots: 10
  }, {
    id: 3,
    title: "From Youth Ministry to Management Skills",
    mentor: "Fr. Robert Johnson, Former Business Executive",
    date: "May 20, 2025",
    time: "8:00 PM EST",
    spots: 20
  }];
  return <MainLayout activeTab="tools">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Professional & Spiritual Development</h2>
          <p className="text-gray-600">Tools and resources to help you grow in your faith and career</p>
        </div>

        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="courses" className="flex items-center gap-2">
              <Book size={16} />
              <span>Courses</span>
            </TabsTrigger>
            <TabsTrigger value="mentoring" className="flex items-center gap-2">
              <Users size={16} />
              <span>Mentoring</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar size={16} />
              <span>Events</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-4">
            {courses.map(course => <Card key={course.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-brand/10 flex items-center justify-center w-full h-32 md:w-48 md:h-auto">
                    <Book size={40} className="text-brand" />
                  </div>
                  <div className="flex-1">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="my-[3px] py-0 font-normal px-0 text-2xl">{course.title}</CardTitle>
                          <CardDescription className="text-brand">
                            {course.instructor}
                          </CardDescription>
                        </div>
                        <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300">
                          {course.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm">{course.description}</p>
                      <div className="flex gap-4 mt-3">
                        <span className="text-xs text-gray-500">Duration: {course.duration}</span>
                        <span className="text-xs text-gray-500">Level: {course.level}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-brand hover:bg-brand-600">Start Learning</Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>)}
          </TabsContent>

          <TabsContent value="mentoring" className="space-y-4">
            {mentoringSessions.map(session => <Card key={session.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{session.title}</CardTitle>
                  <CardDescription>{session.mentor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-gray-500" />
                      <span className="text-sm">{session.date} at {session.time}</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200 w-fit">
                      {session.spots} spots available
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Details</Button>
                  <Button className="bg-brand hover:bg-brand-600">Register</Button>
                </CardFooter>
              </Card>)}
          </TabsContent>

          <TabsContent value="events" className="min-h-[200px] flex flex-col items-center justify-center">
            <div className="text-center p-8">
              <Calendar size={40} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-medium mb-2">Events Coming Soon</h3>
              <p className="text-gray-500 mb-4">
                We're planning networking events, retreats, and workshops for Catholic professionals.
              </p>
              <Button variant="outline" className="border-brand text-brand hover:bg-brand/10">
                Get Notified
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>;
};
export default Tools;