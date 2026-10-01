import { AuthLayout } from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import React from "react";

export default function RegisterPage() {
  return (
    <AuthLayout
      leftTitle="Sign up and come in"
      leftDescription="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <div className="flex flex-col gap-[40px] items-start w-full">
        <div className="flex flex-col items-start text-brand-gray-950 w-full">
          <p className="font-body font-normal text-[18px] text-brand-blue leading-[1.6]">
            Create an Account
          </p>
          <h2 className="font-heading font-semibold text-[32px] md:text-[44px] leading-[1.2] tracking-[-0.44px] break-words">
            Welcome to ByteSpace
          </h2>
        </div>

        <form className="flex flex-col gap-[24px] w-full max-w-[453px] items-end">
          <Input 
            label="Full Name" 
            placeholder="Jamie Davis" 
            type="text" 
          />
          <Input 
            label="Email" 
            placeholder="designer@example.com" 
            type="email" 
          />
          <Input 
            label="Password" 
            placeholder="********" 
            type="password" 
          />
          
          <Button variant="primary" size="lg" rounded="24px" className="mt-2" type="button">
            Continue
          </Button>
        </form>
      </div>

      <div className="flex items-start gap-1 font-body font-normal text-[16px] leading-[1.6] mt-8">
        <span className="text-brand-text-tertiary">Already have an account?</span>
        <Link href="/login" className="text-brand-blue hover:underline">
          Login
        </Link>
      </div>
    </AuthLayout>
  );
}
