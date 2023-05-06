import { useEffect } from "react";
import { InfoContext } from "../contexts/InfoContexs";

export default function Loading() {
  const { questions, navigate } = InfoContext();
  useEffect(() => {
    questions && navigate("/game");
  }, [questions, navigate]);

  return <div>Loading...</div>;
}
