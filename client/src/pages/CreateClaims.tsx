import React from 'react'
import { useState } from 'react'
import { useGetIdentity } from '@refinedev/core'
import { FieldValues,} from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { useForm } from "@refinedev/react-hook-form";



import Form from 'components/common/form'


const CreateClaims = () => {
  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: true
  
});



    const navigate=useNavigate();
    const [claims_proof,setclaimImage]=useState({name:'',url:''});
    const [aadhar_proof,setaadharImage]=useState({name:'',url:''});
    const{ refineCore:{onFinish,formLoading},register,handleSubmit}=useForm();

    const handleImageChange = (file: File) => {
       
      const reader = (readFile: File) =>
      
          new Promise<string>((resolve, reject) => {
              const fileReader = new FileReader();
              fileReader.onload = () => resolve(fileReader.result as string);
              fileReader.readAsDataURL(readFile);
          });

      reader(file).then((result: string) =>
          setclaimImage({ name: file?.name, url: result }),
      );
    
  
  };
  const handleImageChangeaa = (file: File) => {
    const reader = (readFile: File) =>
        new Promise<string>((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.onload = () => resolve(fileReader.result as string);
            fileReader.readAsDataURL(readFile);
        });

    reader(file).then((result: string) =>
        setaadharImage({ name: file?.name, url: result }),
    );
  

};


    const onFinishHandler=async(data:FieldValues)=>{
      if(aadhar_proof.name===""|| claims_proof.name===""||claims_proof.url===""||aadhar_proof.url==="")
      {
        return alert('please select photo')
      }
      //@ts-ignore
      console.log("hello",aadhar_proof)
      await onFinish({...data,claims_proof:claims_proof,aadhar_proof:aadhar_proof,email:user.email})
    };
  return (
    <Form
    type="Create"
    register={register}
    onFinish={onFinish}
    formLoading={formLoading}
    handleSubmit={handleSubmit}
    handleImageChange={handleImageChange}
    onFinishHandler={onFinishHandler}
    handleImageChangeaa={handleImageChangeaa}
    claims_proof={claims_proof}
    aadhar_proof={aadhar_proof}

    />
  )
}

export default CreateClaims

function v4AuthProviderCompatible(v4AuthProviderCompatible: any, arg1: boolean): { data: any } {
  throw new Error('Function not implemented.')
}
