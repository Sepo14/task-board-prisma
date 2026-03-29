"use client"

import { useEffect } from "react"
import { CreateCookie } from "@/actions/cookies"

export default function InitCookie() {
    useEffect(() => {
        CreateCookie()
    }, [])

    return null
}