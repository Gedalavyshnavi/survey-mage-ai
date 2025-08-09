import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Eye, Plus, Share, TrendingUp, Users } from "lucide-react";

const Dashboard = () => {
  // Mock data for surveys
  const surveys = [
    {
      id: 1,
      title: "Customer Satisfaction Survey",
      description: "Quarterly feedback collection",
      responses: 234,
      status: "active",
      createdAt: "2024-01-15",
    },
    {
      id: 2,
      title: "Product Feature Feedback",
      description: "New feature validation",
      responses: 89,
      status: "draft",
      createdAt: "2024-01-12",
    },
    {
      id: 3,
      title: "Employee Engagement Survey",
      description: "Annual team feedback",
      responses: 156,
      status: "closed",
      createdAt: "2024-01-10",
    },
  ];

  const stats = [
    {
      title: "Total Surveys",
      value: "12",
      change: "+2 this month",
      icon: BarChart3,
    },
    {
      title: "Total Responses",
      value: "1,234",
      change: "+156 this week",
      icon: Users,
    },
    {
      title: "Active Surveys",
      value: "4",
      change: "2 ending soon",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Manage your surveys and analyze responses</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create New Survey
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Surveys */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Surveys</CardTitle>
          <CardDescription>Your latest survey projects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {surveys.map((survey) => (
              <div key={survey.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-foreground">{survey.title}</h3>
                    <Badge variant={survey.status === 'active' ? 'default' : survey.status === 'draft' ? 'secondary' : 'outline'}>
                      {survey.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{survey.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {survey.responses} responses
                    </span>
                    <span>Created {survey.createdAt}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <BarChart3 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;