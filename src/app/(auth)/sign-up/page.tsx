import { RegisterForm } from "@/features/auth/components/register-form";
import { requireNoAuth } from "@/lib/auth-utils";

export default async function SignUpPage() {
  await requireNoAuth();

  return (
    <div>
      <RegisterForm />
    </div>
  );
}
