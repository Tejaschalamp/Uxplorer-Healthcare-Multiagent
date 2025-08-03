"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarDays, FileText, User } from "lucide-react"

const appointments = [
  {
    id: 1,
    patient: "John Doe",
    time: "10:00 AM",
    date: "2024-01-15",
    symptoms: "Chest pain and shortness of breath",
    status: "checked-in",
    documents: ["ID Card", "Insurance Card"],
  },
  {
    id: 2,
    patient: "Jane Smith",
    time: "11:00 AM",
    date: "2024-01-15",
    symptoms: "Headaches and dizziness",
    status: "in-progress",
    documents: ["ID Card"],
  },
  {
    id: 3,
    patient: "Mike Johnson",
    time: "2:00 PM",
    date: "2024-01-15",
    symptoms: "Knee pain after injury",
    status: "scheduled",
    documents: ["ID Card", "Insurance Card"],
  },
]

export default function DoctorDashboard() {
  const handleStatusChange = (appointmentId: number, newStatus: string) => {
    // In real app, update appointment status
    console.log(`Updating appointment ${appointmentId} to ${newStatus}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-blue-900">Doctor Dashboard</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Dr. Sarah Johnson</span>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Today's Schedule</h2>
          <p className="text-gray-600">Manage your patient appointments and consultations</p>
        </div>

        {/* Appointments */}
        <div className="space-y-6">
          {appointments.map((appointment) => (
            <Card key={appointment.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center">
                      <User className="mr-2 h-5 w-5 text-blue-900" />
                      {appointment.patient}
                    </CardTitle>
                    <CardDescription className="flex items-center mt-2">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      {appointment.date} at {appointment.time}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge
                      className={
                        appointment.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : appointment.status === "in-progress"
                            ? "bg-blue-100 text-blue-800"
                            : appointment.status === "checked-in"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-gray-100 text-gray-800"
                      }
                    >
                      {appointment.status.replace("-", " ")}
                    </Badge>
                    <Select
                      value={appointment.status}
                      onValueChange={(value) => handleStatusChange(appointment.id, value)}
                    >
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="scheduled">Scheduled</SelectItem>
                        <SelectItem value="checked-in">Checked In</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Patient Symptoms</h4>
                    <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">{appointment.symptoms}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Uploaded Documents</h4>
                    <div className="space-y-2">
                      {appointment.documents.map((doc, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                          <div className="flex items-center">
                            <FileText className="h-4 w-4 mr-2 text-gray-500" />
                            <span className="text-sm">{doc}</span>
                          </div>
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">8</div>
              <p className="text-gray-600">Today's Appointments</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">5</div>
              <p className="text-gray-600">Completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
              <p className="text-gray-600">Remaining</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
