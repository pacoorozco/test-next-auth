'use server'

import {signIn} from "@/auth";

export const authenticate = async (formData: FormData) => {
    await signIn("credentials", formData)
}