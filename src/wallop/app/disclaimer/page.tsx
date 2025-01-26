import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Legal Disclaimer</h1>
        <div className="space-y-4 text-sm">
          <p>
            Welcome to Wallop, the fictional app where &quot;Equal rights&quot; meets &quot;Equal fights&quot;. Before you proceed, please
            read this important disclaimer:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Wallop is a <strong>fictional, satirical application</strong> and does not promote or endorse real-world
              violence in any form.
            </li>
            <li>
              Any resemblance to real persons or actual fighting services is purely coincidental and unintentional.
            </li>
            <li>
              By using this app, you acknowledge that all content, matches, and interactions are fictional and for
              entertainment purposes only.
            </li>
            <li>
              Wallop takes no responsibility for any misunderstandings, hurt feelings, or bruised egos resulting from
              the use of this fictional service.
            </li>
            <li>
              In the real world, please resolve conflicts peacefully and legally. 
            </li>
          </ol>
          <p>
            By clicking &quot;I Understand&quot;, you confirm that you are of legal age, have a sense of humor, and solemnly swear
            you are up to no good (in a strictly fictional sense).
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <Button asChild>
            <Link href="/dashboard">I Understand</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}