import { AuthLayout } from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SocialLogins } from "@/components/ui/SocialLogins";
import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <AuthLayout
      leftTitle="Sign in with ease"
      leftDescription="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className="flex flex-col gap-[40px] items-center w-full">
        <div className="flex flex-col items-start w-full">
          <p className="font-body font-normal text-[18px] text-brand-blue leading-[1.6]">
            Sign In
          </p>
          <h2 className="font-heading font-semibold text-[32px] md:text-[44px] leading-[1.2] tracking-[-0.44px] break-words text-brand-gray-950">
            Welcome Back
          </h2>
        </div>

        <form className="flex flex-col gap-[24px] w-full max-w-[453px] items-end">
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
            Sign In
          </Button>
        </form>

        <SocialLogins />
      </div>

      <div className="flex items-start gap-1 font-body font-normal text-[16px] leading-[1.6] mt-8">
        <span className="text-brand-text-tertiary">New user?</span>
        <Link href="/register" className="text-brand-blue hover:underline">
          Create an account
        </Link>
      </div>
    </AuthLayout>
  );
}
