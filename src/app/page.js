import { Button } from "@/components/ui/button"
import { redirect } from 'next/navigation';

const page = () => {
  redirect('/courses')
  return null
}

export default page