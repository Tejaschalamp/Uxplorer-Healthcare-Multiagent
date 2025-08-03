import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, Download, Filter } from "lucide-react"
import AdminSidebar from "@/components/admin-sidebar"

const patients = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    department: "Cardiology",
    registrationDate: "2024-01-10",
    status: "Active",
    riskLevel: "Medium",
    documentsUploaded: 2,
    totalDocuments: 2,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 (555) 987-6543",
    department: "Neurology",
    registrationDate: "2024-01-09",
    status: "Pending",
    riskLevel: "Low",
    documentsUploaded: 1,
    totalDocuments: 2,
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    phone: "+1 (555) 456-7890",
    department: "Orthopedics",
    registrationDate: "2024-01-08",
    status: "Active",
    riskLevel: "High",
    documentsUploaded: 2,
    totalDocuments: 2,
  },
]

export default function PatientsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900">Patient Management</h1>
          <p className="text-gray-600 mt-2">Manage patient records and documentation</p>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="mr-2 h-5 w-5" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input placeholder="Search patients..." />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="neurology">Neurology</SelectItem>
                  <SelectItem value="orthopedics">Orthopedics</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Risk Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Patients Table */}
        <Card>
          <CardHeader>
            <CardTitle>Patient Records</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Patient</th>
                    <th className="text-left p-4">Department</th>
                    <th className="text-left p-4">Registration</th>
                    <th className="text-left p-4">Status</th>
                    <th className="text-left p-4">Risk Level</th>
                    <th className="text-left p-4">Documents</th>
                    <th className="text-left p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient) => (
                    <tr key={patient.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <div>
                          <p className="font-medium">{patient.name}</p>
                          <p className="text-sm text-gray-600">{patient.email}</p>
                          <p className="text-sm text-gray-600">{patient.phone}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge variant="outline">{patient.department}</Badge>
                      </td>
                      <td className="p-4 text-sm text-gray-600">{patient.registrationDate}</td>
                      <td className="p-4">
                        <Badge
                          className={
                            patient.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : patient.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                          }
                        >
                          {patient.status}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <Badge
                          className={
                            patient.riskLevel === "High"
                              ? "bg-red-100 text-red-800"
                              : patient.riskLevel === "Medium"
                                ? "bg-orange-100 text-orange-800"
                                : "bg-green-100 text-green-800"
                          }
                        >
                          {patient.riskLevel}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="text-sm">
                          {patient.documentsUploaded}/{patient.totalDocuments} uploaded
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${(patient.documentsUploaded / patient.totalDocuments) * 100}%` }}
                          ></div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
