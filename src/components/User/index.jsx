import { Layout } from "@/src/components/Layout";
import { PostsByUserId } from "@/src/components/Posts/PostsByUserId";
import { useUser } from "@/src/hooks/useUser";

export const User = () => {
  const { data, error, isLoading } = useUser();

  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Layout>
      <h1 className="text-center font-bold text-4xl">{data?.name}</h1>
      <ul>
        <li>{data?.email}</li>
        <li>{data?.phone}</li>
        <li>{data?.website}</li>
      </ul>
      <PostsByUserId id={data?.id} />
    </Layout>
  );
};
