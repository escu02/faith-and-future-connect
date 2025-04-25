
import React from "react";
import MainLayout from "../components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Briefcase, MapPin, Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Jobs = () => {
  // Sample job listings
  const jobs = [
    {
      id: 1,
      title: "Project Coordinator",
      company: "Catholic Charities USA",
      location: "Washington, DC",
      type: "Full-time",
      description:
        "We're looking for a Project Coordinator with excellent organizational skills. Experience in youth ministry leadership will be highly valued.",
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Marketing Specialist",
      company: "Ignatius Press",
      location: "San Francisco, CA",
      type: "Full-time",
      description:
        "Join our marketing team to promote Catholic literature worldwide. We appreciate candidates who have experience in parish communications or Catholic media.",
      posted: "5 days ago"
    },
    {
      id: 3,
      title: "Finance Intern",
      company: "Knights of Columbus Asset Advisors",
      location: "New Haven, CT",
      type: "Internship",
      description:
        "Summer internship for finance students who want to learn about ethical investing according to Catholic principles.",
      posted: "1 week ago"
    },
    {
      id: 4,
      title: "Human Resources Manager",
      company: "Franciscan University",
      location: "Steubenville, OH",
      type: "Full-time",
      description:
        "We're seeking an HR professional who understands the mission of Catholic education and can help us build a culture of faith and excellence.",
      posted: "3 days ago"
    }
  ];

  return (
    <MainLayout activeTab="jobs">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Jobs & Opportunities</h2>
          <Button variant="outline" className="border-brand text-brand hover:bg-brand/10">
            Post a Job
          </Button>
        </div>

        <div className="bg-white rounded-lg border p-4 mb-4">
          <div className="flex gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search jobs, skills, companies..." 
                className="pl-10"
              />
            </div>
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Location" 
                className="pl-10"
              />
            </div>
            <Button className="bg-brand hover:bg-brand-600">
              Search
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="text-xs">
              Remote
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              Full-time
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              Internship
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              Non-profit
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              Entry-level
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:border-brand/50 cursor-pointer transition-all">
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-sm text-gray-500">{job.company}</p>
                  </div>
                  <span className="text-xs text-gray-400">{job.posted}</span>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center gap-2 mb-2 text-sm text-gray-500">
                  <MapPin size={14} />
                  <span>{job.location}</span>
                  <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">{job.type}</span>
                </div>
                <p className="text-sm">{job.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-brand hover:text-brand-600 hover:bg-brand/10 p-0 h-auto">
                  View details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Jobs;
