import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, AlertTriangle, Activity } from "lucide-react"
import AdminSidebar from "@/components/admin-sidebar"

const stats = [
  {
    title: "New Patients Today",
    value: "24",
    change: "+12%",
    icon: Users,
    color: "text-blue-600",
  },
  {
    title: "Total Bookings",
    value: "156",
    change: "+8%",
    icon: Calendar,
    color: "text-green-600",
  },
  {
    title: "Risk Alerts",
    value: "3",
    change: "-2",
    icon: AlertTriangle,
    color: "text-red-600",
  },
  {
    title: "Active Sessions",
    value: "89",
    change: "+5%",
    icon: Activity,
    color: "text-purple-600",
  },
]

const departmentStats = [
  { name: "Cardiology", visits: 45, percentage: 28 },
  { name: "Neurology", visits: 32, percentage: 20 },
  { name: "Orthopedics", visits: 28, percentage: 18 },
  { name: "Pediatrics", visits: 25, percentage: 16 },
  { name: "Others", visits: 26, percentage: 18 },
]

const recentPatients = [
  {
    id: 1,
    name: "John Doe",
    department: "Cardiology",
    status: "pending",
    riskLevel: "medium",
    time: "2 hours ago",
  },
  {
    id: 2,
    name: "Jane Smith",
    department: "Neurology",
    status: "completed",
    riskLevel: "low",
    time: "4 hours ago",
  },
  {
    id: 3,
    name: "Mike Johnson",
    department: "Orthopedics",
    status: "in-progress",
    riskLevel: "high",
    time: "6 hours ago",
  },
]

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600">{stat.change} from yesterday</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Department Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Department Visit Statistics</CardTitle>
              <CardDescription>Patient distribution across departments today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departmentStats.map((dept, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <span className="font-medium">{dept.name}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-600">{dept.visits} visits</span>
                      <span className="text-sm font-medium">{dept.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Patients */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Patient Onboarding</CardTitle>
              <CardDescription>Latest patient registrations and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPatients.map((patient) => (
                  <div key={patient.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{patient.name}</p>
                      <p className="text-sm text-gray-600">{patient.department}</p>
                      <p className="text-xs text-gray-500">{patient.time}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <Badge
                        className={
                          patient.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : patient.status === "in-progress"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                        }
                      >
                        {patient.status}
                      </Badge>
                      <Badge
                        className={
                          patient.riskLevel === "high"
                            ? "bg-red-100 text-red-800"
                            : patient.riskLevel === "medium"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-green-100 text-green-800"
                        }
                      >
                        {patient.riskLevel} risk
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
