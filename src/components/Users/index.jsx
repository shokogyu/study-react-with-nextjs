import { useUsers } from "@/src/hooks/useFetchArray";
import Link from "next/link";

export const Users = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です。</div>;
  }

  return (
    <ul className="grid grid-cols-3 gap-4">
      {data.map((user) => {
        return (
          <li key={user.id} className="border-zinc-200 border rounded-lg">
            <Link href={`/users/${user.id}`} className="block p-6 hover:opacity-80 transition-opacity">
              <p className="font-bold text-lg">{user.name}</p>
              <div className="text-sm text-gray-300">{user.email}</div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
