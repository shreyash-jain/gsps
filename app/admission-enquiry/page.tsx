"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Send, Phone } from "lucide-react";

export default function AdmissionEnquiryPage() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("Play Group");
  const [query, setQuery] = useState("");

  function handleEmail() {
    const subject = encodeURIComponent("Admission Enquiry");
    const body = encodeURIComponent(
      `Name: ${first} ${last}\nEmail: ${email}\nWhatsApp: ${phone}\nGrade: ${grade}\nQuery: ${query}`
    );
    window.location.href = `mailto:gspsmedia@gsce.edu.in?subject=${subject}&body=${body}`;
  }

  function handleWhatsApp() {
    const text = encodeURIComponent(
      `Admission Enquiry\nName: ${first} ${last}\nEmail: ${email}\nWhatsApp: ${phone}\nGrade: ${grade}\nQuery: ${query}`
    );
    window.open(`https://wa.me/919752410870?text=${text}`, "_blank");
  }

  return (
    <div className="py-12 sm:py-20 lg:py-24 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 min-h-screen">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Admission Enquiry</h1>
          <p className="mt-2 text-lg text-slate-600">
            Start your child's journey with us. Fill out the form below.
          </p>
        </div>

        <Card className="rounded-3xl border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="space-y-1 pb-4 text-center sm:text-left">
            <CardTitle className="text-xl text-slate-800">Enquiry Form</CardTitle>
            <CardDescription>
              We'll answer your questions and guide you through the process.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                handleEmail();
              }}
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first">First name</Label>
                  <Input
                    id="first"
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                    placeholder="Jane"
                    className="rounded-xl border-slate-200 bg-slate-50 focus:bg-white transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last">Last name</Label>
                  <Input
                    id="last"
                    value={last}
                    onChange={(e) => setLast(e.target.value)}
                    placeholder="Doe"
                    className="rounded-xl border-slate-200 bg-slate-50 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className="rounded-xl border-slate-200 bg-slate-50 focus:bg-white transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">WhatsApp number</Label>
                <Input
                  id="phone"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 12345 67890"
                  className="rounded-xl border-slate-200 bg-slate-50 focus:bg-white transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="grade">Select Grade</Label>
                <div className="relative">
                  <select
                    id="grade"
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                  >
                    <option>Play Group</option>
                    <option>Nursery</option>
                    <option>LKG</option>
                    <option>UKG</option>
                  </select>
                  <div className="pointer-events-none absolute right-3 top-3.5 text-slate-400">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="query">Your Query</Label>
                <Textarea
                  id="query"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="How can we help you?"
                  className="rounded-xl border-slate-200 bg-slate-50 focus:bg-white transition-colors min-h-[100px]"
                />
              </div>

              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Button type="submit" size="lg" className="flex-1 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                  <Send className="mr-2 h-4 w-4" /> Send Enquiry Email
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={handleWhatsApp}
                  className="flex-1 rounded-xl border-2 hover:bg-green-50 hover:text-green-600 hover:border-green-200 transition-colors"
                >
                  <Phone className="mr-2 h-4 w-4" /> Chat on WhatsApp
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <p className="mt-8 text-center text-sm text-slate-500">
          Prefer to talk? Call us directly at <a className="font-semibold text-slate-700 hover:underline" href="tel:+919752410870">+91 9752410870</a>
        </p>
      </div>
    </div>
  );
}




