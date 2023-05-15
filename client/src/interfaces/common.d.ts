export interface CustomButtonProps {
    type?: string,
    title: string,
    backgroundColor: string,
    color: string,
    fullWidth?: boolean,
    icon?: ReactNode,
    disabled?: boolean,
    handleClick?: () => void
}

export interface ProfileProps {
    type: string,
    name: string,
    avatar: string,
    email: string,
    claims: Array | undefined
}

export interface ClaimsProps {
    _id: String,
    user_id: string,
    admin_id: string,
    insurance_type: string,
    policy_type: string,
    uin: string,
    nominee_name: string
    nominee_relation:string,
    account_number:string,
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
    claims_image:string,
    comments:string,

}

export interface FormProps {
    type: string,
    register: any,
    onFinish: (values: FieldValues) => Promise<void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>>,
    formLoading: boolean,
    handleSubmit: FormEventHandler<HTMLFormElement> | undefined,
    handleImageChange: (file) => void,
    handleImageChangeaa:(file)=>void,
    onFinishHandler: (data: FieldValues) => Promise<void> | void,
    claims_proof: { name: string, url: string },
    aadhar_proof: { name: string, url: string },
}
