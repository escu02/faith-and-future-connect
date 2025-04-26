
import React from "react";
import MainLayout from "../components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Briefcase, MapPin, Book, Cog, MessageSquare, LinkIcon, User } from "lucide-react";

const Profile = () => {
  return <MainLayout activeTab="profile">
      <div className="space-y-6">
        {/* Profile header */}
        <Card>
          <CardContent className="p-0">
            <div className="bg-brand/10 h-32 relative"></div>
            <div className="px-6 pb-6">
              <div className="relative flex justify-between">
                <Avatar className="h-24 w-24 border-4 border-white absolute -top-12">
                  <div className="h-full w-full rounded-full bg-brand flex items-center justify-center">
                    <span className="text-white font-bold text-xl">JD</span>
                  </div>
                </Avatar>
                <div className="ml-28 pt-4 flex-1">
                  <h2 className="text-2xl font-bold">John Doe</h2>
                  <p className="text-gray-600">Business Development Associate | St. Thomas Parish Youth Leader</p>
                </div>
                <div className="pt-4 py-[8px]">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="border-brand text-brand hover:bg-brand/10"
                  >
                    <Cog size={16} />
                  </Button>
                </div>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge className="bg-brand/20 text-brand hover:bg-brand/30 border-0">Catholic Business Professional</Badge>
                <Badge className="bg-brand/20 text-brand hover:bg-brand/30 border-0">Youth Ministry</Badge>
                <Badge className="bg-brand/20 text-brand hover:bg-brand/30 border-0">Marketing</Badge>
              </div>
              
              <div className="mt-4 flex flex-col md:flex-row md:gap-8">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Briefcase size={16} />
                  <span>TechCorp Inc.</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={16} />
                  <span>Boston, MA</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Book size={16} />
                  <span>Franciscan University</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs for different profile sections */}
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="formation">Formation</TabsTrigger>
            <TabsTrigger value="connections">Connections</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Business development professional with 3 years of experience and a strong background in Catholic youth ministry and leadership. I bring a unique perspective to the business world, combining professional expertise with values-driven approach learned through my involvement in parish activities and mission trips.
                </p>
                <div className="mt-6">
                  <h3 className="font-medium mb-2">Contact Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <MessageSquare size={16} className="text-gray-400" />
                      <span>johndoe@email.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <LinkIcon size={16} className="text-gray-400" />
                      <span>linkedin.com/in/johndoe</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Business Development</Badge>
                  <Badge variant="outline">Marketing Strategy</Badge>
                  <Badge variant="outline">Event Planning</Badge>
                  <Badge variant="outline">Leadership</Badge>
                  <Badge variant="outline">Public Speaking</Badge>
                  <Badge variant="outline">Community Building</Badge>
                  <Badge variant="outline">Youth Mentoring</Badge>
                  <Badge variant="outline">Project Management</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Professional Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">Business Development Associate</h3>
                      <p className="text-sm text-gray-500">TechCorp Inc.</p>
                    </div>
                    <span className="text-sm text-gray-500">2022 - Present</span>
                  </div>
                  <p className="mt-2 text-sm">Developing business strategies and partnerships for technology products, with a focus on ethical business practices and community impact.</p>
                </div>
                
                <Separator />
                
                <div>
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">Marketing Intern</h3>
                      <p className="text-sm text-gray-500">Global Solutions LLC</p>
                    </div>
                    <span className="text-sm text-gray-500">2021 - 2022</span>
                  </div>
                  <p className="mt-2 text-sm">Assisted with marketing campaigns and social media strategy for a growing startup.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="formation" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Catholic Formation & Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">Youth Ministry Team Leader</h3>
                      <p className="text-sm text-gray-500">St. Thomas Parish</p>
                    </div>
                    <span className="text-sm text-gray-500">2019 - Present</span>
                  </div>
                  <p className="mt-2 text-sm">Coordinate and lead weekly youth group activities, annual retreats, and community service projects for 30+ high school students.</p>
                </div>
                
                <Separator />
                
                <div>
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">Mission Trip Coordinator</h3>
                      <p className="text-sm text-gray-500">Catholic Mission Services</p>
                    </div>
                    <span className="text-sm text-gray-500">2020 - 2021</span>
                  </div>
                  <p className="mt-2 text-sm">Organized and led a team of 15 young adults on a service mission to Guatemala, including fundraising, logistics, and project planning.</p>
                </div>
                
                <Separator />
                
                <div>
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">Theology of the Body Study Group</h3>
                      <p className="text-sm text-gray-500">Catholic Young Professionals</p>
                    </div>
                    <span className="text-sm text-gray-500">2021 - Present</span>
                  </div>
                  <p className="mt-2 text-sm">Participate in monthly discussions applying Catholic teaching to modern professional life and ethics.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">B.A. in Business Administration</h3>
                      <p className="text-sm text-gray-500">Franciscan University of Steubenville</p>
                    </div>
                    <span className="text-sm text-gray-500">2018 - 2022</span>
                  </div>
                  <p className="mt-2 text-sm">Minor in Theology, Graduated with Honors</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="connections" className="min-h-[200px]">
            <Card>
              <CardHeader>
                <CardTitle>Your Network</CardTitle>
                <CardDescription>Connect with other Catholic professionals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                    <p className="text-gray-600">
                      Expand your network by connecting with other Catholic professionals and mentors.
                    </p>
                    <Button className="bg-brand hover:bg-brand-600">
                      Find Connections
                    </Button>
                  </div>
                  
                  <div className="p-8 border rounded-lg bg-gray-50 text-center">
                    <User size={40} className="mx-auto text-gray-400 mb-4" />
                    <h3 className="text-xl font-medium mb-2">Build Your Network</h3>
                    <p className="text-gray-500 mb-4">
                      Your connections will appear here. Start by adding people you know or discover new connections.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>;
};
export default Profile;
