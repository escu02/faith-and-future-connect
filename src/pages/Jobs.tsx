import React, { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Briefcase, MapPin, Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Jobs = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const jobs = [
    {
      id: 1,
      title: "Project Coordinator",
      company: "Catholic Charities USA",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      location: "Washington, DC",
      type: "Full-time",
      categories: ["Full-time", "Non-profit", "Entry-level"],
      description:
        "We're looking for a Project Coordinator with excellent organizational skills. Experience in youth ministry leadership will be highly valued.",
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Marketing Specialist",
      company: "Ignatius Press",
      logo: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      location: "San Francisco, CA",
      type: "Full-time",
      categories: ["Full-time", "Non-profit", "Entry-level"],
      description:
        "Join our marketing team to promote Catholic literature worldwide. We appreciate candidates who have experience in parish communications or Catholic media.",
      posted: "5 days ago"
    },
    {
      id: 3,
      title: "Finance Intern",
      company: "Knights of Columbus Asset Advisors",
      logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      location: "New Haven, CT",
      type: "Internship",
      categories: ["Internship", "Non-profit", "Entry-level"],
      description:
        "Summer internship for finance students who want to learn about ethical investing according to Catholic principles.",
      posted: "1 week ago"
    },
    {
      id: 4,
      title: "Human Resources Manager",
      company: "Franciscan University",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      location: "Steubenville, OH",
      type: "Full-time",
      categories: ["Full-time", "Entry-level"],
      description:
        "We're seeking an HR professional who understands the mission of Catholic education and can help us build a culture of faith and excellence.",
      posted: "3 days ago"
    },
    {
      id: 5,
      title: "Technology Intern",
      company: "Deloitte",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      location: "Multiple Locations",
      type: "Internship",
      categories: ["Internship", "Entry-level"],
      description:
        "Join our technology consulting practice where faith and professional excellence meet. We value candidates with strong leadership experience in faith-based organizations.",
      posted: "1 day ago"
    },
    {
      id: 6,
      title: "Investment Banking Analyst",
      company: "Goldman Sachs",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      location: "New York, NY",
      type: "Full-time",
      categories: ["Full-time", "Entry-level"],
      description:
        "Looking for analysts who bring diverse perspectives and strong ethical foundations. Leadership experience in Catholic youth organizations is highly valued.",
      posted: "3 days ago"
    }
  ];

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const filteredJobs = selectedFilters.length > 0
    ? jobs.filter(job => selectedFilters.every(filter => job.categories.includes(filter)))
    : jobs;

  return (
    <MainLayout activeTab="jobs">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold md:text-2xl">
            {typeof window !== 'undefined' && window.innerWidth <= 768 ? 'Jobs' : 'Jobs & Opportunities'}
          </h2>
          <Button variant="outline" className="border-brand text-brand hover:bg-brand/10">
            Post a Job
          </Button>
        </div>

        <div className="bg-white rounded-lg border p-4 mb-4">
          <div className="flex flex-col md:flex-row gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search jobs, skills, companies..." 
                className="pl-10 text-sm md:text-base"
              />
            </div>
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Location" 
                className="pl-10 text-sm md:text-base"
              />
            </div>
            <Button className="bg-brand hover:bg-brand-600">
              Search
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {["Remote", "Full-time", "Internship", "Non-profit", "Entry-level"].map((filter) => (
              <Button
                key={filter}
                variant="outline"
                size="sm"
                className={`text-xs ${
                  selectedFilters.includes(filter)
                    ? "bg-brand/10 border-brand text-brand"
                    : ""
                }`}
                onClick={() => toggleFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover:border-brand/50 cursor-pointer transition-all">
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={job.logo} alt={job.company} />
                      <AvatarFallback>{job.company[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{job.title}</h3>
                      <p className="text-sm text-gray-500">{job.company}</p>
                    </div>
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
