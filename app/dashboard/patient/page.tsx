import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays, FileText, AlertCircle, Clock, MapPin } from "lucide-react"
import Link from "next/link"

const upcomingAppointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    date: "2024-01-15",
    time: "10:00 AM",
    location: "Main Hospital - Floor 3",
    status: "confirmed",
  },
]

const alerts = [
  {
    id: 1,
    type: "warning",
    message: "Insurance verification pending",
    action: "Upload additional documents",
  },
  {
    id: 2,
    type: "info",
    message: "Appointment reminder: Tomorrow at 10:00 AM",
    action: "View details",
  },
]

export default function PatientDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-blue-900">Patient Dashboard</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, John Doe</span>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CalendarDays className="mr-2 h-5 w-5 text-blue-900" />
                  Upcoming Appointments
                </CardTitle>
              </CardHeader>
              <CardContent>
                {upcomingAppointments.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingAppointments.map((appointment) => (
                      <div key={appointment.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{appointment.doctor}</h3>
                            <p className="text-gray-600">{appointment.specialty}</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                              <div className="flex items-center">
                                <CalendarDays className="h-4 w-4 mr-1" />
                                {appointment.date}
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {appointment.time}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {appointment.location}
                              </div>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-800">{appointment.status}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <CalendarDays className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-600">No upcoming appointments</p>
                    <Link href="/onboarding">
                      <Button className="mt-4 bg-blue-900 hover:bg-blue-800">Book New Appointment</Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Documents */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-blue-900" />
                  My Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium">ID Document</h3>
                    <p className="text-sm text-gray-600 mt-1">Uploaded on Jan 10, 2024</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">Verified</Badge>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium">Insurance Card</h3>
                    <p className="text-sm text-gray-600 mt-1">Uploaded on Jan 10, 2024</p>
                    <Badge className="mt-2 bg-yellow-100 text-yellow-800">Pending</Badge>
                  </div>
                </div>
                <Button variant="outline" className="mt-4 bg-transparent">
                  Upload New Document
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="mr-2 h-5 w-5 text-orange-500" />
                  Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {alerts.map((alert) => (
                    <div key={alert.id} className="border-l-4 border-orange-400 bg-orange-50 p-3">
                      <p className="text-sm font-medium">{alert.message}</p>
                      <Button variant="link" className="p-0 h-auto text-xs text-orange-600">
                        {alert.action}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/onboarding">
                  <Button className="w-full bg-blue-900 hover:bg-blue-800">Book New Appointment</Button>
                </Link>
                <Button variant="outline" className="w-full bg-transparent">
                  View Medical History
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Update Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
