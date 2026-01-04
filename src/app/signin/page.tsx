import {authenticate} from "@/app/signin/_actions/authenticate";

export default async function SignInPage() {
    return (
        <div className="flex flex-col gap-2">
            <form action={authenticate}>
                <label htmlFor="credentials-email">
                    Username
                    <input type="username" id="credentials-username" name="username"/>
                </label>
                <label htmlFor="credentials-password">
                    Password
                    <input type="password" id="credentials-password" name="password"/>
                </label>
                <input type="submit" value="Sign In"/>
            </form>
        </div>
    )
}