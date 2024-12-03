export interface IconProps {
  src: string;
  alt: string;
  className?: string;
}

export interface NavigationIconsProps {
  icons: Array<{
    src: string;
    alt: string;
  }>;
}

export interface VobForm {
  patientName: string;
  npiNumber: string;
  dateOfBirth: Date;
  requestDate: Date;
  resultStatus: string;
  coverageType: string;
  requestedBy: string;
  insuranceCarrier: string;
  pdfLink: string;
  audioLink: string;
}

export interface VobRecord {
  _id?: string;
  patientName?: string;
  npiNumber?: string;
  dateOfBirth?: string;
  requestDate?: string;
  resultStatus?: string;
  coverageType?: string;
  requestedBy?: string;
  insuranceCarrier?: string;
  pdfLink?: string;
  audioLink?: string;
  isFavorite?: boolean;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
}
