import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <p>Landing Page</p>
      <div>
        <Link href="sign-in">
          <Button>Loggin</Button>
        </Link>
        <Link href="sign-up">
          <Button>SIgn Up</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
