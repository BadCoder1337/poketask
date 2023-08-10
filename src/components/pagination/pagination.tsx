import { useEffect } from "react";
import { usePokemonList } from "../../utils/fetcher";
import { useAppDispatch, useAppSelector } from "../../store";
import { setCount, setNext, setPrev } from "../../store/slices/pagination";

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const pagination = useAppSelector((state) => state.pagination);
  const { data } = usePokemonList();
  useEffect(() => {
    data && dispatch(setCount(data.count));
  }, [data, dispatch]);

  return (
    <div>
      <p>
        Page {pagination.index + 1}/
        {Math.ceil(pagination.count / pagination.limit)}. Count{" "}
        {pagination.count}
      </p>
      <button onClick={() => dispatch(setPrev())}>Prev</button>
      <button onClick={() => dispatch(setNext())}>Next</button>
    </div>
  );
};
