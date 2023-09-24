import { Layout } from "@/src/components/Layout";
import classes from "@/src/components/Layout/Layout.module.css";
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
      <h1 className={classes.pageTitle}>{data?.name}</h1>
      <ul>
        <li>{data?.email}</li>
        <li>{data?.phone}</li>
        <li>{data?.website}</li>
      </ul>
    </Layout>
  );
};
