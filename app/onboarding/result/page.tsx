"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays, Clock, MapPin, Star } from "lucide-react"
import { useRouter } from "next/navigation"

const mockDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    rating: 4.9,
    experience: "15 years",
    location: "Main Hospital - Floor 3",
    avatar: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Cardiology",
    rating: 4.8,
    experience: "12 years",
    location: "Main Hospital - Floor 3",
    avatar: "/placeholder.svg?height=64&width=64",
  },
]

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"]

export default function OnboardingResult() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null)
  const router = useRouter()

  const handleBookAppointment = () => {
    if (selectedDate && selectedTime && selectedDoctor) {
      // In real app, book the appointment
      router.push("/dashboard/patient")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Classification Result */}
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CalendarDays className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-blue-900">AI Classification Complete</CardTitle>
            <CardDescription>Based on your symptoms, we recommend the following department</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Badge className="text-lg px-4 py-2 bg-green-600 hover:bg-green-700">Cardiology Department</Badge>
            <p className="mt-4 text-gray-600">
              Our AI has analyzed your symptoms and suggests consulting with a cardiologist. Below are available
              specialists in this department.
            </p>
          </CardContent>
        </Card>

        {/* Doctor Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-blue-900">Available Doctors</CardTitle>
            <CardDescription>Select a doctor to book your appointment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {mockDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedDoctor === doctor.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setSelectedDoctor(doctor.id)}
                >
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={doctor.avatar || "/placeholder.svg"} alt={doctor.name} />
                      <AvatarFallback>
                        {doctor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{doctor.name}</h3>
                      <p className="text-gray-600">{doctor.specialty}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          {doctor.rating}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {doctor.experience}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {doctor.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Appointment Booking */}
        {selectedDoctor && (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-900">Book Your Appointment</CardTitle>
              <CardDescription>Select your preferred date and time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-4">Select Date</h3>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                    disabled={(date) => date < new Date()}
                  />
                </div>
                <div>
                  <h3 className="font-medium mb-4">Available Time Slots</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        className={`${selectedTime === time ? "bg-blue-900 hover:bg-blue-800" : ""}`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button
                  onClick={handleBookAppointment}
                  disabled={!selectedDate || !selectedTime}
                  className="w-full bg-green-600 hover:bg-green-700"
                  size="lg"
                >
                  Confirm Appointment
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
