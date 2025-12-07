import { Lock, Construction } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ParentLoginPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-12 bg-slate-50">
      <Card className="w-full max-w-md bg-white shadow-xl rounded-2xl">
        <CardHeader className="text-center space-y-2 pb-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded- full bg-primary/10">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold text-slate-900">Parent Portal</CardTitle>
          <CardDescription className="text-base text-slate-500">
            Secure access for parents and guardians
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <div className="rounded-xl bg-amber-50 p-4 border border-amber-100 flex items-start gap-3 text-left">
            <Construction className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <span className="font-semibold block mb-1">Coming Soon</span>
              We are currently setting up the parent portal. You will receive your login credentials via SMS once the system is live.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <p className="text-sm text-slate-600">
              Need urgent assistance?
            </p>
            <Button asChild variant="outline" className="w-full rounded-xl border-dashed">
              <Link href="/admission-enquiry">Contact School Administration</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}




