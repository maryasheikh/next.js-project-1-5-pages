import Link from "next/link";

export default function Navbar() {
    return(
      <div className ="flex justify-evenly text-center  text-white bg-black font-serif font-semibold text-2xl">
    
      <Link href="/">Home</Link>
      <br/>
      <Link href="/about">About</Link>
      <br/>
      <Link href="/jobs">Jobs</Link>
      <br/>
      <Link href="/jobs/programming">Programming</Link>
      <br/>
      <Link href="/contact">Contact</Link>
    </div>

    );
}