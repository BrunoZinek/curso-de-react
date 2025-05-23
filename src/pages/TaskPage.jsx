import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") || "Default Title";
  const description = searchParams.get("description") || "Default Description";
  return (
    <div className="h-screen w-scren bg-slate-500 p-6">
      <div className="w-[500px] space-y-4 mx-auto">
        <div className="flex justify-center relative mb-6">
          <button
            className="absolute top-0 left-0 bottom-0"
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon />
          </button>

          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
