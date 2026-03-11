import React, { useState, useEffect, useRef } from "react";
import ExplorerControls from "../Components/explorer/ExplorerControls";
import DinoGrid from "../Components/explorer/DinoGrid";
import ScrollTopButton from "../Components/explorer/ScrollTopButton";
import { fetchDinosaurs } from "../services/pbdbApi";
/*
const testDinos = [
  { id: 1, name: "Tyrannosaurus", period: "Late Cretaceous", originalIndex: 1 },
  { id: 2, name: "Triceratops", period: "Late Cretaceous", originalIndex: 2 },
  { id: 3, name: "Velociraptor", period: "Late Cretaceous", originalIndex: 3 },
];
*/
export default function Explorer() {
  const [dinosaurs, setDinosaurs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("id");

  const limit = 150;
  const virtuosoRef = useRef(null);

  async function loadMore() {
    if (loadingMore || !hasMore) return;

    setLoadingMore(true);

    const newDinos = await fetchDinosaurs(offset, limit);

    if (newDinos.length === 0) {
      setHasMore(false);
      setLoadingMore(false);
      return;
    }

    setDinosaurs((prev) => {
      const map = new Map();

      [...prev, ...newDinos].forEach((d) => {
        map.set(d.id, d); // id = tid
      });

      return Array.from(map.values());
    });
    setOffset((prev) => prev + limit);

    setLoading(false);
    setLoadingMore(false);
  }

  useEffect(() => {
    loadMore();
  }, []);

  /*
  useEffect(() => {
    setDinosaurs(testDinos);
    setLoading(false);
  }, []);
  */
  const periodOrder = {
    Triassic: 1,
    Jurassic: 2,
    Cretaceous: 3,
  };
  const filteredDinosaurs = dinosaurs
    .filter((d) => d.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "id") return a.originalIndex - b.originalIndex;
      if (sortBy === "period") {
        return (periodOrder[a.period] || 99) - (periodOrder[b.period] || 99);
      }
      return 0;
    });

  if (loading) return <p>Loading dinosaurs...</p>;

  return (
    <div className="container">
      <ExplorerControls
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <p>
        Dinosaurs loaded: {dinosaurs.length} [Don't worry! Just Scroll to load
        more]
      </p>
      <DinoGrid
        dinosaurs={filteredDinosaurs}
        virtuosoRef={virtuosoRef}
        loadMore={loadMore}
      />
      {loadingMore && (
        <p style={{ textAlign: "center" }}>Loading more dinosaurs...</p>
      )}
      <ScrollTopButton
        onClick={() => virtuosoRef.current?.scrollToIndex({ index: 0 })}
      />
    </div>
  );
}
