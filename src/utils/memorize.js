import { useMemo } from "react";

// Like useMemo but without dependencies required
export let memorize = (factory, dependencies) =>
  useMemo(factory, dependencies || []);
