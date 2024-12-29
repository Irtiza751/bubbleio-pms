export function useDeleteRow<T>(data: Array<T>) {
  const handleRowDelete = (id: number) => {
    return data.filter((_, itemId) => itemId !== id);
  };

  return handleRowDelete;
}
