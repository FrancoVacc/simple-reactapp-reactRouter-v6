import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

const Blog = () => {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const [searchParams, setSearchParams] = useSearchParams();

  if (loading) return <h3>Loading data...</h3>;

  if (error) return <h3>Error en obtener los datos</h3>;

  const handleChange = (e) => {
    const filter = e.target.value;

    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <div>Blog</div>
      <input
        type="text"
        className="form-control my-3"
        onChange={handleChange}
        value={searchParams.get("filter") || ""}
      />
      <ul className="list-group">
        {data
            .filter((item) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = item.title.toLowerCase();
              return name.startsWith(filter.toLowerCase());
          })
          .map((item) => (
            <Link
              to={`/Blog/${item.id}`}
              key={item.id}
              className="list-group-item"
            >
              {item.title}
            </Link>
          ))}
      </ul>
    </>
  );
};

export default Blog;
