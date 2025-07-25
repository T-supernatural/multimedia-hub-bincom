import { useEffect } from "react";

const AdminRedirect = () =>  {
  useEffect(() => {
    window.location.href = "http://localhost:1000/mike/";
  }, []);

  return <p>Redirecting to Admin Panel...</p>;
}

export default AdminRedirect;