import { useState } from "react";

export default function useCart() {
  const [isSelect, setSelect] = useState();
  return [isSelect, setSelect];
}
