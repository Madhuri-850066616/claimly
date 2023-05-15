import { BaseKey } from '@pankod/refine-core';

export interface FormFieldProp {
  user_id: string,
  admin_id: string,
  insurance_type: string,
  bank_name:string
  Comments:String,
  status:String,
  claims_proof:string,
  aadhar_proof:string

}

export interface FormValues {
  _id: String,
  user_id: string,
  admin_id: string,
  insurance_type: string,
  policy_type: string,
  uin: string,
  nominee_name: string
  nominee_relation:string,
  account_number:string,
  bank_name:string,
  bank_branch:string,
  ifsc_code:string,
  aadhar_number:string,
  cause_of_death:string,
  dod:string,
  fir_no:string,
  vehicle_damage:string,
  chassis_number:string,
  vehicle_number:string,
  opd_number:string,
  hospital_name:string,
  doa:string,
  doctor_name:string,
  claim_amount:string,
  status:string,
  aadhar_proof:string,
  Comments:string,
  claims_proof:String,

}

export interface ClaimCardProps {
  _id?: BaseKey | undefined,
  user_id: string,
  admin_id: string,
  insurance_type: string,
  bank_name:string
  Comments:String,
  status:String,
  claims_proof:string,
  aadhar_proof:string

}
