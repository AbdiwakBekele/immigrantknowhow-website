import type { PublicServiceType } from './service-types'

/** Used when the hub API is unreachable or not deployed yet (keeps selects usable in production). */
export const FALLBACK_PUBLIC_SERVICE_TYPES: PublicServiceType[] = [
  { value: 'immigration_attorney', label: 'Immigration Attorney', icon: 'scale', description: '', image_url: '' },
  { value: 'tax_accountant', label: 'Tax Accountant', icon: 'calculator', description: '', image_url: '' },
  { value: 'tutor', label: 'Tutor / ESL Teacher', icon: 'academic-cap', description: '', image_url: '' },
  { value: 'translator', label: 'Translator / Interpreter', icon: 'language', description: '', image_url: '' },
  { value: 'notary', label: 'Notary Public', icon: 'document-check', description: '', image_url: '' },
  { value: 'real_estate_agent', label: 'Real Estate Agent', icon: 'home', description: '', image_url: '' },
  { value: 'insurance_agent', label: 'Insurance Agent', icon: 'shield-check', description: '', image_url: '' },
  { value: 'financial_advisor', label: 'Financial Advisor', icon: 'banknotes', description: '', image_url: '' },
  { value: 'driving_instructor', label: 'Driving Instructor', icon: 'truck', description: '', image_url: '' },
  { value: 'job_recruiter', label: 'Job Recruiter', icon: 'briefcase', description: '', image_url: '' },
  { value: 'relocation_specialist', label: 'Relocation Specialist', icon: 'map', description: '', image_url: '' },
  { value: 'healthcare_navigator', label: 'Healthcare Navigator', icon: 'heart', description: '', image_url: '' },
  { value: 'education_consultant', label: 'Education Consultant', icon: 'book-open', description: '', image_url: '' },
  { value: 'business_consultant', label: 'Business Consultant', icon: 'building-office', description: '', image_url: '' },
  { value: 'other', label: 'Other Services', icon: 'squares-plus', description: '', image_url: '' },
]
