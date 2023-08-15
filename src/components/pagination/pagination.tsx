import { useAppDispatch, useAppSelector } from "../../store";
import {
  setNext,
  setPrev
} from "../../store/slices/pagination";

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const pagination = useAppSelector((state) => state.pagination);
  const withPlus =
    pagination.infinite &&
    pagination.count > pagination.offset + pagination.limit;

  return (
    <div>
      <p>
        Page {pagination.index + 1}/
        {Math.ceil(pagination.count / pagination.limit)}
        {withPlus && "+"}. Count {pagination.count}
        {withPlus && "+"}
      </p>
      <button onClick={() => dispatch(setPrev())}>Prev</button>
      <button onClick={() => dispatch(setNext())}>Next</button>
    </div>
  );
};
