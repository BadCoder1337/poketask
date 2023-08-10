import { List } from "../../components/list";
import { Pagination } from "../../components/pagination";
import { useAppSelector } from "../../store";

export const HomePage = () => {
  const pagination = useAppSelector((state) => state.pagination);
  return (
    <div>
      Test task
      <List />
      <div style={{ display: "none" }}>
        <List index={pagination.index + 1} />
      </div>
      <Pagination />
    </div>
  );
};
