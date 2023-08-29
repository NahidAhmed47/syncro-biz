import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import HomeDashboard from "@/components/dashboard/dashboardPages/homeDashboard/HomeDashboard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
    const session = await getServerSession(authOptions);
    if (!session) return redirect("/");
    return (
        <div className=" h-full min-h-[90vh]">
            <HomeDashboard></HomeDashboard>
        </div>
    );
};

export default page;