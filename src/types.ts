export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  bullets?: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  services: ServiceItem[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  experienceYears: number;
  specialty: string;
  email: string;
  phone?: string;
  bioLines: string[];
  associations?: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  iconName: string;
  description: string;
}

export interface PartnerAssociation {
  name: string;
  group?: string;
}
