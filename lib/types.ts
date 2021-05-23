import { ResponsiveImageType, StructuredTextDocument } from "react-datocms";

export interface ContactDetails {
  id: string,
  label: string,
  method: string,
  href: string,
  icon: SVG
}

export interface Experience {
  companies: Array<Company>;
}

export interface Company {
  id: string;
  companyName: string;
  companyURL?: string;
  summary?: StructuredTextDocument;
  address?: string;
  roles?: Array<Role>;
  skills?: Array<Skill>;
  customIcon?: SVG
}
  
export interface Role {
  id: string;
  jobTitle: string;
  startDate: Date;
  endDate: Date | null;
  summary?: StructuredTextDocument;
}

export interface Skill {
  id: string;
  name: string;
  showcase: boolean;
  icon: SVG
}

export interface SVG extends ResponsiveImageType {
  url: string
}