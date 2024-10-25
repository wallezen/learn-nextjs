import Card from "@/components/Card";
import Link from "next/link";

export default function NotificationsPage() {
  return (
    <Card>
      <div>Notifications Page</div>
      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  );
}
