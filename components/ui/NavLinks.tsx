'use client'
import Link from "next/link";
import { useState } from "react";

export default function NavLinks() {

    return (
        <>
            <Link href={"/"}>Home</Link>
            <Link href={"/About"}>About</Link>
            <Link href={"/RandomAnime"}>Random Anime</Link>
        </>
    )

}