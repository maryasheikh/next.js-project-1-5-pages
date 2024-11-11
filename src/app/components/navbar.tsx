import Link from "next/link";

export default function Navbar() {
    return(
    <div style= {{display:"flex", justifyContent:"space-evenly", textAlign:"center", color:"white", backgroundColor:"black", fontFamily:"serif"}}>

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