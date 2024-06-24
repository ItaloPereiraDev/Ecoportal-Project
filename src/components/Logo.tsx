'use client';
import Image from "next/image";
import logo from "./images/ecoportal-logo.png"
export default function UserItem() {
return <div>
    <Image src={logo} alt="Ecoportal Novice Guide by Italo Pereira"/>
</div>;
}