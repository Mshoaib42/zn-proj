import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Inbox,
  Star,
  Clock,
  Send,
  FileText,
  AlertCircle,
  Trash2,
  MoreVertical,
} from "lucide-react";
import { moveCategory } from "@/services/vobFormApi";
import { toast } from "sonner";
import { format } from "date-fns";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { VobRecord } from "@/types/types";

interface VobIcuDashboardProps {
  data: VobRecord[];
  setData: React.Dispatch<React.SetStateAction<VobRecord[]>>;
}

interface MoveCategoryResponse {
  status: number;
  data: {
    message: string;
  };
}

// Mapping categories to icons
const categoryIcons: Record<string, React.ElementType> = {
  Inbox: Inbox,
  Starred: Star,
  Snoozed: Clock,
  Sent: Send,
  Drafts: FileText,
  Spam: AlertCircle,
};

const VobIcuDashboard: React.FC<VobIcuDashboardProps> = ({ data, setData }) => {
  const handleCategory = async (id: string, status: string) => {
    try {
      const res = (await moveCategory(id, status)) as MoveCategoryResponse;
      if (res.status !== 200) {
        toast.error(`Not able to move to ${status}. Something went wrong!`);
        return;
      }
      toast.success(`Moved to ${status} successfully!`);
      setData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="overflow-x-auto w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Patient Name</TableHead>
            <TableHead>NPI</TableHead>
            <TableHead>Date of Birth</TableHead>
            <TableHead>Request Date</TableHead>
            <TableHead>PDF</TableHead>
            <TableHead>Audio</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data &&
            data?.map((item, index) => (
              <TableRow key={item._id}>
                <TableCell>{index + 1}</TableCell>

                <TableCell>{item?.patientName}</TableCell>
                <TableCell>{item?.npiNumber}</TableCell>
                <TableCell>
                  {item?.dateOfBirth
                    ? format(new Date(item?.dateOfBirth), "dd/MM/yyyy")
                    : ""}
                </TableCell>
                <TableCell>
                  {item?.requestDate
                    ? format(new Date(item?.requestDate), "dd/MM/yyyy")
                    : ""}
                </TableCell>

                <TableCell>
                  <a
                    href={item?.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    PDF
                  </a>
                </TableCell>
                <TableCell>
                  <a
                    href={item?.audioLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Audio
                  </a>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Button variant="ghost" size="icon">
                            <AlertCircle className="w-5 h-5" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">
                            Record Currently in {item?.status}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="w-5 h-5" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-40">
                        <div className="flex flex-col space-y-2">
                          {Object.keys(categoryIcons).map((category) => {
                            const Icon = categoryIcons[category];
                            return (
                              <button
                                key={category}
                                onClick={() =>
                                  handleCategory(
                                    item?._id ?? "",
                                    category?.toLowerCase()
                                  )
                                }
                                className="flex items-center space-x-2 text-left px-2 py-1 hover:bg-gray-100 rounded-md"
                              >
                                <Icon className="w-4 h-4" />
                                <span>{category}</span>
                              </button>
                            );
                          })}
                        </div>
                      </PopoverContent>
                    </Popover>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="w-5 h-5" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to move this record to trash?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            className="bg-red-500 text-white px-4 py-2 rounded"
                            onClick={() =>
                              handleCategory(item?._id ?? "", "trash")
                            }
                          >
                            Confirm
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default VobIcuDashboard;
