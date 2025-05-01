// Property listing interface
export interface Listing {
  id: string;
  address: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  photo: string;
  description?: string;
  features?: string[];
  soldDate?: string; // Only for sold listings
}

// Testimonial interface
export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  photo?: string;
}

// Resource article interface
export interface Resource {
  id: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  createdAt?: string;
}

// Lead form data interface
export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  timestamp?: string;
}
