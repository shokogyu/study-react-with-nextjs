import { useCallback, useEffect, useState } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("エラーが発生したため、データの取得に失敗しました");
      }
      const json = await res.json();
      setPosts(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      <ol>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error.message}</div>
        ) : posts.length > 0 ? (
          posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })
        ) : <div>データは空です。</div>}
      </ol>
    </>
  );
};